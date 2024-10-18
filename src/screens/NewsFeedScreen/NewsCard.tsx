import {Image, StyleSheet, Text, View, type ImageProps} from 'react-native';
import React from 'react';

interface NewsCardProps {
  image: ImageProps;
  doctorName: string;
  title: string;
  description: string;
  date: string;
}

const NewsCard = ({
  image,
  doctorName,
  title,
  description,
  date,
}: NewsCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.doctorName}>{doctorName}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
  },

  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },

  doctorName: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 14,
  },

  date: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-end',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'cover',
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10,
  },
});
