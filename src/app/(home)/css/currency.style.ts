import styled from "styled-components";

export const StyledCurrencyDiv = styled.section`
    color: ${props => props.theme.pallete.colors.text.primary};
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    top:-20px;
    background-color: ${props => props.theme.pallete.colors.bg};
    width: max-content;
    padding: 15px;
    height:auto;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .MuiTabs-flexContainer{
        width: max-content;
    }
    .card-container{
        display: flex;
        justify-content: flex-start;
    }
    .card {
        padding:20px;
        border-radius: 20px;
        width: 100%;
        margin: 0.3vw;
    }
    @media screen and (max-width: 996px){
        
        width: 90%;
        .card-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            

        }
        .card{
            width: 100%;
        }
    }
    
    
    
    .card:hover, .card:focus{
        background-color: ${props => props.theme.pallete.colors.div_hover.bg};
        box-shadow: ${props => props.theme.pallete.colors.div_hover.shadow};
    }
    
    
    .title{ 
        display: flex;
        justify-content: flex-start;
        
        font-size: 1em;
        p{
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-left: 10px;
        }
        p:nth-child(3){
            color: ${props => props.theme.pallete.colors.text.secondary};
        }
        img{
            height:20px;
            width:auto;
            padding: 0;
        }
    }
    .card-other-info 
    {
        font-size: 0.8em;
        p{
            margin: 10px 0px;
            font-size: 1.2rem;
            font-weight: 700;
        }
        div{
            
            border-radius: 15px;
            text-align: center;
            padding: 5px;
            color: #FFF;
            width: max-content;
        }
        .green{
            background-color: ${props => props.theme.pallete.colors.green};
        }
        .red{
            background-color: ${props => props.theme.pallete.colors.red};
        }
    }
    .MuiDivider-root{
        background-color: ${props => props.theme.pallete.colors.bg};
        
    }
    .MuiButtonBase-root{
        color: ${props => props.theme.pallete.colors.text.primary};
            
        }
    @media screen and (max-width: 500px){
        
        .card-container{
            display: flex;
            flex-direction: column;
            

        }
        .MuiTabs-flexContainer{
            
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }
        .card-container{
            padding: 14px;
            margin: 0;
        }
    }
    
`