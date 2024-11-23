import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Ikhsan Ansari 223510216 5G</Text>

      {/* Kotak-kotak dengan tata letak FlexBox */}
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', // Memberikan ruang agar kedua kotak dapat terlihat dengan jarak merata
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow', // Warna kuning
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'pink', // Warna pink
  },
});