import { StyledAuthModal } from "./styles/AuthModal.styled";
import { MdOutlineEmail } from "react-icons/md";
import { BsGoogle } from "react-icons/bs";
import { signInWithGoogle } from "../firebase-config";

function AuthModal() {
  // const register = async () => {};

  // const login = async () => {};

  // const logout = async () => {};

  const removeModal = () => {
    document.querySelector(".auth-modal-container").style.display = "none";
  };

  const modalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <StyledAuthModal onClick={removeModal} className="auth-modal-container">
      <div onClick={modalClick} className="auth-modal">
        <button className="auth-btn auth-btn-google">
          <BsGoogle />
          <span onClick={signInWithGoogle}>Sign In With Google</span>
        </button>
        <button className="auth-btn auth-btn-email">
          <MdOutlineEmail />
          <span>Sign In With Email</span>
        </button>
      </div>
    </StyledAuthModal>
  );
}

export default AuthModal;
