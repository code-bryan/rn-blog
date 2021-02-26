import React from 'react';
import Direct from '../../../atoms/icons/direct/direct';
import Button, { ButtonProps } from '../../../atoms/button/button';

const DirectButton = (props: ButtonProps) => (
    <Button {...props}>
        <Direct />
    </Button>
)

export default DirectButton