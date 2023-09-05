import {View, Text, TextInput, KeyboardAvoidingView} from "react-native";
import ButtonComponent from "./ButtonComponent";
import {useState} from "react";
import {register} from "../services/user";
const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");

    const handlePress = async () => {
        console.log(email, password, nom, prenom);
        const response = await register(nom, prenom, email, password)
        console.log(response);
    }
    return (
            <View className="my-4">
                <View className="mb-5">
                    <TextInput className="border-b-[1px] border-gray-600 rounded-lg " placeholder="Votre email"
                               value={email}
                                 onChangeText={setEmail}
                    />
                </View>
                <View className="mb-5">
                    <TextInput className="border-b-[1px] border-gray-600 rounded-lg " placeholder="Nom"
                                 value={nom}
                                    onChangeText={setNom}
                    />
                </View>
                <View className="mb-5">
                    <TextInput className="border-b-[1px] border-gray-600 rounded-lg " placeholder="Prénoms"
                                    value={prenom}
                                    onChangeText={setPrenom}
                    />
                </View>
                <View className="">
                    <TextInput className="border-b-[1px] border-gray-600 rounded-lg " placeholder="Mot de passe"
                                    value={password}
                                    onChangeText={setPassword}
                    />
                </View>
                <View style={{flex:1}} className=" justify-between items-center mt-5">
                    <View className="flex justify-end items-end w-full">
                        <Text className=" text-end">En vous inscrivant, vous acceptez nos <Text className="text-[#1D84BD]">Termes</Text>  et<Text className="text-[#1D84BD]"> Conditions générales.</Text></Text>
                    </View>
                    <View className="py-5 flex justify-center items-center w-full space-y-5">
                        <ButtonComponent text="S'inscrire" onPress={handlePress}/>
                        <Text className="text-center">Vous avez déjà un compte?, <Text className="text-[#1D84BD]"> Connexion</Text></Text>
                    </View>
                </View>
            </View>


    )
}

export default SignUpForm;