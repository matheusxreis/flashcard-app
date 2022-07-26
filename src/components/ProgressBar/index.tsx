import React from "react";
import { ProgressBar as Pbar} from 'react-native-paper';
import { useTheme } from "styled-components";
import {Text} from "react-native"

interface IProgressBar {
    loading: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
    visible: boolean;
    width: number;
}

export function ProgressBar({loading, visible, width}: IProgressBar){

    const theme = useTheme();

    return (<Pbar
            style={{width:width}}
            visible={visible}
            progress={loading}
            color={theme.colors.primary} />
          )
}
