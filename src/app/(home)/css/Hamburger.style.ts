import styled from "styled-components";


export const HamburgerNav = styled.nav`
    position: absolute;
    z-index: 99;
    ul{
        display: flex;
        flex-direction: column;
        background-color: white;
        justify-content: center;
        
        li{
            padding: 10px;
            text-decoration: none;
            font-size: 1rem;
        }
        .MuiDivider-root{
            padding: 0;
        }
    }
    @media screen and (min-width: 970px){
    
        display: none;
    }
`