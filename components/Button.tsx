import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors";

type Props = {
    text: string;
    isGray?: boolean;
    isBlue?: boolean;
    onPress: VoidFunction;
}

export function Button(props: Props) {
    let backgroundColor = colors.button;

    if (props.isGray) {
        backgroundColor = colors.buttonGray;
    } else if (props.isBlue) {
        backgroundColor = colors.blue;
    }

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 96,
        width: 96,
        borderRadius: 48,
        backgroundColor: colors.button,
        justifyContent: "center",
        alignItems: "center",        
        margin: 5
    },
    text: {
        color: "#fff",
        fontSize: 36
    }
});