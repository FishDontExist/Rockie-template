import styled from "styled-components";

export const SytledLiveExchangeRates = styled.div`
    overflow-x: auto;
    width: 100%;
    padding:40px;
    
    .title{
        
        display: flex;
        justify-content: center;
        gap: 50%;
        .see-btn {
            position: relative;
            border: none;
            background: none;
            cursor: pointer;
            
        }
        .see-btn::after{
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: black;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: scaleX(0); /* Initially set to invisible */
            transform-origin: bottom right;
            transition: transform 0.3s ease-in-out;
        }
        .see-btn:hover{
            transform: scaleX(1); /* Expand the line when hovered */
            transform-origin: bottom left;
        }
    }
    
    .table{
        margin: 0 auto;
        width: max-content;
        
        
    }
    table{
         
        width: 100%;
        font-size: 1em;
        border-collapse: collapse;

    }
    .tab-container{
        margin:0 5%;
        display: flex;
        justify-content: center;
    }
    tr > :last-child {
        width: 75px;
        
        padding:15px;
    }
    th, td{
        text-align: center;
        width: max-content;
        white-space: nowrap;
        padding: 30px;
    }
    thead tr{
        border-bottom: 2px solid black;
    }
    tbody tr:hover{
        background-color: #3772FF1A;
        
    }
    tbody {
        img{
            height: 20px;
            width: auto;
        }
    }
    button{
        text-transform: none;
        border-radius: 30px;
        transition: background-color 0.3s ease-in-out;
    }
    button:hover, button:focus{
        background-color: #3772FF;
        color: #FFF;
    }
    
    .green{
        color: #58BD7D;
    }
    .red{
        color: #D33535;
    }
    @media screen and (max-width:500px){
        padding: 0;
        
    }
    
`
