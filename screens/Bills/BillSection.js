import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import {Colors} from '../../constant/styles';
import {Box, Input, NativeBaseProvider} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export function BillSectionScreen(props) {
  const data = [
    {
      header: 'Recharge',
      data: [
        {
          icon: (
            <EntypoIcon name="mobile" size={30} color={Colors.primaryColor} />
          ),
          text: 'Mobile Recharge',
        },
        {
          icon: (
            <IonIcon name="car-outline" size={30} color={Colors.primaryColor} />
          ),
          text: 'FASTag Recharge',
        },
        {
          icon: (
            <FontAwesome5Icon
              name="satellite-dish"
              size={30}
              color={Colors.primaryColor}
            />
          ),
          text: 'DTH',
        },
        {
          icon: <FeatherIcon name="tv" size={30} color={Colors.primaryColor} />,
          text: 'Cable TV',
        },
      ],
    },
    {
      header: 'Utilities',
      data: [
        {
          icon: (
            <MaterialCommunityIcon name="gas-cylinder" size={30} color={Colors.primaryColor} />
          ),
          text: 'Book A Cylinder',
        },
        {
          icon: (
            <MaterialCommunityIcon name="pipe-valve" size={30} color={Colors.primaryColor} />
          ),
          text: 'Piped Gas',
        },
        {
          icon: (
            <IonIcon
              name="water"
              size={30}
              color={Colors.primaryColor}
            />
          ),
          text: 'Water',
        },
        {
          icon: <EntypoIcon name="light-bulb" size={30} color={Colors.primaryColor} />,
          text: 'Electricity',
        },
        {
          icon: <FontAwesome5Icon name="mobile" size={30} color={Colors.primaryColor} />,
          text: 'Postpaid',
        },
        {
          icon: <EntypoIcon name="landline" size={30} color={Colors.primaryColor} />,
          text: 'Broadband/Landline',
        },
        {
          icon: <MaterialCommunityIcon name="book-education-outline" size={30} color={Colors.primaryColor} />,
          text: 'Education Fees',
        },
        {
          icon: <AntDesignIcon name="home" size={30} color={Colors.primaryColor} />,
          text: 'Rent Payment',
        },
      ],
    },
  ];

  return (
    <NativeBaseProvider>
      <View style={{padding: 10}}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{backgroundColor: '#FFF', padding: 10, borderRadius: 5, marginBottom : 10}}>
              <Text style={{color: 'rgba(0,0,0,0.7)', fontWeight: '700'}}>
                {item.header}
              </Text>
              <View style={{}}>
                {
                  <FlatList
                    data={item.data}
                    keyExtractor={(item, index) => index}
                    numColumns={4}
                    renderItem={item1 => {
                      return (
                        <TouchableOpacity
                          style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin : 2,
                            marginTop: 20,
                            // width: Dimensions.get('screen').width * 0.22,
                            alignItems: 'center',
                          }}>
                          {item1.item.icon}
                          <Text style={{color: 'grey', textAlign: 'center',fontSize : 12}}>
                            {item1.item.text}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                  // item.data.map((item1, index1) => {
                  //   return (
                  //     <TouchableOpacity
                  //       key={index1}
                  //       style={{
                  //         flex: 1,
                  //         alignItems: 'center',
                  //         width: Dimensions.get('screen').width * 0.2,
                  //       }}>
                  //       {item1.icon}
                  //       <Text style={{color: 'grey', textAlign: 'center'}}>
                  //         {item1.text}
                  //       </Text>
                  //     </TouchableOpacity>
                  //   );
                  // })
                }
              </View>
            </View>
          );
        })}
      </View>
    </NativeBaseProvider>
  );
}
