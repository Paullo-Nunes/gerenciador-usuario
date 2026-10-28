import './DeleteButton.css';
function DeleteUserButton({ onClick }) {
  return (
    <button className="delete-user-button" onClick={onClick}>
      Excluir
    </button>
  );
}

export default DeleteUserButton;