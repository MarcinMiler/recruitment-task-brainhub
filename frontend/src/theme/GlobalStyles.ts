import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap');
    
    body {
        width: 100%;
        height: 100vh;
        margin: 0;
        font-family: 'Source Sans Pro';
    }

    * {
        box-sizing: border-box;
    }

    input, textarea {
        font-family: 'Source Sans Pro';
    }
`
