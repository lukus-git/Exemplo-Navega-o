import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';
import ProductScreen from './screens/ProductScreen';

const Tab = createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={HomeScreen} options={{
          title: 'Inicio',
          tabBarIcon: ({color, size}) =>(
            <Ionicons name='bag' color={color} size={size} />
          )
        }} />
        <Tab.Screen name='Details' component={DetailsScreen} options={{
          title: 'Detalhes',
          tabBarIcon: ({color, size}) =>(
            <Ionicons name='bag' color={color} size={size} />
          )
        }} />
        <Tab.Screen name='About' component={AboutScreen} options={{
          title: 'Sobre',
          tabBarIcon: ({color, size}) =>(
            <Ionicons name='bag' color={color} size={size} />
          )
        }} />
        <Tab.Screen name='Product' component={ProductScreen} options={{
          title: 'Produtos',
          tabBarIcon: ({color, size}) =>(
            <Ionicons name='bag' color={color} size={size} />
          ) 
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}