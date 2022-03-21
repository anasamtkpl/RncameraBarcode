import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Vibration,
  Button,
  StyleSheet
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'
import { RNCamera } from 'react-native-camera';
import {
  formDataFirst,
} from '../../stores/actions/form.action'



const Home = ({ navigation, route }) => {

  const formDatas = useSelector(state => state.formReducer.formDataFirst)

  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>


    <Button title="Check Barcode Camera" onPress={ async () =>{ 
      navigation.navigate("CameraScreen") }} 
      
      />

           <Text>{formDatas}</Text>


        </View>
      </SafeAreaView>
    </>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default Home
