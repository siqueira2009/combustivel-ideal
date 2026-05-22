// Importações de dependências
import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, ScrollView, View, TextInput, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

// Importações de componentes personalizados
import Header from '../components/Header';
import InputLabel from '../components/InputLabel';
import CustomButton from '../components/CustomButton';
import ResultSheet from '../components/ResultSheet';

// Importação de contextos
import ResultContext from '../contexts/ResultContext';

export default function Home() {
  const bottomSheetRef = useRef(null); // Cria um ref do Bottom Sheet
  const [gasValue, setGasValue] = useState(0);
  const [ethanolValue, setEthanolValue] = useState(0);

  // Função de abrir o Bottom Sheet com useCallback para otimização (não renderiza toda vez)
  const openSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, [])

  // Retorna os componentes
  return (
    // O ResultContext.Provider faz com que todos os filhos consiga acessar os valores passados
    <ResultContext.Provider value={{bottomSheetRef, gasValue, setGasValue, ethanolValue, setEthanolValue}}>
      {/* O GestureHandlerRootView permite que o sistema identifique gestos (para o Bottom Sheet) */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* O BottomSheetModalProvider cria um portal para que o Bottom Sheet apareça na frente de tudo */}
        <BottomSheetModalProvider>
          {/* Scroll view com o conteúdo */}
          <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
            <Header/>

            <View style={styles.inputContainer}>
              <InputLabel text={"Preço da gasolina"} icon={"Fuel"} type={"gas"}/>
              <InputLabel text={"Preço do etanol"} icon={"Droplet"} type={"ethanol"}/>
            </View>

            <CustomButton title={"Verificar"} icon={"Scale"} onPress={openSheet} />

            <ResultSheet/>
          </ScrollView>

        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ResultContext.Provider>
  )
}

// Estilizações personalizadas
const styles = StyleSheet.create({
  container: { // Estilo do container (pai de tudo)
    width: '100%',
    flex: 1,
    paddingVertical: 60,

    backgroundColor: '#F3F4F8',
  },

  inputContainer: { // Estilo do container de input
    gap: 20,
    marginBottom: 20
  },
})