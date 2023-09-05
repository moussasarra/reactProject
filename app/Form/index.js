import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {Stack,useRouter} from "expo-router";
import LogoDispayer from "../../components/LogoDispayer";
import LoginForm from "../../components/LoginForm";
import ButtonComponent from "../../components/ButtonComponent";
import { AntDesign } from '@expo/vector-icons';
import InscriptionForm from "../../components/InscriptionForm";
import Inscriptionform from "../../components/InscriptionForm";

const Form = () => {
    const router = useRouter();
    const handlePress = () => {
        console.log("formulaire");
    }
    const OnPressSignup = () => {
        router.push("/Form");
    }
    return (
        <View className="flex-1 justify-center items-center bg-white py-8 px-8">
            <Stack.Screen options={{title:"Formulaire"}}/>

            <View className="flex-1">

                <View style={{flex:1}}>
                    <Text className="text-2xl text-[#1D84BD]">Formulaire d'inscription </Text>
                    <Inscriptionform/>
                </View>
                <View style={{flex:1}} className=" justify-between items-center">
                    <View className="flex justify-end items-end w-full h-20" >
                        <TouchableOpacity className="text-end" ><Text className="text-[#1D84BD] " >Remettre à zero le formulaire</Text></TouchableOpacity>
                    </View>
                    <View className="py-5 flex justify-center items-center w-full space-y-5">
                        <ButtonComponent text="Envoyer" onPress={handlePress}/>
                        <Text className="text-center"><TouchableOpacity onPress={OnPressSignup}><Text className="text-[#1D84BD]"></Text></TouchableOpacity></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Form;