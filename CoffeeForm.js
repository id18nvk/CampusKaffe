import React, {useState, Component} from 'react';
import { StyleSheet, Text, View , CheckBox, 
    ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Academic Work', value: 'AcademicWork'},
        {label: 'Sveriges Ingenjörer', value: 'SverigesIngenjorer'},
        {label: 'Unionen', value: 'Unionen'}
    ]);
    const [isSelected, setSelection] = useState(false);
    const [flexDirection, setflexDirection] = useState("column");

    const floor = [
        {
            label: '-1'
         },
         {
            label: '0'
         },
         {
            label: '1'
        },
        {
            label: '2'
        },
        {
            label: '3'
        }
        ];

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
                
                
                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.label}>Mjölk</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.label}>Havremjölk</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.label}>Godis</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.label}>Tävling</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.label}>Produkter</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.label}>Fika</Text>
                </View>
                    
                <Text style={styles.label2}>
                    Var finns det?
                </Text>
                <Text style={styles.label3}>
                    Välj våningsplan
                </Text>
                <RadioButtonRN
                    style={styles.radio}
                    data={floor}
                    selectedBtn={(e) => console.log(e)}
                />
                <Text style={styles.label3}>
                    Sätt ut en pin på kartan
                </Text>

            </ScrollView>
        </View>
    );
};