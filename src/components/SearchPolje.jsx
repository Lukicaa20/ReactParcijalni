const SearchPolje = ({ handleChange, text, fetchUser, fetchRep }) => {
  const handleClick = async (e) => {
    e.preventDefault();
    await fetchUser(text);
    await fetchRep(text);
  };

  return (
    <div className="container">
      <h1>Lukina GitHub tražilica</h1>
      <form>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Unesite korisnika"
        />
        <button onClick={handleClick}>Pretraži</button>
      </form>
    </div>
  );
};

export default SearchPolje;
