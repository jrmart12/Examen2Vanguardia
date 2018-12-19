import React from 'react';
import { StyleSheet, Text, View , Button, TextInput, ScrollView} from 'react-native';


import HTML from 'react-native-render-html';
export default class Job extends React.Component {

    render() {
        const { navigation } = this.props;
        const job = navigation.getParam('item');
      return (
        <View style={styles.container}>
        <ScrollView>
            <Text type="title1">{job.title}</Text>
            <HTML html={job.description} ></HTML>
        </ScrollView>
            
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });