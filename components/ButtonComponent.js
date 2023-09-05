import {View, Text, TouchableOpacity} from "react-native";

const ButtonComponent = ({text ,onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} className="px-2 w-[70%] rounded-lg py-2 bg-[#1D84BD]">
            <Text className="text-xl text-center text-white">{text}</Text>
        </TouchableOpacity>

    )
}
export default ButtonComponent;