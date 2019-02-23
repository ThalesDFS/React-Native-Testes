import React from 'react'
import { ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Ana', nota: 7.9},
    { id: 3, nome: 'Marcele', nota: 7.9},
    { id: 4, nome: 'jussie', nota: 7.9},
    { id: 5, nome: 'rafa', nota: 7.9},
    { id: 6, nome: 'montanari', nota: 7.9},
    { id: 7, nome: 'saulo', nota: 7.9},

    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Ana', nota: 7.9},
    { id: 13, nome: 'Marcele', nota: 7.9},
    { id: 14, nome: 'jussie', nota: 7.9},
    { id: 15, nome: 'rafa', nota: 7.9},
    { id: 16, nome: 'montanari', nota: 7.9},
    { id: 17, nome: 'saulo', nota: 7.9},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 90,
    backgroundColor: '#ddd',
    borderWidth: 0.5,
    borderColor: '#222',

    //flex
    alignItems: 'center', //'center','flex-end','flex-start', gravity horizontal
    justifyContent: 'space-around', /*'center','flex-end','flex-start',
    'space-between' (espaco entre os elementos),'space-around', gravity vertical*/
    flexDirection: 'row' //inverte eixos vertical e horizontal
}

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>


export default props => {
    const renderItems = ({ item }) => {
        return <Aluno {...item}></Aluno>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItems}
                keyExtractor={(_, index) => index.toString()}></FlatList>
         </ScrollView>

     )
 }
 //keyextractor opcionalkeyExtractor={(_, index) => index.`${index}`}></FlatList>