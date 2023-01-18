import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const HeaderB = () => {
    return (
        <View style={styles.icons}>
            <View>
                <FontAwesome5 name='trophy' size={20} />
            </View>
            <View>
                <Text style={styles.text}>
                    All books
                </Text>
            </View>
            <View>
                <FontAwesome5 name='trophy' size={20} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icons: {
        backgroundColor:'white',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12
    },
    text: {
        fontSize:18
    },
});

export default HeaderB;