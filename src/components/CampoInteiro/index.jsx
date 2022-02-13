import { TextInput } from "react-native";
import style from './style'

export default function CampoInteiro({value, styleProps ,setQuant}){

    const updateValue = (newValue, callback) => {
        const isInt = newValue.match(/^[0-9]*$/)
        if(!isInt) return
        const clearZero = newValue.replace(/^(0)(.+)/,'$2')
        callback(clearZero)
    }

    const stringValue = String(value)

    return <TextInput 
        style={[style.campo, styleProps]}
        keyboardType="number-pad"
        selectTextOnFocus
        value={stringValue}
        onChangeText={(newValue) => {
            updateValue(newValue, setQuant)
        }}
    />
}