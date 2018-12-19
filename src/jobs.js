
import {
    Platform,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Text,
    View,
    Button,
    FlatList
  } from 'react-native';
import React, { Component } from 'react';

export default class Jobs extends React.Component  {

    render() {
        const {navigation} = this.props;
        const jobs = navigation.getParam('jobs');
            return (
              <View style={styles.container}>
                <FlatList
                  data={jobs}
                  renderItem={({ item }) => (
                    <Button
                      color="black"
                      title={`${item.title}`}
                      onPress={()=>{
                        this.props.navigation.navigate('Job', {item: item});
                      }}
                    />
                  )}
                />
              </View>
            );
          }
        }
        
        const styles = StyleSheet.create({
          container: {
           flex: 1,
           paddingTop: 22
          },
          item: {
            padding: 10,
            fontSize: 18,
            height: 44,
          },
        })