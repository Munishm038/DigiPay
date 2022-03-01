import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  FlatList,
  BackHandler,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const transactionList = [
  {
    id: '1',
    iscredit: false,
    type: 'Paid to',
    owner: 'City hospital',
    amount: '558.00',
  },
  {
    id: '2',
    iscredit: false,
    type: 'Paid to',
    owner: 'SWIGGY',
    amount: '669.00',
  },
  {
    id: '3',
    iscredit: false,
    type: 'Payment to',
    owner: 'Garvish Arora',
    amount: '228.00',
  },
  {
    id: '4',
    iscredit: true,
    type: 'Recieved From',
    owner: 'Vicky Mehra',
    amount: '8953.00',
  },
  {
    id: '5',
    iscredit: false,
    type: 'Paid to',
    owner: 'ZOMATO',
    amount: '113.00',
  },
  {
    id: '6',
    iscredit: false,
    type: 'Paid to',
    owner: 'SWIGGY',
    amount: '889.00',
  },
  {
    id: '7',
    iscredit: false,
    type: 'Payment to',
    owner: 'Hi-Tech Communication',
    amount: '558.00',
  },
  {
    id: '8',
    iscredit: false,
    type: 'Paid to',
    owner: 'JIO Recharge',
    amount: '669.00',
  },
  {
    id: '9',
    iscredit: false,
    type: 'Payment to',
    owner: 'Ritu Mishra',
    amount: '228.00',
  },
  {
    id: '10',
    iscredit: true,
    type: 'Recieved From',
    owner: 'Vivek Chhabra',
    amount: '8953.00',
  },
  {
    id: '11',
    iscredit: false,
    type: 'Paid to',
    owner: 'Amazon',
    amount: '113.00',
  },
  {
    id: '12',
    iscredit: false,
    type: 'Payment to',
    owner: 'Angad Mehra',
    amount: '889.00',
  },
];

class TransactionScreen extends Component {
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
      <SafeAreaView style={{flex: 1, backgroundColor: '#F2F4F6'}}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View>
          {this.header()}
          {this.transactions()}
        </View>
      </SafeAreaView>
    );
  }

  transactions() {
    const renderItem = ({item}) => (
      <View style={styles.transactionContentStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.transactionIconContentStyle}>
            <FeatherIcon
              name={item.iscredit ? 'arrow-down-left' : 'arrow-up-right'}
              size={24}
              color="#FFF"
            />
          </View>
          <View style={{marginLeft: 15}}>
            <Text numberOfLines={1} style={{...Fonts.blackColor14Regular}}>
              {item.type}
            </Text>
            <Text
              numberOfLines={1}
              style={{...Fonts.grayColor12Regular, marginTop: 2.0}}>
              {item.owner}
            </Text>
          </View>
        </View>
        <Text
          style={{color: item.iscredit ? 'green' : 'red', fontWeight: '600'}}>
          INR{' '}
          {item.amount}
        </Text>
      </View>
    );
    return (
      <FlatList
        data={transactionList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Sizes.fixPadding * 2.0,
          paddingBottom: Sizes.fixPadding * 6.0,
        }}
      />
    );
  }

  header() {
    return (
      <View style={styles.headerContentStyle}>
        <Text style={{...Fonts.blackColor18Bold}}>Transactions</Text>
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
  transactionContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0.3,
  },
  transactionIconContentStyle: {
    width: 40.0,
    height: 40.0,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
  },
  headerContentStyle: {
    height: 56.0,
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

TransactionScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(TransactionScreen);
