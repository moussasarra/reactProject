import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Text, View, ScrollView} from "react-native";
import {Stack, useRouter} from "expo-router";
import agent from "../../assets/agent.png";
import { AntDesign } from '@expo/vector-icons';
import croisiere from "../../assets/croisiere.png";
import VolDisplayer from "../../components/VolDisplayer";
import PackageDisplayer from "../../components/PackageDisplayer";
import vol from "../../assets/vol.png";




export default Package;

function Package() {
    const router = useRouter();
    const handlePress = () => {
        router.push("/");
    }
    return (
        <View className="mt-10" style={{flex: 1}}>
            <Stack.Screen options={
                {
                    title: "nos croisiere"
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

            <ScrollView className="w-full flex-1 mt-0"
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>

                <View >
                    < PackageDisplayer texte="MARSEILLE -> TUNIS" image={croisiere} onPress={
                        () => {
                            console.log("CROISIERE");
                        }
                    } />
                </View>
                <View >
                    < PackageDisplayer texte="MARSEILLE -> ALGER" image={croisiere} onPress={
                        () => {
                            console.log("CROISIERE");
                        }
                    } />
                </View>
                <View >
                    < PackageDisplayer texte="MARSEILLE -> CORSE" image={croisiere} onPress={
                        () => {
                            console.log("CROISIERE");
                        }
                    } />
                </View>
                <View >
                    < PackageDisplayer texte="ITALIE -> TUNISIE  " image={croisiere} onPress={
                        () => {
                            console.log("CROISIERE");
                        }
                    } />
                </View>
                <View >
                    < PackageDisplayer texte="FRANCE  -> MAROC " image={croisiere} onPress={
                        () => {
                            console.log("CROISIERE");
                        }
                    } />
                </View>
                <View >
                    < PackageDisplayer texte="SETE  -> ALGER" image={croisiere} onPress={
                        () => {
                            console.log("CROISIERE");
                        }
                    } />
                </View>
                <View >
                    < PackageDisplayer texte=" SETE -> SKIKDA" image={croisiere} onPress={
                        () => {
                            console.log("CROISIERE");
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
