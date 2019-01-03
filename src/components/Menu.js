import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
const COLOR = require('../assets/colors');

const styles = StyleSheet.create({
  menu: {
    flex: 1
  },
  text:{
    alignSelf:"center", color:'white', fontSize: 18, fontWeight: '600'
  }

});

export default function Menu({ onItemSelected }) {
  return (
    <View style={styles.menu}>
                <TouchableOpacity 
                style={{flex:1, backgroundColor:COLOR.maroon, justifyContent:"center"}}
                //onPress={()=>{this.props.navigation.navigate('Aktuelt')}}
                onPress={() => onItemSelected('Aktuelt')}
                >
                <Text style={styles.text}>
                Aktuelt
                </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{flex:1, backgroundColor:COLOR.orange, justifyContent:"center"}}
                // onPress={()=>{this.props.navigation.navigate('Within10')}}
                onPress={() => onItemSelected('Within10')}
                >
                <Text style={styles.text}>
                Indenfor 10 minutter
                </Text>
                </TouchableOpacity>

                <View style={{flex:1, backgroundColor:COLOR.purple, justifyContent:"center"}}>
                <Text style={styles.text}>
                Områder
                </Text>
                </View>

                <View style={{flex:1, backgroundColor:COLOR.red, justifyContent:"center"}}>
                <Text style={styles.text}>
                A-Å
                </Text>
                </View>

                <View style={{flex:1, backgroundColor:COLOR.blueGreen, justifyContent:"center"}}>
                <Text style={styles.text}>
                Transport
                </Text>
                </View>

                <View style={{flex:1, backgroundColor:COLOR.lightBlue, justifyContent:"center"}}>
                <Text style={styles.text}>
                Info
                </Text>
                </View>
    </View>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};