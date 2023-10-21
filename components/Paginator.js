import { StyleSheet, View } from 'react-native'
import React from 'react'

const Paginator = ({item}) => {
  return (
    <View style={{flexDirection:'row',height:3}}>
      {item.map((_,i)=>{
        return <View style={[styles.dot,{width:10}]} key={i.toString()}/>
      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    dot:{
        marginTop:30,
        height:5,
        borderRadius:5,
        backgroundColor:'#5A189A',
        marginHorizontal:4,
    }
})