import { useState, useEffect } from 'react'
import UserCard from './components/UserCard'
import './App.css'
import axios from 'axios'

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')
  const [usuarios, setUsuarios] = useState([])
  const [erroCadastro, setErroCadastro] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3003/usuarios')
      .then(response => {
        setUsuarios(response.data)
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error)
      })
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    setErroCadastro('')

    const emailNormalizado = email.trim().toLowerCase()
    const emailjaCadastrado = usuarios.some(usuario => usuario.email.toLowerCase() === emailNormalizado)

    const nomeNormalizado = nome.trim().toLowerCase()
    const nomejaCadastrado = usuarios.some(usuario => usuario.nome.toLowerCase() === nomeNormalizado)

    if (emailjaCadastrado || nomejaCadastrado) {
      setErroCadastro('Este usuário já está cadastrado!')
      return
    }

    axios.post('http://localhost:3003/usuarios', { nome, email, idade })
      .then(response => {
        setUsuarios(usuariosAtuais => [...usuariosAtuais, response.data])
        setNome('')
        setEmail('')
        setIdade('')
      })
      .catch(error => {
        console.error('Erro ao cadastrar usuário:', error)
        setErroCadastro(
          error.response?.data?.erro || 'Não foi possível cadastrar o usuário. Tente novamente.'
        )
      })
  }

  // function handleDelete(index) {
  //   const novosUsuarios = [...usuarios]
  //   novosUsuarios.splice(index, 1)
  //   setUsuarios(novosUsuarios)
  // }

  function handleDelete(index) {
  setUsuarios(usuariosAtuais =>
    usuariosAtuais.filter((_, i) => i !== index)
  )
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
        {erroCadastro && <p role="alert">{erroCadastro}</p>}

      </form>

      <div className="user-list">
        <h2>Lista de Usuários Cadastrados</h2>
        <UserCard usuarios={usuarios} onDelete={handleDelete} />
      </div>
    </div>

  )
}

export default App
