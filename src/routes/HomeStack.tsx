import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import TicketDetail from '../screens/ticketdetail';
import Notifications from '../screens/notifications';
import AllTickets from '../screens/alltickets';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Home} options={{headerShown: false,}}/>
      <Stack.Screen name="Ticket Detail" component={TicketDetail} options={{headerShown: false,}}/>
      <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false,}}/>
      <Stack.Screen name="All Tickets" component={AllTickets} options={{headerShown: false,}}/>
    </Stack.Navigator>
  );
}


