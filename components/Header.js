import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Pressable, ScrollView } from 'react-native'
import React from 'react'

const Header = () => {

  const types = [
    {
      id: "0",
      name: "IMAX",
    },
    {
      id: "1",
      name: "4DX",
    },
    {
      id: "2",
      name: "PXL",
    },
    {
      id: "3",
      name: "GOLD",
    },
    {
      id: "4",
      name: "PLAYHOUSE",
    },
  ];
  return (
    <View>
      <ImageBackground
        style={{ aspectRatio: 5 / 2, height: 170 }}
        source={{
          uri: "https://nntheblog.com/wp-content/uploads/2022/07/john-wick-1-e22c.jpg"
        }}
      >
          <Pressable style={{position: "absolute", height: 130, backgroundColor: "white", padding: 10, borderRadius: 6, top: 140, left: 20, width: "82%"}}>
              <Text style={{fontSize: 14, fontWeight: "500", color: "gray"}}>Releaseing in 1 day</Text>
              
              <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10}}>
                  <View>
                      <Text style={{fontSize: 16, fontWeight: "bold"}}>VIKRANT RONA</Text>
                      <Text style={{fontSize: 16, fontWeight: "400", color: "gray", marginTop: 4}}>U/A • KANNADA</Text>
                  </View>

                  <Pressable style={{backgroundColor: "#ffc40c", padding: 10, borderRadius: 6, marginRight: 10}}>
                      <Text style={{fontSize: 14, fontWeight: "500", textAlign: "center"}}>BOOK</Text>
                  </Pressable>

                  
              </View>
              <Text style={{marginTop:8, fontSize: 15, fontWeight: "500"}}> Fantasy, Thriller, Action</Text>
          </Pressable>
      </ImageBackground>

      <View style={{marginTop:100,}}/>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {types.map((item, index) => (
              <View style={{margin: 10, borderColor: "C0C0C0", borderWidth: 1, borderRadius: 4, padding: 10}}key={index}>
                  <Text style={{textAlign: "center", fontSize: 14, fontWeight: "500"}}>{item.name}</Text>
              </View>
            ))}
     </ScrollView>
    </View>
  );
};

export default Header

const styles = StyleSheet.create({})