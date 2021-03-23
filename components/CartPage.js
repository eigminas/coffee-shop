import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const image1 = { uri: "https://elciervo.co/wp-content/uploads/2016/06/carrot-cake_IMG_1769.jpg" };
const image2 = { uri: "https://coffeeordie.com/wp-content/uploads/2020/03/AdobeStock_280936820-scaled.jpeg" };

export default function CartPage() {
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
                        <View style={styles.cartContent}>
                            <View style={styles.cartItem}>
                                <Text style={styles.cartText}>1. Ethiopian Organic 200g (20$)</Text>
                                <FontAwesomeIcon icon={faMinusSquare} style={styles.minusIcon} size={32} />
                            </View>
                            <View style={styles.cartItem}>
                                <Text style={styles.cartText}>1. Ethiopian Organic 200g (20$)</Text>
                                <FontAwesomeIcon icon={faMinusSquare} style={styles.minusIcon} size={32} />
                            </View>
                            <TouchableOpacity style={styles.paymentBtn}>
                                <Text style={styles.paymentTxt}>Proceed To Payment</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
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
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    cartText: {
        color: '#F5EBEBF7',
        fontSize: 18,
        marginRight: 10
    },
    minusIcon: {
        color: '#B40F0F',
        marginLeft: 10
    },
    paymentBtn: {
        backgroundColor: '#240C07CC',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 45,
        paddingLeft: 45,
        borderColor: '#FFFFFF',
        borderWidth: 0.2,
        borderRadius: 2,
        borderStyle: 'solid',
        marginBottom: 30
    },
    paymentTxt: {
        color: '#F3A6A6F5',
        fontSize: 18
    }
    
    
    

});
