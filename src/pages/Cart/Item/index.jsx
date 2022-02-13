import { useState } from "react";
import { Text, View } from "react-native";
import CampoInteiro from "../../../components/CampoInteiro";
import CustomButton from "../../../components/CustomButton";
import style from './style'

export default function Item({nome, preco, descricao, quantidade: quantidadeInicial}){

    const [quant, setQuant] = useState(quantidadeInicial)
    const [total, setTotal] = useState(preco*quantidadeInicial)

    const handleTotal = (quantidade) => {
        setTotal(quantidade*preco)
    }

    const handleQuantidade = (newValue) => {
        setQuant(newValue)
        handleTotal(newValue)
    }

    return (
        <>
            <View style={style.informacao}>
                <Text style={style.nome}>{nome}</Text>
                <Text style={style.descricao}>{descricao}</Text>
                <Text style={style.preco}>{
                    Intl.NumberFormat('pt-Br',{
                        style: 'currency', currency: 'BRL'
                    }).format(preco)
                }</Text>
            </View>
            <View style={style.carrinho}>
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
                <CustomButton valor="Remover" callback={() => {}}/>
            </View>
            <View style={style.divisor}/>
        </>
    )
}