import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Component } from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>This will be the home page </Text>
                <Text>These other lines are here </Text>
                <Text>So you can see some text in the app </Text>
                <Header message="Press to login" />
            </View>
        )
    }
}