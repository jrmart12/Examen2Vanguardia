import React from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  NavigatorIOS 
} from 'react-native';

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
  }



  render() {

    return (  
      <View style={styles.main}>
        <Text style={styles.description}>
          Job Search
        </Text>
        <View style={styles.flowRight}>
        <TextInput
          underlineColorAndroid={'transparent'}
          style={styles.searchInput}
          value={this.state.searchString}
          placeholder='Search'/>
      </View>
      <Button style={styles.button}
      title = "Search"
      />
      </View>
    )
  }
}




const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    color: '#656565',
    marginTop: 50,
  },
  flowRight: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 8,
  },

  button: {
    margin: 20,
    width: 400,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

