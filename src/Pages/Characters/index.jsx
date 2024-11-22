import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import logoFPR from "../../Images/logoFPR.png";
import darkModeIcon from "../../Images/darkModeIcon.png";
import { getCharacterById, getCharactersByName } from "../../Servises/api";
import {
  BannerDiv,
  ContentLogo,
  ContentOverlay,
  Conteste,
  DarkModeIconContainer,
  DarkmodeText,
  Header,
  TextColorDarkMode,
  Search,
  CharactersContainer,
  CharacterCard,
} from "./Styles";

export const Details = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [theme, setTheme] = useState("light");
  const [searchValue, setSearchValue] = useState("");
  const [characters, setCharacters] = useState([]);

  const isLightBanner = theme === "light";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await getCharacterById(id);
        setCharacter(response);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
      }
    };
    fetchCharacterDetails();
  }, [id]);

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

  if (!character) return <p>Carregando...</p>;

  return (
    <>
      <BannerDiv isLightBanner={isLightBanner}>
        <Header>
          <ContentLogo>
            <Link to="/">
              <img
                src={logoFPR}
                alt="Logo da FPR"
                className="logo"
                style={{ width: "293px" }}
              />
            </Link>
            <Search className={searchValue ? "search-active" : ""}>
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
            <DarkModeIconContainer
              className={isLightBanner ? "dark" : "light"}
              isLeft={false}
            >
              <img
                src={darkModeIcon}
                alt="Modo Escuro"
                onClick={toggleTheme}
                style={{ cursor: "pointer", width: "30px", height: "30px" }}
              />
              <DarkmodeText theme={theme}>
                {isLightBanner ? "Tema dark" : "Tema light"} <br />
                <TextColorDarkMode>mudar tema</TextColorDarkMode>
              </DarkmodeText>
            </DarkModeIconContainer>
          </ContentLogo>
        </Header>

        <CharactersContainer>
          {characters.length > 0 && searchValue !== "" && (
            <>
              {characters.slice(0, 4).map((char) => (
                <CharacterCard key={char.id}>
                  <img
                    className="character-image"
                    src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                    alt={char.name}
                  />
                  <p>{char.name}</p>
                </CharacterCard>
              ))}
            </>
          )}
        </CharactersContainer>

        <Conteste>
          <ContentOverlay>
            <div style={{ display: "flex", gap: "20px" }}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                style={{ width: "208px", height: "auto" }}
              />
              <h1>{character.name}</h1>
            </div>

            <p style={{ width: "568px" }}>{character.description}</p>
          </ContentOverlay>
        </Conteste>
      </BannerDiv>
    </>
  );
};
