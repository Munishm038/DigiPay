import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dialog from 'react-native-dialog';

const {width} = Dimensions.get('screen');

class AccountScreen extends Component {
  state = {
    isLogout: false,
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F2F4F6'}}>
        {this.header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.userInfo()}
          {this.settingInfo({title: 'Change mPin & thumb impression'})}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('NearByBanks')}>
            {this.settingInfo({title: 'Nearby Banks'})}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('NearByAtms')}>
            {this.settingInfo({title: 'Nearby ATMs'})}
          </TouchableOpacity>
          {this.title({title: 'ABOUT'})}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('PrivacyPolicy')}>
            {this.settingInfo({title: 'Privacy Policy'})}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('TermsOfUse')}>
            {this.settingInfo({title: 'Terms of use'})}
          </TouchableOpacity>
          {this.title({title: 'APP'})}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('Support')}>
            {this.settingInfo({title: 'Support'})}
          </TouchableOpacity>
          {this.settingInfo({title: 'Report a Bug'})}
          {this.settingInfo({title: 'App Version 1.0'})}
          {this.logOutInfo()}
        </ScrollView>
        {this.logOutDialog()}
      </View>
    );
  }

  logOutDialog() {
    return (
      <Dialog.Container
        visible={this.state.isLogout}
        contentStyle={styles.dialogContainerStyle}>
        <View
          style={{backgroundColor: Colors.whiteColor, alignItems: 'center'}}>
          <Text
            style={{
              ...Fonts.blackColor16Bold,
              paddingBottom: Sizes.fixPadding - 5.0,
            }}>
            You sure want to logout?
          </Text>
          <View style={styles.cancelAndLogoutButtonStyle}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.setState({isLogout: false})}
              style={styles.cancelButtonStyle}>
              <Text style={{...Fonts.blackColor14Medium}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                this.setState({isLogout: false});
                this.props.navigation.navigate('Signin');
              }}
              style={styles.logOutButtonStyle}>
              <Text style={{...Fonts.whiteColor14Medium}}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog.Container>
    );
  }

  logOutInfo() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.setState({isLogout: true})}
        style={styles.logoutInfoContentStyle}>
        <MaterialIcons name="exit-to-app" size={22} color="#FF0000" />
        <Text style={{...Fonts.redColor14Medium, marginLeft: Sizes.fixPadding}}>
          Logout
        </Text>
      </TouchableOpacity>
    );
  }

  title({title}) {
    return <Text style={styles.titleStyle}>{title}</Text>;
  }

  settingInfo({title}) {
    return (
      <View style={{marginHorizontal: Sizes.fixPadding * 2.0}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: width / 1.5}}>
            <Text numberOfLines={1} style={{...Fonts.blackColor14Medium}}>
              {title}
            </Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={11}
            color={Colors.blackColor}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.grayColor,
            height: 1.0,
            marginVertical: Sizes.fixPadding - 3.0,
          }}></View>
      </View>
    );
  }

  userInfo() {
    return (
      <View style={styles.userInfoContentStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/user/user_9.jpg')}
            style={{width: 70.0, height: 70.0, borderRadius: 35.0}}
          />
          <View style={{width: width / 2.0}}>
            <Text
              numberOfLines={1}
              style={{...Fonts.blackColor16Bold, marginLeft: Sizes.fixPadding}}>
              Ellison Perry
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.props.navigation.navigate('EditProfile')}
          style={styles.editProfileIconStyle}>
          <MaterialIcons name="edit" size={24} color={Colors.whiteColor} />
        </TouchableOpacity>
      </View>
    );
  }

  header() {
    return (
      <View style={styles.headerContentStyle}>
        <Text style={{...Fonts.blackColor18Bold}}>Account</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    backgroundColor: Colors.whiteColor,
    height: 56.0,
    elevation: 5.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileIconStyle: {
    width: 40.0,
    height: 40.0,
    borderRadius: 20.0,
    backgroundColor: '#4667D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    ...Fonts.blackColor12Regular,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginTop: Sizes.fixPadding,
    marginBottom: Sizes.fixPadding + 5.0,
  },
  userInfoContentStyle: {
    flexDirection: 'row',
    marginHorizontal: Sizes.fixPadding * 2.0,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding * 3.0,
  },
  dialogContainerStyle: {
    borderRadius: Sizes.fixPadding,
    width: width - 40,
    paddingTop: -Sizes.fixPadding,
    paddingBottom: Sizes.fixPadding * 2.0,
  },
  cancelButtonStyle: {
    flex: 0.45,
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Sizes.fixPadding - 5.0,
  },
  logOutButtonStyle: {
    flex: 0.45,
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding - 5.0,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Sizes.fixPadding + 10.0,
  },
  logoutInfoContentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginVertical: Sizes.fixPadding + 5.0,
  },
  cancelAndLogoutButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Sizes.fixPadding,
  },
});

export default withNavigation(AccountScreen);
