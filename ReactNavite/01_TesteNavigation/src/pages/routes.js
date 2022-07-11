import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Home from './Home';
import Procurar from './Procurar';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator> 
            <Tab.Screen name="Home" component={Home}/>

            <Tab.Screen name="Procurar" component={Procurar}/>
        </Tab.Navigator>
    )
}