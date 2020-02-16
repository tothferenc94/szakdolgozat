import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Welcome from './welcome';

const DATA = [
    {
        id: '1',
        name: 'Welcome képernyő'
    },
    {
        id: '2',
        name: 'még semmi'
    },
    {
        id: '3',
        name: 'még több semmi'
    }
];

_renderItem = item => {
    return (
        <View style={styles.mainStyle}>
            <TouchableOpacity>
                <Text style={styles.textStyle}>{item.item.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default class MainMenu extends Component {
    render(){
        return(
            <View>
                <FlatList
                data={DATA}
                renderItem={_renderItem}
                keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainStyle : {
        alignItems: 'center',
        backgroundColor: 'rgb(220, 220, 220)',
        marginTop: 5,
        borderRadius: 10
    },
    textStyle: {
       fontSize: 30,
       color: 'rgb(200, 100, 100)'
    }
})