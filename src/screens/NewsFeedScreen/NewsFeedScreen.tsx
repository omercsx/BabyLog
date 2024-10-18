import {ScrollView, StyleSheet} from 'react-native';
import NewsCard from './NewsCard';
import femaleDoctor from '../../assets/female-doctor.webp';
import doctor from '../../assets/doctor.jpg';

const NewsFeedScreen = () => {
  return (
    <ScrollView>
      <NewsCard
        image={doctor}
        doctorName="Dr. John Doe"
        title="Don't feed your baby with Kebab!"
        description="Kebab is not a healthy food for your baby. It can cause many problems for your baby."
        date="2024-02-02"
      />
      <NewsCard
        image={femaleDoctor}
        doctorName="Dr. Jane Doe"
        title="Babies need to sleep 15 hours per day"
        description="Babies need to sleep 15 hours per day. It is very important for their growth and development."
        date="2024-02-02"
      />
    </ScrollView>
  );
};

export default NewsFeedScreen;

const styles = StyleSheet.create({});
