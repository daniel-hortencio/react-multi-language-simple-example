import styled, { css } from 'styled-components';

interface IIsOpen {
    isOpen: boolean;
}

export const ToggleContainer = styled.div<IIsOpen>`
    padding: 0.5rem 1rem;
    max-width: 20rem;
    transition: all 0.3s;
    position: relative;  
    z-index: 20;              

    ${props => !props.isOpen
        && css`
            :hover, :hover * {
                color: ${props => props.theme.colors.primary};
                border-color: ${props => props.theme.colors.primary};               
            }  
        `
    }     
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
interface IButtonDisabled {
    disabled: boolean;
}

export const Toggle = styled.button<IButtonDisabled>`    
    display: flex;
    align-items: center;
    width: 100%; 
    z-index: 30;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem 1rem;
    z-index: 2;
    transition: all 0.3s;

    & svg {
        margin-right: 1rem;
        transition: all 0.3s;
    }  

    ${props => props.disabled && css`
        cursor: initial;
    `}    
`

export const ButtonClose = styled.button<IButtonDisabled>`
    z-index: 40;
    position: absolute;
    transition: opacity 0.3s;
    top:0.5rem;
    right:1rem;
    z-index: 3;

    svg {
        transition: fill 0.3s;
    }

    :hover svg {
        fill: ${props => props.theme.colors.primary};
    }

    ${props => props.disabled && css`
        opacity: 0;
        z-index: 1;
    `}
`

interface ILanguageOptions extends IIsOpen {
    total: number;
}

export const LanguagesOptions = styled.div<ILanguageOptions>`
    position: absolute;
    width: 100%;    
    top: 0;
    left: 0;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.white};
    transition: all 0.3s;
    overflow: hidden;      

    ${props => props.isOpen
        ? css`
            height: ${props.total * 2 + 5}rem;
            padding: 2.5rem 1rem 0.5rem 1rem;
            -webkit-box-shadow: 0px 0px 5px 8px rgba(0,0,0,0.1); 
            box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.1);
            border: solid 2px #fff; 
        `
        : css`
            height: 100%;
            padding: 2.5rem 1rem 0 1rem;
            @media(min-width: ${props => props.theme.breakpoints.tablet}){
                border: solid 2px #ddd; 
            }            
        `
    }

    div {
        border-top: solid 2px #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 100%;
        padding: 1rem 0;
        
        transition: border 0.3s;

        ${props => css`
            height: ${props.total * 2 + 2}rem;
        `}

        ${props => props.isOpen
        ? css`
                border-top: solid 2px #f0f0f0;
            `
        : css`
                border-top: solid 2px transparent!important;
            `
    }
    }

    button {
        display: block;
        :hover {
            color: ${props => props.theme.colors.primary};
        }
    }
`