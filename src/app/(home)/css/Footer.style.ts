import styled from "styled-components";

export const StyledFooter = styled.footer`
    .container{
        display: flex;
        justify-content: center;
        .text-n-logo span{
            width: 259px;
        }
        p{
            color: #777E90;
            font-size: small;
            padding:8px;
        }
        h5{
            padding:8px
        }
        .text-n-logo{
            display: flex;
            flex-direction: column;
            padding:25px;
            margin: 0 auto;
            img{
                width: 100px;
                height: auto;
            }
            *{
                padding:5px;
            }
        }
        .options{
            display: flex;
            justify-content: center;
            margin: 0 auto;
            .widget-link{
                width: max-content;
                padding: 30px;
            }
        }
    }
    .footer-bottom{
        background-color: #F7F7F7;
        
        p{
            color: #777E90;
            font-size: small;
            padding:25px;
            margin: 0 5%;
            
        }
    }
    @media screen and (max-width:1100px) {
        .container{
            flex-direction: column;
            .text-n-logo{
                margin:0 13%;
            }
        }
        
    }
    @media screen and (max-width: 735px) {
        .container{
            .options{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
            }
        }
    }
    @media screen and (max-width: 500px) {
        .container{
            .options{
                display: grid;
                grid-template-columns: 1fr 
                
            }
        }
    }
`