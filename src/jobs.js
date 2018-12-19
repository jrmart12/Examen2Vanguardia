
import {
    Platform,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Text,
    View
  } from 'react-native';
import React, { Component } from 'react';

export default class Jobs extends React.Component  {

    render() {
        const {navigation} = this.props;
        const recibo = navigation.getParam('Jobs');
      return (
            <ScrollView >
                         <SafeAreaView>
                         {recibo.map((data) =>  <Button
                            title={recibo.title}
                            onPress={()=>{
                                this.props.navigation.navigate('Job', {data: data});
                            }}
                            >
                            </Button>)}
                         </SafeAreaView>
                         
                     </ScrollView>
                     
      )
    }
  };
