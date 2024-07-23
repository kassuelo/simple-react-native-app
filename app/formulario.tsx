import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import useFormUsuario from "@/hooks/useFormUsuario";
import Cpf from "@/utils/cpf";
import { View, Text, TextInput } from "react-native";

export default function TelaFormulario() {
    const { usuario, erros, setUsuario, salvar } = useFormUsuario();

    return (<View style={styles.centralizado} >
        <Text>Formulário</Text>
        <TextInput
            placeholder="Nome"
            value={usuario.nome ?? ''}
            style={[styles.input, erros.nome && styles.inputError]}
            onChangeText={(nome) => setUsuario({ ...usuario, nome })}
        />
        {erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}
        <TextInput
            placeholder="CPF"
            value={Cpf.formatar(usuario.cpf ?? '')}
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={(cpf) => {
                setUsuario({ ...usuario, cpf: Cpf.desformatar(cpf) })
            }
            }
        />
        <Botao onPress={salvar}>
            <Text style={{ color: '#fff' }}>
                Salvar
            </Text>
        </Botao>
    </View >)
}