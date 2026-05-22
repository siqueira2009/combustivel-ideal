import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Droplet, Fuel } from 'lucide-react-native';

export default function InputLabel({ text, icon }) {
    const [value, setValue] = useState(0.0);

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                {icon == "gas" ? (<Fuel width={32} strokeWidth={2}/>) : (<Droplet width={32} strokeWidth={2}/>)}
                <Text style={styles.label}>{text}</Text>
            </View>
            <TextInput
                style={styles.input}
                inputMode="numeric"
                keyboardType="numeric"
                onChangeText={setValue}
                value={value}
                placeholder="0.0"
                placeholderTextColor="#999"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
    },

    textView: {
        flexDirection: 'row',
        gap: 2,
    },

    label: {
        fontSize: 20,
        marginBottom: 8,
        width: '100%'
    },

    boldedLabel: {
        fontWeight: 600
    },  

    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        fontSize: 18,
    },
});