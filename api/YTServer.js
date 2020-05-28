import axios from 'axios';
import { YT_KEY } from './YTKey';

const YTServer = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search',
});

YTServer.interceptors.request.use(
  async (config) => {
    // called when request is made.
    config.headers.Accept = 'application/json';
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (err) => {
    // called when error
    return Promise.reject(err);
  }
);

export const getVideos = async (callback) => {
  const response = await YTServer.get(
    `?key=${YT_KEY}&part=snippet&q=beekeeping&maxResults=25`
  )
  callback(response.data);
};

export default YTServer;