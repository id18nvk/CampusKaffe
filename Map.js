import React, {useEffect, useEffects, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, ScrollView } from 'react-native';

export default function Map({route, navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [allPostsData, setAllPostData] = useState([]);
    const {url} = route.params;
    const selectedPost = allPostData.find(post => post.url === url);

    useEffect(() => {
        fetch('https://use.mazemap.com/?campusid=289')
    .catch((error) => console.error(error))
    .finally(() => finishLoading(false));
    }, []);

    return(
        <View style={StyleSheet.container}>
          {/*  <TouchableOpacity
             </View>   style={StyleSheet.button}
                onPress={() => navigation.goBack()}>
                
                <Text style={styles.buttontext}>Lägg till kaffeställe</Text>
          </TouchableOpacity>*/}
            {}
        </View>
    );

}