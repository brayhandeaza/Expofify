import React, { Component } from 'react'
import {StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import { PlayerImage } from "../../assets/dry/Image";
import { Actions } from 'react-native-router-flux';

// Redux
import { isNotPlayer } from "../Redux/actions/Player";


class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
        this.handleDownwards = this.handleDownwards.bind(this)
        this.handleMore = this.handleMore.bind(this)
    }

    handleDownwards(e) {
        e.stopPropagation()
        Actions.pop()
        this.props.store.getState().Footer.isHome ? Actions.reset("_Home") 
        : this.props.store.getState().Footer.isSearch ? Actions.reset('_Search')
        : this.props.store.getState().Footer.isLibrary ? Actions.reset('_Library') 
        : this.props.store.getState().Footer.isPremium ? Actions.reset('_Premium') : null
        this.props.store.dispatch(isNotPlayer())
    }

    handleMore(e) {
    }

    render() { 
        return ( 
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <View style={styles.HeaderContainer}>
                        <TouchableHighlight underlayColor="#1b1919" onPress={this.handleDownwards}>
                            <Image style={styles.Image} source={PlayerImage.downwards}/>
                        </TouchableHighlight>
                        <Text style={{color: "white"}}>Player</Text>
                        <TouchableHighlight underlayColor="#1b1919" onPress={this.handleMore}>
                            <Image style={styles.Image} source={PlayerImage.more}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.SongImageView}>
                    <Image style={styles.SongImage} source={PlayerImage.songImage}/>
                </View>
                <View style={styles.PlayerContainer}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.SongName}>Tumbala</Text>
                        <Text style={styles.ArtistName}>Chimbala</Text>
                    </View>
                    <View style={styles.ProgressContainer}>
                        <View style={styles.ProgressBar}></View>
                    </View>
                    <View style={styles.SongTimeContainer}>
                        <Text style={styles.SongTimeSeconds}>0.00</Text>
                        <Text style={styles.SongTimeSeconds}>0.00</Text>
                    </View>
                    <View style={styles.SongPlayerContainer}>
                        <Image style={{width: 20, height: 20}} source={PlayerImage.heart}/>
                        <Image style={styles.previous} source={PlayerImage.previous}/>
                        <Image style={styles.PlayButton} source={PlayerImage.playButton}/>
                        <Image style={styles.previous} source={PlayerImage.next}/>
                        <Image style={{width: 20, height: 20}} source={PlayerImage.repeatOff}/>
                    </View>
                    <View style={styles.SongPlayerContainer}>
                        <Image style={{width: 15, height: 15}} source={PlayerImage.devices}/>
                        <Image style={{width: 15, height: 15}} source={PlayerImage.share}/>
                    </View>
                </View>
            </View>
         )
    }
}
 
const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",        
        backgroundColor: "#282828",

        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: 'flex-end'
    },
    Header: {
        width: "100%",
        height: "15%",      
        // backgroundColor: "#000",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    HeaderContainer: {
        width: "100%",
        height: 50,
        // backgroundColor: 'pink',
        paddingRight: 25,
        paddingLeft: 25,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    Image: {
        width: 20,
        height: 20
    },
    SongImage: {
        width: "100%",
        height: "100%"
    },
    SongImageView: {
        width: "100%",
        height: "45%",
        padding: 20,

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    PlayerContainer: {
        padding: 20,
        marginTop: 20,
        width: "100%",
        height: "40%",
    },
    TitleContainer: {
        width:  "100%",
        height: "25%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    SongName: {
        color: "white",
        fontSize: 20
    },
    ArtistName: {
        color: "#919191"
    },
    ProgressContainer: {
        width: "100%",
        height: 3,
        borderRadius: 50,
        backgroundColor: "#4b4a4a"
    },
    ProgressBar: {
        width: "30%",
        height: "100%",
        borderRadius: 50,
        backgroundColor: "rgb(245, 245, 245)",
    
    },
    SongTimeContainer: {
        width: "100%",
        height: 25,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    SongTimeSeconds: {
        color: "#6b6969"
    },
    previous: {
        width: 25,
        height: 25
    },
    SongPlayerContainer: {
        width: "100%",
        height: 100,
        paddingRight: 30,
        paddingLeft: 30,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    PlayButton: {
        width: 55,
        height: 55
    }
})
export default Player