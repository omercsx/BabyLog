import { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Alert,
	TouchableOpacity,
} from 'react-native';

import FormInput from '../components/FormInput';

import { useNavigation } from '@react-navigation/core';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import { SignUpNavigationProp } from '../../../types/navigation';

import { signUp } from 'aws-amplify/auth';
import colors from '../../../constants/colors';

const EMAIL_REGEX =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type SignUpData = {
	name: string;
	email: string;
	password: string;
	passwordRepeat: string;
};

const SignUpScreen = () => {
	const { control, handleSubmit, watch } = useForm<SignUpData>();
	const pwd = watch('password');
	const navigation = useNavigation<SignUpNavigationProp>();
	const [isLoading, setIsLoading] = useState(false);

	const onRegisterPressed = async ({ name, email, password }: SignUpData) => {
		try {
			setIsLoading(true);
			await signUp({
				username: email,
				password,

				options: {
					userAttributes: {
						email,
						name,
					},
				},
			});

			navigation.navigate('Confirm email', { email });
		} catch (error) {
			Alert.alert('Oops!', (error as Error).message);
		} finally {
			setIsLoading(false);
		}
	};

	const onSignInPress = () => {
		navigation.navigate('Sign in');
	};

	const onTermsOfUsePressed = () => {
		console.warn('onTermsOfUsePressed');
	};

	const onPrivacyPressed = () => {
		console.warn('onPrivacyPressed');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Create an account</Text>

				<FormInput
					name='name'
					control={control as unknown as Control<FieldValues>}
					placeholder='Full name'
					rules={{
						required: 'Name is required',
						minLength: {
							value: 3,
							message: 'Name should be at least 3 characters long',
						},
						maxLength: {
							value: 24,
							message: 'Name should be max 24 characters long',
						},
					}}
				/>

				<FormInput
					name='email'
					control={control as unknown as Control<FieldValues>}
					placeholder='Email'
					rules={{
						required: 'Email is required',
						pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
					}}
				/>
				<FormInput
					name='password'
					control={control as unknown as Control<FieldValues>}
					placeholder='Password'
					secureTextEntry
					rules={{
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password should be at least 6 characters long',
						},
					}}
				/>
				<FormInput
					name='passwordRepeat'
					control={control as unknown as Control<FieldValues>}
					placeholder='Repeat Password'
					secureTextEntry
					rules={{
						validate: (value: string) =>
							value === pwd || 'Password do not match',
					}}
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={handleSubmit(onRegisterPressed)}
				>
					<Text style={styles.buttonText}>
						{isLoading ? 'Loading...' : 'Register'}
					</Text>
				</TouchableOpacity>

				<Text style={styles.text}>
					By registering, you confirm that you accept our{' '}
					<Text style={styles.link} onPress={onTermsOfUsePressed}>
						Terms of Use
					</Text>{' '}
					and{' '}
					<Text style={styles.link} onPress={onPrivacyPressed}>
						Privacy Policy
					</Text>
				</Text>

				<Text onPress={onSignInPress}>Have an account? Sign in</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		padding: 20,
	},
	button: {
		backgroundColor: colors.primary,
		width: '100%',
		padding: 15,
		marginVertical: 10,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: colors.black,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.black,
		margin: 10,
	},
	text: {
		color: 'gray',
		marginVertical: 10,
	},
	link: {
		color: colors.primary,
	},
});

export default SignUpScreen;
