import React, { Component } from 'react'
import { StyleSheet ,View, Text} from 'react-native'

class Premium extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.Premium} >
                <Text style={{color: "white"}}>Premium</Text>
            </View>
         )
    }
}
 


const styles = StyleSheet.create({
    Premium: {
        flex: 1,
        backgroundColor: "#1b1919",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Premium