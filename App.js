import React, {useState} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const pedra = require('./assets/pedra.jpg')
const papel = require('./assets/papel.jpg')
const tesoura = require('./assets/tesoura.jpg')
const versus = require('./assets/x.jpg')

const EMPATE = "Empate!"
const DERROTA = "Você perdeu!"
const VITORIA = "Você ganhou!"

export default function App() {

  const [jogador, setJogador] = useState()
  const [computador, setComputador] = useState()
  const [resultado, setResultado] = useState('')

  function joga(player) {

    const comp = Math.floor(Math.random() * 3) + 1

    if(player === 1) setJogador(pedra)
    if(player === 2) setJogador(papel)
    if(player === 3) setJogador(tesoura)
    
    if(comp === 1) setComputador(pedra)
    if(comp === 2) setComputador(papel)
    if(comp === 3) setComputador(tesoura)

    regra(player, comp)
  }

  function regra(player, comp) {

    if(player === 1) {
      
      if(comp === 1) {
        setResultado(EMPATE)
      }
      else if(comp === 2) {
        setResultado(DERROTA)
      }
  
      else if(comp === 3) {
        setResultado(VITORIA)
      }
    }
    
    if(player === 2) {
      
      if(comp === 1) {
        setResultado(VITORIA)
      }
  
      else if(comp === 2) {
        setResultado(EMPATE)
      }
  
      else if(comp === 3) {
        setResultado(DERROTA)
      }
    }
  
    if(player === 3) {
      
      if(comp === 1) {
        setResultado(DERROTA)
      }
  
      else if(comp === 2) {
        setResultado(VITORIA)
      }
  
      else if(comp === 3) {
        setResultado(EMPATE)
      }
    }
  }

  return (

    <SafeAreaView style={styles.container}>
      <View tyle={styles.title}>
        <Text style={styles.txt_title}>Pedra, Papel ou Tesoura?</Text>
      </View>
      <View style={styles.opcoes_vw}>

        <TouchableOpacity
          onPress={() => joga(1)}
        >
          <Image
              source={pedra}
              style={styles.opcoes}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => joga(2)}
        >
          <Image
              source={papel}
              style={styles.opcoes}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => joga(3)}
        >
          <Image
              source={tesoura}
              style={styles.opcoes}
          />
        </TouchableOpacity>
      </View>
      <View tyle={styles.title}>
        <Text style={styles.txt_title}>{resultado}</Text>
      </View>
      <View style={styles.opcoes_vw}>
        <Image
          source={jogador}
        />

        <Image
          source={versus}
        />

        <Image
          source={computador}
        />
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 30,
    backgroundColor: '#000000'
  },

  title: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  txt_title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#fff',
    margin: 20,
    marginTop: 20
  },

  opcoes_vw: {
    height: 400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000'
  },

  opcoes: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20
  },

  resultado_box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
})