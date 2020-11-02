import React, { Component } from 'react'
import { StyleSheet ,View, Text} from 'react-native'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <View style={styles.Search} >
                <Text style={{color: "white"}}>Search</Text>
            </View>
         )
    }
}
 


const styles = StyleSheet.create({
    Search: {
        flex: 1,
        backgroundColor: "#1b1919",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Search