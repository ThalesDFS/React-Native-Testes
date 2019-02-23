import React from 'react'
import { View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
        height: '100%',
    },

    norte: {
        backgroundColor: '#ff0000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    centro: {
        backgroundColor: '#fbbbbb',
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },

    sul: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff0000',
        justifyContent: 'center'
    },

    circulo: {
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 60
    }
})

const Circulo = props => {
    return <View style={styles.circulo}></View> //nao precisava do return
}

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo></Circulo>
            </View>

            <View style={styles.centro}>
                <Circulo></Circulo>
                <Circulo></Circulo>
                <Circulo></Circulo>
            </View>

            <View style={styles.sul}>
                <Circulo></Circulo>
            </View>
        </View>
    )
}


