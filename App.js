import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Routes from './src/Routes';
import TelaPadrao from './src/components/TelaPadrao';

export default function App() {
  return (<TelaPadrao>
    <Routes/>
  </TelaPadrao>) 
}
