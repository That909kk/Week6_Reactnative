import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image, Pressable } from 'react-native';

const Lab06Screen01 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://66f5f947436827ced9759249.mockapi.io/api/flatlist/flatlist')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
      
       <View style={styles.item}>
      <Image source={{ uri: item.image }} style={{

        width: 74,
        height: 74,
      }}/>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 180,
      }}
      >
        <Text style={{
            width: 180,
            marginLeft: 10,
            marginBottom: 8,
        }}
        >{item.name}</Text>
        <Text style={{
           width: 180,
            marginLeft: 10,
        }}
        >Shop:{item.Shop}</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Chat</Text>
      </Pressable>
    </View>
   
  );

  return (
    <View style={styles.container}>
      <View style={{
          justifyContent:'center',
          alignItems:'center',
          paddingBottom: 5,
        }}
        >
        <Text style={{
          width: 300,
          height: 35, 
        }}
        >Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
        </Text>
        </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    paddingTop: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button:{
    width: 88,
    height: 38,
    backgroundColor: 'red',
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    lineHeight: 38,
  }
});

export default Lab06Screen01;