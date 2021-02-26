import React from 'react';
import styled from 'styled-components/native';
import Logo from '../../atoms/logo/logo';
import CameraButton from '../../molecules/buttons/camera-button/camera-button';
import DirectButton from '../../molecules/buttons/direct-button/direct-button';

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
`;

const OptionContainer = styled.View`
    width: 20%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

interface Props {
    onCameraPress: () => void;
    onDirectPress: () => void;
}

const Header:  React.FC<Props> = ({ onCameraPress, onDirectPress }) => (
    <SafeArea >
        <Container>
            <Logo />
            
            <OptionContainer>
                <DirectButton onPress={onDirectPress} />
                <CameraButton onPress={onCameraPress} />
            </OptionContainer>
        </Container>
    </SafeArea>
);

export default Header;