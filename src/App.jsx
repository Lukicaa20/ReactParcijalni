import { useState } from "react";
import SearchPolje from "./components/SearchPolje";
import PrikaziUsera from "./components/PrikaziUsera";

const App = () => {
  const [text, setText] = useState("");
  const [user, setUser] = useState({});
  const [listaRep, setListaRep] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const fetchUser = async (text) => {
    await fetch(`https://api.github.com/users/${text}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => alert(error));
  };

  const fetchRep = async (text) => {
    await fetch(`https://api.github.com/users/${text}/repos`)
      .then((res) => res.json())
      .then((data) => setListaRep(data))
      .catch((error) => alert(error));
  };

  const reset = () => {
    setText("");
    setUser({});
    setListaRep([]);
  };

  console.log(user);
  console.log(listaRep);

  return (
    <div>
      <SearchPolje
        text={text}
        handleChange={handleChange}
        fetchUser={fetchUser}
        fetchRep={fetchRep}
      />
      <PrikaziUsera reset={reset} user={user} listaRep={listaRep} />
    </div>
  );
};

export default App;
