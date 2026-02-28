import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState(0);
  const [opera, setOpera] = useState(null);

  function escolherOperacao(op) {
    setResult(num);
    setNum(0);
    setOpera(op);
  }

  function limparTudo() {
  setNum(0);
  setResult(0);
  setOpera(null);
  }

  function calcular() {
    if (!opera) return;

    let conta = 0;

    if (opera === "+") conta = result + num;
    if (opera === "-") conta = result - num;
    if (opera === "*") conta = result * num;
    if (opera === "/") conta = result / num;

    setResult(conta);
    setNum(0);
    setOpera(null);
  }

  return (
    <View style={styles.pai}>
      
      <View style={styles.resulta}>
        <Text style={styles.titulo}> CALCULADORA </Text>
        <Text style={styles.textNum}> {result} </Text>
        <Text style={styles.textNum}> {num} </Text>
      </View>

      <View style={styles.topo}>

        <TouchableOpacity style={styles.botao} onPress={(limparTudo)}>
          <Text style={styles.textBut}> AC </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => escolherOperacao("+")}>
          <Text style={styles.textBut}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => escolherOperacao("-")}>
          <Text style={styles.textBut}> - </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => escolherOperacao("*")}>
          <Text style={styles.textBut}> × </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => escolherOperacao("/")}>
          <Text style={styles.textBut}> ÷ </Text>
        </TouchableOpacity>

        
      </View>

      <View style={styles.topo}>
        <TouchableOpacity style={styles.botao} onPress={() => setNum(9)}>
          <Text style={styles.textBut}> 9 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setNum(8)}>
          <Text style={styles.textBut}> 8 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setNum(7)}>
          <Text style={styles.textBut}> 7 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setNum(6)}>
          <Text style={styles.textBut}> 6 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setNum(5)}>
          <Text style={styles.textBut}> 5 </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topo}>
        <TouchableOpacity style={styles.botao} onPress={() => setNum(4)}>
          <Text style={styles.textBut}> 4 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setNum(3)}>
          <Text style={styles.textBut}> 3 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setNum(2)}>
          <Text style={styles.textBut}> 2 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setNum(1)}>
          <Text style={styles.textBut}> 1 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setNum(0)}>
          <Text style={styles.textBut}> 0 </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topo}>
        <TouchableOpacity style={styles.botaoIgual} onPress={calcular}>
          <Text style={styles.textBut}> = </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  pai:{
    flex:1,
    justifyContent: "flex-end",
    backgroundColor: '#000000'
  },

  titulo: {
  fontSize: 40,
  color: '#f1f1f1',
  fontFamily: 'System',
  marginLeft:80,
  marginBottom:400
  },

  botao:{
    backgroundColor: '#363636',
    marginHorizontal: 3,
    marginVertical:3,
    padding: 20,
    borderRadius:10,
    width: 75,
    height:75,
    justifyContent:'center',
    alignItems:'center',
  },

   botaoIgual:{
    backgroundColor: '#363636',
    marginHorizontal: 3,
    marginVertical:3,
    padding: 20,
    borderRadius:10,
    width: 400,
    height:75,
    justifyContent:'center',
    alignItems:'center',
  },

  textBut:{
    fontSize: 30,
    color: 'orange'
  },

  textNum:{
    fontSize: 40,
    color: '#f1f1f1'
  },

  topo:{
    flexDirection: 'row',
    justifyContent: "flex-end",
  },

  resulta:{

  }
});