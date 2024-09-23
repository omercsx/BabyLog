import { signOut } from 'aws-amplify/auth';
import { Button, StyleSheet, Text, View } from 'react-native';
const ProfileScreen = () => {
	return (
		<View>
			<Button title='Sign out' onPress={() => signOut()} />
			<Text>ProfileScreen</Text>
		</View>
	);
};
export default ProfileScreen;
const styles = StyleSheet.create({});
