// Importações de dependências
import React, { useCallback, useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Fuel, Droplet } from 'lucide-react-native';

// Importações de contextos
import ResultContext from '../contexts/ResultContext';

// Exportação do componente de Bottom Sheet de resultados
export default function ResultSheet() {
    const {bottomSheetRef} = useContext(ResultContext); // Usa o contexto de resultado
    const [isOpen, setIsOpen] = useState(false); // Cria um estado para guardar se o Bottom Sheet está aberto
    // Neste caso usa um Memo para que o Array seja guardado e não criado em toda renderização, somente quando necessário

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
            <BottomSheetView style={styles.bottomSheetContainer}>
                <Text style={styles.label}>A melhor escolha é</Text>
                <View style={styles.bestChoiceView}>
                    <Droplet style={styles.icon} width={92} height={92} strokeWidth={1.5}/>
                    <Text style={styles.bestChoice}>Etanol</Text>
                    <Text style={styles.subText}>Ele está custando 47% da gasolina</Text>
                </View>
            </BottomSheetView>
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
        textAlign: 'center'
    },

    subText: { // Estilo do texto falando a diferença
        marginTop: 10,

        color: '#30302E',
        fontSize: 20,
        textAlign: 'center',
    },
});