import React from 'react';

const Ninjas = ({ninjas}) => {
      return(
        <div className="ninjas">
          { ninjas.map(ninja => ninja.age > 30 ? <p key={ninja.id}>{ninja.name} {ninja.age} {ninja.belt}</p> : null) }
        </div>
    )
}

export default Ninjas;
