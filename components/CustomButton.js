import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const CustomButton = ({ title, icon, color, size }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                {backgroundColor: pressed ? color : color }
            ]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            android_ripple={{ color: 'red', borderless: true }}
        >
            <View style={styles.flex}>
                <View>
                    <FontAwesome5Icon name={icon} size={size} />
                </View>
                {
                    title && <Text style={styles.buttontext}>
                        {title}
                    </Text>
                }

            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        zIndex: 10

    },
    buttontext: {
        color: 'white',
        fontSize: 20,
        marginLeft:10,
        zIndex: 10
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
    },
})

export default CustomButton;