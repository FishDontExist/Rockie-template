import styled from "styled-components";

export const StyledWhatIsRockie = styled.section`
    padding:30px;
    margin:40px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    gap: 15px;
    p{
        color: #777E90;
    }
    .image-container{
        /* position: relative; */
        display: flex;
        justify-content: center;
        margin: auto;
        width: max-content;
        .forground-image {
            position: relative;
            width: 560px;
            height: auto;
            z-index: 2;
            
            
        }
        
    }
    
    .text-block{
        width: 50%;
        padding: 35px;
        
        *{
            padding:10px;
        }
    }
    button{
        border: 1px solid ;
    }
    @media screen and (max-width:1200px){
        flex-direction: column;
        .image-container{
            width: 100%;
            .forground-image, .background-image{
                width: 60%;
            }
        }
        .text-block{
            margin: 0 auto;
            width: 80%;
        }
    }
    @media screen and (max-width:570px){
        padding:0;
        .text-block{
            padding: 20px;
            width: 100%;
            
            *{
                padding: 0;
                margin-bottom: 10px;
            }
        }
    }

`