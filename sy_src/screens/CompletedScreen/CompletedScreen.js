import React from 'react';
import {View, Text, Image, StyleSheet,} from 'react-native';
import Logo from './apple_logo.png';
import CustomButton from '../../components/CustomButton';

const CompletedScreen = () => {
    const onMainhomePress = () => {
        console.warn('onMainhomePress');
    };

    const onMypagePress = () => {
        console.warn('onMypagePress');
    };
    
    return (
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo]} 
                resizeMode="contain" 
            />

            <Text style={styles.text}>처리가 완료되었습니다.</Text>
            <Text> </Text>
            <Text style={styles.text}>처리 안내는</Text>
            <Text style={styles.text}>마이페이지에서 확인해주세요!</Text>
            <Text> </Text>

            <CustomButton 
                text="메인홈"
                onpress={onMainhomePress}
            />

            <CustomButton 
                text="마이페이지"
                onpress={onMypagePress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 250,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#006400',
        marginVertical: 10,
    }
});

export default CompletedScreen;