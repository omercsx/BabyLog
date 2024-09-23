import React, {
	useContext,
	useEffect,
	useState,
	createContext,
	type Dispatch,
	type SetStateAction,
} from 'react';
import { getCurrentUser, type AuthUser } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

type UserType = AuthUser | null | undefined;

type AuthContextType = {
	user: UserType;
	setUser: Dispatch<SetStateAction<UserType>>;
};

const AuthContext = createContext<AuthContextType>({
	user: undefined as UserType,
	setUser: () => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<UserType>(undefined);

	useEffect(() => {
		const checkUser = async () => {
			try {
				const authUser = await getCurrentUser();

				setUser(authUser);
			} catch (error) {
				// User is not signed in
				console.log('User is not signed in');
				setUser(null);
			}
		};
		checkUser();
	}, []);

	useEffect(() => {
		const listener = Hub.listen('auth', data => {
			const { event } = data.payload;

			if (event === 'signedOut') {
				setUser(null);
			}
		});

		return () => listener();
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
