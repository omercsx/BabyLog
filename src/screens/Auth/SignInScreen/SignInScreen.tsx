import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useForm, type FieldValues, type Control} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {getCurrentUser, signIn} from 'aws-amplify/auth';

import Feather from 'react-native-vector-icons/Feather';
import {useAuthContext} from '../../../context/AuthContext';
import logo from '../../../assets/babylogpng.png';
import babyImage from '../../../assets/sign_in_baby.png';
import colors from '../../../constants/colors';
import type {SignInNavigationProp} from '../../../types/navigation';
import FormInput from '../components/FormInput';

type SignInData = {
  email: string;
  password: string;
};

const SignInScreen = () => {
  const {control, handleSubmit, reset} = useForm<SignInData>();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<SignInNavigationProp>();
  const {setUser} = useAuthContext();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleForgotPassword = () => {
    navigation.navigate('Forgot password');
  };
  const handleSignUp = () => {
    navigation.navigate('Sign up');
  };

  const handleSignIn = async ({email, password}: SignInData) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const {isSignedIn, nextStep} = await signIn({
        username: email,
        password,
      });

      // TODO: Save user data to Context
      const user = await getCurrentUser();
      console.log('nextStep', nextStep);
      setUser(user);
      if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        navigation.navigate('Confirm email', {email});
      }
      if (isSignedIn) {
        navigation.navigate('Home' as never);
      }

      // clear form inputs
      reset({email: '', password: ''});
    } catch (error) {
      if ((error as Error).name === 'UserUnAuthenticatedException') {
        navigation.navigate('Confirm email', {email});
      }
      Alert.alert('Oops!', (error as Error).message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} resizeMode="contain" style={styles.logo} />
      <Image source={babyImage} resizeMode="contain" style={styles.babyImage} />
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Welcome back! Sign In Now!</Text>
        <View style={styles.inputContainer}>
          <FormInput
            name="email"
            placeholder="E-mail"
            control={control as unknown as Control<FieldValues>}
            rules={{required: 'E-mail is required'}}
          />
        </View>
        <View style={styles.inputContainer}>
          <FormInput
            name="password"
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            control={control as unknown as Control<FieldValues>}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 3,
                message: 'Password should be minimum 6 characters long',
              },
            }}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIconContainer}>
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={22}
              color={colors.inputText}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleSubmit(handleSignIn)}
          style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <Text onPress={handleForgotPassword} style={styles.forgotPasswordText}>
          Forgot Password?
        </Text>
        <Text onPress={handleSignUp} style={styles.signUpText}>
          Don't have an account? Sign Up
        </Text>
      </View>
    </View>
  );
};
export default SignInScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  babyImage: {
    width: '100%',
    height: 220,
  },
  signInButton: {
    width: '100%',
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signInButtonText: {
    color: colors.black,
    fontWeight: 'bold',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    gap: 40,
  },
  forgotPasswordText: {
    color: colors.inputText,
    fontWeight: 'bold',
  },
  signUpText: {
    color: colors.inputText,
    fontWeight: 'bold',
  },

  inputContainer: {
    position: 'relative',
    width: '100%',
    height: 40,
  },

  logo: {
    width: '100%',
    height: 100,
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
