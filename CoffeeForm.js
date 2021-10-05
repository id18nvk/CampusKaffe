import React, {useState} from 'react';
import { StyleSheet, Text, View, 
    ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function CoffeeForm() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Academic Work', value: 'AcademicWork'},
        {label: 'Sveriges Ingenjörer', value: 'SverigesIngenjorer'},
        {label: 'Unionen', value: 'Unionen'}
    ]);


    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label1}>
                    Lägg till gratiskaffe
                </Text>
                <Text style={styles.label2}>
                    Vilka delar ut?
                </Text>
                <DropDownPicker style={styles.dropDown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                <Text style={styles.label2}>
                    Vad erbjuds mer än kaffe?
                </Text>

                <Text style={styles.label2}>
                    Var finns det?
                </Text>
                <Text style={styles.label3}>
                    Välj våningsplan
                </Text>

                <Text style={styles.label3}>
                    Sätt ut en pin på kartan
                </Text>

            </ScrollView>
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label1: {
        color: '#CA9D7C',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },
    label2: {
        color: '#F5EEDC',
        fontSize: 17,
        textAlign: 'left',
    },
    label3: {
        color: '#F5EEDC',
        fontSize: 13,
        textAlign: 'left',
    },
    dropDown: {
        backgroundColor: '#F5EEDC',
        height: 40,
        alignItems: 'left',
        borderRadius: 4, 
        width: "90%",
    }
})