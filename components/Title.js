import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Post extends React.Component {
    render() {
        return (
            <View>
                <Image source={this.props.thumbnail} style={{width: this.props.width, height: this.props.height}}/>
                <Text>
                    {this.props.title}{"\n"}
                    {this.props.date}{"\n"}
                    {this.props.author}{"\n"}
                    {this.props.score}{"\n"}
                    {this.props.comments}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});