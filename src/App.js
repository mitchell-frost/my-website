import React from 'react';
import './App.css';
import Footer from './Footer'
import MainContent from './MainContent';
import Flame from './flame';
import About from './about';
import Projects from './projects';
import Contact from  './contact';
import Header from './Header';
import './loader';
/*import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
*/
function App() {
  return (
    <div>  
      <About />
      <Contact />
      <Projects />
    </div> 
  );
}

export default App;
