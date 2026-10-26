import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')
  const [usuarios, setUsuarios] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    const emailNormalizado = email.trim().toLowerCase()
    const emailjaCadastrado = usuarios.some(usuario => usuario.email.toLowerCase() === emailNormalizado)

    const nomeNormalizado = nome.trim().toLowerCase()
    const nomejaCadastrado = usuarios.some(usuario => usuario.nome.toLowerCase() === nomeNormalizado)

    if (emailjaCadastrado || nomejaCadastrado) {
      alert('Este usuário já está cadastrado!')
      return
    }

    setUsuarios([...usuarios, { nome, email, idade }])
    setNome('')
    setEmail('')
    setIdade('')
  }

  return (

    <div className="app">

      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

      </form>

      <div className="user-list">
        <h2>Lista de Usuários Cadastrados</h2>
        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>
              <strong>{usuario.nome}</strong><br />
              {usuario.email}<br />
              {usuario.idade} anos
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default App
