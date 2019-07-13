import React from 'react';
import {View, Text, Image, StyleSheet, Linking, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Post extends React.Component {

    // goToURL(url){
    //     Linking.openURL(url).catch(err => console.error('An error occurred', err));
    // }

    //static propTypes = { url: React.PropTypes.string };
    handleClick = () => {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (supported) {
                Linking.openURL(this.props.url);
            } else {
                console.log("Don't know how to open URI: " + this.props.url);
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                {/*<Image source={this.props.thumbnail} style={{width: this.props.width, height: this.props.height}}/>*/}
                <View style={styles.titleSection}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                    <Image source={this.props.thumbnail} style={{height: this.props.height*2}}/>
                    {/*<View style={{flexBasis:50, height: 50, backgroundColor: 'powderblue'}} />*/}
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}} >
                            <Icon.Button name="thumbs-up" size={24} backgroundColor="#3b5998">
                                <Text style={{ fontFamily: 'Helvetica', fontSize: 18,  fontWeight: 'bold', color: 'white'}}>
                                    {this.props.score}
                                </Text>
                            </Icon.Button>
                        </View>
                        <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}} >
                            {/*<Icon name="rocket" size={30} color="#900" />*/}
                            {/*<Text style={styles.subText}>Comments: {this.props.comments}</Text>*/}
                            <Icon.Button name="comment" size={24} backgroundColor="#3b5998">
                                <Text style={{ fontFamily: 'Helvetica', fontSize: 18,  fontWeight: 'bold', color: 'white'}}>
                                    {this.props.comments}
                                </Text>
                            </Icon.Button>
                        </View>
                        {/*<View style={{flexGrow: 1, backgroundColor: 'skyblue'}} />*/}
                        <View style={{width: 0, height: 50, backgroundColor: 'powderblue'}} />
                    </View>
                    <View style={{alignItems: 'stretch', justifyContent: 'center', marginVertical: '25px'}}>
                        <Button
                            onPress={this.handleClick}
                            title="View Post On Reddit"
                            color="#007bff"
                            accessibilityLabel="View Post On Reddit"
                            style={{padding: '20px'}}
                        />
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.description}>
                            Posted by <Text style={{textDecorationLine: 'underline', fontWeight: 'italic'}}> {this.props.author}</Text> on <Text style={{textDecorationLine: 'underline'}}> {this.props.date}</Text>
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245, 245, 245)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleSection: {
        alignItems: 'stretch',
        backgroundColor: '#fff',
        marginBottom: '20px',
    },

    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
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