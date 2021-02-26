import React from 'react';
import Camera from '../../../atoms/icons/camera/camera';
import Button, { ButtonProps } from '../../../button/button';

const CameraButton = (props: ButtonProps) => (
    <Button {...props}>
        <Camera />
    </Button>
)

export default CameraButton