import { createGlobalStyle, } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
        font-size: 100%;   
        color: ${theme.colors.gray}; 
        -webkit-font-smoothing: antialiased;   
        -moz-osx-font-smoothing: antialiased;        
    }

    body {
      width: 100%;
      overflow-x: hidden;
      min-height: 100vh;
    }

    h1, h2 {
        font-weight: 800;
        color: ${theme.colors.primary};
    }

    h1 {
        font-size: 2rem;
        line-height: 2.4rem; 
    }

    h2 {
        font-size: 1.125rem;
    }

    p {
        line-height: 1.4rem; 
    }

    small {
        font-size: 0.75rem;
    }

    a {
        color: inherit;
    }
   
    button {
        cursor: pointer;
        background: none;
    }  
    
`