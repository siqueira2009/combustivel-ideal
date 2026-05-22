import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import InputLabel from './InputLabel';

export default function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>
                    <Text style={styles.boldedText}>Álcool </Text>
                    ou
                    <Text style={styles.boldedText}> gasolina</Text>
                </Text>

                <Text style={styles.subText}>
                    <Text>Descubra qual é mais vantajoso</Text>
                </Text>
            </View>

            <View style={styles.imageView}>
                <Image style={styles.image} source={require('../assets/GasStation.png')} resizeMode='cover'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    text: {
        color: 'black',
        fontSize: 36,
        textAlign: 'center',
    },

    boldedText: {
        fontWeight: 600,
    },

    subText: { 
        color: '#30302E',
        fontSize: 18,
        textAlign: 'center',
    },

    imageView: {
        alignItems: 'center',
    },
    
    image: {
        width: '100%',
        height: 300,
    }
})