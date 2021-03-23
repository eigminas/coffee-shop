import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const image1 = { uri: "https://elciervo.co/wp-content/uploads/2016/06/carrot-cake_IMG_1769.jpg" };
const image2 = { uri: "https://coffeeordie.com/wp-content/uploads/2020/03/AdobeStock_280936820-scaled.jpeg" };

export default function MainPage() {
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
                        <View style={styles.con1}>
                            <Text style={styles.txt1}>Best Coffee Beans</Text>
                            <Text style={styles.txt2}>From all around the</Text>
                            <Text style={styles.txt3}>world</Text>
                            <TouchableOpacity style={styles.btn1}>
                                <Text style={styles.txt4}>Learn More</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.con2}>
                            <Text style={styles.txt5}>Best Sellers</Text>
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
        paddingBottom: 25
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
    con1: {
        marginTop: 50,
        backgroundColor: '#00000080',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25

    },
    con2: {
        width: '100%',
        backgroundColor: '#312C2CE3',
        paddingTop: '3%',
        paddingBottom: '3%'
    },
    txt1: {
        color: '#F5EBEBF7',
        fontSize: 32,
        textAlign: 'center',
    },
    txt2: {
        color: '#F5EBEBF7',
        fontSize: 24,
        textAlign: 'center',
        marginTop: '5%'
    },
    txt3: {
        color: '#F5EBEBF7',
        fontSize: 24,
        textAlign: 'center'
    },
    btn1: {
        backgroundColor: '#3C0808CC',
        alignItems: 'center',
        marginTop: '10%',
        paddingTop: '4%',
        paddingBottom: '4%',
        paddingRight: '9%',
        paddingLeft: '9%',
        borderRadius: 10,
        borderColor: '#FFFFFF',
        borderWidth: 0.4,
        borderStyle: 'solid'
    },
    txt4: {
        color: '#FF9292F5',
        fontSize: 20
    },
    txt5: {
        color: '#F5EBEBF7',
        fontSize: 28,
        textAlign: 'center',
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
        borderColor: '#00000094'
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
