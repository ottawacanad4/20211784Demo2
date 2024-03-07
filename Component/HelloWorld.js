import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/003/127/954/small/abstract-template-blue-background-white-squares-free-vector.jpg' }} // Use uri property for remote URLs
        style={styles.image}
      />
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default HelloWorld;