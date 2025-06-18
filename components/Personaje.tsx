import { FunctionComponent } from "preact";

type CharacterProps = {
  character: {
    id: string;
    name: string;
    image: string;
    actor: string;
    house: string;
    alive: string;
  };
};

const Personaje: FunctionComponent<CharacterProps> = ({ character }) => {
  return (
    <a href={`/Personaje/${character.id}`} class="character">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <button name="favorito" type="button">
        <svg aria-hidden="true" viewBox="0 0 10 10">
          <path d="m7.4 8.8-2.4-1.3-2.4 1.3.46-2.7-2-1.9 2.7-.39 1.2-2.5 1.2 2.5 2.7.39-1.9 1.9z" />
        </svg>
        Agregar a favoritos
      </button>
    </a>
  );
};

export default Personaje;
