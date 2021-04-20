import styled from 'styled-components';

export const ButtonContactMe = styled.a`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.gradient};
    display: flex;
    align-items: center;
    max-width: 11rem;
    color: ${props => props.theme.colors.white};
    transition: opacity 0.3s;

    & svg {
        stroke: ${props => props.theme.colors.white};
        margin-right: 1rem;
    }

    :hover {
        opacity: 0.8;
    }
    
`