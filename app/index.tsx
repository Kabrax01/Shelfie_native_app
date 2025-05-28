import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/images/logo_dark.png";

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img} />

            <Text style={styles.title}>The number one</Text>

            <Text style={{ marginTop: 10, marginBottom: 30 }}>
                Reading list app
            </Text>

            <View style={styles.card}>
                <Text>Yello Native word !!</Text>
            </View>

            <Link href="/about" style={styles.link}>
                About page
            </Link>
            <Link href="/contact" style={styles.link}>
                Contact page
            </Link>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    img: {
        marginVertical: 20,
    },
    card: {
        backgroundColor: "#eee",
        padding: 20,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
});
