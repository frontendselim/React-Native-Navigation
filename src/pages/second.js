import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';


const Second = (props) => {
    const userNumber = props.route.params.myNumber
    const userValue =props.route.params.name
    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:50}}> Second</Text>
                <Text style={{fontSize:50}}> girilen: {userValue}</Text>
                <Button title="Go back" onPress={() => props.navigation.goBack()} />
            </View>
        </SafeAreaView>
    )
};

export default Second;