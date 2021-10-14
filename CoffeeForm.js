import * as React from 'react';
import { Text, View, Image, StyleSheet, TextInput, SafeAreaView, ScrollView, TouchableOpacity, CheckBox } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from "react";
import CheckboxFormX from 'react-native-checkbox-form';
import RadioButtonRN from 'radio-buttons-react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from './config/colors';
import dollar from './assets/dollar.png';
import milk from './assets/milk.png';
import godis from './assets/godis.png';
import varning from './assets/varning.png';

export default ({ navigation }) => {
 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

    const [items, setItems] = useState([
        {label: 'Ospecificerat', value: 'Ospecificerat'},
        {label: 'Academic Work', value: 'AcademicWork'},
        {label: 'Professionals Nord', value: 'ProfessionalsNord'},
        {label: 'Sveriges Ingenjörer', value: 'SverigesIngenjorer'},
        {label: 'Unionen', value: 'Unionen'}
    ]);
    const [isSelected, setSelection] = useState(false);

  const { watch, register, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  const onSubmit = data => {
    console.log(data);
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  const mockData = [
    {
        labelCheck: 'Mjölk',
        value: 'Milk',
        
    },
    {
        labelCheck: 'Havremjölk',
        value: 'OatMilk'
    },
    {
        labelCheck: 'Godis',
        value: 'Candy'
    },
    {
        labelCheck: 'Tävling',
        value: 'Competition'
    },
    {
        labelCheck: 'Produkter',
        value: 'Products'
    },
    {
        labelCheck: 'Fika',
        value: 'Fika'
    },
];
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

   const onSelect = ( item ) => {
      console.log(mockData.label3);
    };

  console.log('errors', errors);

  return (
    
    <SafeAreaView style={styles.container}>
       <ScrollView horizontal={false} style={styles.scrollView}>
       <TouchableOpacity style={styles.exit}
                onPress={() => { navigation.navigate('Map')}} >
                    <MaterialIcons name='close' size={30} style={{ color: colors.primaryBeige}} />
                </TouchableOpacity>
                <Text style={styles.label1}>
                    Lägg till gratiskaffe
                </Text>
                <Text style={styles.label2}>
                    Vilka delar ut?
                </Text>
                <DropDownPicker style={styles.dropDown}
                    placeholder="Välj företag eller förening"
                    placeholderStyle={{
                      color: colors.primaryBlue,
                    }}
                    color={colors.primaryBlue}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    searchable={true}
                    searchPlaceholder="Sök"
                    searchContainerStyle={{
                      borderBottomColor: colors.primaryBlue
                    }}
                    searchTextInputStyle={{
                      color: colors.primaryBlue,
                      borderColor: colors.secondaryBeige
                    }}
                    searchPlaceholderTextColor="grey"
                    dropDownContainerStyle={{ 
                      backgroundColor: colors.secondaryBeige,
                      borderTopColor: colors.primaryBlue,
                      borderColor: colors.primaryBlue,
                    }}
                    listItemLabelStyle={{
                      color: colors.primaryBlue,
                    }}
                    selectedItemLabelStyle={{
                      color: colors.primaryBlue,
                      fontWeight: "bold"
                    }}
                    arrowIconStyle={{
                      tintColor: colors.primaryBlue
                    }}
                    tickIconStyle={{
                      tintColor: colors.primaryBlue
                    }}

                />
                <Text style={styles.label2}>
                    Vad erbjuds mer än kaffe?
                </Text>
                <View style={{ marginVertical: 10, backgroundColor: colors.primaryBlue }} >
                    <CheckboxFormX
                        dataSource={mockData}
                        itemShowKey="labelCheck"
                        style={{
                          width: '100%'
                        }}
                        textStyle={{
                          color: colors.secondaryBeige,
                          fontSize: 13,
                          textAlign: 'center',
                        }}            
                        itemCheckedKey="RNchecked"
                        iconSize={16}
                        iconColor={colors.primaryBeige}
                        formHorizontal={true}
                        labelHorizontal={false}
                        onChecked={(item) => onSelect(item)}     
                    />
                </View>


      <Text style={styles.label2}>Var finns det?</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            placeholder="Skriv in närmsta sal"
            placeholderTextColor={colors.primaryBlue}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="Location"
        rules={{ required: true }}
      />
      <Text style={styles.label3}>
                    Välj våningsplan
                </Text>
                <RadioButtonRN
                    style={styles.radio}
                    boxStyle={styles.radioBox}
                    textStyle={styles.radioText}
                    activeColor={colors.primaryBeige}
                    deactiveColor={colors.secondaryBeige}
                    circleSize={20}
                    data={floor}
                    selectedBtn={(e) => console.log(e)}
                />


      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonPrimary}
          onPress={handleSubmit(onSubmit)}
          onPress={() => { navigation.navigate('Map')}}>
            <Text style={styles.textButtonPrimary}>LÄGG TILL</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 19,
    paddingHorizontal: 65,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: colors.primaryBeige,
  },
  textButtonPrimary: {
    fontSize: 13,
    letterSpacing: 1.2,
    color: 'white',
    fontWeight: "600"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: colors.primaryBlue,
  },
  scrollView: {
    padding: 20
  },
  input: {
    backgroundColor: colors.secondaryBeige,
    borderColor: colors.primaryBlue,
    height: 40,
    padding: 10,
    borderRadius: 8,
  },
  label1: {
    color: colors.primaryBeige,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
  },
  label2: {
      color: colors.secondaryBeige,
      fontSize: 17,
      textAlign: 'left',
      paddingBottom: 10,
      paddingTop: 40,
  },
  label3: {
      color: colors.secondaryBeige,
      fontSize: 13,
      textAlign: 'left',
      paddingTop: 20,
  },
  dropDown: {
      backgroundColor: colors.secondaryBeige,
      height: 40,
      borderColor: colors.primaryBlue,
      width: "100%",
  },
  exit: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  radio: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioBox: {
    width: "15%",
    backgroundColor: colors.primaryBlue,
    borderColor: colors.primaryBlue,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  radioText: {
    paddingTop: 10,
    color: colors.secondaryBeige,
    textAlign: 'center'
  }
});
