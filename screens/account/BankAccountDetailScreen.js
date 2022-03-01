import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../constant/styles';
import {Box, Input, NativeBaseProvider} from 'native-base';

export function BankAccountDetailScreen() {
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
            editable={false}
            backgroundColor="rgba(0,0,0,0.1)"
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
        <Container text="Account Number" value="917015624643" />
        <Container text="IFSC CODE" value="DIGI0123456" />
        <Container text="UPI ID" value="7015624643@digipay" />
      </View>
    </NativeBaseProvider>
  );
}
