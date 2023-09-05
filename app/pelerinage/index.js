import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {Text, View, ScrollView} from "react-native";
import ServiceDisplayer from "../../components/serviceDisplayer";
import PelerinageDisplayer    from "../../components/pelerinageDisplayer";
import {Stack, useRouter} from "expo-router";
import  Omra from "../../assets/omra.png";
import { AntDesign } from '@expo/vector-icons';



export default Pelerinage;
function Pelerinage() {
    const router = useRouter();
    const handlePress = () => {
        router.push("/");
    }


    return (
        <View className="bg-white" style={{flex: 1}}>
            <Stack.Screen options={
                {
                    title: "Pelerinage"
                    , headerStyle: {
                        backgroundColor: '#222248',
                    },
                    headerTintColor: '#fff',
                    headerShadowVisible: false ,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={handlePress}>
                            <Text  className="text-white text-sx font-extrabold">
                                <AntDesign name="back" size={18} color="white" />
                                Retour
                            </Text>

                        </TouchableOpacity>
                    ),

                }}/>
            <ScrollView className="w-full flex-1 space-y-5"
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                <View className="bg-white">
                   <PelerinageDisplayer texte="Omra septembre 2023" image={Omra} onPress={
                        () => {
                            console.log("omra");
                        }
                    } />
                </View>
                <View className="bg-white">
                    <PelerinageDisplayer texte="Omra Octobre 2023" image={Omra} onPress={
                        () => {
                            console.log("omra");
                        }
                    } />
                </View>
                <View className="bg-white">
                    <PelerinageDisplayer texte="Omra Novembre 2023" image={Omra} onPress={
                        () => {
                            console.log("omra");
                        }
                    } />
                </View>
            </ScrollView>

        </View>
        );
    };




























