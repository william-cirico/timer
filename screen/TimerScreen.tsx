import { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTimer } from "../context/TimerContext";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Button } from "../components/Button";

export default function TimerScreen() {
    const { timer, setIsTimerStarted } = useTimer();
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<NodeJS.Timer>();

    const getHoursFromTimerText = (text: string) => +timer.padStart(6, "0").slice(0, 2);
    const getMinutesFromTimerText = (text: string) => +timer.padStart(6, "0").slice(2, 4);
    const getSecondsFromTimerText = (text: string) => +timer.padStart(6, "0").slice(4, 6);

    function startTimer() {
        timerRef.current = setInterval(() => {
            setRemainingSeconds(prev => prev - 1);
        }, 1000);
        setIsPaused(false);
    }

    useEffect(() => {
        const hours = getHoursFromTimerText(timer);
        const minutes = getMinutesFromTimerText(timer);
        const seconds = getSecondsFromTimerText(timer);

        setRemainingSeconds(hours * 3600 + minutes * 60 + seconds);

        startTimer();

        () => {
            return clearInterval(timerRef.current);
        }
    }, []);

    function stopTimer() {
        clearInterval(timerRef.current);
        setIsPaused(true);
    }

    const getRemainingHours = () => Math.floor(remainingSeconds / 60 / 60);
    const getRemainingMinutes = () => Math.floor((remainingSeconds / 60) % 60);
    const getRemainingSeconds = () => Math.floor(remainingSeconds % 60);

    return (
        <View style={styles.container}>
            <AnimatedCircularProgress
                size={280}
                width={5}
                fill={100}
                style={{ margin: 80 }}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
            >
                {
                    () => (
                        <Text style={styles.text}>{getRemainingHours()}:{getRemainingMinutes()}:{getRemainingSeconds()}</Text>
                    )
                }
            </AnimatedCircularProgress>
            <View style={styles.row}>
                <Button text="×" onPress={() => setIsTimerStarted(false)} />
                {
                    !isPaused ?
                    <Button text="⏸" onPress={stopTimer} isBlue /> :
                    <Button text="▶" onPress={startTimer} isBlue />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: {
        fontSize: 60,
        color: "#fff"
    },
    row: {
        flexDirection: "row"
    }
});