import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoListScreen from './screens/VideoListScreen';
import YTViewerScreen from './screens/YTViewerScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Video List"
          component={VideoListScreen}
          options={{ title: 'Beekeeping Videos' }}
        />
        <Stack.Screen name="Video Viewer" component={YTViewerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderWidth: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
