import React from "react";
import { Component } from "react";
import { Text, View, SafeAreaView, StatusBar, StyleSheet, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constant/styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class PrivacyPolicyScreen extends Component {

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
                <View style={{ flex: 1 }}>
                    {this.header()}
                    {this.dummyText()}
                    {this.dummyText()}
                    {this.dummyText()}
                </View>
            </SafeAreaView>
        )
    }

    dummyText() {
        return (
            <Text style={styles.dummyTextStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, venenatis leo ante morbi magnis porttitor. Massa ut mauris id aliquam at dapibus dignissim aliquam. In porta arcu, purus amet ipsum, aliquet tortor. Amet, bibendum erat iaculis in ipsum integer.
            </Text>
        )
    }

    header() {
        return (
            <View style={styles.headerContentStyle}>
                <MaterialIcons name="arrow-back" size={24}
                    color="black"
                    onPress={() => this.props.navigation.goBack()}
                    style={{ position: 'absolute', left: 20.0, }}
                />
                <Text style={{
                    ...Fonts.blackColor18Bold,
                    alignSelf: 'center',
                    justifyContent: 'center'
                }}>
                    Privacy Policy
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60.0,
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        elevation: 10.0,
    },
    dummyTextStyle: {
        ...Fonts.blackColor14Medium,
        textAlign: 'justify',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding + 5.0
    }
})

PrivacyPolicyScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(PrivacyPolicyScreen);

