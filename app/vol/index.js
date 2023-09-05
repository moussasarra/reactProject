import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Text, View, ScrollView} from "react-native";
import {Stack, useRouter} from "expo-router";
import agent from "../../assets/agent.png";
import { AntDesign } from '@expo/vector-icons';
import croisiere from "../../assets/croisiere.png";
import VolDisplayer from "../../components/VolDisplayer";
import vol from "../../assets/vol.png";
import PackageDisplayer from "../../components/PackageDisplayer";
import NavbarComponent from "../../components/NavbarComponent";
import Navbar from "../../components/NavbarComponent";




export default Vol;

function Vol() {
    const router = useRouter();
    const handlePress = () => {
        router.push("/");
    }
    return (
        <View className="mt-10" style={{flex: 1}}>
            <Stack.Screen options={
                {
                    title: "Billeterie"
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


            <ScrollView className="w-full h-24 flex-1 mt-10  "
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>






                <View  ClassName="mt-10">
                    < VolDisplayer texte="tcheque" image={vol} onPress={
                        () => {
                            console.log("vol");
                        }
                    } />
                </View>

                <View  >
                    < VolDisplayer texte="France" image={vol} onPress={
                        () => {
                            console.log("vol");
                        }
                    } />
                </View>
                <View >
                    < VolDisplayer texte="TUNISIE" image={vol} onPress={
                        () => {
                            console.log("vol");
                        }
                    } />
                </View>
                <View >
                    < VolDisplayer texte="MAROC" image={vol} onPress={
                        () => {
                            console.log("vol");
                        }
                    } />
                </View>


                <View ClassName="bg-white">
                    < VolDisplayer texte="ALGERIE" image={vol} onPress={
                        () => {
                            console.log("vol");
                        }
                    } />
                </View>
                <View >
                    < VolDisplayer texte="ABU DHABI" image={vol} onPress={
                        () => {
                            console.log("vol");
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
