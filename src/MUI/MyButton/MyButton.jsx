import React from 'react';
import { Button } from '@mui/material';

const MyButton = ({ text, img, background, color, func, ...props}) => {
    const style = {
        width: 174,
        heigth: 40,
        gap: 17,
        background: background,
        borderRadius: 12,
        color: color
    }

    const style_img = {
        width: 18,
        height: 18,
        marginRight: 16.03
    }

    const style_text = {
        fontFamily: 'IBM Plex Sans',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '150%'
    }
    return (
        <Button style={style} variant="contained" onClick={() => func()} {...props}>
            <img style={style_img} src={img} alt={text} />
            <span style={style_text}>{text}</span>
        </Button>
    );
};

export default MyButton;