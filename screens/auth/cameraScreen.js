import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

export const CameraScreen = props => {
  let camRef = useRef(null);
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.on);
  const [swichCamera, setSwichCamera] = useState(RNCamera.Constants.Type.back);

  useEffect(() => {
    console.log('FLASH IS : ', flash);
  }, [flash]);

  const toggleCamera = () => {
    if (swichCamera === RNCamera.Constants.Type.back) {
      setSwichCamera(RNCamera.Constants.Type.front);
    } else {
      setSwichCamera(RNCamera.Constants.Type.back);
    }
  };

  const toggleFlash = () => {
    if (flash === RNCamera.Constants.FlashMode.on) {
      setFlash(RNCamera.Constants.FlashMode.off);
    } else {
      setFlash(RNCamera.Constants.FlashMode.on);
    }
  };

  const takePicture = async () => {
    if (camRef) {
      const options = {quality: 0.5, base64: true};
      const data = await camRef.current.takePictureAsync(options);
      props.navigation.goBack()
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        ref={camRef}
        style={styles.preview}
        type={swichCamera}
        flashMode={flash}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={toggleFlash}
          style={{
            ...styles.capture,
            backgroundColor: flash ? 'yellow' : '#FFF',
          }}>
          <Text style={{fontSize: 14, color: '#000'}}> FLASH </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{fontSize: 14, color: '#000'}}> CAPTURE </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={toggleCamera} style={styles.capture}>
          <Text style={{fontSize: 14, color: '#000'}}> Switch Camera</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    alignSelf: 'center',
    margin: 10,
    alignItems: 'center',
  },
});
