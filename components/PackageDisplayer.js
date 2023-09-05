import {View, Text, Image, Button} from "react-native";
import logo from "../assets/omra.png";
import ButtonComponent from "./ButtonComponent";
import croisiere from "../assets/croisiere.png";

const PackageDisplayer = ({ texte, image  }) => {
    return (
        <View className="w-full px-2 flex justify-center items-center relative ">
            <Image source={image} className="w-[300px] h-[250px] rounded-lg relative" />
            <Text className="absolute text-white font-bold text-xl top-[100px] z-10 text-center">
                {texte}
            </Text>
            <View className="absolute top-[180px] w-full flex justify-center items-center">
                <ButtonComponent text="savoir plus " onPress={
                    () => {
                        console.log("Voir plus");
                    }
                }/>
            </View>
        </View>
    );
}

export default PackageDisplayer;