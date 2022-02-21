import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar, BackHandler, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constant/styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class LoanOfferDetailScreen extends Component {

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
        name: '',
        phoneNumber: '',
        message: '',
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F4F6' }}>
                <StatusBar backgroundColor={Colors.primaryColor} />
                <View style={{ flex: 1 }}>
                    {this.header()}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
                    >
                        {this.loanInfo()}
                        {this.dummyText()}
                        {this.loanOfferDetail()}
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }

    loanOfferDetail() {
        return (
            <View style={styles.loanOfferDetailContentStyle}>
                <Text style={{ ...Fonts.blackColor14Bold }}>Name</Text>
                {this.nameTextField()}
                <Text style={{ ...Fonts.blackColor14Bold }}>Phone number</Text>
                {this.phoneNumberTextField()}
                <Text style={{ ...Fonts.blackColor14Bold }}>Message</Text>
                {this.messageTextField()}
                {this.sendInquiryButton()}
            </View>
        )
    }

    sendInquiryButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.goBack()}
                style={styles.sendInquiryButtonStyle}>
                <Text style={{ ...Fonts.whiteColor16Bold }}>Send enquiry</Text>
            </TouchableOpacity>
        )
    }

    messageTextField() {
        return (
            <TextInput
                placeholder='Enter your message here'
                placeholderTextColor={Colors.grayColor}
                value={this.state.message}
                onChangeText={(value) => this.setState({ message: value })}
                multiline={true}
                numberOfLines={6}
                style={{
                    ...styles.textFieldStyle,
                }}
            />
        )
    }

    phoneNumberTextField() {
        return (
            <TextInput
                placeholder='Enter your phone number'
                placeholderTextColor={Colors.grayColor}
                value={this.state.phoneNumber}
                onChangeText={(value) => this.setState({ phoneNumber: value })}
                style={{
                    height: 36.0,
                    ...styles.textFieldStyle,
                }}
            />
        )
    }

    nameTextField() {
        return (
            <TextInput
                placeholder='Enter your name'
                placeholderTextColor={Colors.grayColor}
                value={this.state.name}
                onChangeText={(value) => this.setState({ name: value })}
                style={{
                    height: 36.0,
                    ...styles.textFieldStyle,
                }}
            />
        )
    }

    dummyText() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor12Medium, textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet integer nullam sapien est adipiscing massa. Varius pellentesque vestibulum aliquam quam purus nec donec nullam amet. Arcu felis leo risus cras vel tortor. Ut at augue nunc tincidunt non tellus, viverra diam pulvinar.
                </Text>
                <Text style={{ ...Fonts.blackColor12Medium, textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet integer nullam sapien est adipiscing massa. Varius pellentesque vestibulum aliquam quam purus nec donec nullam amet. Arcu felis leo risus cras vel tortor. Ut at augue nunc tincidunt non tellus, viverra diam pulvinar.
                </Text>
            </View>
        )
    }

    loanInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('LoanOfferDetail')}
                style={styles.loanContentStyle}>
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
        )
    }

    header() {
        return (
            <View style={styles.headerContentStyle}>
                <Text style={{ ...Fonts.blackColor18Bold }}>Business Loan</Text>
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
    loanContentStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding - 3.0,
        elevation: 1.0,
        marginVertical: Sizes.fixPadding * 2.0,
    },
    textFieldStyle: {
        ...Fonts.blackColor14Regular,
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        borderColor: 'rgba(128, 128, 128, 0.3)',
        borderWidth: 0.50,
        paddingHorizontal: Sizes.fixPadding + 2.0,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.0
    },
    sendInquiryButtonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding
    },
    loanOfferDetailContentStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding + 5.0,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding * 2.0
    }
})

LoanOfferDetailScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(LoanOfferDetailScreen);