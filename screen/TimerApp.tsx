import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { TimerProvider, useTimer } from "../context/TimerContext";
import { colors } from "../styles/colors";
import TimerDefinitionScreen from "./TimerDefinitionScreen";
import TimerScreen from "./TimerScreen";

export default function TimerApp() {
    const { isTimerStarted } = useTimer();

    return (
        <View style={styles.container}>
            {
                isTimerStarted ?
                    <TimerScreen /> :
                    <TimerDefinitionScreen />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});