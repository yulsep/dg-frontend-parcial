import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import "./styles/styles.css";

function App() {
  const [information, setInformation] = useState({
    firstName: "",
    email: "",
    music: "",
    artist: "",
  });

  const [error, setError] = useState("");
  const [musicInfo, setMusicInfo] = useState(structuredClone(information));

  const handleChange = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  const validateFirstName = (firstName) => {
    return firstName.trim().length >= 3 && !firstName.trim().includes(" ");
  };

  const validateEmail = (email) => {
    const emailRegex = new RegExp("^(.+)@(\\S+)$");
    return emailRegex.test(email);
  };

  const validateMusic = (music) => {
    return music.trim().length >= 6;
  };

  const validateArtist = (artist) => {
    return artist.trim().length >= 3;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, music, artist } = information;
    if (
      !validateEmail(email) ||
      !validateMusic(music) ||
      !validateArtist(artist) ||
      !validateFirstName(firstName)
    ) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setMusicInfo({
        firstName,
        email,
        music,
        artist,
      });
      setError("");
    }
  };

  return (
    <>
      <h1>Favorite Music</h1>
      <form onSubmit={handleSubmit}>
        <div></div>
        <input
          value={information.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
          placeholder="Ingrese su nombre"
        />
        <input
          value={information.music}
          onChange={handleChange}
          name="music"
          type="text"
          placeholder="Ingrese su música favorita"
        />
        <input
          value={information.artist}
          onChange={handleChange}
          name="artist"
          type="text"
          placeholder="Ingrese su artista favorito"
        />
        <input
          value={information.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Ingrese su email"
        />
        <button type="submit"> Enviar </button>
      </form>
      {error && <p className="error">{error}</p>}
      {musicInfo.firstName !== "" && <Card information={musicInfo} />}
    </>
  );
}

export default App;
