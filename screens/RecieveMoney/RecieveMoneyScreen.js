import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';

import {NativeBaseProvider, Text} from 'native-base';

class RecieveMoneyScreen extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#FFF',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <IonIcon name="arrow-back" size={30} color="#0009" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center',backgroundColor : '#FFF'}}>
          <Text fontSize="4xl" fontWeight="bold" style={{paddingVertical: 20}}>
            Munish Kumar
          </Text>
          <QRCode
            value="Just some string value"
            size={Dimensions.get('screen').width * 0.8}
            // logo={require('../../assets/images/logo.png')}
            // logoSize={30}
            // logoBackgroundColor="transparent"
          />
          <Text style={{paddingTop: 20}} fontSize="xl">
            Mobile Number
          </Text>
          <Text fontSize="2xl" fontWeight="bold" style={{}}>
            +91 7015624643
          </Text>
          <Text fontSize="2xl" fontWeight="bold" style={{}}>
            7015624643@digipay
          </Text>
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    height: 56.0,
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fundTransferIconContentStyle: {
    width: 40.0,
    height: 40.0,
    borderRadius: 20.0,
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(96, 163, 42, 0.2)',
  },
  trasferTypesInfoContentStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 3.0,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginTop: Sizes.fixPadding * 2.0,
    padding: Sizes.fixPadding,
    borderRadius: Sizes.fixPadding,
  },
  qrCodeText: {
    // paddingTop: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    // color: 'rgba(0,0,0,0.7)',
    color: 'white',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 3,
    shadowColor: 'grey',
  },
});

RecieveMoneyScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(RecieveMoneyScreen);
