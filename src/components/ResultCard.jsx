// Importações de dependências
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Icons from 'lucide-react-native';

// Exportação do componente de Card de resultado
export default function ResultCard({result, date, percentage, showCard}) {
    // Pega o ícone correto
    let IconComponent;

    if (result == true) {
        IconComponent = Icons["Leaf"];
    } else {
        IconComponent = Icons["Fuel"];
    }

    // Se não for para mostrar o card...
    if (showCard == false) {
        return null; // Retorna sem mudar nada
    }
    
    // Exporta os componentes
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{date}</Text>
            
            <View style={styles.resultContainer}>
                <IconComponent width={52} height={52} strokeWidth={1.5}/>
                <Text style={styles.text}>{result == true ? "Etanol" : "Gasolina"}</Text>
            </View>

            <Text style={styles.label}>Com o etanol custando {percentage}% da gasolina </Text>
        </View>
    );
}

// Estilizações personalizadas
const styles = StyleSheet.create({
    container: { // Container principal (pai de tudo)
        width: '100%',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 10,

        borderLeftColor: '#4950CB',
        backgroundColor: 'white',
        borderRadius: 12,
        borderLeftWidth: 5,
    },

    resultContainer: { // Container de resultado com texto
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },

    text: { // Texto de resultado
        width: '100%',
        justifyContent: 'center',
        
        fontSize: 32,
    },  

    label: { // Labels
        color: '#30302E',
    }
})