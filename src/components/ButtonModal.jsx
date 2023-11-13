import '../styles/components/ButtonModal.css';

const ButtonModal = ({ appLink }) => {
  return (
    <div>
      <a href={appLink} target="_blank" rel="noreferrer">
        <button className="button-modal">ACESSAR</button>
      </a>
    </div>
  );
}

export default ButtonModal;
