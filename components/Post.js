import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Post extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<Image source={this.props.thumbnail} style={{width: this.props.width, height: this.props.height}}/>*/}
                <View style={styles.titleSection}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                    <Image source={this.props.thumbnail} style={{height: this.props.height*2}}/>
                    {/*<View style={{flexBasis:50, height: 50, backgroundColor: 'powderblue'}} />*/}
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flexGrow: 1, backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center'}} >
                            <Text style={styles.subText}>Score: {this.props.score}</Text>
                        </View>
                        <View style={{flexGrow: 1, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}} >
                            <Text style={styles.subText}>Comments: {this.props.comments}</Text>
                        </View>
                        {/*<View style={{flexGrow: 1, backgroundColor: 'skyblue'}} />*/}
                        <View style={{width: 0, height: 50, backgroundColor: 'powderblue'}} />
                    </View>
                    <Text style={styles.description}>
                        Posted by <Text style={{textDecoration: 'underline'}}> {this.props.author}</Text> on <Text style={{textDecoration: 'underline'}}> {this.props.date}</Text>
                    </Text>
                </View>
                    {/*<Text>*/}
                        {/*<Text>T</Text>*/}
                        {/*<Text>T</Text>*/}
                    {/*</Text>*/}
                    {/*<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />*/}
                    {/*<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />*/}
                    {/*<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />*/}
                    {/*<View style={{flex: 1, flexDirection: 'column'}}>*/}
                        {/*<View style={{flex: 0.5, height: 50, backgroundColor: 'powderblue'}} />*/}
                        {/*<View style={{flex: 0.5,height: 50, backgroundColor: 'skyblue'}} />*/}
                    {/*</View>*/}

                {/*<View style={styles.imgSection}>*/}
                    {/*<Image source={this.props.thumbnail} style={{width: this.props.width*2, height: this.props.height*2}}/>*/}
                {/*</View>*/}
                {/*<Text>*/}
                    {/*{"\n"}*/}
                    {/*{this.props.date}{"\n"}*/}
                    {/*{this.props.author}{"\n"}*/}
                    {/*{this.props.score}{"\n"}*/}
                    {/*{this.props.comments}*/}
                {/*</Text>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleSection: {
        alignItems: 'stretch',
        backgroundColor: '#fff',
        marginBottom: '20px',
    },

    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    subText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    description: {
        fontSize: 17,
        fontWeight: 'italic',
    },

    imgSection: {
        alignItems: 'stretch',
        backgroundColor: 'gray',
        flex: 0.3
    },
    img: {

    }




});