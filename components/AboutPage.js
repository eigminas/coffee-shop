import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const image1 = { uri: "https://elciervo.co/wp-content/uploads/2016/06/carrot-cake_IMG_1769.jpg" };
const person1 = require("../assets/randomPic1.png");
const person2 = require("../assets/randomPic2.png");
const person3 = require("../assets/randomPic3.png");

export default function AboutPage() {
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
                            <Text style={styles.heading}>Meet the Coffee Shop team</Text>
                            <Text style={styles.txt1}>
                                We are a bunch of people whose mission
                                is to deliver the highest quality coffee
                                for an affordable price
                            </Text>
                            <Text style={styles.txt1}>
                                Our coffee comes from all around the world
                                as we cooperate with local farmers
                                from the remotest places on earth.
                                We are actively looking for new production
                                lines so stay tuned!
                            </Text>
                            <View style={styles.team}>
                                <View style={styles.member}>
                                    <Image source={person1} style={styles.img1} />
                                    <Text style={styles.memberText}>Mark Gates</Text>
                                    <Text style={styles.memberText}>Shop Owner</Text>
                                </View>
                                <View style={styles.member}>
                                    <Image source={person2} style={styles.img1} />
                                    <Text style={styles.memberText}>Victor Bond</Text>
                                    <Text style={styles.memberText}>Marketing</Text>
                                </View>
                                <View style={styles.member}>
                                    <Image source={person3} style={styles.img1} />
                                    <Text style={styles.memberText}>Emily Wilson</Text>
                                    <Text style={styles.memberText}>Developer</Text>
                                </View>
                            </View>
                            <FontAwesomeIcon icon={faTimes} style={styles.timesIcon} size={42} />
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
        backgroundColor: '#00000050',
        padding: 8,
        paddingTop: 50,
        paddingBottom: 5,
        marginTop: 50
    },
    heading: {
        fontSize: 25,
        color: '#FD9B9B',
        textAlign: 'center',
        paddingBottom: 10
    },
    txt1: {
        color: '#F5EBEBF7',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 15
    },
    team: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    member: {
        marginLeft: 15,
        marginRight: 15,
        width: 80,
        alignItems: 'center'
    },
    img1: {
        width: 80,
        height: 80,
        marginBottom: 10
    },
    memberText: {
        color: '#F5EBEBF7',
        fontSize: 12,
    },
    timesIcon: {
        color: '#FF0E0E',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 30
    }
});
