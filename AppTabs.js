import { NavigationContainer } from '@react-navigation/native'
import { createTabNavigator } from "@react-navigation/Tab";
import { MaterialIcons } from '@expo/vector-icons'

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';
import ProductScreen from './screens/ProductScreen';

const Tab = createTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home'
          component={HomeScreen} 
          options={{
            title: 'Início',
            TabBarIcon: ({color, size}) => (
              <MaterialIcons name='assistant-photo' color={color} size={size} />
            )
          }}
          />

        <Tab.Screen name='Details' component={DetailsScreen}
          options={{
            title: 'Detalhes',
            TabBarIcon: ({color, size}) => (
              <MaterialIcons name='airplanemode-active' color={color} size={size} />
            )
          }}
        />
        
        <Tab.Screen name='About' component={AboutScreen}
          options={{
            title: 'Sobre',
            TabBarIcon: ({color, size}) => (
              <MaterialIcons name='alarm' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name='Product' component={ProductScreen}
          options={{
            title: 'Produto',
            TabBarIcon: ({color, size}) => (
              <MaterialIcons name='add-business' color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}