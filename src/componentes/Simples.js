import React from 'react'
import {Text, View} from 'react-native'
import Padrao from '../estilo/Padrao'
//export default function(props){
  //  return <Text>{props.texto}</Text>
//}

export default props => 
<View>
    <Text style={[Padrao.ex]}>Gente1   {props.texto}</Text>
    <Text>Gente2  {props.ui}</Text>
</View>

//export default props => [
 //   <Text key={1}>Gente1  {props.texto}</Text>,
 //   <Text key={2}>Gente2  {props.ui}</Text>
//]

//export default props => {
  //  return[
  //      <Text key={1}>Gente1  {props.texto}</Text>,
   //      <Text key={2}>Gente2  {props.ui}</Text>
 //   ]
//}