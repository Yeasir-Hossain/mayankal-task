import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import OnProcess from './components/OnProcess';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // header: ({ navigation, route, options }) => {
          //   return;
          // },
          tabBarIcon: ({ focused, size, color }) => {
            let iconname;
            if (route.name === 'Screen_A') {
              iconname = 'atlassian';
              size = focused ? 25 : 20;
              color = focused ? 'pink' : 'grey'
            }
            else if (route.name === 'Screen_B') {
              iconname = 'btc'
              size = focused ? 25 : 20
              color = focused ? 'pink' : 'grey'
            }
            else if (route.name === 'Screen_C') {
              iconname = 'btc'
              size = focused ? 25 : 20
              color = focused ? 'pink' : 'grey'
            }
            else if (route.name === 'Screen_D') {
              iconname = 'btc'
              size = focused ? 25 : 20
              color = focused ? 'pink' : 'grey'
            }
            else if (route.name === 'Screen_E') {
              iconname = 'btc'
              size = focused ? 25 : 20
              color = focused ? 'pink' : 'grey'
            }
            return (
              <View>
                <FontAwesome5 name={iconname} size={size} color={color} ></FontAwesome5>
              </View>

            )
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: 'white',
          tabBarInactiveBackgroundColor: 'lightgrey',
          tabBarStyle: {},
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 16,
            borderBottomWidth: 5
          }
        })}

      >
        {/* options={{tabBarBadge:3}} */}
        <Tab.Screen name='Screen_A' component={ScreenA}
          options={{
            header: ({ navigation }) => null
          }}
        />
        <Tab.Screen name='Screen_B' component={ScreenB} 
        options={{
          header: ({ navigation }) => null
        }}/>
        <Tab.Screen name='Screen_C' component={OnProcess} 
        options={{
          header: ({ navigation }) => null
        }}/>
        <Tab.Screen name='Screen_D' component={OnProcess} 
        options={{
          header: ({ navigation }) => null
        }}/>
        <Tab.Screen name='Screen_E' component={OnProcess} 
        options={{
          header: ({ navigation }) => null
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currenHeight || 0
  },
});
