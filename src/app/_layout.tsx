import { Stack } from "expo-router";
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'
import { Sevillana_400Regular } from '@expo-google-fonts/sevillana'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ActivityIndicator } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

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
      <Stack
         screenOptions={{ headerTitleAlign: "center" }}
      >
         <Stack.Screen name="index" options={{ title: "DEVember" }} />
      </Stack >
   )

}