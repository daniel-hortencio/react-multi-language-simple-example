import styled, { css } from 'styled-components';

interface IIsOpen {
    isOpen: boolean;
}

export const Background = styled.div<IIsOpen>`
    position: fixed;
    width: 100%;
    height: 100%;    
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(20px); 

    transition: opacity 0.3s;

    ${props => props.isOpen
        ? css`
            opacity: 1; 
            z-index: 10;
        `
        : css`
            opacity: 0; 
            z-index: -1;
        `
    } 
`