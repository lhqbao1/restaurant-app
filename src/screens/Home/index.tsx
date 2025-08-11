import {FlatList, Image, Pressable, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";
import {offers} from "@/src/constants";
import {Offers} from "@/src/types/offers";
import {Fragment} from "react";
import cn from 'clsx'
import {ArrowButton} from '../../components/button/button'
import CartHeader from "@/src/components/header/cart-header";

interface ListItemProps {
    item: Offers;
    onPress: (item: Offers) => void;
}

function ListItem({ item, onPress }: ListItemProps) {
    const isEven = item.id % 2 === 0;
    const pressButton = () => {
        console.log('hehe')
    }
    return (
        <View className={"h-56 rounded-[20px] mb-5"} style={{backgroundColor: `${item.color}`}}>
            <Pressable className={cn("h-full flex relative", isEven ? 'flex-row-reverse' : "flex-row")} onPress={() => onPress(item)}>

                {/* Text */}
                <View className={cn("w-full h-full absolute flex justify-center px-6 gap-6", isEven ? "items-end" : "items-start")}>
                    <Text className="text-4xl font-bold text-wrap text-white">{item.id === 1 ? item.title.split(' ').join('\n') : item.title}</Text>
                    <ArrowButton onPress={pressButton}/>
                </View>

                <View className={"flex-1 w-auto"}></View>

                {/* Image cố định bên phải */}
                <Image
                    source={item.image}
                    resizeMode="contain"
                    className={cn("flex-0 h-full", item.id === 1 ? "w-2/3" : "w-1/2")}
                />
            </Pressable>
        </View>
    );
}

export default function Home() {
    const renderItem = ({ item }: {item: Offers}) => (
        <ListItem item={item} onPress={(data) => console.log('Bạn bấm vào:', data.id)} />
    );

    return (
       <SafeAreaView className={""}>
           <FlatList
               data={offers}
               renderItem={renderItem}
               contentContainerStyle={{ padding: 16 }} // tương đương px-6
               keyExtractor={(item) => item.id.toString()}
               ListHeaderComponent={
                   <CartHeader/>
               }
           />
       </SafeAreaView>
    );
}