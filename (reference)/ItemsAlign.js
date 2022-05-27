/*
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OtherScreen({ navigation }) {
    return (
        <View style={styles.container}>  // <View style={isMarginNeeded ? {marginTop:10} : {}} /> 
            <View style={styles.subContainer}>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.textStyle,{backgroundColor:'blue'}]}>Left Align</Text>
                    <Text style={[styles.textStyle,{backgroundColor:'red',textAlign:'right'}]}>Right Align</Text>
                </View>
                <View style={{flexDirection:'row'}}> 
                    <Text style={{fontSize: 18, textAlign:'right', flex:1}}>textAlign:'right',{'\n'}flex:1</Text>
                </View>
                <View style={{flexDirection:'row'}}> 
                    <Text style={{fontSize: 18, textAlign:'left', flex:1}}>textAlign:'left',{'\n'}flex:1</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    subContainer:{
        width: 300, 
        height: 500, 
        borderWidth:1, 
        borderColor: "black"
    },

    textStyle:{
        fontSize: 25,
        color:'white', 
        flex:1
    }
})
*/