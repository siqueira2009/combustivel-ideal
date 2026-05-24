// Importações de dependências
import React, { useCallback, useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Fuel, Leaf, TriangleAlert } from 'lucide-react-native';

// Importações de contextos
import ResultContext from '../contexts/ResultContext';

// Exportação do componente de Bottom Sheet de resultados
export default function ResultSheet() {
    const {bottomSheetRef, ethanolWorthy, ethanolPercentage} = useContext(ResultContext); // Usa o contexto de resultado
    const [isOpen, setIsOpen] = useState(false); // Cria um estado para guardar se o Bottom Sheet está aberto

    // Função que usa um Callback do React para gerar um fundo para o BottomSheet, que, quando clicado, fecha-o
    // O useCallback serve para guardar uma função entre renderizações, sem necessidade de gerar a função toda vez que o componente for renderizado
    const renderBackdrop = useCallback((props) => (
        <BottomSheetBackdrop 
            {...props}
            pressBehavior="close"
            appearsOnIndex={0}
            disappearsOnIndex={-1}
        />
    ), []);

    // Retorna os componentes
    return (
        // Usa o BottomSheetModal para criar um portal e aparecer na frente de todos os componentes
        <BottomSheetModal
            backgroundStyle={styles.bottomSheet}
            ref={bottomSheetRef} // Indica o ref (do contexto)
            enablePanDownToClose={true} // Fecha ao arrastar pra baixo
            enableDynamicSizing={true} // Faz o tamanho do Bottom Sheet ser do tamanho do conteúdo interno 
            backdropComponent={renderBackdrop} // Renderiza o fundo
            handleIndicatorStyle={styles.bottomSheetHandler} // Estiliza o indicador de movimento
            onAnimate={(fromIndex, toIndex) => setIsOpen(toIndex > -1)} // Quando animar, troca o estado
        >
            {ethanolWorthy == null ? (
                <BottomSheetView style={styles.bottomSheetContainer}>
                    <View style={styles.bestChoiceView}>
                        <TriangleAlert style={styles.icon} width={92} height={92} strokeWidth={1.5}/>
                        <Text style={styles.label}>Digite um valor válido!</Text>
                    </View>
                </BottomSheetView>
            ) : (
                <BottomSheetView style={styles.bottomSheetContainer}>
                    <Text style={styles.label}>A melhor escolha é</Text>
                    <View style={styles.bestChoiceView}>
                        {ethanolWorthy == true ? (<Leaf style={styles.icon} width={92} height={92} strokeWidth={1.5}/>) :<Fuel style={styles.icon} width={92} height={92} strokeWidth={1.5}/>}
                        <Text style={styles.bestChoice}>{ethanolWorthy == true ? ("Etanol") : ("Gasolina")}</Text>
                        <Text style={styles.subText}>O etanol está custando {ethanolPercentage}% da gasolina</Text>
                    </View>
                </BottomSheetView>
            )}
        </BottomSheetModal>
    )
}

// Estilizações personalizadas
const styles = StyleSheet.create({
    bottomSheet: { // Estilo do BottomSheetModal
        backgroundColor: '#F3F4F8',
    },
    
    bottomSheetContainer: { // Estilo do conteúdo do BottomSheet
        paddingBottom: 80,
        paddingTop: 5,
        paddingHorizontal: 10
    },
    
    bottomSheetHandler: { // Estilo do indicador de movimento do BottomSheet
        width: '25%',
        
        backgroundColor: '#C8C8C8',
        borderRadius: 100   
    },

    label: { // Estilo do label de melhor escolha
        fontSize: 28,
        textAlign: 'center',
    },

    bestChoiceView: { // Estilo do container de melhor escolha (ícone + texto)
        marginTop: 20,
    },  

    icon: { // Estilo do ícone
        alignSelf: 'center'
    },

    bestChoice: { // Estilo do texto de melhor escolha
        fontSize: 48,
        textAlign: 'center',
    },

    subText: { // Estilo do texto falando a diferença
        marginTop: 10,

        color: '#30302E',
        fontSize: 20,
        textAlign: 'center',
    },
});