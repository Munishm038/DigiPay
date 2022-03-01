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

class RegisterScreen extends Component {
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
    fullName: '',
    password: '',
    confirmpassword: '',
    mobileNumber: '',
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F2F4F6'}}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View style={{flex: 1}}>
          {this.imageWithAppTitle()}
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.registerTitle()}
            {this.fullNameTextField()}
            {this.mobileNumberTextField()}
            {this.passwordTextField()}
            {this.confirmpasswordTextField()}
            {this.continueButton()}
            {this.alreadyRegisterText()}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  mobileNumberTextField() {
    return (
      <TextInput
        placeholder="Enter Mobile number"
        keyboardType="numeric"
        value={this.state.mobileNumber}
        onChangeText={value => this.setState({mobileNumber: value})}
        placeholderTextColor={Colors.blackColor}
        style={styles.textFieldStyle}
      />
    );
  }

  alreadyRegisterText() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.goBack();
        }}>
        <Text
          style={{
            fontSize: 16,
            color: Colors.primaryColor,
            textAlign: 'center',
            marginVertical: Sizes.fixPadding * 2.0,
          }}>
          Already registered?
        </Text>
      </TouchableOpacity>
    );
  }

  continueButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.props.navigation.navigate('aadhar')}
        style={styles.continueButtonStyle}>
        <Text style={{...Fonts.whiteColor16Bold}}>Continue</Text>
      </TouchableOpacity>
    );
  }

  passwordTextField() {
    return (
      <TextInput
        placeholder="Enter password"
        value={this.state.password}
        secureTextEntry={true}
        onChangeText={value => this.setState({password: value})}
        placeholderTextColor={Colors.blackColor}
        style={styles.textFieldStyle}
      />
    );
  }

  confirmpasswordTextField() {
    return (
      <TextInput
        placeholder="Confirm password"
        value={this.state.confirmpassword}
        secureTextEntry={true}
        onChangeText={value => this.setState({confirmpassword: value})}
        placeholderTextColor={Colors.blackColor}
        style={styles.textFieldStyle}
      />
    );
  }

  fullNameTextField() {
    return (
      <TextInput
        placeholder="Full Name"
        value={this.state.fullName}
        onChangeText={value => this.setState({fullName: value})}
        placeholderTextColor={Colors.blackColor}
        style={styles.textFieldStyle}
      />
    );
  }

  registerTitle() {
    return (
      <Text
        style={{
          ...Fonts.blackColor14Medium,
          textAlign: 'center',
          marginVertical: Sizes.fixPadding * 2.0,
        }}>
        Register your account
      </Text>
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

RegisterScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(RegisterScreen);
