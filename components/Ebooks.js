import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Ebooks = ({ navigation }) => {
    const onpressable = () => {
        navigation.navigate('Screen_B')
    }
    const data = [
        require('../assets/ENEMY_baja-original.jpeg'),
        require('../assets/book.jpeg'),
        require('../assets/book1.jpeg'),
        require('../assets/book2.jpeg'),
        require('../assets/book3.jpeg'),
        require('../assets/book4.jpeg'),
        require('../assets/book5.jpeg'),
        require('../assets/book6.jpeg'),
        require('../assets/book7.jpeg'),
        require('../assets/book8.jpeg'),
    ]
    return (
        <>
            <View style={styles.list}>
                <View style={{ flexDirection: 'row' }}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        contentContainerStyle={styles.listview}
                        data={data}
                        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                        renderItem={({ item }) => (
                            <Pressable onPress={onpressable}>
                                <Image style={styles.image} resizeMode='stretch' source={item} />
                            </Pressable>
                        )}
                    />
                </View>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 30,
        flexDirection: 'row',
        justifyContentc: 'center',
    },

    image: {
        height: 240,
        width: 150,
        borderRadius: 10,
        margin: 10
    },
});

export default Ebooks;