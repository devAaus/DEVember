import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type DayListItemProps = {
   day: number
}

export const DayListItem = ({ day }: DayListItemProps) => {
   return (
      <View style={styles.box}>
         <Text style={styles.text}>{day}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   box: {
      backgroundColor: '#f5ebe0',
      flex: 1,
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#9d0208'
   },
   text: {
      color: '#9d0208',
      fontSize: 70,
      fontFamily: 'Sevillana'
   }
});