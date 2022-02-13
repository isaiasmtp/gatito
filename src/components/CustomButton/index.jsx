import { Text, TouchableOpacity } from "react-native";
import funcStyle from './style'

export default function CustomButton({pequeno = false, invertido=false, valor, callback, styleProps}){
    const style = funcStyle(pequeno, invertido)
    return <TouchableOpacity style={[style.botao, styleProps]} onPress={callback}>
        <Text style={style.valor}>
            {valor}
        </Text>
    </TouchableOpacity>
}