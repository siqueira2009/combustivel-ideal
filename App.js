import React, { useRef } from 'react';
import { StyleSheet, ScrollView, View, TextInput } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import Header from './src/components/Header';
import InputLabel from './src/components/InputLabel';
import CustomButton from './src/components/CustomButton';
import ResultSheet from './src/components/ResultSheet';

import ResultContext from './src/contexts/ResultSheet';

export default function App() {
  const bottomSheetRef = useRef(null);

  function openSheet() {
    bottomSheetRef.current?.present();
  }

  return (
    <ResultContext.Provider value={bottomSheetRef}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
            <Header/>

            <View style={styles.inputContainer}>
              <InputLabel text={"Preço da gasolina"} icon={"gas"} />
              <InputLabel text={"Preço do etanol"} icon={"etanol"}/>
            </View>

            <CustomButton title={"Verificar"} icon={"Scale"} onPress={openSheet} />

            <ResultSheet/>
          </ScrollView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ResultContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingVertical: 60,
    backgroundColor: '#F3F4F8',
  },

  inputContainer: {
    gap: 20,
    marginBottom: 20
  },
})