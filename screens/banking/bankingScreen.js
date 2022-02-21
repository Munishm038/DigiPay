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
    accountType: 'Loan Amount',
    amount: '15,098',
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
            onPress={() => this.props.navigation.navigate('Loan')}>
            {this.functionality({
              title: 'Loans',
              icon: require('../../assets/images/functionalities/loan.png'),
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('Deposite')}>
            {this.functionality({
              title: 'Deposite',
              icon: require('../../assets/images/functionalities/deposite.png'),
            })}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('Cards')}>
            {this.functionality({
              title: 'Cards',
              icon: require('../../assets/images/functionalities/cards.png'),
            })}
          </TouchableOpacity>
          {this.functionality({
            title: 'All Services',
            icon: require('../../assets/images/functionalities/more.png'),
          })}
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
        <View style={styles.functionalityIconContentStyle}>
          <Image
            source={icon}
            style={{width: 30.0, height: 30.0}}
            resizeMode="cover"
          />
        </View>
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
          onPress={() => this.props.navigation.navigate('Transaction')}
          style={{
            ...styles.transactionAndTransferContentStyle,
            marginRight: Sizes.fixPadding * 2.0,
          }}>
          <Text style={{...Fonts.blackColor14Medium}}>Send Money</Text>
          <View style={styles.transactionAndTransferGoStyle}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={15}
              color={Colors.blackColor}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.props.navigation.navigate('FundTransfer')}
          style={styles.transactionAndTransferContentStyle}>
          <Text style={{...Fonts.blackColor14Medium}}>Recieve Money</Text>
          <View style={styles.transactionAndTransferGoStyle}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={15}
              color={Colors.blackColor}
            />
          </View>
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
              <Text style={{...Fonts.primaryColor14Regular}}>Statement</Text>
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
      <View style={styles.headerContentStyle}>
        <Text style={{...Fonts.blackColor18Bold}}>Digi Pay</Text>
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
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    borderRadius: Sizes.fixPadding,
    height: 89.0,
    paddingHorizontal: Sizes.fixPadding + 10.0,
    paddingVertical: Sizes.fixPadding * 2.0,
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
    backgroundColor: Colors.whiteColor,
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