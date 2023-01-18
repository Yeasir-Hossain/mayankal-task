import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import HeaderB from './HeaderB';
import Ebooks from './Ebooks';
import OnProcess from './OnProcess';

function Home({ navigation }) {
    const [ebook, setEbook] = useState(true)
    const [abook, setAbook] = useState(false)
    const onpressableebook = () => {
        setEbook(true);
        setAbook(false);
    }
    const onpressableabook = () => {
        setEbook(false);
        setAbook(true);
    }
    return (
        <>
            <HeaderB></HeaderB>
            <View style={styles.body}>
                <View style={styles.buttongrp}>
                    <Pressable onPress={onpressableebook} style={() => [
                        styles.button,
                        { backgroundColor: ebook ? 'white' : '#F5F5F5' }
                    ]}>
                        <Text style={styles.buttontext}>
                            Ebook
                        </Text>
                    </Pressable>
                    <Pressable onPress={onpressableabook}
                        style={() => [
                            styles.button,
                            { backgroundColor: abook ? 'white' : '#F5F5F5' }
                        ]} >
                        <Text style={styles.buttontext}>
                            Audiobooks
                        </Text>
                    </Pressable>
                </View>
                {
                    ebook && <Ebooks navigation={navigation} />
                }
                {
                    abook && <OnProcess />
                }
            </View>

        </>

    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 20
    },
    buttongrp: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 5,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingTop: 7,
        paddingBottom: 7,

    },
    buttontext: {
        fontSize: 16
    }
});

export default Home;