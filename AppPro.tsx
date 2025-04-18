import React from "react";

import { 
    Text,
    View,
    StyleSheet,
    useColorScheme
 } from 'react-native';

const AppPro = (): JSX.Element =>{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: 'white',
    },
    blackText:{
        color: 'black',
        fontSize: 45
    }
})

export default AppPro