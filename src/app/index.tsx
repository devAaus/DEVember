import { DayListItem } from '@/components/core/DayListItem';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';


const days = [...Array(24)].map((val, index) => index + 1);

export default function Home() {

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
