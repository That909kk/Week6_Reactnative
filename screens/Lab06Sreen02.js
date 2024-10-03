import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image, Pressable } from 'react-native';

const Lab06Screen01 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://66f5f947436827ced9759249.mockapi.io/api/flatlist/flatlist2')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (

    <View style={styles.item}>
      <Image source={{ uri: item.img }} style={{ width: 155, height: 90 }} />
      <Text style={{
        width: 111,
        height: 28,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 14,
      }}
      >{item.dec}</Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 13,
        backgroundColor: 'white',
      }}>
        <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 13,
        backgroundColor: 'white',
      }}>
        <Image source={require('../assets/star.png')} style={{
          width: 13, height: 13
        }} />
        <Image source={require('../assets/star.png')} style={{
          width: 13, height: 13
        }} />
        <Image source={require('../assets/star.png')} style={{
          width: 13, height: 13
        }} />
        <Image source={require('../assets/star.png')} style={{
          width: 13, height: 13
        }} />
        <Image source={require('../assets/star-1.png')} style={{
          width: 11, height: 11,backgroundColor: 'white',
        }} />
        </View>
        <Text style={{
          width: 30,
          height: 13,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 14,
          marginRight: 15,
        }}
        >(15)</Text>
      </View>
      <View  style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:160,
        height:14,
        backgroundColor:'white',
        marginTop:10,
      }}>
        <Text style={{
          width:49,
          height:14,
          fontFamily:'Roboto',
          fontStyle:'normal',
          fontWeight:700,
          fontSize:12,
          lineHeight:14,

        }}
        >
          {item.price}đ
        </Text>
        <Text style={{
          width:26,
          height:14,
          fontFamily:'Roboto',
          fontStyle:'normal',
          fontWeight:400,
          fontSize:12,
          lineHeight:14,
          color:'#969DAA',
        }}
        >
          {item.discount}
        </Text>
      </View>
    </View>

  );

  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 5,
      }}
      >
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    flex: 1,
    width: 155,
    height: 180,
    margin: 8,
    padding: 5,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lab06Screen01;