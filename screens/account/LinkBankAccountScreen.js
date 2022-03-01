import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../constant/styles';
import {Box, Input, NativeBaseProvider} from 'native-base';

export function LinkBankAccountScreen(props) {
  const Container = ({value, text}) => {
    return (
      <View style={{marginBottom: 20}}>
        <Text
          style={{
            color: '#000',
            fontSize: 17,
            color: 'rgba(0,0,0,0.8)',
            paddingBottom: 5,
          }}>
          {text}
        </Text>
        <Box alignItems="center">
          <Input
            value={value}
            w="100%"
            placeholder={text}
            borderColor="grey"
            fontSize="sm"
            paddingLeft={15}
          />
        </Box>
      </View>
    );
  };

  return (
    <NativeBaseProvider>
      <View style={{padding: 10}}>
        <Container text="Account Number" value="" />
        <Container text="IFSC CODE" value="" />
        <Container text="Bank Name" value="" />
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{
            backgroundColor: Colors.primaryColor,
            padding: 10,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: '#FFF'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  );
}
