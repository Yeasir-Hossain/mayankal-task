import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OnProcess = () => {
    return (
        <View style={styles.body}>
            <Text>
                Coming Soon!!!
            </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default OnProcess;