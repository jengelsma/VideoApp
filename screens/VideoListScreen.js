import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Image } from 'react-native-elements';
import { BaseRouter } from '@react-navigation/native';
import { getVideos } from '../api/YTServer';

const VideoListScreen = ({ navigation }) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos((data) => {
      //console.log('received: ', data);
      setVideos(data.items);
    });
  }, []);

  const renderVideo = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Video Viewer', item);
        }}
      >
        <ListItem
          key={index}
          chevron
          title={item.snippet.title}
          leftElement={
            <Image 
              source={{uri: item.snippet.thumbnails.default.url}}
              style={{ width: 100, height: 55 }}
            />
          }
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}> 
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        extraData={videos}
        renderItem={renderVideo} // {index: i, item: {...}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
  },
});

export default VideoListScreen;
