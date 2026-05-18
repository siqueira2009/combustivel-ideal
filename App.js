import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput} from 'react-native';
import PriceLabel from './src/components/PriceLabel';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}/>

      <View style={styles.priceContainer}>
        <PriceLabel type={"Etanol"} price={5.32}/>
        <PriceLabel type={"Gasolina"} price={6.45}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  priceContainer: {
    width: '100%',
    gap: 10,
    flexDirection: 'column',
  },

  input: {
    marginBottom: 10,
    width: '100%',
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18
  }
});
