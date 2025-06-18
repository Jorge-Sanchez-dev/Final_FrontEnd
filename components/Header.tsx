import { FunctionComponent } from "preact";


const Header: FunctionComponent = () => {
  return (
    <div class="Header" >
      <a href="/">Todos</a>
      <a href="/favorites">Favoritos</a>
    </div>
  );
};

export default Header;