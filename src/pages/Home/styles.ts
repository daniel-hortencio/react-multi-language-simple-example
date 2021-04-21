import styled from 'styled-components';

import Illustration from '../../assets/images/illustration.svg';
import BackgroundGradient from '../../assets/images/background-gradient.svg';
import BackgroundGradientVertical from '../../assets/images/background-gradient-vertical.svg';

export const Home = styled.div`

    @media(min-width: ${props => props.theme.breakpoints.tablet}){
        background-image: url(${BackgroundGradient});
        background-repeat: no-repeat;
        background-position-x: 50vw;
        background-position-y: center;
    }

    @media(min-width: ${props => props.theme.breakpoints.desktop}){
        background-position-x: right;
    }    
`

export const Background = styled.div`
    position: relative;
    
    ::before {
        content: "";
        position: absolute;
        width: 100%;
        height: calc(25rem + 10vw);
        z-index: -1;

        background-image: url(${BackgroundGradientVertical});
        background-repeat: no-repeat;
        background-size: 110%;
        background-position-y: bottom;
        background-position-x: center;
    }
    
    @media(min-width: ${props => props.theme.breakpoints.tablet}){
        background-image: url(${Illustration});
        background-repeat: no-repeat;
        background-size: 40vw;
        background-position: 90% center;

        ::before {
            display: none;
        }
    }
`

export const ImageContainer = styled.div`
    text-align: center;
    margin: 4rem 0;

    img {
        width: 50vw;           
    }
    
    @media(min-width: ${props => props.theme.breakpoints.tablet}){
        display: none;
    }
`

export const Container = styled.div`
    max-width: calc(${props => props.theme.breakpoints.desktop} / 2);
    margin: auto;
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(min-width: ${props => props.theme.breakpoints.tablet}){
        padding: 2rem;
        max-width: ${props => props.theme.breakpoints.desktop};
    }

    header,
    section, 
    footer {        
        
        @media(min-width: ${props => props.theme.breakpoints.tablet}){
            width: 40vw;
        }

        @media(min-width: ${props => props.theme.breakpoints.desktop}){
            width: 35vw;
        }
    }

    header, section{
        margin-bottom: 3rem;
    }

    h1, h2 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2.5rem;
    }

    h1 {
        color: ${props => props.theme.colors.white};
        @media(min-width: ${props => props.theme.breakpoints.tablet}){
            color: ${props => props.theme.colors.primary};
        }
    }

    h1 + p {
        color: ${props => props.theme.colors.white};
        @media(min-width: ${props => props.theme.breakpoints.tablet}){
            color: ${props => props.theme.colors.gray};
        }
    }
`

export const Row = styled.div`
    display: flex;
    margin-bottom: 1rem;

    a, 
    svg {
        margin-right: 1rem;
    }
`

export const Techology = styled.figure`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1.5rem;

    svg {
        margin: auto;
    }

    figcaption {
        width: min-content;
        font-size: 0.75rem;
    }
`