import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Servicos from  './pages/Servicos'
import Cart from  './pages/Cart'

import { cores } from './style'

const Tab = createBottomTabNavigator()

export default function Routes() {
    return <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: cores.roxo,
                inactiveTintColor: cores.claro,
                activeBackgroundColor: cores.roxo,
                inactiveBackgroundColor: cores.laranja,
                style: {
                    height: 60,
                },
                labelStyle: {
                    width:'100%',
                    flex:1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                    marginTop:3,
                    paddingTop: 15,
                    backgroundColor: cores.laranja
                },
                keyboardHidesTabBar: true
            }}
        >
            <Tab.Screen name="Servicos" component={Servicos} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    </NavigationContainer>
}