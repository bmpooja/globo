import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn }
        }
        )
    }
    render() {
        let display = this.state.isLoggedIn ? "sample user" : this.props.message;
        return (
            <View>
                <Text>Header sentense below : </Text>
                <Text onPress={this.toggleUser}> {display}</Text>
            </View>
        )
    }
}
export default Header