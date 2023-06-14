import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import QRCodeScanner from 'react-native-qrcode-scanner';

const HomeScreen = () => {
    const styles = getStyles();
    const onScanned = (e: Object) => {

    }
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
            
        </View>
    )
}


const getStyles = () => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        marginVertical: 50,
    },
});

export default HomeScreen;