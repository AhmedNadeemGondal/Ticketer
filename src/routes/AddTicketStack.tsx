import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTicket from '../screens/addticket';
import Form from '../screens/form';

const Stack = createNativeStackNavigator();

export default function AddTicketStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AddTickets" component={AddTicket} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }