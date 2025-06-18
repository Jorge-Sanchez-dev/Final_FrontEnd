import { FunctionComponent } from "preact";
import Personaje from "./Personaje.tsx"


type CharacterType = {
    id: string;
    name: string;
    image: string;
    actor: string;
    house: string;
}

type Props = {
    characters: Array<CharacterType>
}

const CharPersonaje: FunctionComponent<Props> = (props )=> {
    return(
        <div class="characterContainer">
        {props.characters.map((ch) => (
            <Personaje character= {ch} />
         ))}
        </div>
    );
};

export default CharPersonaje;