import { Slot, SplashScreen, Stack } from "expo-router"
import "../global.css"
import { useFonts } from 'expo-font'
import { useEffect } from "react";

// this will prevent the splash scree from auto hiding util loading all the font assets.
SplashScreen.preventAutoHideAsync();

export default function Layout(){

    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded) return null;
    if (!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
            <Stack.Screen name="index" options={{ headerShown: false}} />
            <Stack.Screen name="meditate/[id]" options={{ headerShown: false}} />
        </Stack>
    )
}