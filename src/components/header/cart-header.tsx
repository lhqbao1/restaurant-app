import {Image, Text, View} from "react-native";
import {images} from "@/src/constants";

export default function CartHeader(){
    return(
        <View style={{ marginBottom: 16 }} className={"flex flex-row justify-between"}>
            <View>
                <Text className={"text-base font-semibold color-[#FE8C00] uppercase"}>Delivery to</Text>
                <Text>Chọn Category</Text>
            </View>

            <View className={"p-3 bg-black rounded-full"}>
                <Image
                    source={images.bag}
                    resizeMode="contain"
                    className={"size-6"}
                />
            </View>
        </View>
    )
}