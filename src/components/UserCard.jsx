import './UserCard.css';
import DeleteUserButton from './DeleteUserButton';

function UserCard({ usuarios, onDelete }) {
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
          <DeleteUserButton onClick={() => onDelete(index)} />
        </li>
      ))}
    </ul>
  );
}

export default UserCard;