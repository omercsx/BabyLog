import { signOut, getCurrentUser, type AuthUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  const [user, setUser] = useState<AuthUser | undefined>(undefined);

  useEffect(() => {
    getCurrentUser().then(user => {
      setUser(user);
    });
  }, []);

  return (
    <View>
      <Text>{user?.signInDetails?.loginId}</Text>
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({});
