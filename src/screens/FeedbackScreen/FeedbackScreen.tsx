import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  useColorScheme,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigatorParamList } from '../../types/navigation';

type FeedbackType = 'bug' | 'feature' | 'general' | undefined;

const FeedbackScreen = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(undefined);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabNavigatorParamList>>();

  const handleSubmit = () => {
    if (!feedbackType) {
      Alert.alert('Error', 'Please select a feedback type');
      return;
    }

    if (!subject.trim()) {
      Alert.alert('Error', 'Please enter a subject');
      return;
    }

    if (!message.trim()) {
      Alert.alert('Error', 'Please enter your feedback message');
      return;
    }

    // Here you would typically send the feedback to your backend
    setIsSubmitting(true);

    // Simulating an API call
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Thank You!',
        'Your feedback has been submitted successfully.',
        [
          {
            text: 'OK',
            onPress: () => {
              // Reset form
              setFeedbackType(undefined);
              setSubject('');
              setMessage('');
              setEmail('');
              // Navigate back or to home
              navigation.navigate('Home');
            },
          },
        ],
      );
    }, 1000);
  };

  const FeedbackTypeButton = ({
    type,
    title,
    iconName,
  }: {
    type: FeedbackType;
    title: string;
    iconName: string;
  }) => (
    <TouchableOpacity
      style={[
        styles.typeButton,
        feedbackType === type && styles.typeButtonSelected,
        isDarkMode && styles.typeButtonDark,
        feedbackType === type && isDarkMode && styles.typeButtonSelectedDark,
      ]}
      onPress={() => setFeedbackType(type)}>
      <Icon
        name={iconName}
        size={24}
        color={
          feedbackType === type ? '#FFFFFF' : isDarkMode ? '#FFFFFF' : '#333333'
        }
      />
      <Text
        style={[
          styles.typeButtonText,
          feedbackType === type && styles.typeButtonTextSelected,
          isDarkMode && styles.textLight,
          feedbackType === type && isDarkMode && styles.typeButtonTextSelected,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[styles.container, isDarkMode && styles.containerDark]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={[styles.headerTitle, isDarkMode && styles.textLight]}>
              Your Feedback Matters
            </Text>
            <Text
              style={[
                styles.headerSubtitle,
                isDarkMode && styles.textLightSecondary,
              ]}>
              Help us improve BabyLog by sharing your thoughts
            </Text>
          </View>

          <View style={styles.formSection}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.textLight]}>
              What kind of feedback do you have?
            </Text>

            <View style={styles.typeContainer}>
              <FeedbackTypeButton
                type="bug"
                title="Bug Report"
                iconName="bug-report"
              />
              <FeedbackTypeButton
                type="feature"
                title="Feature Request"
                iconName="lightbulb"
              />
              <FeedbackTypeButton
                type="general"
                title="General Feedback"
                iconName="chat"
              />
            </View>
          </View>

          <View style={styles.formSection}>
            <Text style={[styles.inputLabel, isDarkMode && styles.textLight]}>
              Subject
            </Text>
            <TextInput
              style={[
                styles.input,
                isDarkMode && styles.inputDark,
                isDarkMode && styles.textLight,
              ]}
              placeholder="Brief description of your feedback"
              placeholderTextColor={isDarkMode ? '#999999' : '#999999'}
              value={subject}
              onChangeText={setSubject}
            />

            <Text style={[styles.inputLabel, isDarkMode && styles.textLight]}>
              Your Feedback
            </Text>
            <TextInput
              style={[
                styles.textArea,
                isDarkMode && styles.inputDark,
                isDarkMode && styles.textLight,
              ]}
              placeholder="Please provide details about your feedback"
              placeholderTextColor={isDarkMode ? '#999999' : '#999999'}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              value={message}
              onChangeText={setMessage}
            />

            <Text style={[styles.inputLabel, isDarkMode && styles.textLight]}>
              Email (optional)
            </Text>
            <TextInput
              style={[
                styles.input,
                isDarkMode && styles.inputDark,
                isDarkMode && styles.textLight,
              ]}
              placeholder="Your email for follow-up"
              placeholderTextColor={isDarkMode ? '#999999' : '#999999'}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.submitButton,
              isSubmitting && styles.submitButtonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={isSubmitting}>
            {isSubmitting ? (
              <Text style={styles.submitButtonText}>Submitting...</Text>
            ) : (
              <>
                <Icon name="send" size={20} color="#FFFFFF" />
                <Text style={styles.submitButtonText}>Submit Feedback</Text>
              </>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  containerDark: {
    backgroundColor: '#1C1C1E',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666666',
  },
  formSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  typeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  typeButtonDark: {
    backgroundColor: '#2C2C2E',
    borderColor: '#3A3A3C',
  },
  typeButtonSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  typeButtonSelectedDark: {
    backgroundColor: '#0A84FF',
    borderColor: '#0A84FF',
  },
  typeButtonText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  typeButtonTextSelected: {
    color: '#FFFFFF',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    fontSize: 16,
  },
  inputDark: {
    backgroundColor: '#2C2C2E',
    borderColor: '#3A3A3C',
  },
  textArea: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    fontSize: 16,
    height: 150,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  submitButtonDisabled: {
    backgroundColor: '#B3D7FF',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  textLight: {
    color: '#FFFFFF',
  },
  textLightSecondary: {
    color: '#AEAEB2',
  },
});

export default FeedbackScreen;
