import { FunctionComponent } from "preact";

type CharacterProps = {
  character: {
    id: string;
    name: string;
    image: string;
    actor: string;
    house: string;
  };
};

const Personaje: FunctionComponent<CharacterProps> = ({ character }) => {
  return (
    <a href={`/Personaje/${character.id}`}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </a>
  );
};


export default Personaje;