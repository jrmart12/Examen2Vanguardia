
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import React, { Component } from 'react';

export default class Jobs extends React.Component  {

    render() {
        const {navigation} = this.props
        const recibo = navigation.getParams('jobs')
      return (
        <View>
            <ul>
                { recibo.map(jobs => <li>{jobs.title}</li>)}
            </ul>
        </View>
      )
    }
  };
