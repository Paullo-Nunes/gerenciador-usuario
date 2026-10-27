import './UserCard.css';

function UserCard({ usuarios }) {
  return (
    <ul>
          {usuarios.map((usuario, index) => (
            <li key={index} className="user-card">
              <img className="user-image" src={`https://robohash.org/${usuario.nome}`} alt={usuario.nome} />
              <div className="user-info">
                <strong>{usuario.nome}</strong>
                {usuario.email} <br />
                {usuario.idade} anos
              </div>
            </li>
          ))}
        </ul>
  );
}

export default UserCard;