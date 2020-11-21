import React, {useState} from 'react';
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native';

const number = 55;

const First = (props) => {
    const [userName, setUserName] = useState("");
    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:50}}> First</Text>
                <Text style={{fontSize:50}}> {number}</Text>

                <Text style={{fontWeight:'bold', margin:5}}>Girilen değer : {userName} </Text>

                <View style={{backgroundColor:'#e0e0e0', padding:10, margin:10, borderRadius:5}}>
                    <TextInput
                    value={userName}
                    onChangeText= { (text) => setUserName(text) }

                    />
                </View>
                <Button
                    title="Go!"
                    onPress={() => props.navigation.navigate('SecondPage',{ myNumber:number, name:userName})}
                />
            </View>
        </SafeAreaView>
    )
};

export default First;