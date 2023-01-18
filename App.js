import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Material from 'react-native-vector-icons/MaterialIcons'
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
          tabBarIcon: ({ focused, size, color,styletop }) => {
            let iconname;
            if (route.name === 'Screen_A') {
              iconname = 'home';
              size = 30;
              color = focused ? 'black' : 'grey'
              styletop = focused ? {borderBottomColor:'red',borderBottomWidth:1} : ''
            }
            else if (route.name === 'Screen_B') {
              iconname = 'assessment'
              size =30
              color = focused ? 'black' : 'grey'
              styletop = focused ? {borderBottomColor:'red',borderBottomWidth:1} : ''
            }
            else if (route.name === 'Screen_C') {
              iconname = 'mic'
              size =  30
              color = focused ? 'black' : 'grey'
              styletop = focused ? {borderBottomColor:'red',borderBottomWidth:1} : ''
            }
            else if (route.name === 'Screen_D') {
              iconname = 'bookmark'
              size =  30
              color = focused ? 'black' : 'grey'
              styletop = focused ? {borderBottomColor:'red',borderBottomWidth:1,} : ''
            }
            else if (route.name === 'Screen_E') {
              iconname = 'person'
              size = 30
              color = focused ? 'black' : 'grey'
              styletop = focused ? {borderBottomColor:'red',borderBottomWidth:1} : ''
            }
            return (
              <View>
                <Material name={iconname} size={size} color={color} style={styletop}></Material>
              </View>

            )
          },
          tabBarActiveTintColor: 'red',
          tabBarStyle: {
            paddingTop:10
          },
          tabBarShowLabel: false,
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
