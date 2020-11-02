import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux';

// Redux
import { connect } from "react-redux"
import { isPlayer } from '../redux/actions/Player';


// Image
import { PlayerImage } from '../../assets/dry/Image';
import { Thumbnail, Footer } from 'native-base';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleOnPress = this.handleOnPress.bind(this)
    }
    handleOnPress(e){
        e.stopPropagation()
        this.props.dispatch(isPlayer())
        Actions.player()    
    }
    render() { 
        return ( 
                <TouchableHighlight style={this.props.state.Player.isPlayer ? styles.None : {} } underlayColor="#282828" onPress={this.props.state.Player.isPlayer ? () => {} : this.handleOnPress}>
                    <View style={styles.Container} >
                        <View style={styles.ProgressBox}>
                            <View style={styles.ProgressBar}></View>
                        </View>
                        <View style={styles.Player}>
                            <View style={styles.ImageBox}>
                                <Image style={styles.Image}  source={PlayerImage.player}/>
                            </View>
                            <View style={styles.TitleContainer}>
                                <View style={styles.TitleBox}>
                                    <Text style={styles.title}>Tumbala</Text>
                                    <Image style={styles.point} source={PlayerImage.point}/>
                                    <Text style={styles.titleArtist}>Chimbala</Text>
                                </View>
                                <View style={styles.TitleBox}>
                                    <Image style={styles.devices} source={PlayerImage.devices}/>
                                    <Text style={styles.title}>Devices Available</Text>
                                </View>
                            </View>
                            <View style={styles.ImageBox}>
                                <Image style={styles.play} source={PlayerImage.play}/>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
         )
    }
}
 
 
const styles = StyleSheet.create({
    None: {
        display: "none"
    },
    Container: {
        width: "100%",
        height: 50
    },
    ProgressBox: {
        width: "100%",
        height: 1,
        backgroundColor: "#4b4a4a"
    },
    ProgressBar: {
        width: "30%",
        height: "100%",
        backgroundColor: "white"
    },
    Player: {
        width: "100%",
        height: 50,
        borderBottomColor: "#212221",
        borderBottomWidth: 2,
        backgroundColor: "#282828",

        display: "flex",
        flexDirection: "row"
    },
    ImageBox: {
        width: "13%",
        height: 50,

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Image: {
        width: "100%",
        height: "100%"
    },
    play: {
        width: 25,
        height:  25
    },
    TitleContainer: {
        width: "74%",
        height: 50,
        paddingLeft: 10,

        display: "flex",
        flexDirection: 'column',
        justifyContent: "center"
    }, 
    TitleBox: {
        width: "100%",
        height: 20,
        
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 12,
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    titleArtist: {
        color: "#919191",
        fontSize: 12
        
    },
    point: {
        // backgroundColor: "pink",
        width: 5,
        height: 5,
        marginLeft: 5,
        marginRight: 5
    },
    devices: {
        width: 10,
        height: 10,
        marginRight: 5
    }



})

const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps)(Player)



