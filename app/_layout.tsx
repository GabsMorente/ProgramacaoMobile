import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [num, setNum] = useState("0");
  const [result, setResult] = useState(0);
  const [opera, setOpera] = useState(null);
  const [newNum, setNewNum] = useState(true);

  function handleNumberPress(value) {
    if (newNum) {
      setNum(String(value));
      setNewNum(false);
    } else {
      setNum(num === "0" ? String(value) : num + value);
    }
  }

  function escolherOperacao(op) {
    if (opera !== null && !newNum) {
      calcular();
    }
    
    setResult(parseFloat(num));
    setOpera(op);
    setNewNum(true);
  }

  function limparTudo() {
    setNum("0");
    setResult(0);
    setOpera(null);
    setNewNum(true);
  }

  function calcular() {
    if (opera === null) return;

    const numAtual = parseFloat(num);
    let conta = 0;

    switch (opera) {
      case "+":
        conta = result + numAtual;
        break;
      case "-":
        conta = result - numAtual;
        break;
      case "*":
        conta = result * numAtual;
        break;
      case "/":
        conta = result / numAtual;
        break;
    }

    setResult(conta);
    setNum(String(conta));
    setOpera(null);
    setNewNum(true);
  }

  return (
    <View style={styles.pai}>
      <View style={styles.resulta}>
        <Text style={styles.titulo}>CALCULADORA</Text>
        <Text style={styles.textNum}>{result}</Text>
        <Text style={styles.textNumAtual}>{num}</Text>
      </View>

      <View style={styles.topo}>
        <TouchableOpacity style={styles.botao} onPress={limparTudo}>
          <Text style={styles.textBut}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => escolherOperacao("+")}>
          <Text style={styles.textBut}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => escolherOperacao("-")}>
          <Text style={styles.textBut}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => escolherOperacao("*")}>
          <Text style={styles.textBut}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => escolherOperacao("/")}>
          <Text style={styles.textBut}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topo}>
        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(9)}>
          <Text style={styles.textBut}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(8)}>
          <Text style={styles.textBut}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(7)}>
          <Text style={styles.textBut}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(6)}>
          <Text style={styles.textBut}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(5)}>
          <Text style={styles.textBut}>5</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topo}>
        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(4)}>
          <Text style={styles.textBut}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(3)}>
          <Text style={styles.textBut}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(2)}>
          <Text style={styles.textBut}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(1)}>
          <Text style={styles.textBut}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => handleNumberPress(0)}>
          <Text style={styles.textBut}>0</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topo}>
        <TouchableOpacity style={styles.botaoIgual} onPress={calcular}>
          <Text style={styles.textBut}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pai: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: '#000000'
  },
  titulo: {
      fontSize: 40,
      color: '#f1f1f1',
      fontFamily: 'System',
      marginLeft:50,
      marginBottom:400
  },
  botao: {
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
  botaoIgual: {
    backgroundColor: '#363636',
    marginHorizontal: 3,
    marginVertical: 3,
    padding: 20,
    borderRadius: 10,
    width: 400,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBut: {
    fontSize: 30,
    color: 'orange'
  },
  textNum: {
    fontSize: 30,
    color: '#888',
    textAlign: 'right'
  },
  textNumAtual: {
    fontSize: 50,
    color: '#f1f1f1',
    textAlign: 'right'
  },
  topo: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  resulta: {
    padding: 20,
    alignItems: 'flex-end'
  }
});
