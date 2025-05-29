import { Colors } from "@/constans/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"];

    return (
        <>
            <StatusBar style="auto" />
            <Stack
                screenOptions={{
                    //     headerShown: false,
                    headerStyle: { backgroundColor: theme.navBackground },
                    headerTintColor: "#333",
                }}>
                <Stack.Screen name="index" options={{ title: "Home" }} />
                <Stack.Screen name="about" options={{ title: "About" }} />
                <Stack.Screen name="contact" options={{ title: "Contact" }} />
            </Stack>
        </>
    );
};

export default RootLayout;

const styles = StyleSheet.create({});
