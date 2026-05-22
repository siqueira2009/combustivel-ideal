// Importações de dependências
import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import * as Icons from 'lucide-react-native';

// Importações de contexto
import ResultContext from '../contexts/ResultContext';

// Exportação do componente de Input com Label
export default function InputLabel({ text, icon, type }) {
    const [value, setValue] = useState(0.0); // Cria um estado que guarda o valor digitado
    const {gasValue, setGasValue, ethanolValue, setEthanolValue} = useContext(ResultContext)
    const IconComponent = Icons[icon];

    // Export os componentes
    return (
        <View style={styles.container}>
            {/* Label do Input */}
            <View style={styles.textView}>
                <IconComponent width={28} height={28} strokeWidth={2}/>
                <Text style={styles.label}>{text}</Text>
            </View>

            {/* Input de texto configurado para aceitar somente números */}
            <TextInput
                style={styles.input}
                inputMode="numeric" // Fala que o tipo do Input é númerico, o que faz o teclado ser apenas de números
                onChangeText={(value) => {if (type == "gas") {setGasValue(value)} else if (type == "ethanol") {setEthanolValue(value)} else {setValue(value)}}} // Quando o valor for trocado, troca o estado
                value={value}
                placeholder="0.0"
                placeholderTextColor="#999"
            />
        </View>
    );
}

// Estilizações personalizadas
const styles = StyleSheet.create({
    container: { // Estilo do container (pai de tudo)
        width: '100%',
        paddingHorizontal: 20,
    },

    textView: { // Estilo do container de texto
        marginBottom: 8,
        flexDirection: 'row',
        gap: 5,
    },

    label: { // Estilo do label (texto)
        fontSize: 20,
        width: '100%'
    },

    input: { // Estilo do input
        height: 48,
        paddingHorizontal: 12,
        
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 18,
    },
});