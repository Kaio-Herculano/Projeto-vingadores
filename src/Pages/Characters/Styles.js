import styled from "styled-components";
import bannerHome from "../../Images/bannerHome.png"
import bannerHomeBlack from "../../Images/bannerHomeBlack.png"

export const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  background-color: ${({ theme }) => (theme === "light" ? "#f5f5f5" : "#222")};
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

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

export const CharactersContainer = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-height: 98vh;
  position: relative;
  z-index: 5;
;`

export const CharacterInfo = styled.div`
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => (theme === "light" ? "#333" : "#ddd")};
  }
`;

export const CharacterCard = styled.div`
width: calc(33.33% - 20px); 
margin-bottom: 20px;  
text-align: center;
background-color: #fff;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

.character-image {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

p {
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
;`

export const BannerDiv = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  height: 100vh;
  background-image: url(${({ isLightBanner }) => (isLightBanner ? bannerHome : bannerHomeBlack)});
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const DetailsContent = styled.div`
  display: flex;
  align-items: center; 
  gap: 20px; 
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};

  img {
    border-radius: 8px;
    width: 200px;
    height: auto;
  }

  div {
    max-width: 600px; 
    text-align: left;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const DarkModeToggle = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 2;

  button {
    background-color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};
    color: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: ${({ theme }) =>
    theme === "light" ? "#555" : "#ddd"};
    }
  }
`;

export const DarkModeIconContainer = styled.div`
  top: 10px;
  ${(props) => (props.isLeft ? "left: 40px;" : "right: 110px;")}  

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 1;
  gap: 10px;
  
  &.light {
    filter: invert(0); 
    padding: 0 30px 0 0
  }

  &.dark {
    filter: invert(1);  
    padding: 0 30px 0 0
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

export const TextColorDarkMode = styled.span`
 color: #F46D1B;
`

export const ContentLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .search-container {
    flex-grow: 1;  
    display: flex;
    justify-content: center;
    width: 485px
  }
`;

export const Conteste = styled.div`
    display: flex
;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    padding: 20px;
    width: 95%;
`;

export const ContentOverlay = styled.div`
  max-width: 90%;
  text-align: center;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
