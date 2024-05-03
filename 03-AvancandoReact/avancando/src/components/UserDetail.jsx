import React from 'react'

const UserDetail = ({ nome, idade, profissao }) => {
  return (
    <div>
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p> 
        {idade >=18 ? (<p>Esta pessoa pode tirar a habilitação!</p>) : (
            <p>Menor de idade!</p>
        ) }
    </div>
  )
}

export default UserDetail