import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import * as Animatable from 'react-native-animatable';
import {BarChart} from 'react-native-chart-kit';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

const data = {
  labels: ['Mn', 'Te', 'Wd', 'Tu', 'Fr', 'St', 'Sn'],
  datasets: [
    {
      data: [90, 50, 60, 80, 99, 70, 50],
    },
  ],
};

const width = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: Colors.whiteColor,
  backgroundGradientTo: Colors.whiteColor,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 1,
  barPercentage: 0.4,
  fillShadowGradient: '#4667D5',
  fillShadowGradientOpacity: 1,
  propsForBackgroundLines: {
    strokeWidth: 0,
  },
};

const cardsList = [
  {
    id: '1',
    accountType: 'Total Balance',
    accountNumber: '0325 2365 1478',
    amount: '1,899',
  },
  {
    id: '2',
    accountType: 'Two Wheeler Loan',
    accountNumber: '1356 8795 7857 9856',
    amount: '25,000.00',
    emi: '3,500.00',
  },
  {
    id: '3',
    accountType: 'Personal Loan',
    accountNumber: '1658 9875 1245 9534',
    amount: '15,000.00',
    emi: '2,500.00',
  },
];

class BankingScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F2F4F6'}}>
        {this.header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: Sizes.fixPadding * 7.0}}>
          {this.cards()}
          {/* {this.chart()} */}
          {this.transactionAndTransferInfo()}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('Transaction')}>
            {this.functionality({
              title: 'Transaction History',
              icon: (
                <MaterialCommunityIcons
                  color={Colors.whiteColor}
                  size={25}
                  name="history"
                />
              ),
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('Loan')}>
            {this.functionality({
              title: 'Loans',
              icon: (
                <FontAwesome5Icons
                  color={Colors.whiteColor}
                  size={20}
                  name="hand-holding-usd"
                />
              ),
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('Cards')}>
            {this.functionality({
              title: 'Virtual Debit Card',
              icon: (
                <FontAwesome5Icons
                  color={Colors.whiteColor}
                  size={20}
                  name="credit-card"
                />
              ),
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('BillSection')}>
            {this.functionality({
              title: 'Pay your bills',
              icon: (
                <MaterialIcons
                  color={Colors.whiteColor}
                  size={20}
                  name="payments"
                />
              ),
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('LinkBankAccount')}>
            {this.functionality({
              title: 'Link your bank account',
              icon: (
                <FontAwesomeIcons
                  color={Colors.whiteColor}
                  size={20}
                  name="bank"
                />
              ),
            })}
          </TouchableOpacity>

          {/* {this.businessLoanInfo()}
          {this.educationLoanInfo()} */}
        </ScrollView>
      </View>
    );
  }

  educationLoanInfo() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.props.navigation.navigate('LoanOfferDetail')}
        style={styles.edcutaionLoanContentStyle}>
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

  functionality({title, icon}) {
    return (
      <View style={styles.functionalityContentStyle}>
        <View style={styles.functionalityIconContentStyle}>{icon}</View>
        <Text style={{...Fonts.blackColor16Bold}}>{title}</Text>
      </View>
    );
  }

  chart() {
    return (
      <View style={styles.chartInfoContentStyle}>
        <View
          style={{
            marginHorizontal: Sizes.fixPadding * 2.0,
            alignSelf: 'flex-start',
            marginBottom: Sizes.fixPadding,
          }}>
          <Text style={{...Fonts.grayColor14Medium}}>Income</Text>
          <Text
            style={{
              ...Fonts.blackColor16Bold,
              marginTop: Sizes.fixPadding - 6.0,
            }}>
            INR 3,000.00
          </Text>
        </View>
        <View
          style={{
            width: width - 40.0,
            alignSelf: 'center',
          }}>
          <BarChart
            style={{borderRadius: Sizes.fixPadding}}
            data={data}
            width={width - 40.0}
            height={339}
            chartConfig={chartConfig}
            fromZero={true}
          />
        </View>
        <View style={styles.chartDetailInfoContentStyle}>
          <View
            style={{
              width: 14.0,
              height: 14.0,
              backgroundColor: '#4667D5',
              marginRight: Sizes.fixPadding,
            }}></View>
          <Text style={{...Fonts.blackColor16Medium}}>Income</Text>
        </View>
      </View>
    );
  }

  transactionAndTransferInfo() {
    return (
      <View style={styles.transactionAndTransferMainContentStyle}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.props.navigation.navigate('FundTransfer')}
          style={{
            ...styles.transactionAndTransferContentStyle,
          }}>
          <MaterialCommunityIcons
            name="bank-transfer-out"
            size={40}
            color={Colors.whiteColor}
          />
          <Text style={{...Fonts.whiteColor14Medium}}>Send Money</Text>
        </TouchableOpacity>
        <View style={{width: 10}}></View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.props.navigation.navigate('RecieveMoney')}
          style={{
            ...styles.transactionAndTransferContentStyle,
          }}>
          <MaterialCommunityIcons
            name="bank-transfer-in"
            size={40}
            color={Colors.whiteColor}
          />
          <Text style={{...Fonts.whiteColor14Medium}}>Recieve Money</Text>
        </TouchableOpacity>
      </View>
    );
  }

  cards() {
    const renderItem = ({item}) => (
      <View>
        <Animatable.View
          animation="zoomIn"
          easing="ease-out"
          style={{marginRight: Sizes.fixPadding * 2.0}}>
          <ImageBackground
            source={require('../../assets/images/card/bg1.png')}
            style={styles.cardImageBackgroundStyle}
            resizeMode="cover">
            <View style={styles.cardBackgroundShadowContentStyle}>
              <Text style={{...Fonts.whiteColor14Medium}}>
                {item.accountType}
              </Text>
              {item?.accountNumber && (
                <Text style={{...Fonts.whiteColor16Bold}}>
                  {item.accountNumber}
                </Text>
              )}
              <Text style={{...Fonts.whiteColor18Bold}}>INR {item.amount}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (item.id == 1) {
                    this.props.navigation.navigate('Transaction');
                  } else {
                    this.props.navigation.navigate('LoanStatement', {
                      loanType: item.accountType,
                      accountNumber: item.accountNumber,
                      dueAmount: item.amount,
                      emiAmount: item.emi,
                    });
                  }
                }}>
                <Text style={{...Fonts.primaryColor14Regular}}>Statement</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Animatable.View>
      </View>
    );
    return (
      <FlatList
        data={cardsList}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: Sizes.fixPadding * 2.0,
          paddingVertical: Sizes.fixPadding * 2.0,
        }}
      />
    );
  }

  header() {
    return (
      <View
        style={{
          ...styles.headerContentStyle,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <View></View>
        <Text style={{...Fonts.blackColor18Bold}}>Digi Pay</Text>
        <TouchableOpacity>
          <IonIcon name="volume-high" size={25} color="#000" />
        </TouchableOpacity>
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
  cardImageBackgroundStyle: {
    width: 243.0,
    height: 125.0,
  },
  transactionAndTransferContentStyle: {
    flex: 0.45,
    backgroundColor: Colors.primaryColor,
    elevation: 2.0,
    borderRadius: 10,
    paddingHorizontal: Sizes.fixPadding + 10.0,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  transactionAndTransferGoStyle: {
    width: 20.0,
    height: 20.0,
    borderRadius: 10.0,
    backgroundColor: Colors.whiteColor,
    elevation: 4.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  functionalityContentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding,
    borderRadius: Sizes.fixPadding,
    marginVertical: Sizes.fixPadding,
  },
  functionalityIconContentStyle: {
    width: 50.0,
    height: 50.0,
    borderRadius: 25.0,
    backgroundColor: Colors.primaryColor,
    elevation: 2.0,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Sizes.fixPadding,
  },
  businessLoanContentStyle: {
    marginHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding - 3.0,
    elevation: 1.0,
    marginVertical: Sizes.fixPadding,
  },
  transactionAndTransferMainContentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding,
  },
  edcutaionLoanContentStyle: {
    marginHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding,
    elevation: 2.0,
    marginVertical: Sizes.fixPadding,
  },
  cardBackgroundShadowContentStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 243.0,
    height: 125.0,
    paddingVertical: Sizes.fixPadding,
    paddingHorizontal: Sizes.fixPadding,
    justifyContent: 'space-between',
    borderRadius: Sizes.fixPadding,
  },
  chartInfoContentStyle: {
    backgroundColor: Colors.whiteColor,
    marginHorizontal: Sizes.fixPadding * 2.0,
    alignItems: 'center',
    paddingTop: Sizes.fixPadding + 5.0,
    borderRadius: Sizes.fixPadding,
    elevation: 1.0,
  },
  chartDetailInfoContentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10.0,
  },
});

export default withNavigation(BankingScreen);
