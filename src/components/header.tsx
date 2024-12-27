import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants';


export default function Header({ navigation, headerTitle }) {

    return (
        
        <View style={{
            flexDirection: 'row',
            height: 106,
            alignItems: 'center',
            backgroundColor: COLORS.lightgreen,
        }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ backgroundColor: COLORS.darkgreen, borderRadius: 12, marginHorizontal: 24, }}>
                    <Icon name="chevron-left" size={36} style={{ color: COLORS.white }} />
                </View>
            </TouchableOpacity>
            <Text
            style = {{fontSize:22,color:COLORS.black}}
            >{headerTitle}</Text>
        </View>
    )
}