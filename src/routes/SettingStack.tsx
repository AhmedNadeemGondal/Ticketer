import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Settings from '../screens/settings';
import Profile from '../screens/profile';
import Password from '../screens/password';

const Stack = createNativeStackNavigator();

export default function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Settings} options={{headerShown: false,}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false,}}/>
      <Stack.Screen name="Password" component={Password} options={{headerShown: false,}}/>
    </Stack.Navigator>
  );
}


