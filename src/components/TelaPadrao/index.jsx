import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import style, { cores } from '../../style';
import styles from './styles';

export default function TelaPadrao({ children }) {
    return (
      <>
      <SafeAreaView style={styles.ajusteTela}>
        <StatusBar backgroundColor={cores.roxo}/>
        <KeyboardAvoidingView
        style={style.preencher}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        { children }
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={styles.ajusteTelaEnd} />
      </>
    );
  }