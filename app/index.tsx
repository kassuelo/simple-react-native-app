import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { DrawerActions } from '@react-navigation/native'
export default function TelaInicial() {
  const nav = useNavigation()
  return (
    <View
      style={[styles.centralizado, { gap: 10 }]}
    >
      <Ionicons name="logo-react" size={100} />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }} >Masterclass React Native</Text>
        <Text style={{ fontSize: 16 }} >Esquenta Formação.DEV</Text>
      </View>
      <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
        <Text style={{ color: '#FFF' }} >Exercícios</Text>
      </Botao>
    </View>
  );
}
