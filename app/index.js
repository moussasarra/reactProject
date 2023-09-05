import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Stack, useRouter} from "expo-router";
import ButtonComponent from "../components/ButtonComponent";
import LogoDispayer from "../components/LogoDispayer";
import pelerinage  from "./pelerinage";
import Service from "./service";
import vol from "./vol";
import { AntDesign } from '@expo/vector-icons';
import NavbarComponent from "../components/NavbarComponent";
import Form from "./Form";
import Inscriptionform  from "../components/InscriptionForm";
import Navbar from "../components/NavbarComponent";




export default function Page() {
    const router = useRouter();
    const handlePress = () => {
        router.push("/signup");
    }

  return (

      <SafeAreaProvider className="bg-white mt-5 ">




          <Stack.Screen options=


                            {{title:"Acceuil",
                            headerShown:false,

                            headerLeft: () => (

                    <TouchableOpacity
                        onPress={handlePress}>
                        <Text  className="text-black text-sx font-extrabold">
                            <AntDesign name="back" size={18} color="black" />
                            se connecter
                        </Text>
                    </TouchableOpacity>

                ),


          }}/>

          <SafeAreaView className="flex-1 justify-between ">
              <View className="flex-1 justify-center items-center">

                  <LogoDispayer/>
              </View>

              <View className="flex justify-center items-center" >

                  <ButtonComponent text="rejoignez nous " onPress={handlePress}/>
              </View>

          </SafeAreaView>
          <StatusBar style="dark"/>
      </SafeAreaProvider>

  );
}
