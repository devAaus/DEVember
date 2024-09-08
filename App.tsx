import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { DayListItem } from './src/components/core/DayListItem';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'
import { Sevillana_400Regular } from '@expo-google-fonts/sevillana'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val, index) => index + 1);
export default function App() {

  const [loaded, error] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_700Bold,
    Sevillana: Sevillana_400Regular
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => (
          <DayListItem day={item} />
        )}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 10,
    gap: 10
  },
  column: {
    gap: 10
  },
});
