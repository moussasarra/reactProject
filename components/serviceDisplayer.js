import {View, Text, Image, Button} from "react-native";
import logo from "../assets/omra.png";
import ButtonComponent from "./ButtonComponent";

const ServiceDisplayer = ({ texte , image, onPress   }) => {
    return (
        <View className="w-full px-2 flex justify-center items-center relative ">
            <Image source={image} className="w-[300px] h-[250px] rounded-lg relative"/>
            <Text className="absolute text-white font-bold text-l top-[100px] z-10 text-center">
                {texte}
            </Text>

            <View className="absolute top-[180px] w-full flex justify-center items-center">
               <ButtonComponent text="Voir plus" onPress={onPress}/>
            </View>

        </View>
    );
}

export default ServiceDisplayer;