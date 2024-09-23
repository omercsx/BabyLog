import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../../constants/colors';

interface FormButtonProps {
	text: string;
	onPress: () => void;
	bgColor?: string;
}

const FormButton = ({
	text,
	onPress,
	bgColor = colors.buttonBackground,
}: FormButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={[styles.buttonContainer, { backgroundColor: bgColor }]}
		>
			<Text style={styles.buttonText}>{text}</Text>
		</Pressable>
	);
};
export default FormButton;
const styles = StyleSheet.create({
	buttonContainer: {
		paddingVertical: 15,
		paddingHorizontal: 35,
		marginVertical: 5,
		alignItems: 'center',
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.black,
	},
});
