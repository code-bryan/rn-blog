import React from 'react';
import styled from 'styled-components/native';
import Text from '../../atoms/text/text';

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
    padding-horizontal: 8px;
    border-bottom-width: .4px;
    border-bottom-color:#B3B3B3;
`;

const OptionContainer = styled.View``;

interface Props {
    left?: React.ReactNode;
    right?: React.ReactNode;
}

const Header:  React.FC<Props> = ({ left = null, right = null }) => (
    <SafeArea >
        <Container>
            <OptionContainer>
                {left}
            </OptionContainer>
            
            <Text size={20}>Center</Text>

            <OptionContainer>
                {right}
            </OptionContainer>
        </Container>
    </SafeArea>
);

export default Header;