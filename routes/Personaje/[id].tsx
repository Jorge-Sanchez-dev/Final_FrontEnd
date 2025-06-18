import axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Character = {
  id: string;
  name: string;
  image: string;
  actor: string;
  house: string;
  alive: string;
};

type Data = {
  character: Character | null;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const id = ctx.params.id;

    try {
      const res = await axios.get("https://hp-api.onrender.com/api/characters");
      const characters = res.data as Character[];
      const character = characters.find((c) => c.id === id) || null;

      return ctx.render({ character });
    } catch (error) {
      console.error("Error al obtener el personaje", error);
      return ctx.render({ character: null });
    }
  },
};

export default function PersonajePage({ data }: PageProps<Data>) {
  const character = data.character;

  if (!character) return <h1>personaje no encontrado</h1>;

  return (
    <div class = "centrar">
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <button name="favorito" type="button">
        <svg aria-hidden="true" viewBox="0 0 10 10">
          <path d="m7.4 8.8-2.4-1.3-2.4 1.3.46-2.7-2-1.9 2.7-.39 1.2-2.5 1.2 2.5 2.7.39-1.9 1.9z" />
        </svg>
        Agregar a favoritos
      </button>
      <p>
        <strong>Casa:</strong> {character.house}
      </p>
      <p>
        <strong>VIVO</strong>
      </p>

      <a href="/">Volver</a>
    </div>
  );
}
