import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Text, View, ScrollView} from "react-native";
import ServiceDisplayer from "../../components/serviceDisplayer";
import {Stack, useRouter} from "expo-router";
import  Omra from "../../assets/omra.png";
import  Vol from "../../assets/vol.png";
import Croisiere from "../../assets/croisiere.png";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DuaaComponent from "../../components/DuaaComponent";




export default Duaa;

function Duaa() {
    const router = useRouter();
    const handlePress = () => {
        router.push("/ duaa");
    }
    return (
        <View className="mt-10" style={{flex: 1}}>
            <Stack.Screen options={
                {
                    title: "Nos Services"
                    , headerStyle: {
                        backgroundColor: '#222248',
                    },
                    headerTintColor: '#fff',
                    headerShadowVisible: false ,
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={handlePress}>
                            <Text  className="text-white text-sx font-extrabold">
                                <FontAwesome5 name="praying-hands" size={15} color="white" />
                                Duaa
                            </Text>



                        </TouchableOpacity>


                    ),

                }}/>

            <ScrollView className="w-full flex-1 space-y-5"
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>

                <View className="bg-white">
                    <DuaaComponent texte="Faîtes Votre Omra Avec Nous" image={Omra} onPress={
                        () => {
                            router.push("/pelerinage");
                        }
                    } />
                </View>

                <View className="bg-white">

                    <DuaaComponent texte="Embarquez pour une expérience inoubliable " image={Vol} onPress={
                        () => {
                            router.push("/vol");
                        }
                    } />
                </View>
                <View className="bg-white">
                    <DuaaComponent texte="Vivez l'inoubliable à bord de nos croisières exceptionnelles. " image={Croisiere} onPress={
                        () => {
                            console.log("package ");
                        }
                    } />
                </View>


            </ScrollView>
        </View>

    );
}




const s = StyleSheet.create({
    scrolleEvent:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingBottom:5,
        paddingHorizontal: 5,
        paddingVertical: 5,
    }
})
