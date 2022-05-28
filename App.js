import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

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
});

function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin', type: 1},
          {key: 'Dan', type: 1},
          {key: 'Dominic', type: 2},
          {key: 'Jackson', type: 1},
          {key: 'James', type: 1},
          {key: 'Joel', type: 2},
          {key: 'John', type: 1},
          {key: 'Jillian', type: 1},
          {key: 'Jimmy', type: 3},
          {key: 'Julie', type: 1},
        ]}
        renderItem={({item}) => {
          if(item.type == 1){
            return (<Text style={styles.item}>{item.key}</Text>);
          }
          else if(item.type == 2){
            return (<Text style={styles.item}>{item.key} {item.key}</Text>);
          }
          else {
            return (<Text style={styles.item}>{item.key} {item.key} {item.key}</Text>);
          }
          
        }}
      />
    </View>
  );
}

export default App;