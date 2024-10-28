import { useEffect, useState } from 'react';
import { getCurrentUser, type AuthUser } from 'aws-amplify/auth';
import { StyleSheet, Text } from 'react-native';

const Welcome = () => {
  const [user, setUser] = useState<AuthUser | undefined>(undefined);

  useEffect(() => {
    getCurrentUser().then(user => {
      setUser(user);
    });
  }, []);

  const time = new Date().getHours();
  let greeting = '';

  if (time < 12) {
    greeting = 'Good morning';
  } else if (time < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  return (
    <Text style={styles.welcomeText}>
      {greeting}, {user?.username ? user.signInDetails?.loginId : 'Omer'}
    </Text>
  );
};
export default Welcome;
const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
