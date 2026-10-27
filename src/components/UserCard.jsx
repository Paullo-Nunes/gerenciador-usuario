import './UserCard.css';

function UserCard({ usuarios }) {
  return (
    <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>
              <img src={`https://robohash.org/${usuario.nome}`} alt={usuario.nome} width={30} height={30} />
              <strong>{usuario.nome}</strong><br />
              {usuario.email}<br />
              {usuario.idade} anos
            </li>
          ))}
        </ul>
  );
}

export default UserCard;