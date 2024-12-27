import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';

import { USERINFO } from '../constants';

export default function DashHeader({navigation}) {
  return (
    <View
      style={{
        flex: 0.7,
        flexDirection: 'row',
        // justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.lightgreen,
        // paddingVertical:20,
        position: 'relative',
      }}>
      <Image
        source={require('../assets/avatar.png')}
        style={{
          width: 50,
          height: 50,
          marginLeft: 20,
          marginRight: 10,
        }}
      />
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Hi, {USERINFO.username}</Text>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Welcome to your dashboard
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <View
          style={{
            backgroundColor: COLORS.darkgreen,
            padding: 10,
            marginLeft: 30,
            borderRadius: 10,
          }}>
          <Icon name="bell-outline" size={22} style={{color: COLORS.white}} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
