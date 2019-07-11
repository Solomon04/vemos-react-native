import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as axios from 'react-native-axios';
import Post from "./components/Post";

export default class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {post: {}, url: "https://api.reddit.com/r/pics/hot.json"};
        //this.formatDate = this.formatDate.bind(this);
    }

    componentDidMount(){
        axios.get(this.state.url, {
            params: {
                sort: "new",
                limit: 1
            }
        }).then(res => {
            let children = res.data.data.children;
            for (let item of children){
                if(item.data.thumbnail !== "self"){
                    //this.state.post = item.data;
                    console.log(item.data);
                    this.setState({ post: item.data });
                    break;
                }
            }
            //console.log(this.state.post);
        }).catch(err => {
            console.log(err.message);
        });
    }

    formatDate(value){
        let date = new Date(value*1000);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        }
    }

    render(){
        return (
            <Post
                data='Yo'
                thumbnail={this.state.post.thumbnail}
                height={this.state.post.thumbnail_height}
                width={this.state.post.thumbnail_width}
                title={this.state.post.title}
                date={this.formatDate(this.state.post.created)}
                author={this.state.post.author}
                score={this.state.post.score}
                comments={this.state.post.num_comments}
            />
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
