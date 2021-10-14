import React from 'react';
import { Component } from "react";
import LoadingService from './LoadingService';
import { Text, View, StyleSheet } from 'react-native';

export default class LoadingPage extends Component{
    state= {
        loaded: false
    }
    
    constructor(){
        super();
        LoadingService.load(v => this.setState({loaded: true}));
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./assets/loadGif2.gif')} />
                {this.state.loaded ? <Text>HEJHEJ</Text> : <Text>Loading....</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B555D',
        alignItems: 'center',
        justifyContent: 'center'
    }
})