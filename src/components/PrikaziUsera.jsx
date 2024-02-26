import React from "react";

const PrikaziUsera = ({ user, listaRep, reset }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    reset();
  };
  return (
    <div className="storage">
      <img src={user.avatar_url} alt="photo" />

      <h2>{user.name}</h2>
      <p>{user.location}</p>
      <p>{user.bio}</p>
      <div>
        {listaRep.slice(1, 10).map((rep) => (
          <p key={rep.id}>{rep.name}</p>
        ))}
      </div>
      {listaRep.length > 0 ? (
        <button onClick={handleDelete}>Reset</button>
      ) : null}
    </div>
  );
};

export default PrikaziUsera;
