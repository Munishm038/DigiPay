import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  BackHandler,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import Dialog from 'react-native-dialog';
import {CircleFade} from 'react-native-animated-spinkit';

const {width} = Dimensions.get('screen');

class OtpScreen extends Component {
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

  state = {
    isLoading: false,
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F2F4F6'}}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View style={{flex: 1}}>
          {this.imageWithAppTitle()}
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.otpText()}
            {this.otpFields()}
            {this.continueButton()}
            {this.resendInfo()}
          </ScrollView>
        </View>
        {this.loading()}
      </SafeAreaView>
    );
  }

  loading() {
    return (
      <Dialog.Container
        visible={this.state.isLoading}
        contentStyle={styles.dialogContainerStyle}>
        <View style={{backgroundColor: 'white', alignItems: 'center'}}>
          <CircleFade size={56} color={Colors.primaryColor} />
          <Text
            style={{
              ...Fonts.grayColor12Medium,
              paddingBottom: Sizes.fixPadding - 5.0,
              marginTop: Sizes.fixPadding * 2.0,
            }}>
            Please Wait...
          </Text>
        </View>
      </Dialog.Container>
    );
  }

  resendInfo() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          margin: Sizes.fixPadding * 2.0,
        }}>
        <Text style={{...Fonts.grayColor14Medium}}>
          Didn’t receive otp code!
        </Text>
        <Text
          style={{
            ...Fonts.blackColor18Bold,
            marginLeft: Sizes.fixPadding - 5.0,
          }}>
          Resend
        </Text>
      </View>
    );
  }

  otpFields() {
    return (
      <View style={styles.otpFieldsContainerStyle}>
        <View style={styles.textFieldContainerStyle}>
          <TextInput
            style={{...Fonts.blackColor16Bold}}
            onChangeText={() => {
              this.secondTextInput.focus();
            }}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.textFieldContainerStyle}>
          <TextInput
            style={{...Fonts.blackColor16Bold}}
            ref={input => {
              this.secondTextInput = input;
            }}
            keyboardType="numeric"
            onChangeText={() => {
              this.thirdTextInput.focus();
            }}
          />
        </View>

        <View style={styles.textFieldContainerStyle}>
          <TextInput
            style={{...Fonts.blackColor16Bold}}
            keyboardType="numeric"
            ref={input => {
              this.thirdTextInput = input;
            }}
            onChangeText={() => {
              this.forthTextInput.focus();
            }}
          />
        </View>

        <View style={styles.textFieldContainerStyle}>
          <TextInput
            style={{...Fonts.blackColor16Bold}}
            keyboardType="numeric"
            ref={input => {
              this.forthTextInput = input;
            }}
            onChangeText={() => {
              this.setState({isLoading: true});
              setTimeout(() => {
                this.setState({isLoading: false});
                this.props.navigation.navigate('BottomTabBar');
              }, 2000);
            }}
          />
        </View>
      </View>
    );
  }

  otpText() {
    return (
      <Text
        style={{
          ...Fonts.blackColor14Medium,
          textAlign: 'center',
          marginVertical: Sizes.fixPadding * 2.0,
        }}>
        Enter OTP sent on your registered mobile number
      </Text>
    );
  }

  continueButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.props.navigation.navigate('BottomTabBar')}
        style={styles.continueButtonStyle}>
        <Text style={{...Fonts.whiteColor16Bold}}>Continue</Text>
      </TouchableOpacity>
    );
  }

  imageWithAppTitle() {
    return (
      <View
        style={{
          maxHeight: Dimensions.get('screen').height * 0.25,
          width: '100%',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/icon.png')}
          style={{
            width: '70%',
            maxHeight: '100%',
          }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundShadowStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.46)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 206.0,
  },
  continueButtonStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  otpFieldsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Sizes.fixPadding * 2.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  textFieldContainerStyle: {
    height: 60.0,
    width: 60.0,
    elevation: 3.0,
    paddingLeft: Sizes.fixPadding,
    borderRadius: Sizes.fixPadding,
    backgroundColor: Colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContainerStyle: {
    borderRadius: Sizes.fixPadding,
    width: width - 40,
    paddingHorizontal: Sizes.fixPadding * 3.0,
    paddingTop: -Sizes.fixPadding,
    paddingBottom: Sizes.fixPadding * 2.0,
  },
});

OtpScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(OtpScreen);
