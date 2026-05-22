// Importações de dependências
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// Exportação do componente de cabeçalho
export default function Header() {

    // Exporta os componentes
    return (
        <View style={styles.container}>
            <View>
                {/* Título principal */}
                <Text style={styles.title}>
                    <Text style={styles.boldedText}>Etanol </Text>
                    ou
                    <Text style={styles.boldedText}> gasolina</Text>
                </Text>

                {/* Subtítulo */}
                <Text style={styles.subTitle}>
                    <Text>Descubra qual é mais vantajoso</Text>
                </Text>
            </View>

            {/* Imagem */}
            <View style={styles.imageView}>
                <Image style={styles.image} source={require('../assets/GasStation.png')} resizeMode='cover'/>
            </View>
        </View>
    )
}

// Estilizações personalizadas
const styles = StyleSheet.create({
    container: { // Estilo do container (pai de tudo)
        width: '100%',
    },

    title: { // Estilo do título principal
        color: 'black',
        fontSize: 36,
        textAlign: 'center',
    },

    subTitle: { // Estilo do subtítulo
        color: '#30302E',
        fontSize: 18,
        textAlign: 'center',
    },

    boldedText: { // Estilo do texto grifado
        fontWeight: 600,
    },

    imageView: { // Estilo do container da imagem
        alignItems: 'center',
    },
    
    image: { // Estilo da iamgem em si
        width: '100%',
        height: 300,
    }
})