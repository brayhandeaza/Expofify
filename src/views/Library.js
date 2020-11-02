import React, { Component } from 'react'
import { StyleSheet ,View, Text} from 'react-native'

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.Library} >
                <Text style={{color: "white"}}>Library</Text>
            </View>
         )
    }
}
 


const styles = StyleSheet.create({
    Library: {
        flex: 1,
        backgroundColor: "#1b1919",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Library