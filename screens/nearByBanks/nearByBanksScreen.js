import React, { useState, Component, useEffect } from "react";
import { Text, View, SafeAreaView, StatusBar, Animated, BackHandler, StyleSheet, Dimensions } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../../constant/styles";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { markers } from "../../component/nearByBanksList";

const { width } = Dimensions.get('screen');

class NearByBanks extends Component {

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
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.primaryColor} />
                {this.header()}
                <NearByBank />
            </SafeAreaView>
        )
    }

    header() {
        return (
            <View style={styles.headerContentStyle}>
                <Text style={{ ...Fonts.blackColor18Bold }}>Nearby Banks</Text>
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

const cardWidth = width / 1.5;

const NearByBank = () => {

    const [markerList] = useState(markers);
    const [region] = useState(
        {
            latitude: 22.62938671242907,
            longitude: 88.4354486029795,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
        }
    );

    let mapAnimation = new Animated.Value(0);
    let mapIndex = 0;

    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / cardWidth + 0.3);
            if (index >= markerList.length) {
                index = markerList.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() => {
                if (mapIndex != index) {
                    mapIndex = index;
                    const { coordinate } = markerList[index];
                    _map.current.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: region.latitudeDelta,
                            longitudeDelta: region.longitudeDelta,
                        }, 350
                    )
                }
            }, 10);
        });
    });

    const interpolation = markerList.map((marker, index) => {
        const inputRange = [
            (index - 1) * cardWidth,
            index * cardWidth,
            ((index + 1) * cardWidth),
        ];

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: "clamp"
        })

        return { scale };
    })

    const _map = React.useRef(null);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={_map}
                initialRegion={
                    region
                }
                style={{ height: '100%' }}
                provider={PROVIDER_GOOGLE}
            >
                {markerList.map((marker, index) => {
                    const scaleStyle = {
                        transform: [
                            {
                                scale: interpolation[index].scale
                            }
                        ]
                    }
                    return (
                        <MapView.Marker
                            key={index}
                            coordinate={marker.coordinate}
                        >
                            <Animated.View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 50.0, height: 50.0
                                }}
                            >
                                <Animated.Image
                                    source={require('../../assets/images/marker.png')}
                                    resizeMode="cover"
                                    style={[styles.markerStyle, scaleStyle]}
                                >
                                </Animated.Image>
                            </Animated.View>
                        </MapView.Marker>
                    )
                }
                )}
            </MapView>
            <Animated.ScrollView
                horizontal={true}
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                style={styles.banksInfoContentStyle}
                snapToInterval={cardWidth + 20}
                snapToAlignment="center"
                contentContainerStyle={{
                    paddingLeft: Sizes.fixPadding * 5.0,
                    paddingRight: Sizes.fixPadding * 2.0
                }}
                onScroll={
                    Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: mapAnimation,
                                    }
                                }
                            }
                        ],
                        { useNativeDriver: true }
                    )
                }
            >
                {markerList.map((marker, index) => (
                    <View key={index}>
                        <View style={styles.bankContentStyle}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor14Bold }}>
                                {marker.place}
                            </Text>
                            <Text numberOfLines={1} style={{
                                ...Fonts.grayColor12Regular,
                                marginVertical: Sizes.fixPadding - 5.0
                            }}>
                                {marker.address}
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ ...Fonts.blackColor12Regular }}>
                                    {marker.rating}
                                </Text>
                                <MaterialIcons name="star" size={10} color={Colors.primaryColor} />
                            </View>
                            <Text style={{
                                ...Fonts.grayColor12Regular,
                                marginTop: Sizes.fixPadding
                            }}>
                                Distance
                            </Text>
                            <Text style={{ ...Fonts.blackColor14Bold }}>
                                {marker.distance} km
                            </Text>
                            <View style={styles.directionButtonStyle}>
                                <Text style={{ ...Fonts.blackColor12Medium }}>
                                    Direction
                                </Text>
                            </View>
                        </View>
                    </View>

                ))}
            </Animated.ScrollView>
        </View>
    )
}

NearByBanks.navigationOptions = () => {
    return {
        header: () => null
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
    markerStyle: {
        width: 30.0, height: 30.0
    },
    bankContentStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 1.0,
        marginHorizontal: Sizes.fixPadding,
        padding: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        width: width / 1.5,
        marginBottom: Sizes.fixPadding,
    },
    directionButtonStyle: {
        position: 'absolute',
        right: 10.0,
        bottom: 10.0,
        backgroundColor: Colors.whiteColor,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding - 7.0,
        paddingHorizontal: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding + 10.0,
    },
    banksInfoContentStyle: {
        position: 'absolute',
        bottom: 50.0,
        left: 0.0,
        right: 0.0,
        paddingVertical: 10.0,
    }
})

export default withNavigation(NearByBanks);