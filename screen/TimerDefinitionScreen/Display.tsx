import { StyleSheet, Text, View } from "react-native";
import { useTimer } from "../../context/TimerContext";

export function Display() {
    const { timer } = useTimer();

    function getSeconds(timer: string): string {
        let seconds = "";

        if (!timer.length) {
            seconds = "00";
        } else if (timer.length <= 2) {
            seconds = timer.slice(0, 2);                
        } else if (timer.length <= 3) {
            seconds = timer[1] + "0";
        } else if (timer.length <= 4) {
            seconds = timer.slice(2, 4);
        } else {
            seconds = timer.slice(4, 6);
        }

        return formatTime(seconds);
    }

    function getMinutes(timer: string): string {
        let minutes = "";

        if (timer.length <= 2) {
            minutes = "00";
        } else if (timer.length <= 3) {
            minutes = timer[0];        
        } else if (timer.length <= 4) {
            minutes = timer.slice(0, 2);
        } else if (timer.length <= 5) {
            minutes = timer.slice(1, 3);
        } else {
            minutes = timer.slice(2, 4);
        }

        return formatTime(minutes);
    }

    function getHours(timer: string): string {
        let hours = "";

        if (timer.length <= 4) {
            hours = "00";
        } else if (timer.length <= 5) {
            hours = timer[0];
        } else {
            hours = timer.slice(0, 2);
        }

        return formatTime(hours);
    }

    const formatTime = (time: string) => time.length < 2 ? "0" + time : time;

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>
                {getHours(timer)}<Text style={styles.timerLabel}>h</Text>
            </Text>
            <Text style={styles.timerText}>
                {getMinutes(timer)}<Text style={styles.timerLabel}>m</Text>
            </Text>
            <Text style={styles.timerText}>
                {getSeconds(timer)}<Text style={styles.timerLabel}>s</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 10
    },
    timerText: {
        fontSize: 72,
        marginHorizontal: 10,
        color: "#8D8D8D"
    },
    timerLabel: {
        fontSize: 32
    }
});