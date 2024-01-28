import styled from "styled-components";

export const StyledCurrencyDiv = styled.section`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    top:-20px;
    background-color: #FFF;
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
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
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
            color: lightgray;
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
            background-color: #58BD7D;
        }
        .red{
            background-color: #D33535;
        }
    }
    .MuiDivider-root{
        background-color: #E5E5E5;
        
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