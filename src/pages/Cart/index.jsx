import { FlatList } from 'react-native';
import StatusCart from '../../components/StatusCart';
import Item from './Item';

const servicos = [
    {
      id: 1,
      nome: "Banho",
      preco: 79.9,
      descricao: "Não de banho no seu gato, mas se precisar, só damos",
      quantidade: 1
    },
    {
      id: 2,
      nome: "Vacina V4",
      preco: 89.9,
      descricao: "Uma dose da vacina v4",
      quantidade: 2
    },
    {
      id: 3,
      nome: "Vacina Antirrábica",
      preco: 99.9,
      descricao: "Uma dose da vacina antirrábica",
      quantidade: 3
    },
    {
      id: 4,
      nome: "Banho",
      preco: 79.9,
      descricao: "Não de banho no seu gato, mas se precisar, só damos",
      quantidade: 4
    },
    {
      id: 5,
      nome: "Vacina V4",
      preco: 89.9,
      descricao: "Uma dose da vacina v4",
      quantidade: 5
    },
    {
      id: 6,
      nome: "Vacina Antirrábica",
      preco: 99.9,
      descricao: "Uma dose da vacina antirrábica",
      quantidade: 1
    },
  ]
  
  export default function Cart() {
    const total = servicos.reduce((soma,{preco, quantidade}) => soma + (preco * quantidade), 0)

    return (
      <>
        <StatusCart total={total} />
        <FlatList
          data={servicos}
          removeClippedSubviews={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item})=> {
            return <Item {...item} />
          }}
        />
      </>
    );
  }