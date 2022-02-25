import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  BackHandler,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Fonts} from '../constant/styles';
import NotificationScreen from '../screens/notifications/notificationScreen';
import AccountScreen from '../screens/account/accountScreen';
import BankingScreen from '../screens/banking/bankingScreen';

class BottomTabBarScreen extends Component {
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

  state = {currentIndex: 1};

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: Colors.whiteColor}}>
          <StatusBar
            translucent={false}
            backgroundColor={Colors.primaryColor}
          />
          {this.state.currentIndex == 1 ? (
            <BankingScreen />
          ) : this.state.currentIndex == 2 ? (
            <NotificationScreen />
          ) : (
            <AccountScreen />
          )}
          <View style={styles.bottomTabBarStyle}>
            {this.bottomTabBarItem({
              index: 1,
              title: 'Banking',
            })}
            {this.bottomTabBarItem({
              index: 2,
              title: 'Notifications',
            })}
            {this.bottomTabBarItem({
              index: 3,
              title: 'Account',
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }

  bottomTabBarItem({index, title}) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{alignItems: 'center'}}
        onPress={() => this.setState({currentIndex: index})}>
        {index == 1 ? (
          <MaterialCommunityIcons
            name="bank"
            size={24}
            color={
              index == this.state.currentIndex
                ? Colors.primaryColor
                : Colors.grayColor
            }
          />
        ) : index == 2 ? (
          <MaterialIcons
            name="notifications"
            size={24}
            color={
              index == this.state.currentIndex
                ? Colors.primaryColor
                : Colors.grayColor
            }
          />
        ) : (
          <MaterialIcons
            name="person"
            size={24}
            color={
              index == this.state.currentIndex
                ? Colors.primaryColor
                : Colors.grayColor
            }
          />
        )}
        <Text
          style={
            index == this.state.currentIndex
              ? {...Fonts.primaryColor10Regular}
              : {...Fonts.grayColor10Regular}
          }>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

BottomTabBarScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(BottomTabBarScreen);

const styles = StyleSheet.create({
  bottomTabBarStyle: {
    position: 'absolute',
    bottom: 0.0,
    left: 0.0,
    right: 0.0,
    height: 50.0,
    backgroundColor: Colors.whiteColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30.0,
    borderTopColor: 'rgba(128, 128, 128, 0.2)',
    borderTopWidth: 1.0,
    elevation: 2.0,
  },
});
