// Importações de dependências
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Icons from 'lucide-react-native';

// Exportação do componente de botão costumizado
export default function CustomButton({ title, icon, onPress }) {
    // Cria um componente que é um ícone da biblioteca de ícones Lucide, usando a prop passada
    const IconComponent = Icons[icon];

    // Retorna os componentes
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <IconComponent height={32} width={32} strokeWidth={1.5} />
            <Text style={styles.text}>{title} </Text>
        </TouchableOpacity>
    )
}


// Estilizações personalizadas
const styles = StyleSheet.create({
    button: { // Estilo do botão
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        gap: 10,
        padding: 5,
        paddingVertical: 10,

        borderColor: '#ccc',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
    },

    text: { // Estilo do texto
        fontSize: 24,
    }
});