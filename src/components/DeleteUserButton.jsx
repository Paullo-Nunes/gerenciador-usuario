import './DeleteButton.css';
function DeleteUserButton({ onClick }) {
  return (
    <button className="delete-user-button" onClick={onClick}>
      Deletar
    </button>
  );
}

export default DeleteUserButton;