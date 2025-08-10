import {Text, View} from "react-native";
import {Link} from "expo-router";


export default function Home() {
    return (
        <View>
            <Text>Home Screen</Text>
            <Link href={{
                pathname: '/profile',
                params: { id: 'profile' }
            }}>
                Go to Profiler
            </Link>
        </View>
    );
}