import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import bottomTabBarScreen from './component/bottomTabBarScreen';
import addNewBenificiaryScreen from './screens/addNewBenificiary/addNewBenificiaryScreen';
import beneficiariesScreen from './screens/beneficiaries/beneficiariesScreen';
import benificiaryMoneyTransferScreen from './screens/beneficiaryMoneyTransfer/benificiaryMoneyTransferScreen';
import cardsScreen from './screens/cards/cardsScreen';
import depositeScreen from './screens/deposite/depositeScreen';
import editProfileScreen from './screens/editProfile/editProfileScreen';
import fundTransferScreen from './screens/fundTransfer/fundTransferScreen';
import loanScreen from './screens/loan/loanScreen';
import loanOfferDetailScreen from './screens/loanOfferDetail/loanOfferDetailScreen';
import loanStatementScreen from './screens/loanStatement/loanStatementScreen';
import nearByBanksScreen from './screens/nearByBanks/nearByBanksScreen';
import newDepositScreen from './screens/newDeposit/newDepositScreen';
import oneTimeTransferScreen from './screens/oneTimeTransfer/oneTimeTransferScreen';
import oneTimeTrasferWithAccountScreen from './screens/oneTimeTransferWithAcount/oneTimeTrasferWithAccountScreen';
import privacyPolicyScreen from './screens/privacyPolicy/privacyPolicyScreen';
import supportScreen from './screens/support/supportScreen';
import termsOfUseScreen from './screens/termsOfUse/termsOfUseScreen';
import transactionScreen from './screens/transaction/transactionScreen';
import transferSuccessfullScreen from './screens/transferScccessfull/transferSuccessfullScreen';
import nearByAtmsScreen from './screens/nearByAtms/nearByAtmsScreen';
import signinScreen from './screens/auth/signinScreen';
import registerScreen from './screens/auth/registerScreen';
import otpScreen from './screens/auth/otpScreen';
import splashScreen from './screens/splashScreen';
import aadharScreen from './screens/auth/aadharScreen';

const switchNavigator = createStackNavigator(
  {
    Splash: splashScreen,
    Signin: signinScreen,
    Register: registerScreen,
    Otp: otpScreen,
    aadhar: aadharScreen,
    BottomTabBar: bottomTabBarScreen,
    Transaction: transactionScreen,
    FundTransfer: fundTransferScreen,
    OneTimeTrasfer: oneTimeTransferScreen,
    OneTimeTransferWithAccount: oneTimeTrasferWithAccountScreen,
    TransferSuccessfull: transferSuccessfullScreen,
    Benificiaries: beneficiariesScreen,
    AddNewBenificiary: addNewBenificiaryScreen,
    BeneficiaryMoneyTransfer: benificiaryMoneyTransferScreen,
    Loan: loanScreen,
    LoanStatement: loanStatementScreen,
    LoanOfferDetail: loanOfferDetailScreen,
    Deposite: depositeScreen,
    NewDeposit: newDepositScreen,
    Cards: cardsScreen,
    EditProfile: editProfileScreen,
    PrivacyPolicy: privacyPolicyScreen,
    TermsOfUse: termsOfUseScreen,
    Support: supportScreen,
    NearByBanks: nearByBanksScreen,
    NearByAtms: nearByAtmsScreen,
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
    transitionSpec: {
      duration: 400,
    },
  },
);

const App = createAppContainer(switchNavigator);

export default () => {
  return <App />;
};
