import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import icedCoffeeImg from '../../assets/images/iced-coffee.png'

export class explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={icedCoffeeImg} resizeMode='cover' style={styles.image}>
            <Text style={styles.text}>Explore</Text>
            <View style={styles.paragraphContainer}>
                <Text style={styles.paragraph}>
                Discover new coffee shops, explore unique blends, and find your next favorite brew.
                </Text>
                <Text style={styles.paragraph}>
                    Explore the world of coffee like never before!
                </Text>
            </View>
        </ImageBackground>
      </View>
    )
  }
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42,
    color: 'white',      
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
    },
    paragraphContainer: {
      marginTop: 20,
      paddingHorizontal: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
    },
    paragraph: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      marginTop: 10,
      paddingHorizontal: 20,
    },
})