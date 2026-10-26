import './UserCard.css';

function UserCard({ usuarios }) {
  return (
    <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>
              <strong>{usuario.nome}</strong><br />
              {usuario.email}<br />
              {usuario.idade} anos
            </li>
          ))}
        </ul>
  );
}

export default UserCard;