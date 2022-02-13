import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CampoInteiro from "../../../components/CampoInteiro";
import CustomButton from "../../../components/CustomButton";
import style from './style'

export default function Item({nome, preco, descricao}){

    const [quant, setQuant] = useState(1)
    const [total, setTotal] = useState(preco)
    const [open, setOpen] = useState(false)

    const handleTotal = (quantidade) => {
        setTotal(quantidade*preco)
    }

    const handleQuantidade = (newValue) => {
        setQuant(newValue)
        handleTotal(newValue)
    }

    const handleOpen = () => {
        setOpen(!open)
        handleQuantidade(1)
    }

    return (
        <>
            <TouchableOpacity style={style.informacao} onPress={handleOpen}>
                <Text style={style.nome}>{nome}</Text>
                <Text style={style.descricao}>{descricao}</Text>
                <Text style={style.preco}>{
                    Intl.NumberFormat('pt-Br',{
                        style: 'currency', currency: 'BRL'
                    }).format(preco)
                }</Text>
            </TouchableOpacity>
            {open && <View style={style.carrinho}>
                <View>
                    <View style={style.valor}>
                        <Text style={style.descricao}>Quantidade:</Text>
                        <CampoInteiro setQuant={handleQuantidade} value={quant} styleProps={style.quantidade}/>
                    </View>
                    <View style={style.valor}>
                        <Text style={style.descricao}>Total:</Text>
                        <Text style={style.preco}>{
                        Intl.NumberFormat('pt-Br',{
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                        }</Text>
                    </View>
                </View>
                <CustomButton valor="Adicionar" callback={() => {}}/>
            </View>}
            <View style={style.divisor}/>
        </>
    )
}