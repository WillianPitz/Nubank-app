import React from 'react';

import { WebView } from 'react-native-webview';
import { Container, Code } from './styles';

export default function Menu() {
    return (
        <Container>
            <Code>
                <WebView 
                value="https:rocketseat.com.br"
                size={80}
                bgColor="#FFF"
                fgColor="8B10AE"
                />
            </Code>
        </Container>
    );
}