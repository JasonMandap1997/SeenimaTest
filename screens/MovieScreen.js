import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';

const MovieScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState([""])

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons onPress={() => navigation.goBack()} style={{ marginLeft: 5 }} name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 15, fontWeight: "600", marginLeft: 5 }}>{route.params.name}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
        <Ionicons name="search" size={24} color="black" />
        <Ionicons style={{ marginHorizontal: 10 }} name="ios-filter-outline" size={24} color="black" />
        <Ionicons name="share-outline" size={24} color="black" />
      </View>

      <View style={{ flexDirection: "row", alignContent: "center", marginTop: 10, marginLeft: 5 }}>
        <AntDesign name="Safety" size={24} color="orange" />
        <Text style={{ paddingTop: 4, paddingLeft: 4 }}>Your safety is our priority</Text>
      </View>

      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date('2022-10-5')}
        endDate={new Date('2022-011-5')}
        initialSelectedDate={new Date('2022-10-5')}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />

    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({})