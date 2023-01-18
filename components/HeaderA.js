import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const HeaderA = ({ navigation }) => {
    const onpressable = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={styles.icons}>
            <View>
                <Pressable onPress={onpressable} style={({ pressed }) => ({
                })}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <FontAwesome5 name='chevron-left' size={22} />
                </Pressable>
            </View>
            <View>
                <FontAwesome5 name='ellipsis-h' size={22} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icons: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: StatusBar.currenHeight || 15,
    },
});

export default HeaderA;