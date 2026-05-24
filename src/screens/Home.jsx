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
import ResultCard from '../components/ResultCard';

// Importação de contextos
import ResultContext from '../contexts/ResultContext';

// Importações de funções de serviços
import { calculatePercentage, worthEthanol } from '../services/Calculation';
import { getFullDate } from '../services/Date';

export default function Home() {
  const bottomSheetRef = useRef(null); // Cria um ref do Bottom Sheet

  const [date, setDate] = useState(''); // Cria um estado para guardar a data atual
  const [gasValue, setGasValue] = useState(0); // Cria um estado para guardar o valor da gasolina
  const [ethanolValue, setEthanolValue] = useState(0); // Cria um estado para guardar o valor do etanol
  const [ethanolWorthy, setEthanolWorthy] = useState(false); // Guarda se vale a pena abastecer com Etanol
  const [ethanolPercentage, setEthanolPercentage] = useState(0); // Guarda a porcentagem do Ethanol
  const [showCard, setShowCard] = useState(false); // Cria um estado para guardar se deve mostrar ou não o card de resultado
  
  // Função de abrir o Bottom Sheet com useCallback para otimização (não renderiza toda vez)
  const calculate = useCallback(async () => {
    // Se faltar algum valor, nem faz nada
    if (gasValue == 0 || ethanolValue == 0 || gasValue == '.' || gasValue == ',' || ethanolValue == '.' || ethanolValue == ',') {
        return;
    }
  
    // Pega os valores dos serviços
    const percentage = await calculatePercentage(gasValue, ethanolValue);
    const worthy = worthEthanol(percentage);

    // Atualiza os estados
    setEthanolPercentage(percentage);
    setEthanolWorthy(worthy);
    setDate(getFullDate());
    setShowCard(true);

    // Abre o Bottom Sheet
    bottomSheetRef.current?.present();
  }, [gasValue, ethanolValue])

  // Retorna os componentes
  return (
    // O ResultContext.Provider faz com que todos os filhos consiga acessar os valores passados
    <ResultContext.Provider value={{bottomSheetRef, gasValue, setGasValue, ethanolValue, setEthanolValue, ethanolWorthy, ethanolPercentage}}>
      {/* O GestureHandlerRootView permite que o sistema identifique gestos (para o Bottom Sheet) */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* O BottomSheetModalProvider cria um portal para que o Bottom Sheet apareça na frente de tudo */}
        <BottomSheetModalProvider>
          {/* Scroll view com o conteúdo */}
          <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
            {/* Header */}
            <Header/>

            {/* Inputs */}
            <View style={styles.inputContainer}>
              <InputLabel text={"Preço da gasolina"} icon={"Fuel"} type={"gas"}/>
              <InputLabel text={"Preço do etanol"} icon={"Leaf"} type={"ethanol"}/>
            </View>

            {/* Botão de calcular */}
            <CustomButton title={"Verificar"} onPress={calculate} />

            {/* Bottom Sheet */}
            <ResultSheet/>

            {/* Card de resultado */}
            <ResultCard result={ethanolWorthy} date={date} percentage={ethanolPercentage} showCard={showCard}/>
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
    paddingHorizontal: 20,

    backgroundColor: '#F3F4F8',
  },

  inputContainer: { // Estilo do container de input
    gap: 20,
    marginBottom: 20
  },
})