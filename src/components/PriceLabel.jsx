import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PriceLabel({type, price}) {
    return (
        <View style={styles.priceContainer}>
            <Text style={styles.title}>{type} (R$)</Text>
            <Text style={styles.price}>R${price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    priceContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 0,

        borderWidth: 1.5,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 8
    },

    title: {
        fontSize: 18,
        textAlign: 'center'
    },

    price: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 600
    },
})