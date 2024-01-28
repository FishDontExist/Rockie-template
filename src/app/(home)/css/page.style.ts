import styled from "styled-components";


export const StyledInfoDiv = styled.div`
    padding: 0;
    background-color: #F7F7F7;
    font-family: 'DM Sans', sans-serif;
    display: flex;
    align-content: center;
    width: 100%;
    height: auto;
    justify-content: space-around;
    align-items: center;
    .globe-img{
        width: 50%;
        height: auto;
        padding: 15px;
        
    }
    @media screen and (max-width: 890px){
        flex-direction: column;
        align-items: center;
        .globe-img{
            width: 100%;
        }
    }
    .info-text{
        padding: 2vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        p{
            margin-bottom: 30px;
        }
    }
    
    h1{
        color: #23262F;
        font-family: "DM Sans";
        width: 100%;
        max-width: 440px;
        min-width: 200px;
        font-style: normal;
        font-weight: 700;
        line-height: 4.5rem; 
    }
    .fixed-size-text {
        font-size: 20;
        font-weight: 400;
        color: #777E90;
        width: 100%;  
        min-width: 300px;
        max-width: 400px;
        overflow: auto; 
    }
    
    
    .MuiButtonBase-root{
        text-transform: none;
        
        font-weight:700;
        color: white;
        padding: 12px;
        border-radius: 5.625rem;
        background: #3772FF;
        width: max-content;
    }
`