import styled from "styled-components";

export const BannerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => (props.theme === "light" ? "white" : "#333")};   
  ;
  `

export const DarkModeIconContainer = styled.div`
    position: absolute;
    top: 10px;
    ${(props) => (props.isLeft ? "left: 40px;" : "right: 110px;")}  
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
      line-height: 1;
      gap: 10px;  
    &.light {
      filter: invert(0); 
    }

    &.dark {
      filter: invert(1); 
    }

    img {
      width: 30px;
      height: 30px;
    }
  ;`

export const DarkmodeText = styled.div`
  color: ${(props) => (props.theme === "light" ? "black" : "white")};  
  font-size: 14px;
  transition: color 0.3s ease;   
  ;`



export const Container = styled.div`

  position: absolute;
  top: 65%;
  left: 45%;
  color: white;
  transform: translate(-50%, -50%);

  .logo {
    max-width: 70%;
    height: auto;
    margin-bottom: 20px;
  }
  ;`

export const ContentLogo = styled.div`
  position: absolute;
  top: 0%;
  left: 30%;
  transform: translateX(-50%);
  z-index: 10;
  max-width: 150px; 
`;

export const Textcolor = styled.div`
  color: #f46d1b;
  font-size: 16px;
  font-weight: 600;
  margin-top: 70px;

  ;`

export const IntroText = styled.div`
  font-size: 64px;
  line-height: 1;
  ;`

export const InfoText = styled.div`
  padding: 20px 0;
  font-size: 18px;
  line-height: 1;
  font-weight: 600;
  ;`

export const ContentSerach = styled.div`
  width: 70%;
  ;`

export const Search = styled.div`
  .search-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .search-input {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-right: 40px;
    outline: none;
  }

  .search-input:focus {
    border-color: #888;
  }

  .search-icon {
    position: absolute;
    right: 10px;
    color: #34ac40;
    pointer-events: none;
  }
  ;`


export const SearchContainerFixed = styled.div`
  position: ${(props) => (props.isActive ? "fixed" : "relative")};
  top: ${(props) => (props.isActive ? "20px" : "auto")};
  right: ${(props) => (props.isActive ? "20px" : "auto")};
  z-index: 10;  
  width: ${(props) => (props.isActive ? "auto" : "60%")};
  transition: all 0.3s ease;
  ;
  `

export const ContainerDeBusca = styled.div`

  width: 100%;
  `


export const CharactersContainer = styled.div`
    display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  padding: 100px 50px 0px 0;
  max-height: 40vh;
  overflow-y: auto;
  position: relative;
  z-index: 5;
  ;`
export const charactersScroll = styled.div`
  display: flex;
  flex-wrap: wrap;   
  gap: 20px;   
  padding: 10px 0;
  overflow-x: auto;   
  justify-content: flex-start;  
  ;
  `
export const CharacterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(25% - 20px);   
  margin-bottom: 20px;
  text-align: left;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 165px;

  .character-image {
    width: 133px;
    height: 165px;
    border-radius: 8px;
    margin-right: 15px;
    object-fit: cover;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-left: 10px;   
    flex-grow: 1;   
  }
`;


export const TextColorDarkMode = styled.span`
  color: #F46D1B;   
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
  

  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

