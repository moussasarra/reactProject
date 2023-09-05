import {View, Text, Image, Button} from "react-native";
import logo from "../assets/omra.png";
import ButtonComponent from "./ButtonComponent";

const VolDisplayer = ({ texte, image  }) => {
    return (
       <>
           <View className="w-full px-2 flex justify-center items-center relative ">
               <Image source={image} className="w-[300px] h-[250px] rounded-lg relative" />

               <View className="absolute top-[180px] w-full flex justify-center items-center">
                   <ButtonComponent text="savoir plus " />
               </View>
               <Text className="absolute text-white font-bold text-xl top-[100px] z-10 text-center">
                   {texte}
               </Text>

           </View>

       </>
    );
}

export default VolDisplayer;