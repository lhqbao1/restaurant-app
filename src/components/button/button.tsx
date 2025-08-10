import { View, Text, Pressable, Image } from "react-native";
import {images} from '@/src/constants'

export const CartButton = ({ onPress }: { onPress: () => void }) => {
    return(
        <Pressable
            onPress={onPress}
            className="flex-row items-center justify-between bg-amber-400 px-4 py-3 rounded-lg"
        >
            <Image
                source={images.bag}
                className="w-5 h-5"
                resizeMode="contain"
            />
        </Pressable>
    )
}

export const ArrowButton = ({ onPress }: { onPress: () => void }) => {
    return(
        <Pressable
            onPress={onPress}
            className={""}
        >
            <Image
                source={images.arrowRight}
                className="w-10 h-6"
                resizeMode="contain"
            />
        </Pressable>
    )
}