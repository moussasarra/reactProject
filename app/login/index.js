import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {Stack,useRouter} from "expo-router";
import LogoDispayer from "../../components/LogoDispayer";
import LoginForm from "../../components/LoginForm";
import ButtonComponent from "../../components/ButtonComponent";

const Login = () => {
    const router = useRouter();
    const handlePress = () => {
        console.log("Connexion");
    }
    const OnPressSignup = () => {
        router.push("/signup");
    }
    return (
        <View className="flex-1 justify-center items-center bg-white py-8 px-8">
            <Stack.Screen options={{title:"Connexion"}}/>

            <View className="flex-1">
               <View className="justify-center items-center" style={{flex:1.2}}>
                   <LogoDispayer/>
               </View>
                <View style={{flex:1}}>
                    <Text className="text-2xl text-[#1D84BD]">Connexion</Text>
                    <LoginForm/>
                </View>
                <View style={{flex:1}} className=" justify-between items-center">
                    <View className="flex justify-end items-end w-full">
                        <TouchableOpacity className="text-end"><Text className="text-[#1D84BD] ">Mot de passe oublié?</Text></TouchableOpacity>
                    </View>
                    <View className="py-5 flex justify-center items-center w-full space-y-5">
                        <ButtonComponent text="Se connecter" onPress={handlePress}/>
                        <Text className="text-center">Vous n'avez pas de compte? <TouchableOpacity onPress={OnPressSignup}><Text className="text-[#1D84BD]">Inscrivez-vous</Text></TouchableOpacity></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Login;