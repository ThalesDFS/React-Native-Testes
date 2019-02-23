import React from 'react'
import {View, Text} from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If';


function parouimpar(num){
    //EXEMPLO2
    if ((num % 2) == 0){
        return <Text style={[Padrao.ex]}>par</Text>
    }else{
        return <Text style={[Padrao.ex]}>impar</Text>
    }

//Exemplo3
   // const v = num % 2 == 0 ? 'par' : 'impar'
 //   return <Text style={[Padrao.ex]}>{v}</Text>
}

/*<View>{
//EXEMPLO2 e 3
          //  parouimpar(props.io)//outro exemplo

          //EXEMPLO1
            // props.io % 2 == 0
             //? <Text style={Padrao.ex}>Par</Text>
             //: <Text style={Padrao.ex}>Impar</Text>
        //}
        </View>*/


export default props =>
<View>{parouimpar(props.io)}
</View>



//Exemplo 4
/*export default props =>
    <View>
            <If test={props.io % 2 == 0}>
                <Text style={Padrao.ex}>Par</Text>
            </If>

            <If test={props.io % 2 == 1}>
               <Text style={Padrao.ex}>Impar</Text>
           </If>
</View>*/