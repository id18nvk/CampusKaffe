import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { openDatabase } from 'expo-sqlite';
import { Company} from './Company'




export default function Homepage() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        console.log("run !!!!!!!!!!!!!!!!!!");
        fetch('http://localhost:3000/list')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data),
                setPosts(data)})
    },[]);


    return (
        <View style={styles.container}>
           {posts && <Text>{posts.location} </Text>}


        </View>
      
            
      
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "center"
    }    
  });

  