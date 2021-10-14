import { Component } from "react";
import { View } from "react-native";

export default class LoadingService{
    static load(cb){
        setTimeout(cb,3000);
    }
}