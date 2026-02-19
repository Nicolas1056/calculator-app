import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end', //Empuja todo hacia abajo
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 100, //Ciruclo Perfecto
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
        fontFamily: 'SpaceMono',
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '400',
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300',
    },
});