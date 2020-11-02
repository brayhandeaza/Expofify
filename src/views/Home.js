import React, { Component } from 'react'
import { StyleSheet, View, Text, Animated, PanResponder } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(0)
        }
    }

    render() {
        return (
            <View style={styles.Home} >
                <Text style={{color: "white"}}>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Home: {
        flex: 1,
        backgroundColor: "#1b1919",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Home