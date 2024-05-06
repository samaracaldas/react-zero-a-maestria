import { useState } from 'react';
import './MyForm.css';

const MyForm = ({user}) => {

    // 6 - controlled inputs
    // 3 - gerenciamento de dados
    const [name, setName] = useState( user ? user.name : '');
    const [email, setEmail] = useState( user ? user.email : "");
    const [ bio, setBio ] = useState( user ? user.bio : "");
    const [ role, setRole ] = useState( user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value);
    }

    // console.log("name:", name);
    // console.log("email:", email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando form");
        console.log(name, email, bio, role)

        // 7 - limpar form
        setName("");
        setEmail("");
        setBio("");
    }

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    onChange={handleName}
                    value={name}
                 />
            </div>
            <input type="submit" value="Enviar" />

             {/* 2 - label envolvendo o input  (abordagem sugerida pela documentação) */}
            <label>
                <span>E-mail</span>
                <input type="email"
                name='email'
                placeholder='Digite o seu e-mail'
                onChange={(e) => setEmail(e.target.value)} // 4 - alteração de state inline) 
                value={email}
                /> 
            </label>
            { /* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea
                    name="bio" 
                    placeholder='Descrição do Usuário' 
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                ></textarea>
            </label>

            { /* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select 
                    name="role" 
                    onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />

        </form>

       
    </div>
  )
}

export default MyForm