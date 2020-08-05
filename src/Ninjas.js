import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
      return(
        <div className="ninjas">
          { ninjas.map(ninja => ninja.age > 30 ? <p key={ninja.id}>{ninja.name} {ninja.age} {ninja.belt} <button onClick={() => deleteNinja(ninja.id)}>delete</button></p> : null) }
        </div>
    )
}

export default Ninjas;
