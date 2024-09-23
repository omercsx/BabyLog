import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import FormInput from '../components/FormInput';

import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import { ForgotPasswordNavigationProp } from '../../../types/navigation';
import { resetPassword, type ResetPasswordOutput } from 'aws-amplify/auth';
import FormButton from '../components/FormButton';
import colors from '../../../constants/colors';

type ForgotPasswordData = {
	username: string;
};

const ForgotPasswordScreen = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { control, handleSubmit } = useForm<ForgotPasswordData>();
	const navigation = useNavigation<ForgotPasswordNavigationProp>();

	const onSendPressed = async (data: ForgotPasswordData) => {
		if (isLoading) {
			return;
		}
		setIsLoading(true);
		try {
			const output = await resetPassword({ username: data.username });
			handleResetPasswordNextSteps(output);
			navigation.navigate('New password');
		} catch (error) {
			Alert.alert('Oops!', (error as Error).message);
		} finally {
			setIsLoading(false);
		}
	};

	function handleResetPasswordNextSteps(output: ResetPasswordOutput) {
		const { nextStep } = output;
		switch (nextStep.resetPasswordStep) {
			case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
				const codeDeliveryDetails = nextStep.codeDeliveryDetails;
				Alert.alert(
					'Check your e-mail',
					`Confirmation code was sent to ${codeDeliveryDetails.destination}`
				);
				// Collect the confirmation code from the user and pass to confirmResetPassword.
				break;
			case 'DONE':
				console.log('Successfully reset password.');
				break;
		}
	}

	const onSignInPress = () => {
		navigation.navigate('Sign in');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.root}>
				<Text style={styles.title}>Reset your password</Text>

				<FormInput
					name='username'
					control={control as any}
					placeholder='E-mail'
					rules={{
						required: 'E-mail is required',
					}}
				/>

				<FormButton
					text={isLoading ? 'Loading...' : 'Send'}
					bgColor={colors.primary}
					onPress={handleSubmit(onSendPressed)}
				/>

				<FormButton text='Back to Sign in' onPress={onSignInPress} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#051C60',
		margin: 10,
	},
	text: {
		color: 'gray',
		marginVertical: 10,
	},
	link: {
		color: '#FDB075',
	},
});

export default ForgotPasswordScreen;
