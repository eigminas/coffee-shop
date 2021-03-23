import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const image1 = { uri: "https://elciervo.co/wp-content/uploads/2016/06/carrot-cake_IMG_1769.jpg" };
const image2 = { uri: "https://coffeeordie.com/wp-content/uploads/2020/03/AdobeStock_280936820-scaled.jpeg" };

export default function ItemPage() {
    return (
        <>
            <ImageBackground source={image1} style={styles.background}>
                <View style={styles.layer}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.top}>
                            <Text style={styles.title}>Coffee Shop</Text>
                            <FontAwesomeIcon icon={faShoppingCart} style={styles.cart} size={48} />
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.testing}>
                            <Image source={image2} style={styles.img1} />
                            <View style={styles.descLayer}>
                                <View style={styles.textLine}>
                                    <Text style={styles.txt1}>Name:</Text>
                                    <Text style={styles.txt2}>Ethiopian Organic</Text>
                                </View>
                                <View style={styles.textLine}>
                                    <Text style={styles.txt1}>Origin:</Text>
                                    <Text style={styles.txt2}>Ethiopia</Text>
                                </View>
                                <View style={styles.textLine}>
                                    <Text style={styles.txt1}>Price:</Text>
                                    <Text style={styles.txt2}>10$/100g</Text>
                                </View>
                                <View style={styles.textLine}>
                                    <Text style={styles.txt1}>Amount:</Text>
                                    <Text style={styles.txt2}>...</Text>
                                </View>
                                <View style={styles.icons}>
                                    <FontAwesomeIcon icon={faShoppingCart} style={styles.cartIcon} size={42} />
                                    <FontAwesomeIcon icon={faTimes} style={styles.timesIcon} size={42} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    layer: {
        flex: 1,
        backgroundColor: '#22050563',
        paddingBottom: 50
    },
    line: {
        backgroundColor: '#7B7B7B',
        height: 5
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 25
    },
    title: {
        color: '#F5EBEBF7',
        fontSize: 36,
    },
    cart: {
        color: '#E4D4D4',
        alignSelf: 'flex-end'
    },
    testing: {
        backgroundColor: '#00000080',
        width: 300,
        alignSelf: 'center',
        marginTop: 35,
        paddingBottom: 25,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#FFFFFF50'
    },
    img1: {
        height: 220,
        marginBottom: 30
    },
    textLine: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        //alignSelf: 'center',
        justifyContent: 'space-between'
    },
    txt1: {
        color: '#F5EBEBF7',
        fontSize: 18,
        textAlign: 'left',
        width: '30%',
        marginLeft: 20,
    },
    txt2: {
        color: '#F5EBEBF7',
        fontSize: 18,
        width: '65%',
    },
    icons: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF20',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 30
    },
    cartIcon: {
        color: '#158F32',
        marginRight: 25
    },
    timesIcon: {
        color: '#FF0E0E',
        marginLeft: 25
    }

});
