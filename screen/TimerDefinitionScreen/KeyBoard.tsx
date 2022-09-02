import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../../components/Button";
import { useTimer } from "../../context/TimerContext";

export function KeyBoard() {
    const { timer, setTimer, setIsTimerStarted } = useTimer();

    function onKeyPress(key: string) {
        if (timer.length == 6) {
            return;
        }

        setTimer(prev => prev + key);
    }

    function onBackSpaceKeyPress() {
        setTimer(timer.slice(0, -1));
    }

    return (
        <>
            <View style={styles.row}>
                <Button text="1" onPress={() => onKeyPress("1")} />                
                <Button text="2" onPress={() => onKeyPress("2")} />                
                <Button text="3" onPress={() => onKeyPress("3")} />                
            </View>   
            <View style={styles.row}>
                <Button text="4" onPress={() => onKeyPress("4")} />                
                <Button text="5" onPress={() => onKeyPress("5")} />                
                <Button text="6" onPress={() => onKeyPress("6")} />                
            </View>   
            <View style={styles.row}>
                <Button text="7" onPress={() => onKeyPress("7")} />                
                <Button text="8" onPress={() => onKeyPress("8")} />                
                <Button text="9" onPress={() => onKeyPress("9")} />                
            </View>   
            <View style={styles.row}>
                <Button text="00" onPress={() => onKeyPress("00")} />                
                <Button text="0" onPress={() => onKeyPress("0")} />                
                <Button text="⌫" isBlue onPress={onBackSpaceKeyPress} />                
            </View>   
            <View style={styles.footerContainer}>
                {
                    !!timer.length && <Button text="▶" isBlue onPress={() => setIsTimerStarted(true)} />
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center"
    },
    footerContainer: {
        alignItems: "center",
        marginTop: 30
    }
});