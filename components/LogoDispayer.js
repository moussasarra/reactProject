import {View, Text, Image} from "react-native";
import logo from "../assets/logo.png";

const LogoDispayer = () => {
    return (
        <View className="">
            <Image source={logo} style={
                {
                    width: 200,
                    height: 200,
                    resizeMode: 'contain'
                }
            } />
        </View>
    )
}

export default LogoDispayer;