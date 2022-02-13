import { Text, View } from "react-native";
import CustomButton from "../CustomButton";
import styles from './styleStatusCart'

export default function StatusCart({ total }){
    return <View style={styles.conteudo}>
        <View style={styles.total}>
            <Text style={styles.descricao}>Valor total:</Text>
            <Text style={styles.valor}>
            {
                Intl.NumberFormat('pt-Br',{
                    style: 'currency', currency: 'BRL'
                }).format(total)
            }
            </Text>
        </View>
        <View style={styles.botao}>
            <CustomButton valor="Finalizar Pedido" invertido/>
        </View>
    </View>
}