import axios from "npm:axios"
import CharPersonaje from "../components/CharPersonaje.tsx"

type Character = {
  id: string;
  name: string;
  image: string;
  house: string;
  alive: string;
}

export default async function Listpersonajes() {
  try {
    const response = await axios.get("https://hp-api.onrender.com/api/characters");
    const data = response.data;

    const personajes: Character[] = data.map((p: any) => ({
      id: p.id,
      name: p.name,
      house: p.house,
      image: p.image,
    }));

    return (
      <div>
        <h1>Mis favoritos son: </h1>
        <CharPersonaje characters={data} />
      </div>
    )
  } catch (error) {
    console.error("Error al cargar los personajes", error);
    return (
      <div>
        <h1>Ha habido un error al capturar los personajes</h1>
      </div>
    )
  }
}
  

