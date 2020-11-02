import React, { Component } from 'react'
import {StyleSheet, View, Text, Image, TouchableHighlight} from "react-native";
import {Footer} from 'native-base';
import {Actions} from 'react-native-router-flux'

import { isHome, isSearch, isLibrary, isPremium} from "../Redux/actions/Footer";
import { connect } from "react-redux";


// Dry
import { FooterImage } from '../../assets/dry/Image'

class Foot extends Component {
    constructor(props) {
        super(props)
        this.handleHome = this.handleHome.bind(this)
        this.handleFavotite = this.handleFavotite.bind(this)
        this.handleSell = this.handleSell.bind(this)
        this.handleChats = this.handleChats.bind(this)
    }
    handleHome(e){
        e.stopPropagation()
        Actions.Home()
        this.props.dispatch(isHome())
    }
    handleFavotite(e){
        e.stopPropagation()
        this.props.dispatch(isSearch())
        Actions.Search()
    }
    handleSell(e){
        e.stopPropagation()
        this.props.dispatch(isLibrary())
        Actions.Library()
    }
    handleChats(e){
        e.stopPropagation()
        this.props.dispatch(isPremium())
        Actions.Premium()
    }
    render() {         
        return ( 
            
           <Footer style={this.props.state.Player.isPlayer ? styles.None: styles.Footer} >
                {/* Home */}
                <TouchableHighlight style={styles.Touch} underlayColor="transparent"  onPress={this.props.state.Footer.isHome ? () => {} : this.handleHome}>
                    <View  style={styles.Container} >
                        <Image style={styles.Icon} underlayColor="transparent" source={this.props.state.Footer.isHome ? FooterImage.HomeOn : FooterImage.HomeOff }/>
                        <Text style={{fontSize: 10, color: this.props.state.Footer.isHome ? "#2ab859" : "#rgba(95, 95, 95, 1)" }}>Home</Text> 
                    </View>
                </TouchableHighlight>
                {/* Favorites */}
                <TouchableHighlight style={styles.Touch} underlayColor="transparent" onPress={this.props.state.Footer.isSearch ? () => {} : this.handleFavotite}>
                    <View style={styles.Container}>
                        <Image style={styles.Icon} source={this.props.state.Footer.isSearch ? FooterImage.SearchOn : FooterImage.SearchOff}/>
                        <Text style={{fontSize: 10, color: this.props.state.Footer.isSearch ? "#2ab859" : "#rgba(95, 95, 95, 1)" }}>Search</Text> 
                    </View>
                </TouchableHighlight>
                {/* Sell */}
                <TouchableHighlight style={styles.Touch} underlayColor="transparent" onPress={this.props.state.Footer.isLibrary ? () => {} : this.handleSell}>
                    <View style={styles.Container}>
                        <Image style={styles.Icon} source={this.props.state.Footer.isLibrary ? FooterImage.LibraryOn : FooterImage.LibraryOff}/>
                        <Text style={{fontSize: 10, color: this.props.state.Footer.isLibrary ? "#2ab859" : "#rgba(95, 95, 95, 1)" }}>Library</Text> 
                    </View>
                </TouchableHighlight>
                {/* Chat */}
                <TouchableHighlight style={styles.Touch} underlayColor="transparent" onPress={this.props.state.Footer.isPremium ? () => {} : this.handleChats}>
                    <View style={styles.Container}>
                        <Image style={styles.Icon} source={this.props.state.Footer.isPremium ? FooterImage.PremiumOn : FooterImage.PremiumOff}/>
                        <Text style={{fontSize: 10, color: this.props.state.Footer.isPremium ? "#2ab859" : "#rgba(95, 95, 95, 1)" }}>Premium</Text> 
                    </View>
                </TouchableHighlight>            
           </Footer>
         )
    }
}


const styles = StyleSheet.create({
    None: {
        display: "none"
    },
    Footer: {
        backgroundColor: "#282828",
        borderTopWidth: 0,
        borderRightColor: "red",

        display: 'flex',
        justifyContent: "space-around"
    },
    Touch: {
        // backgroundColor: "pink",
        width: 60,
        height: 60,
        
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    },
    Container: {
        // backgroundColor: "pink",
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Icon: {
        width: 20,
        height: 20,
        marginBottom: 5
    },
    title: {
        fontSize: 10,
        color: "#rgba(95, 95, 95, 1)",
    }   
})


const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Foot)