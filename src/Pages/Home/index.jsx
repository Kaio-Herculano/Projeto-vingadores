import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import bannerHomeBlack from "../../Images/bannerHomeBlack.png";
import bannerHome from "../../Images/bannerHome.png";
import logoFPR from "../../Images/logoFPR.png";
import darkModeIcon from "../../Images/darkModeIcon.png";
import { getCharactersByName } from "../../Servises/api";
import {
  BannerDiv,
  Textcolor,
  Search,
  Container,
  ContentSerach,
  ContentLogo,
  IntroText,
  InfoText,
  DarkModeIconContainer,
  DarkmodeText,
  CharactersContainer,
  CharacterCard,
  TextColorDarkMode,
  Header,
} from "./Styles";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [theme, setTheme] = useState("light");
  const [characters, setCharacters] = useState([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isLightBanner = theme === "light";

  const fetchCharacters = async (name) => {
    if (name) {
      try {
        const results = await getCharactersByName(name);
        setCharacters(results);
      } catch (error) {
        console.error(error);
        setCharacters([]);
      }
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    fetchCharacters(searchValue);
  }, [searchValue]);

  const handleCharacterClick = (id) => {
    window.location.href = `/details/${id}`;
  };

  return (
    <div>
      <BannerDiv>
        
        <img
          src={isLightBanner ? bannerHome : bannerHomeBlack}
          alt="Banner Home"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: searchValue ? (isLightBanner ? 0.7 : 0.5) : 1,
            transition: "opacity 0.3s ease",
          }}
        />
        
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: searchValue
              ? isLightBanner
                ? "#E6DCDBE5"
                : "#00000080"
              : "transparent",
            transition: "background-color 0.3s ease",
          }}
        ></div>

       
        <Header>
  <ContentLogo>
    <img
      src={logoFPR}
      alt="Logo da FPR"
      className="logo"
      style={{ width: "400px", height: "auto" }}  
    />
  </ContentLogo>

  <DarkModeIconContainer className={isLightBanner ? "dark" : "light"} isLeft={isLightBanner}>
    <img
      src={darkModeIcon}
      alt="Modo Escuro"
      onClick={toggleTheme}
      style={{ cursor: "pointer", width: "30px", height: "30px" }}
    />
    <DarkmodeText theme={theme}>
      {isLightBanner ? "Tema dark" : "Tema light"} <br /> <TextColorDarkMode>mudar tema
      </TextColorDarkMode>
    </DarkmodeText>
  </DarkModeIconContainer>

  <Search>
    <div className="search-container">
      <input
        type="text"
        placeholder="Pesquisar"
        className="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <IoSearchSharp className="search-icon" />
    </div>
  </Search>
</Header>

      </BannerDiv>

    
      <Container>
        <ContentSerach>
          <Search>
            <div className="search-container">
              <input
                type="text"
                placeholder="Pesquisar"
                className="search-input"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <IoSearchSharp className="search-icon" />
            </div>
          </Search>
        </ContentSerach>

        {characters.length === 0 && searchValue === "" && (
          <>
            <Textcolor>Bem-vindo ao FPR MARVEL</Textcolor>
            <IntroText style={{ color: theme === "light" ? "black" : "white" }}>
              Escolha o seu personagem
            </IntroText>
            <InfoText style={{ color: theme === "light" ? "black" : "white" }}>
              O Universo Marvel é o universo compartilhado onde<br />
              ocorrem as histórias na maioria dos títulos de<br />
              quadrinhos americanos e outras mídias publicadas<br />
              pela Marvel Entertainment.
            </InfoText>
          </>
        )}

        <CharactersContainer>
          {characters.length > 0 && searchValue !== "" && (
            <>
              {characters.slice(0, 4).map((character) => (
                <CharacterCard
                  key={character.id}
                  onClick={() => handleCharacterClick(character.id)}
                >
                  <img
                    className="character-image"
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                  />
                  <p>{character.name}</p>
                </CharacterCard>
              ))}
            </>
          )}
        </CharactersContainer>
      </Container>
    </div>
  );
};
