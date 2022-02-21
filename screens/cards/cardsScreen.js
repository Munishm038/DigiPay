import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar, BackHandler, Image, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constant/styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Slider } from 'react-native-elements';
import Dialog from "react-native-dialog";

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
        type: 'Card consuption',
        owner: 'Google Play',
        amount: '59.00',
    },
    {
        id: '4',
        iscredit: true,
        type: 'Card consuption',
        owner: 'Croma Digital',
        amount: '1254.00',
    },
    {
        id: '5',
        iscredit: false,
        type: 'Card consuption',
        owner: 'Google Ads',
        amount: '1689.00',
    },
    {
        id: '6',
        iscredit: false,
        type: 'Card consuption',
        owner: 'Apple Hospital',
        amount: '5972.00',
    },
];

class CardsScreen extends Component {

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

    state = {
        currentLimit: 5888,
        setLimitDialog: false,
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F4F6' }}>
                <StatusBar backgroundColor={Colors.primaryColor} />
                <View style={{ flex: 1 }}>
                    {this.header()}
                    {this.userCardInfo()}
                    {this.setLimitAndLockCardInfo()}
                    {this.transactionTitle()}
                    {this.transactions()}
                </View>
                {this.setLimitDialogInfo()}
            </SafeAreaView>
        )
    }

    setLimitDialogInfo() {
        return (
            <Dialog.Container
                visible={this.state.setLimitDialog}
                contentStyle={styles.dialogContainerStyle}
            >
                <View style={{ backgroundColor: Colors.whiteColor, paddingBottom: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        Monthly spending limit
                    </Text>
                    <View style={styles.monthlySpendLimitContentStyle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ ...Fonts.blackColor18Bold }}>
                                {
                                    Math.round(this.state.currentLimit)
                                }
                            </Text>
                            <View style={{
                                backgroundColor: Colors.grayColor,
                                marginLeft: Sizes.fixPadding - 5.0,
                                height: 15.0,
                                width: 1.0
                            }}></View>
                        </View>
                        <Text style={{ ...Fonts.blackColor14Medium }}>USD</Text>
                    </View>
                    <View style={{
                        backgroundColor: Colors.grayColor,
                        height: 1.0,
                        marginTop: Sizes.fixPadding,
                        marginBottom: Sizes.fixPadding + 5.0
                    }}>
                    </View>
                    <Slider
                        value={this.state.currentLimit}
                        maximumValue={10000}
                        minimumValue={1000}
                        style={{ height: 10.0 }}
                        minimumTrackTintColor={Colors.primaryColor}
                        maximumTrackTintColor={Colors.grayColor}
                        trackStyle={{ backgroundColor: Colors.primaryColor }}
                        onValueChange={(value) => this.setState({ currentLimit: value })}
                        thumbStyle={{ height: 13, width: 13, backgroundColor: Colors.primaryColor }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: Sizes.fixPadding * 2.0,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{ ...Fonts.blackColor14Medium }}>
                            This month limit
                        </Text>
                        <Text style={{ ...Fonts.blackColor14Medium }}>
                            USD ${Math.round(this.state.currentLimit)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => this.setState({ setLimitDialog: false })}
                        style={styles.confirmButtonStyle}>
                        <Text style={{ ...Fonts.whiteColor16Bold }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </Dialog.Container>
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
                    <Text style={{ ...Fonts.blackColor14Medium }}>USD</Text>
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
                    paddingBottom: Sizes.fixPadding * 2.0
                }}
            />
        )
    }

    transactionTitle() {
        return (
            <Text style={{
                ...Fonts.blackColor16Bold,
                marginHorizontal: Sizes.fixPadding * 2.0,
                marginBottom: Sizes.fixPadding,
            }}>
                Transaction
            </Text>
        )
    }

    setLimitAndLockCardInfo() {
        return (
            <View style={styles.setLimitAndLockCardMainContentStyle}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.setState({ setLimitDialog: true })}
                    style={{
                        ...styles.setLimitAndLockCardContentStyle,
                        marginRight: Sizes.fixPadding * 2.0,

                    }}>
                    <MaterialCommunityIcons name="currency-usd" size={24} color="black" />
                    <Text numberOfLines={1}
                        style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                        Set limit
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.setLimitAndLockCardContentStyle}>
                    <MaterialIcons name="lock" size={24} color="black" />
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                        Lock card
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    userCardInfo() {
        return (
            <View>
                <Text style={{
                    ...Fonts.blackColor16Bold,
                    margin: Sizes.fixPadding * 2.0
                }}>
                    Your Card
                </Text>
                <View style={styles.userCardContentStyle}>
                    <Image
                        source={require('../../assets/images/card/visa.png')}
                        style={{ height: 21.0, width: 64.0, alignSelf: 'flex-end' }}
                    />
                    <Text style={{ ...Fonts.whiteColor16Medium }}>6290 8821 7695 7551</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ ...Fonts.whiteColor12Medium }}>Card holder</Text>
                            <Text style={{ ...Fonts.whiteColor14Medium, marginTop: Sizes.fixPadding - 8.0 }}>
                                Ellison Perry
                            </Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ ...Fonts.whiteColor12Medium }}>
                                Expiry date
                            </Text>
                            <Text style={{ ...Fonts.whiteColor14Medium, marginTop: Sizes.fixPadding - 8.0 }}>
                                12 / 2023
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    header() {
        return (
            <View style={styles.headerContentStyle}>
                <Text style={{ ...Fonts.blackColor18Bold }}>Cards</Text>
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
    headerContentStyle: {
        height: 56.0,
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userCardContentStyle: {
        height: 198.0,
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'space-between',
        padding: Sizes.fixPadding * 2.0
    },
    setLimitAndLockCardContentStyle: {
        flex: 0.43,
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        height: 64.0,
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding + 10.0,
        flexDirection: 'row'
    },
    setLimitAndLockCardMainContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding
    },
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
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 40,
        paddingTop: -Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding
    },
    confirmButtonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
    },
    monthlySpendLimitContentStyle: {
        marginTop: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

CardsScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(CardsScreen);