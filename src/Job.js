import React from 'react';
import { StyleSheet, Text, View , Button, TextInput, ScrollView} from 'react-native';



export default class Job extends React.Component {

    render() {
        const { navigation } = this.props;
        const job = navigation.getParam('job');
      return (
        <View style={styles.container}>
        <ScrollView>
            <Text>{job.title}</Text>
        </ScrollView>
            
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center', //alargado
    },
    button: {
      position: 'absolute',
      bottom: 35
    },
    inputText: {
      height: 50,
      paddingLeft: 3,
    }
  });