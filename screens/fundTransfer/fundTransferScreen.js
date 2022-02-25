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
import QRCodeScanner from 'react-native-qrcode-scanner';
import {NativeBaseProvider, Text} from 'native-base';

class FundTransferScreen extends Component {
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
        <ScrollView style={{flex: 1, backgroundColor: '#F2F4F6'}}>
          <StatusBar backgroundColor={Colors.primaryColor} />
          <QRCodeScanner
            cameraProps={{
              ratio: '1:1',
              autoFocus: true,
            }}
            onRead={() => {}}
            reactivate={true}
            permissionDialogMessage="Need Permission to access camera"
            vibrate={true}
            reactivateTimeout={10}
            showMarker={true}
            markerStyle={{
              borderColor: '#FFF',
              borderWidth: 0.8,
              borderRadius: 10,
            }}
            //   topContent={
            //     <View style={{display: 'flex', flexDirection: 'row', justifyContent : 'flex-start', width : '100%'}}>
            //       <TouchableOpacity>
            //           <AntDesignIcons name='arrowleft'/>
            //       </TouchableOpacity>
            //       <Text style={styles.qrCodeText}>Scan & Pay</Text>
            //     </View>
            //   }
            //   topViewStyle={{
            //     backgroundColor: Colors.primaryColor,
            //     zIndex: 100,
            //     paddingTop: 0,
            //   }}
            //   bottomViewStyle={{
            //     paddingBottom: 20,
            //   }}
            //   bottomContent={
            //   <View style={{height : '100%', backgroundColor : 'orange'}}></View>
            // <View style={{borderRadius: 30, overflow: 'hidden', marginTop: 10}}>
            //   <TouchableOpacity onPress={() => {}}>
            //     <View
            //       style={{
            //         backgroundColor: Colors.primaryColor,
            //         // width: Dimens.get('window').width * 0.7,
            //         paddingVertical: 15,
            //       }}>
            //       <Text
            //         style={{
            //           fontSize: 17,
            //           color: '#FFF',
            //           textAlign: 'center',
            //         }}>
            //         Add Manually
            //       </Text>
            //     </View>
            //   </TouchableOpacity>
            // </View>
            //   }
          />
          <View>
            <View
              style={{
                backgroundColor: '#dadae5',
                borderRadius: 5,
                margin: 5,
                marginTop: 20,
                paddingHorizontal: 10,
              }}>
              <TextInput
                keyboardType="numeric"
                placeholder="Pay to Mobile Number"
                placeholderTextColor="grey"
                style={{color: 'grey'}}
              />
            </View>
            <Text
              style={{
                marginHorizontal: 10,
                paddingTop: 10,
              }}
              fontSize="lg"
              fontWeight="semibold">
              Recents
            </Text>
            {this.recentTransactionComponent()}
            {this.recentTransactionComponent()}
            {this.recentTransactionComponent()}
            {this.recentTransactionComponent()}
            {this.recentTransactionComponent()}
            {this.recentTransactionComponent()}
            {this.recentTransactionComponent()}
            {/* {this.header()} */}
            {/* <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('OneTimeTrasfer')}>
            {this.transferTypesInfo({type: 'One Time Transfer'})}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('Benificiaries')}>
            {this.transferTypesInfo({type: 'Beneficiaries'})}
          </TouchableOpacity> */}
          </View>
        </ScrollView>
      </NativeBaseProvider>
    );
  }

  recentTransactionComponent() {
    return (
      <View
        style={[
          styles.shadowProp,
          {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#FFF',
            margin: 5,
            padding: 10,
          },
        ]}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: '#8fa1ea',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text color="#FFF" fontWeight="bold" fontSize="lg">
            MK
          </Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text fontWeight="semibold">Munish Kumar</Text>
          <Text color="grey" fontSize="xs">
            7015624643
          </Text>
        </View>
      </View>
    );
  }

  transferTypesInfo({type}) {
    return (
      <View style={styles.trasferTypesInfoContentStyle}>
        <View style={styles.fundTransferIconContentStyle}>
          <MaterialIcons
            name="compare-arrows"
            size={24}
            color={Colors.primaryColor}
          />
        </View>
        <Text style={{...Fonts.blackColor14Bold, marginLeft: Sizes.fixPadding}}>
          {type}
        </Text>
      </View>
    );
  }

  header() {
    return (
      <View style={styles.headerContentStyle}>
        <Text style={{...Fonts.blackColor18Bold}}>Fund Transfer</Text>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={Colors.blackColor}
          style={{
            position: 'absolute',
            left: 20.0,
          }}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
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

FundTransferScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(FundTransferScreen);
