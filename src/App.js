import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default class App extends Component {
  render() {
      return (
        <View style={styles.container}>
          <Simples texto='haha' ui='ho'></Simples>
          <Parimpar io={11}> </Parimpar>
          <Inverter texto='React Nativo'></Inverter>
          <MegaSena numeros = {8}></MegaSena>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f22: {
    fontSize: 40
  }
})