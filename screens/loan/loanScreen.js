import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  BackHandler,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('screen');

class LoanScreen extends Component {
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
        <View style={{flex: 1}}>
          {this.header()}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                padding: 20,
                margin: 5,
                marginTop: 15,
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 27, color: '#FFF', fontWeight: '600'}}>
                Your Credit Score
              </Text>
              <Text style={{...Fonts.whiteColor14Medium}}>500</Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                padding: 10,
                paddingVertical: 20,
                margin: 5,
                marginTop: 15,
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{...Fonts.whiteColor14Medium}}>
                Your Eligibility Amount
              </Text>
              <Text style={{...Fonts.whiteColor14Medium}}>Rs.10,000</Text>
            </View>
            <TextInput
              keyboardType="numeric"
              style={{
                borderWidth: 1.5,
                borderColor: 'grey',
                margin: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
              }}
              placeholder="Loan Amount"
              placeholderTextColor="grey"
            />
            <TouchableOpacity
              style={{
                backgroundColor: Colors.primaryColor,
                margin: 5,
                padding: 10,
                borderRadius: 5,
              }}>
              <Text style={{color: '#FFF', textAlign: 'center'}}>
                Apply Loan
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                ...Fonts.blackColor16Bold,
                marginHorizontal: Sizes.fixPadding * 2.0,
                marginTop: Sizes.fixPadding + 5.0,
              }}>
              Active Loans
            </Text>
            {this.card({
              loanType: 'Home Loan',
              accountNumber: '1356 8795 7857 9856',
              dueAmount: '69,000.00',
              emiAmount: '912.00',
            })}
            {this.card({
              loanType: 'Car Loan',
              accountNumber: '1658 9875 1245 9534',
              dueAmount: '25000.00',
              emiAmount: '345.00',
            })}
            {this.availableOffersText()}
            {this.businessLoanInfo()}
            {this.educationLoanInfo()}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  educationLoanInfo() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.props.navigation.navigate('LoanOfferDetail')}
        style={styles.educationLoanContentStyle}>
        <Image
          source={require('../../assets/images/typeOfLoan/education-loan.jpg')}
          style={{
            height: 100,
            width: '100%',
            borderRadius: Sizes.fixPadding,
          }}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    );
  }

  businessLoanInfo() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.props.navigation.navigate('LoanOfferDetail')}
        style={styles.businessLoanContentStyle}>
        <Image
          source={require('../../assets/images/typeOfLoan/business-loan.jpg')}
          style={{
            height: 170,
            width: '100%',
            borderRadius: Sizes.fixPadding - 3.0,
          }}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    );
  }

  availableOffersText() {
    return (
      <Text
        style={{
          ...Fonts.blackColor16Bold,
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding + 5.0,
          marginBottom: Sizes.fixPadding,
        }}>
        Available offers
      </Text>
    );
  }

  card({loanType, accountNumber, dueAmount, emiAmount}) {
    return (
      <ImageBackground
        source={require('../../assets/images/card/bg1.png')}
        style={styles.cardImageBackgroundStyle}
        resizeMode="cover"
        borderRadius={Sizes.fixPadding}>
        <View style={styles.cardImageBackgroundShadowStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{...Fonts.whiteColor14Bold}}>{loanType}</Text>
              <Text style={{...Fonts.whiteColor14Medium}}>{accountNumber}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                this.props.navigation.navigate('LoanStatement', {
                  loanType,
                  accountNumber,
                  dueAmount,
                  emiAmount,
                })
              }>
              <Text style={{...Fonts.whiteColor12Regular}}>View statement</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{...Fonts.whiteColor12Regular}}>Due Amount</Text>
              <Text style={{...Fonts.whiteColor16Medium}}>INR {dueAmount}</Text>
            </View>
            <View>
              <Text style={{...Fonts.whiteColor12Regular}}>EMI</Text>
              <Text style={{...Fonts.whiteColor16Medium}}>INR {emiAmount}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }

  header() {
    return (
      <View style={styles.headerContentStyle}>
        <Text style={{...Fonts.blackColor18Bold}}>Loans</Text>
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
  cardImageBackgroundStyle: {
    height: 150.0,
    width: width - 40.0,
    alignSelf: 'center',
    marginTop: 10,
  },
  cardImageBackgroundShadowStyle: {
    width: width - 40.0,
    alignSelf: 'center',
    height: 150.0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding,
    paddingHorizontal: Sizes.fixPadding,
    justifyContent: 'space-between',
  },
  businessLoanContentStyle: {
    marginHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding - 3.0,
    elevation: 1.0,
    marginBottom: Sizes.fixPadding,
  },
  educationLoanContentStyle: {
    marginHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding,
    elevation: 1.0,
    marginVertical: Sizes.fixPadding,
  },
});

LoanScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default withNavigation(LoanScreen);
