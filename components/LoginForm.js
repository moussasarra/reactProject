import {View, Text, TextInput} from "react-native";

const LoginForm = () => {
    return (
        <View className="my-4">
            <View className="mb-8">
                <TextInput className="border-b-[1px] border-gray-600 rounded-lg " placeholder="Votre email"/>
            </View>
            <View className="">
                <TextInput className="border-b-[1px] border-gray-600 rounded-lg " placeholder="Mot de passe"/>
            </View>

        </View>
    )
}

export default LoginForm;