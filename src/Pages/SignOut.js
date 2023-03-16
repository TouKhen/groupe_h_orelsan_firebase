import authService from "../utils/auth";

const SignOut = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    authService.signOut();
    localStorage.removeItem("UserCreds");
    document.location.href = "/";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button>Sign out ?</button>
      </form>
    </div>
  );
};

export default SignOut;
