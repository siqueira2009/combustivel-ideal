import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Icons from 'lucide-react-native';

export default function CustomButton({ title, icon, onPress }) {
    const IconComponent = Icons[icon]

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <IconComponent height={32} width={32} strokeWidth={1.5} />
            <Text style={styles.text}>{title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        gap: 10,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        paddingVertical: 10
    },

    text: {
        fontSize: 24,
    }
});