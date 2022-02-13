import { FlatList } from 'react-native';
import Item from './Item';

const servicos = [
    {
      id: 1,
      nome: "Banho",
      preco: 79.9,
      descricao: "Não de banho no seu gato, mas se precisar, só damos"
    },
    {
      id: 2,
      nome: "Vacina V4",
      preco: 89.9,
      descricao: "Uma dose da vacina v4"
    },
    {
      id: 3,
      nome: "Vacina Antirrábica",
      preco: 99.9,
      descricao: "Uma dose da vacina antirrábica"
    },
    {
        id: 4,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não de banho no seu gato, mas se precisar, só damos"
      },
      {
        id: 5,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina v4"
      },
      {
        id: 6,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica"
      },
  ]
  
  export default function Servicos() {
    return (
      <>
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