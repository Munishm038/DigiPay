import React, { Component } from "react";
import { View, SafeAreaView, StatusBar, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors } from "../constant/styles";
import { CircleFade } from 'react-native-animated-spinkit';

class SplashScreen extends Component {
    render() {

        setTimeout(() => {
            this.props.navigation.navigate('Signin');
        }, 2000);

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <StatusBar backgroundColor={Colors.primaryColor} />
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Image
                        source={require('../assets/images/icon.png')}
                        style={{ width: '80%' }}
                        resizeMode="contain"
                    />
                    <CircleFade size={60} color={Colors.primaryColor}
                        style={{
                            position: 'absolute',
                            bottom: 50.0,
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

SplashScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(SplashScreen);