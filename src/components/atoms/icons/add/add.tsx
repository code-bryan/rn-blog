import React from 'react';
import { SvgFromXml } from 'react-native-svg';

interface IProps {
    size?: number;
}

const Add = ({ size = 12 }: IProps) => (
    <SvgFromXml xml={`
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    `} />
);

export default Add;