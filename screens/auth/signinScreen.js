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
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class SigninScreen extends Component {
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
    BackHandler.exitApp();
    return true;
  };

  state = {
    mobileNumber: '',
    Password: '',
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F2F4F6'}}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View style={{width: '100%', alignItems: 'center'}}>
          {this.imageWithAppTitle()}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{width: '100%'}}>
            {this.signinTitle()}
            {this.mobileNumberTextField()}
            {this.PasswordTextField()}
            {this.continueButton()}
            <TouchableOpacity
              style={{alignItems: 'flex-end', marginRight: 15, marginTop: 10}}>
              <Text style={{color: Colors.primaryColor}}>Forgot Password?</Text>
            </TouchableOpacity>
            {this.newUserText()}
            {/* {this.scanInfo()}
            {this.fingerPrintIcon()} */}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  scanInfo() {
    return (
      <View>
        <Text
          style={{
            ...Fonts.blackColor14Medium,
            textAlign: 'center',
            marginTop: Sizes.fixPadding,
          }}>
          Or scan your thumb to continue
        </Text>
      </View>
    );
  }

  fingerPrintIcon() {
    return (
      <MaterialIcons
        name="fingerprint"
        size={80}
        color={Colors.primaryColor}
        style={{
          alignSelf: 'center',
          marginTop: Sizes.fixPadding * 2.5,
          marginBottom: Sizes.fixPadding * 2.0,
        }}
      />
    );
  }

  newUserText() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Register')}>
        <Text
          style={{
            ...Fonts.blackColor16Medium,
            textAlign: 'center',
            marginVertical: Sizes.fixPadding * 2.0,
          }}>
          Not have an account? Create One
        </Text>
      </TouchableOpacity>
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

  PasswordTextField() {
    return (
      <View style={{width: '100%', flex: 1}}>
        <TextInput
          placeholder="Enter Password"
          value={this.state.Password}
          onChangeText={value => this.setState({Password: value})}
          placeholderTextColor={Colors.blackColor}
          style={styles.textFieldStyle}
        />
      </View>
    );
  }

  mobileNumberTextField() {
    return (
      <TextInput
        placeholder="Mobile Number"
        value={this.state.mobileNumber}
        onChangeText={value => this.setState({mobileNumber: value})}
        placeholderTextColor={Colors.blackColor}
        style={styles.textFieldStyle}
      />
    );
  }

  signinTitle() {
    return (
      <Text
        style={{
          ...Fonts.blackColor14Medium,
          textAlign: 'center',
          marginVertical: Sizes.fixPadding * 2.0,
        }}>
        Sign in your account
      </Text>
    );
  }

  imageWithAppTitle() {
    return (
      <Image
        source={require('../../assets/images/icon.png')}
        style={{
          width: '70%',
          maxHeight: Dimensions.get('screen').height * 0.25,
        }}
        resizeMode="contain"
      />
      //   <ImageBackground
      //     source={require('../../assets/images/logo.png')}
      //     resizeMode='contain'
      //     style={{height: Dimensions.get('screen').width * 0.25, width: Dimensions.get('screen').width * 0.25,alignSelf : 'center' }}>
      //   </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textFieldStyle: {
    ...Fonts.blackColor14Medium,
    borderRadius: Sizes.fixPadding,
    backgroundColor: Colors.whiteColor,
    elevation: 3.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    height: 60.0,
    alignItems: 'center',
    paddingHorizontal: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding * 2.0,
    flex: 1,
  },
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
});

SigninScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(SigninScreen);
