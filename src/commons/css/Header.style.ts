import styled from "styled-components";


export const StyledNavbar = styled.nav`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  font-size: 1vw;
  background-color: white;
  
  a{
    text-decoration: none;
  }
  ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 1vw;
  gap: 0;
  justify-content: flex-start;
  align-items: center;
}

@media screen and (max-width: 600px) {
  ul{
    justify-content: space-between;
  }
}
@media screen and (max-width: 998px){
  .hover-link{
    display: none;
  }
}
@media screen and (min-width: 998px){
    .ham{
        display: none;
    }
    }
.logo-container {
  display: flex;
  justify-content: center;
  margin-left: 20px;
  height: auto;
  align-items: center;
    
}

.logo img{
  width: 10.2vh;
  height: auto;
  margin-right: 10px;
}
.logo-text{
  color: black;
  margin-right: 5px;
  text-transform: capitalize;
  font-size: 24;
  width: 40px;
  height: 40px;
}
.hover-link{
  padding: 15px;
  margin:0;
  font-weight: 600;
  color: black;
  transition: background-color 0.3s ease-in-out;
}
.hover-link:hover{
  background-color: #3772FF;
  color: white;
}
.user-options{
  flex:3;
  display: flex;
  justify-content: flex-end;
  gap: 1.6vw;
  
}
.btn{
  margin: 11px;
  border-radius: 5rem;
  font-weight: 500;
  border: 1px solid #23262F;
  width: 59px;
  height: 28px;
  background-color: white;
}
.btn:hover{
  background-color: #F7F7F7;
}
.user-set{
  margin-top:11px;
}
.profile{
  border-radius: 50%;
}
.icons{
  margin-top:17px;
}
`;