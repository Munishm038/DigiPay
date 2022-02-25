import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  BackHandler,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import QRCode from 'react-native-qrcode-svg';

import {NativeBaseProvider, Text} from 'native-base';

class RecieveMoneyScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  }

  handleBackButton = () => {
    this.props.navigation.pop();
    return true;
  };

  render() {
    return (
      <NativeBaseProvider>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>
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
          <Text fontSize="2xl" fontWeight="bold" style={{paddingVertical: 20}}>
            +91 7015624643
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
