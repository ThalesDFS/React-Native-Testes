import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import { TextoSincronizado }  from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'


export default createDrawerNavigator({

    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: {title: 'lista (flex box)'}
    },

    TextoSincronizado: {
        screen: () => <TextoSincronizado></TextoSincronizado>
    },

    Avo: {
        screen: () => <Avo nome='teste' sobrenome='alface'></Avo>
    },

    Evento:{
        screen: () => <Evento ></Evento>
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={80}></ValidarProps>
    },
    Plataformas: {
        screen: () => <Plataformas></Plataformas>//ou sem arrow function
    },

    Contador: {
        screen: () => <Contador numeroInicial={100}></Contador>
    },

    MegaSena: {
        screen: () => <MegaSena numeros={8}></MegaSena>,
        navigationOptions: { title: 'Mega Sena' }
    },

    Inverter: {
        screen: () => <Inverter texto='React nativo'></Inverter>
    },

    Parimpar: {
        screen: () => <Parimpar io={3}></Parimpar>,
        navigationOptions: {title: 'par e impar'}
    },
    Simples: {
        screen: () => <Simples texto='flexivel'></Simples>
    }
},{ drawerWidth: 300})
