import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Linking,
	Alert,
} from 'react-native';
import { useForm } from 'react-hook-form';

import { confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';

import colors from '../../../constants/colors';
import FormButton from '../components/FormButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import type {
	ConfirmEmailNavigationProp,
	ConfirmEmailRouteProp,
} from '../../../types/navigation';
import { useState } from 'react';
import FormInput from '../components/FormInput';

type ConfirmEmailData = {
	email: string;
	code: string;
};

const ConfirmEmailScreen = () => {
	const [isLoading, setIsLoading] = useState(false);
	const route = useRoute<ConfirmEmailRouteProp>();

	const { control, handleSubmit, watch } = useForm<ConfirmEmailData>({
		defaultValues: {
			email: route.params.email,
		},
	});

	const emaill = watch('email');
	const navigation = useNavigation<ConfirmEmailNavigationProp>();

	const onConfirmPressed = async ({ email, code }: ConfirmEmailData) => {
		if (isLoading) return;
		setIsLoading(true);
		try {
			const { isSignUpComplete } = await confirmSignUp({
				username: email,
				confirmationCode: code,
			});

			if (isSignUpComplete) {
				navigation.navigate('Sign in');
			}
		} catch (error) {
			Alert.alert('Error', (error as Error).message);
		} finally {
			setIsLoading(false);
		}
	};

	const onResendPressed = async () => {
		if (isLoading) return;
		setIsLoading(true);
		try {
			await resendSignUpCode({ username: emaill });
			Alert.alert('Success', 'Code resent successfully');
		} catch (error) {
			Alert.alert('Oops!', (error as Error).message);
		} finally {
			setIsLoading(false);
		}
	};

	const onMailboxPressed = async () => {
		const canOpenMailbox = await Linking.canOpenURL('mailto:');
		if (canOpenMailbox) {
			await Linking.openURL('mailto:');
		} else {
			Alert.alert('Cannot open Mailbox', 'Please check your email app');
		}
	};

	return (
		<View style={styles.root}>
			<View style={styles.container}>
				<Text style={styles.title}>Confirm your email</Text>

				<FormInput
					name='email'
					control={control as any}
					placeholder='Email'
					rules={{
						required: 'Email is required',
					}}
				/>

				<FormInput
					name='code'
					control={control as any}
					placeholder='Enter your confirmation code'
					rules={{
						required: 'Confirmation code is required',
					}}
				/>
			</View>
			<View style={styles.twoButtons}>
				<FormButton
					text='Confirm'
					onPress={handleSubmit(onConfirmPressed)}
					bgColor={colors.primary}
				/>
				<FormButton text='Resend E-mail' onPress={onResendPressed} />
			</View>
			<FormButton text='Open Mailbox' onPress={onMailboxPressed} />
		</View>
	);
};
export default ConfirmEmailScreen;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: colors.background,
		paddingTop: 50,
		paddingHorizontal: 20,
	},
	container: {
		paddingVertical: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	input: {
		height: 40,
		marginVertical: 12,
		borderWidth: 1,
		borderColor: colors.borderColor,
		borderRadius: 5,
		padding: 10,
	},

	twoButtons: {
		flexDirection: 'row',

		justifyContent: 'space-between',
	},
});
