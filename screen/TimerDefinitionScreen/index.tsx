import { StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
import { Display } from "./Display";
import { KeyBoard } from "./KeyBoard";

export default function TimerDefinitionScreen() {
    return (
        <View style={styles.container}>
            <Display />
            <KeyBoard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background
    }
});