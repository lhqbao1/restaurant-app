import { ImageSourcePropType } from "react-native";

export interface Offers {
    id: number;
    title: string;
    image: ImageSourcePropType | undefined;
    color: string
}