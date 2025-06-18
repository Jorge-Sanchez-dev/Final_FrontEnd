import axios from "npm:axios";
import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";


type Character = {
    id: string;
    name: string;
    image: string;
    actor: string;
    house: string;
}

type Data = {
    character: Character | null;
}

export const handler: Handlers<Data> = {
    GET: async(_req: Request, ctx: FreshContext<unknown,Data>) => {
        const id = ctx.params.id;

        try{
            const res = await axios.get("https://hp-api.onrender.com/api/characters");
            const characters = res.data as Character[];
            const character = characters.find((c) => c.id === id) || null;

            return ctx.render({character});
        } catch (error){
            console.error("Error al obtener el personaje", error);
            return ctx.render({character: null});
        }
    },
};


export default function PersonajePage({data}: PageProps<Data>){
    const character = data.character;

    if (!character) return <h1>personaje no encontrado</h1>

    return (
        <div>
            <img src={character.image} alt = {character.name}/>
            <h1>{character.name}</h1>
            <p>
                <strong>Casa: </strong> {character.house}
            </p>            
        </div>
    );
};