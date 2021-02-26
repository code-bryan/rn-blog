import React from 'react';
import styled from 'styled-components/native';
import Logo from '../../atoms/logo/logo';
import CameraButton from '../buttons/camera-button/camera-button';
import DirectButton from '../buttons/direct-button/direct-button';

const SafeArea = styled.SafeAreaView`
    background-color: #fff;
    background-color: #fff;
`;

const Container = styled.View`
    height: 44px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 12px;
    border-bottom-width: .4px;
    border-bottom-color:#B3B3B3;
`;

interface Props {
    onCameraPress: () => void;
    onDirectPress: () => void;
}

const Header:  React.FC<Props> = ({ onCameraPress, onDirectPress }) => (
    <SafeArea >
        <Container>
            <CameraButton onPress={onCameraPress} />
            
            <Logo />

            <DirectButton onPress={onDirectPress} />
        </Container>
    </SafeArea>
);

export default Header;