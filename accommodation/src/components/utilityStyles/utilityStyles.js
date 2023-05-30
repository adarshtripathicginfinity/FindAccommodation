import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

 
`;
export const Container = styled.div`
  display:flex;
  @media (max-width: 1240px) {
       
        width: 100%;
      
    }

    @media (min-width: 1240px) {
      
        width: calc(100vw - 20px);
        max-width: 1240px;
        margin: 0 auto;
      
    }
`;
export const LeftContainer = styled.div.attrs({ className: "left-container" })`
  background-color: #002c3f;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  @media (min-width: 0px) and (max-width: 575px) {
    height: max-content;
    padding-bottom: 2%;
    box-shadow:none;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width:575px) {
    align-items:flex-start
    
  }
`;

export const BuildingImage = styled.img.attrs({ className: "img-fluid" })`
  position: relative;
  bottom: 4%;
`;

export const FormContainer = styled.div`


`;

export const Header =styled.div`
@media (max-width:576px) {
  display:none;
  
}
`;
export const Body = styled.div`
margin-top:1.5rem;
`;

export const PageContainer = styled.div`
    @media (min-width: 1240px) {
      width: 1240px;
    }
`;

