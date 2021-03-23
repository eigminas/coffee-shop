import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const image1 = { uri: "https://elciervo.co/wp-content/uploads/2016/06/carrot-cake_IMG_1769.jpg" };
const image2 = { uri: "https://coffeeordie.com/wp-content/uploads/2020/03/AdobeStock_280936820-scaled.jpeg" };

export default function ItemsPage() {
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
                            <ImageBackground source={image2} style={styles.img1}>
                                <View style={styles.itemLayer}>
                                    <Text style={styles.itemText1}>Ethiopian Organic</Text>
                                    <Text style={styles.itemText2}>10$/100g</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.testing}>
                            <ImageBackground source={image2} style={styles.img1}>
                                <View style={styles.itemLayer}>
                                    <Text style={styles.itemText1}>Ethiopian Organic</Text>
                                    <Text style={styles.itemText2}>10$/100g</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.testing}>
                            <ImageBackground source={image2} style={styles.img1}>
                                <View style={styles.itemLayer}>
                                    <Text style={styles.itemText1}>Ethiopian Organic</Text>
                                    <Text style={styles.itemText2}>10$/100g</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.testing}>
                            <ImageBackground source={image2} style={styles.img1}>
                                <View style={styles.itemLayer}>
                                    <Text style={styles.itemText1}>Ethiopian Organic</Text>
                                    <Text style={styles.itemText2}>10$/100g</Text>
                                </View>
                            </ImageBackground>
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
    
    img1: {
        width: 250,
        height: 150,
    },
    testing: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 50,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#FFFFFF50'
    },
    itemLayer: {
        backgroundColor: '#00000094',
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 26
    },
    itemText1: {
        color: '#F5EBEBF7',
        fontSize: 22,
        textAlign: 'center',
    },
    itemText2: {
        color: '#F5EBEBF7',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 15
    }

});
