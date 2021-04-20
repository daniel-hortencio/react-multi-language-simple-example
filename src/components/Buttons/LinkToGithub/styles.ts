import styled from 'styled-components';

export const Link = styled.a`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.colors.black};
    display: flex;
    align-items: center;
    max-width: 12rem;
    color: ${props => props.theme.colors.white};
    transition: opacity 0.3s;

    & svg {
        fill: ${props => props.theme.colors.white};
        margin-right: 1rem;
    }

    :hover {
        opacity: 0.8;
    }    
`