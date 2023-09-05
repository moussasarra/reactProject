import {View, Text, TextInput} from "react-native";

const Inscriptionform = () => {
    return (
        <View className="my-20">
            <View className="mb-1">
                <TextInput className="border-b-[1px] border-gray-600 rounded-lg px-5 " placeholder="Votre email"/>
            </View>
            <View className="mt-5">
                <TextInput className="border-b-[1px] border-gray-600 rounded-lg px-5" placeholder=" Votre Nom"/>
            </View>
            <View className="mt-5">
                <TextInput className="border-b-[1px] border-gray-600 rounded-lg px-5" placeholder="Votre Prénom"/>
            </View>

            <View className="mt-5">
                <TextInput className="border-b-[1px] border-gray-600 rounded-lg px-5" placeholder="Votre Nationalité"/>
            </View>


        </View>
    )
}

export default Inscriptionform;