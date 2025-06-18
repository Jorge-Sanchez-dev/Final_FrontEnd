import axios from "npm:axios"
import CharPersonaje from "../components/CharPersonaje.tsx"
import { PageProps } from "$fresh/server.ts"

type Character = {
  id: string;
  name: string;
  image: string;
  house: string;
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
        <h1>Lista de personajes</h1>
        <CharPersonaje characters={data} />
      </div>
    )
  } catch (error) {
    
  }
}