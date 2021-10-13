import React from 'react';  
import { View, ScrollView, StyleSheet, Text, Button, Dimensions, Image} from 'react-native'; 
import { ListItem } from 'react-native-elements';
import dollar from './assets/dollar.png';
import milk from './assets/milk.png';
import godis from './assets/godis.png';
import varning from './assets/varning.png';

export default function ListView () {
    const list = [
        {
        key: '1',
        title: 'Unionen',
        reportedIcon: require('./assets/varning.png'),
        openingHours: 'Rapporterat stängt 11:30',
        milkIcon: require('./assets/milk.png'),
        oatMilkIcon: require('./assets/oatMilk.png'),
        candyIcon: require('./assets/godis.png'),
        contestIcon: require('./assets/contest.png'),
        productsIcon: require('./assets/products.png'),
        cookiesIcon: require('./assets/cookies.png'),
        location: 'Teknikhuset, Plan 1, Sal 103'
        },
        {
        key: '2',
        title: 'Sveriges Ingenjörer',
        verifiedIcon: require('./assets/verifierat.png'),
        openingHours: 'Senast verifierat 10:30',
        milkIcon: require('./assets/milk.png'),
        oatMilkIcon: require('./assets/oatMilk.png'),
        candyIcon: require('./assets/godis.png'),
        contestIcon: require('./assets/contest.png'),
        productsIcon: require('./assets/products.png'),
        cookiesIcon: require('./assets/cookies.png'),
        location: 'Teknikhuset, Plan 1, Sal 103'
        },
        {
        key: '3',
        title: 'Academic Work',
        verifiedIcon: require('./assets/verifierat.png'),
        openingHours: 'Senast verifierat 09:00',
        milkIcon: require('./assets/milk.png'),
        oatMilkIcon: require('./assets/oatMilk.png'),
        candyIcon: require('./assets/godis.png'),
        contestIcon: require('./assets/contest.png'),
        productsIcon: require('./assets/products.png'),
        cookiesIcon: require('./assets/cookies.png'),
        location: 'Teknikhuset, Plan 1, Sal 103'
        },
        {
        key: '4',
        title: 'Kårfiket Mitum',
        openingHours: 'ÖPPET - Stänger 14:30',
        dollarIcon: require('./assets/dollar.png'),
        coffeePrice: 'Kaffe från 12 kr',
        location: 'Mit-huset, Plan 0, Sal'
        },
        {
        key: '5',
        title: 'Café Universum',
        openingHours: 'ÖPPET - Stänger 15:30',
        dollarIcon: require('./assets/dollar.png'),
        coffeePrice: 'Kaffe från 12 kr',
        location: 'Universum, Plan 2, Hörsal A'
        }
    ]

    return(
    <ScrollView style={styles.scrollView}>{
        list.map((item) => {
            return(
            <View key={item.key} style={styles.scrollView}>
                <ListItem bottomDivider style={styles.scrollView}>
                    <ListItem.Content style={styles.listItem}>
                        <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
                        <Image source={item.reportedIcon} style={{width: 19, height: 18 }}/>
                        <Image source={item.verifiedIcon} style={{width: 19, height: 18 }}/>
                        <ListItem.Subtitle style={styles.openClosed}>{item.openingHours}</ListItem.Subtitle>
                        <Image source={item.dollarIcon} style={{width: 37, height: 30 }}/>
                        <ListItem.Subtitle style={styles.openClosed}>{item.coffeePrice}</ListItem.Subtitle>
                        <Image source={item.milkIcon} style={{width: 37, height: 30 }}/>
                        <Image source={item.oatMilkIcon} style={{width: 37, height: 30 }}/>
                        <Image source={item.candyIcon} style={{width: 37, height: 30 }}/>
                        <Image source={item.contestIcon} style={{width: 37, height: 30 }}/>
                        <Image source={item.productsIcon} style={{width: 37, height: 30 }}/>
                        <Image source={item.cookiesIcon} style={{width: 37, height: 30 }}/>
                        <ListItem.Subtitle style={styles.subtitle}>{item.location}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
            );
        })
    }
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#3B555D'
    },

    listItem: {
        backgroundColor: '#3B555D'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CA9D7C'
    },

    subtitle: {
        fontSize: 15,
        color: '#F5EEDC'
    },

    openClosed: {
        fontSize: 13,
        color: '#F5EEDC'
    }
});