import * as RootNavigation from './RootNavigation';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Modal from "react-native-modalbox";
import {verticalScale} from './Utils/ScreenUtils';

const {width, height } = Dimensions.get("window");

export default function PopUpShop() {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View>
            <Button title="Press Me!" />
            <Modal>
            <View>
                <Text>AndroidVille</Text>
            </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    PopUpShop: {
      color: '#3B555D'
    },
  });