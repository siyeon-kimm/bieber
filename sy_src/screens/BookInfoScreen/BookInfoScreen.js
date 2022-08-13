import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const BookInfoScreen = () => {
    const [name, setName] = useState('');
    const [number,setNumber] = useState('');
    const [address,setAddress] = useState('');
    
    const{height} = useWindowDimensions();

    const onNextPressed = () => {
        console.warn('onNextPressed');
    };
    
    const onBeforePressed = () => {
        console.warn('onBeforePressed')
    }

    return (
        <View style={StyleSheet.root}>
            <Text style={styles.title}>예약자 정보 입력</Text>

            <CustomInput
                placeholder="이름"
                value={name}
                setvalue={setName}
            />

            <CustomInput
                placeholder="휴대폰 번호"
                value={number}
                setvalue={setNumber}
            />

            <CustomInput
                placeholder="주소"
                value={address}
                setvalue={setAddress}
            />

            <Text> </Text>
            <CustomButton text="다음" onPress={onNextPressed} />
            <CustomButton text="뒤로" onPress={onBeforePressed} type="TERTIARY" />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#228b22',
        margin: 40,
        alignSelf: 'center',
    },
    text: {
        color:'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    },
});

export default BookInfoScreen;