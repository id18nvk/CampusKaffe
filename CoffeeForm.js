import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, SafeAreaView, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from "react";
import CheckboxFormX from 'react-native-checkbox-form';
import RadioButtonRN from 'radio-buttons-react-native';

export default ({ navigation }) => {
 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

    const [items, setItems] = useState([
        {label: 'Academic Work', value: 'AcademicWork'},
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
        value: 'Milk'
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

  _onSelect = ( item ) => {
      console.log(item);
    };

  console.log('errors', errors);

  return (
    
    <SafeAreaView style={styles.container}>
       <ScrollView horizontal={false}>
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
                    containerStyle={{ backgroundColor: '#F5EEDC'}}
                />
                <Text style={styles.labelkaffe}>
                    Vad erbjuds mer än kaffe?
                </Text>
                <View style={{ marginVertical: 10, backgroundColor: "#3B555D" }} >
                    <CheckboxFormX
                        style={{ width: '100%', columns: 3,}}
                        dataSource={mockData}
                        itemShowKey="labelCheck"
                        textStyle={{color: '#F5EEDC',
                                    fontSize: 13,
                                    textAlign: 'left',
                                    paddingBottom: 13,}}
                        itemCheckedKey="RNchecked"
                        iconSize={16}
                        formHorizontal={true}

                        labelHorizontal={false}
                        onChecked={(item) => this._onSelect(item)}
                        
                    />
                </View>


      <Text style={styles.labelvar}>Skriv in platsen</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
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
                    data={floor}
                    selectedBtn={(e) => console.log(e)}
                />


      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="LÄGG TILL"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#F5EEDC',
    margin: 20,
    marginLeft: 0,
    fontSize: 13,
  },
  button: {
    marginTop: 40,
    color: 'white',
    backgroundColor: '#CA9D7C',
    borderRadius: 4,
    width: 169,
    height: 45,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#3B555D',
  },
  input: {
    backgroundColor: '#F5EEDC',
    
    height: 40,
    padding: 10,
    borderRadius: 4,
  },label1: {
    color: '#CA9D7C',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    paddingBottom: 28,
},
label2: {
    color: '#F5EEDC',
    fontSize: 17,
    textAlign: 'left',
    paddingBottom: 10,
},
labelvar: {
    color: '#F5EEDC',
    fontSize: 17,
    textAlign: 'left',
    paddingTop: 48,
},
labelkaffe: {
    color: '#F5EEDC',
    fontSize: 17,
    textAlign: 'left',
    paddingBottom: 10,
    paddingTop: 44,
},
label3: {
    color: '#F5EEDC',
    fontSize: 13,
    textAlign: 'left',
    paddingBottom: 13,
},
label: {
    color: '#F5EEDC',
    fontSize: 13,
    textAlign: 'center',
    paddingBottom: 21,
},
labelCheck: {
    color: '#F5EEDC',
    fontSize: 13,
    textAlign: 'left',
    paddingBottom: 13,
},
dropDown: {
    backgroundColor: '#F5EEDC',
    height: 40,
    borderRadius: 4, 
    borderColor: '#F5EEDC',
    width: "100%",
},

});
