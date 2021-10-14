import React from 'react';  
import { View, ScrollView, StyleSheet, Text, Image} from 'react-native'; 
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ListView ({navigation}) {
    const list = [
        {
        key: '1',
        title: 'Unionen',
        reportedIcon: require('./assets/varning.png'),
        openingHoursFree: 'Rapporterat stängt 11:30',
        milkIcon: require('./assets/milkIcon.png'),
        oatMilkIcon: require('./assets/oatMilkIcon.png'),
        candyIcon: require('./assets/candyIcon.png'),
        cookiesIcon: require('./assets/cookieIcon.png'),
        contestIcon: require('./assets/contestIcon.png'),
        productsIcon: require('./assets/productsIcon.png'),
        location: 'Teknikhuset, Plan 1, Sal 103'
        },
        {
        key: '2',
        title: 'Sveriges Ingenjörer',
        verifiedIcon: require('./assets/verifiedIcon.png'),
        openingHoursFree: 'Senast verifierat 10:30',
        candyIcon: require('./assets/candyIcon.png'),
        cookiesIcon: require('./assets/cookieIcon.png'),
        location: 'Teknikhuset, Plan 1, Sal 103'
        },
        {
        key: '3',
        title: 'Academic Work',
        verifiedIcon: require('./assets/verifiedIcon.png'),
        openingHoursFree: 'Senast verifierat 09:00',
        milkIcon: require('./assets/milkIcon.png'),
        oatMilkIcon: require('./assets/oatMilkIcon.png'),
        location: 'Teknikhuset, Plan 1, Sal 103'
        },
        {
        key: '4',
        title: 'Kårfiket Mitum',
        openingHoursShop: 'ÖPPET - Stänger 14:30',
        dollarIcon: require('./assets/dollar.png'),
        coffeePrice: 'Kaffe från 12 kr',
        location: 'Mit-huset, Plan 0, Sal'
        },
        {
        key: '5',
        title: 'Café Universum',
        openingHoursShop: 'ÖPPET - Stänger 15:30',
        dollarIcon: require('./assets/dollar.png'),
        coffeePrice: 'Kaffe från 12 kr',
        location: 'Universum, Plan 2, Hörsal A'
        }
    ]

    return(
    <ScrollView style={styles.scrollView}>{
        list.map((item) => {
            return(
            <View key={item.key} style={styles.view}>
                {item.title? <ListItem.Title style={styles.title}>{item.title}</ListItem.Title> : null}
                <View style={styles.viewVerifiedReported}>
                    {item.reportedIcon? <Image source={item.reportedIcon} style={styles.reportedIcon}/> : null}
                    {item.verifiedIcon? <Image source={item.verifiedIcon} style={styles.verifiedIcon}/> : null}
                    {item.openingHoursFree? <ListItem.Subtitle style={styles.openingHoursFree}>{item.openingHoursFree}</ListItem.Subtitle> : null}
                </View>
                {item.openingHoursShop? <ListItem.Subtitle style={styles.openingHoursShop}>{item.openingHoursShop}</ListItem.Subtitle> : null}
                <View style={styles.viewCoffeePrice}>
                    {item.dollarIcon? <Image source={item.dollarIcon} style={styles.dollarIcon}/>: null}
                    {item.coffeePrice? <ListItem.Subtitle style={styles.coffeePrice}>{item.coffeePrice}</ListItem.Subtitle> : null}
                </View>
                <View style={styles.view3}>
                    {item.milkIcon? <Image source={item.milkIcon} style={styles.milkIcon}/> : null}
                    {item.oatMilkIcon? <Image source={item.oatMilkIcon} style={styles.oatmilkIcon}/> : null}
                    {item.cookiesIcon? <Image source={item.cookiesIcon} style={styles.cookiesIcon}/> : null}
                    {item.candyIcon? <Image source={item.candyIcon} style={styles.candyIcon}/> : null}
                    {item.contestIcon? <Image source={item.contestIcon} style={styles.contestIcon}/> : null}
                    {item.productsIcon? <Image source={item.productsIcon} style={styles.productsIcon}/> : null}
                </View>
                <View style={styles.view4}>
                    {item.location? <ListItem.Subtitle style={styles.subtitle}>{item.location}</ListItem.Subtitle> : null}
                    <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Map');}}>
                        <Text style={styles.buttonText}>VISA I KARTA</Text>
                    </TouchableOpacity>
                </View>
            </View >
            );
        })
    }
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#3B555D',
    },

    view: {
        flexDirection: 'column',
        borderBottomColor: '#F5EEDC',
        borderBottomWidth: 0.2,
    },

    viewVerifiedReported: {
        paddingTop: 10,
        paddingLeft: 20,
        flexDirection: 'row',
    },

    viewCoffeePrice: {
        paddingTop: 10,
        paddingLeft: 20,
        flexDirection: 'row',
    },

    view3: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 10,
        flexDirection: 'row',
    },

    view4: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingRight: 20,
        justifyContent: 'space-between'
    },

    listItem: {
        backgroundColor: '#3B555D'
    },

    title: {
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 23,
        fontWeight: 'bold',
        color: '#CA9D7C'
    },

    subtitle: {
        paddingLeft: 20,
        paddingBottom: 20,
        paddingTop: 10,
        fontSize: 15,
        color: '#F5EEDC'
    },

    openingHoursFree: {
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 13,
        color: '#F5EEDC'
    },

    openingHoursShop: {
        paddingLeft: 20,
        paddingBottom: 20,
        fontSize: 13,
        color: '#F5EEDC'
    },

    coffeePrice: {
        paddingLeft: 10,
        fontSize: 15,
        color: '#F5EEDC'
    },

    button: {
        color: 'red',
        padding: 10,
        borderWidth: 2,
        borderColor: '#F5EEDC',
        borderRadius: 10,
        elevation: 3,
    },

    buttonText: {
        color: '#F5EEDC',
        fontSize: 13,
        fontWeight: 'bold'
    },

    reportedIcon: {
        width: 15,
        height: 14
    },

    verifiedIcon: {
        width: 15,
        height: 15
    },

    dollarIcon: {
        width: 17,
        height: 17
    },
    
    milkIcon: {
        width: 40,
        height: 40
    },

    oatmilkIcon: {
        width: 41,
        height: 41
    },

    candyIcon: {
        width: 40,
        height: 40
    },

    contestIcon: {
        width: 35,
        height: 38
    },

    productsIcon: {
        width: 38,
        height: 38
    },

    cookiesIcon: {
        width: 40,
        height: 40
    },
});