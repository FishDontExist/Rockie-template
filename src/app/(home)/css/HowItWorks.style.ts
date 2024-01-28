import styled from "styled-components";


export const StyledHowItWorks = styled.div`
    background-color: #F7F7F7;
    padding: 15px;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .wrok{
        padding: 30px;
    }
    .work-text-title{
        padding: 15px;
        text-align: center;
        font-size: 1em;
        p{
            color:#777E90;
            margin:15px;
        }
    }
    .work-main{
        padding: 30px;
        margin: 10px 8%;
        display: flex;
        justify-content: space-between;
        .work-block{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 200px;
            p{
                color:#777E90;
                font-size: small;
            }
            span{
                padding: 15px;
                color:#777E90;
                text-align: center;
                font-weight: 100;
                font-size: small;
                
            }
        }
        .work-block img{
            height: 96px;
            width: auto;
        }
        .line{
            width: 100px;
            height: auto;
            position: relative;
            top: -65px;
            margin: 10px;
        }
    }
    @media screen and (max-width: 1100px){
        .work-main{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }
        .line{
            display: none;
        }
    }
    @media screen and (max-width: 500px) {
        padding:0;

        .work-main{
            display: grid;
            grid-template-columns: 1fr;
            margin:0;
            padding:0;
            .work-block{
                margin: 0 auto;
            }
        }
        
    }
`