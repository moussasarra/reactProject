import {View, Text, ScrollView} from "react-native";
import {Stack} from "expo-router";
import LogoDispayer from "../../components/LogoDispayer";
import ButtonComponent from "../../components/ButtonComponent";
import SignUpForm from "../../components/SignUpForm";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";


const Signup = () => {

    return (
        <View className="flex-1 justify-center items-center bg-white py-8 px-2">
            <Stack.Screen options={{title:"Inscription"}}/>
            <KeyboardAwareScrollView
                extraScrollHeight={1}
                enableOnAndroid
                keyboardShouldPersistTaps="handled"
            >
            <ScrollView className="w-full flex-1 mt-0"
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
            >
                <View className="flex-1">
                    <View className="justify-center items-center" style={{flex:1}}>
                        <LogoDispayer/>
                    </View>
                    <View style={{flex:1}}>
                        <Text className="text-2xl text-[#1D84BD]">Connexion</Text>
                        <SignUpForm/>
                    </View>

                </View>
            </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    )
}
export default Signup;