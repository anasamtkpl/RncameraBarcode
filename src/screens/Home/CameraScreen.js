import React,{useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Vibration,
  StyleSheet
} from 'react-native'
import styles from './Home.style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'
import RNBeep from 'react-native-a-beep';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import { formDataFirst } from '../../stores/actions/form.action'


const CameraScreen = ({ navigation }) => {
    
  const dispatch = useDispatch()

        function onBarCodeRead(value) {
            try {
                dispatch(
                    formDataFirst(value.data)
                  )
                navigation.navigate("Home") 
                Vibration.vibrate()
                RNBeep.beep()
            } catch (error) {
                alert(error)
            }
        }
    
  return (
    <View style={{ flex: 1 }} >
        <RNCamera
          style={{ flex: 1 }}
          captureAudio={false}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          onBarCodeRead={onBarCodeRead}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
              <BarcodeMask width={300} height={150} />
    </RNCamera>
    </View>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default CameraScreen
