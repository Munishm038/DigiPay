import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, SafeAreaView, Dimensions, FlatList, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constant/styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('screen');

const transactionList = [
    {
        id: '1',
        iscredit: false,
        type: 'Card consuption',
        owner: 'City people\'s hospital',
        amount: '558.00',
    },
    {
        id: '2',
        iscredit: false,
        type: 'Card consuption',
        owner: 'Apple Electronics co.LTD',
        amount: '669.00',
    },
    {
        id: '3',
        iscredit: false,
        type: 'Consumer return',
        owner: 'Western Motor co. LTD',
        amount: '228.00',
    },
    {
        id: '4',
        iscredit: true,
        type: 'Salary credited',
        owner: 'Google LLC',
        amount: '8953.00',
    },
    {
        id: '5',
        iscredit: false,
        type: 'Card consuption',
        owner: 'KFC Catering co. LTD',
        amount: '113.00',
    },
    {
        id: '6',
        iscredit: false,
        type: 'Consumer return',
        owner: 'Southern Airline co. LTD',
        amount: '889.00',
    },
    {
        id: '7',
        iscredit: false,
        type: 'Card consuption',
        owner: 'City people’s hospital',
        amount: '558.00',
    },
    {
        id: '8',
        iscredit: false,
        type: 'Card consuption',
        owner: 'Apple Electronics co. LTD',
        amount: '669.00',
    },
    {
        id: '9',
        iscredit: false,
        type: 'Consumer return',
        owner: 'Western Motor co. LTD',
        amount: '228.00',
    },
    {
        id: '10',
        iscredit: true,
        type: 'Salary credited',
        owner: 'Google LLC',
        amount: '8953.00',
    },
    {
        id: '11',
        iscredit: false,
        type: 'Card consuption',
        owner: 'KFC Catering co. LTD',
        amount: '113.00',
    },
    {
        id: '12',
        iscredit: false,
        type: 'Consumer return',
        owner: 'Southern Airline co. LTD',
        amount: '889.00',
    },
];

class TransactionScreen extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        this.props.navigation.pop();
        return true;
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F4F6' }}>
                <StatusBar backgroundColor={Colors.primaryColor} />
                <View>
                    {this.header()}
                    {this.transactions()}
                </View>
            </SafeAreaView>
        )
    }

    transactions() {
        const renderItem = ({ item }) => (
            <View style={styles.transactionContentStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={styles.transactionIconContentStyle}>
                        <MaterialIcons
                            name={item.iscredit ? "arrow-downward" : "arrow-upward"}
                            size={24}
                            color={Colors.primaryColor}
                        />
                    </View>
                    <View style={{ width: width / 1.7, marginLeft: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                            {item.type}
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium, marginTop: 2.0 }}>
                            {item.owner}
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ ...Fonts.blackColor14Medium }}>INR</Text>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        {item.iscredit ? '+' : '-'}{item.amount}
                    </Text>
                </View>
            </View>
        )
        return (
            <FlatList
                data={transactionList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: Sizes.fixPadding * 2.0,
                    paddingBottom: Sizes.fixPadding * 6.0
                }}
            />
        )
    }

    header() {
        return (
            <View style={styles.headerContentStyle}>
                <Text style={{ ...Fonts.blackColor18Bold }}>Transactions</Text>
                <MaterialIcons name="arrow-back" size={24} color={Colors.blackColor}
                    style={{
                        position: 'absolute',
                        left: 20.0,
                    }}
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    transactionContentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
        alignItems: 'center',
        marginBottom: Sizes.fixPadding + 5.0
    },
    transactionIconContentStyle: {
        width: 40.0,
        height: 40.0,
        borderRadius: 20.0,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(96, 163, 42, 0.2)'
    },
    headerContentStyle: {
        height: 56.0,
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

TransactionScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(TransactionScreen);