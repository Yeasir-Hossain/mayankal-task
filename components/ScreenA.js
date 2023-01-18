import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HeaderA from './HeaderA';

function ScreenA({ navigation }) {
    const onpressable = () => {
        navigation.navigate('Screen_B')
    }
    return (
        <>
            <HeaderA navigation={navigation}></HeaderA>
            <>
                <View style={styles.body}>
                    <Text style={[styles.ashtext, { color: 'tomato' }]}>
                        History
                    </Text>
                    <Text style={styles.title}>
                        Always forgive your enemies, nothing annoys.
                    </Text>
                    <View style={styles.flexbox}>
                        <Text style={styles.ashtext}>
                            Publised from <Text style={[{ color: 'black', fontWeight: '700' }]}>istudio</Text>
                        </Text>
                        <Text style={styles.ashtext}>
                            23 Mar, 2019
                        </Text>
                    </View>
                    <View style={styles.imgback}>
                        <Image style={styles.image} resizeMode='stretch' source={require('../assets/icon.png')} />
                    </View>
                    <View style={styles.rating}>
                        <Text style={styles.ratingpoints}>
                            4.7
                        </Text>
                        <View style={styles.iconpack}>
                            <FontAwesome5 name='star' size={20} style={[{marginRight:5}]} color={'#FFD700'} />
                            <FontAwesome5 name='star' size={20} style={[{marginRight:5}]} color={'#FFD700'} />
                            <FontAwesome5 name='star' size={20} style={[{marginRight:5}]} color={'#FFD700'} />
                            <FontAwesome5 name='star' size={20} style={[{marginRight:5}]} color={'#FFD700'} />
                            <FontAwesome5 name='star' size={20} style={[{marginRight:5}]} color={'#F0F0F0'} />
                        </View>
                    </View>
                    <Text style={styles.ashtext}>892 Ratings on Google Play</Text>
                </View>
                <View style={styles.bookstarting}>
                    <Text style={styles.booktext}>
                        I failed the first quarter of a class in school, so I made a fake report card. I did this every quarter that year. I forgot that they mail home the end-year cards, and my mom got it before I could intercept...
                        <Pressable>
                            <Text style={styles.booktext}>
                                Read more
                            </Text>
                        </Pressable>
                    </Text>
                </View>
            </>

        </>

    )
}
const styles = StyleSheet.create({
    body: {
        flex: 2,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        paddingTop:20
    },
    ashtext: {
        fontSize: 12,
        color: '#BCBCBC',
    },
    title: {
        fontSize: 23,
    },
    imgback: {
        position: 'relative',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginTop: 10,
        marginLeft: '5%',
        paddingLeft: 55,
        backgroundColor: '#F5F5F5'
    },
    image: {
        width: 350,
        height: 250,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    flexbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },
    ratingpoints: {
        fontSize: 35
    },
    iconpack: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    bookstarting: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:20,
        marginLeft: 5,
        marginRight: 5,
    },
    booktext: {
        fontSize: 16,
    }
});


export default ScreenA;