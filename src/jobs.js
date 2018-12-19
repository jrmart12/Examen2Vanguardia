
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
        const recibo = navigation.getParam('jobs');
      return (
            <ScrollView >
                         <SafeAreaView>
                             {recibo.map(data => (
                                 <Text type="title1"
                                     title={data.title}
                                 />
                                 
                             ))}
                         </SafeAreaView>
                         
                     </ScrollView>
                     
      )
    }
  };
