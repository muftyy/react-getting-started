import React from 'react';

const Ninjas = ({ninjas}) => {
      return(
        <div className="ninjas">
          { ninjas.map(ninja => <p key={ninja.id}>{ninja.name} {ninja.age} {ninja.belt}</p>) }
        </div>
    )
}

export default Ninjas;
