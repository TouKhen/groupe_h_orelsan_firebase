import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const authService = {
  signOut() {
    return new Promise((resolve) => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          resolve({ data: "success" });
        })
        .catch((error) => {
          resolve({ error });
        });
    });
  },
  getCurrentAuthState(callback) {
    const auth = getAuth();
    onAuthStateChanged(auth, callback);
  },
  signUp(email, pwd) {
    return new Promise((resolve) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          resolve({ data: user });
        })
        .catch((error) => {
          let frenchMessage;
          switch (error.code) {
            case "auth/invalid-email":
              frenchMessage = "Adresse mail mal formatée";
              break;
            case "auth/weak-password":
              frenchMessage =
                "Votre mot de passe doit contenir minimum 6 caractères";
              break;
            case "auth/email-already-in-use":
              frenchMessage = "Cette adresse mail est déjà utilisée";
              break;
            default:
              frenchMessage =
                "Une erreur inconnue est survenue ! Code de l'erreur : " +
                error.code;
          }
          resolve({ error: { ...error, frenchMessage } });
        });
    });
  },
  login(email, pwd) {
    return new Promise((resolve) => {
      const auth = getAuth();
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          return signInWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              resolve({ data: user });
              console.log("logged in");
              window.location.href = "/backoffice";
            })
            .catch((error) => {
              let frenchMessage;
              switch (error.code) {
                case "auth/user-not-found":
                case "auth/wrong-password":
                case "auth/wrong-email":
                  frenchMessage =
                    "Mot de passe et/ou adresse mail non reconnu.e.s";
                  break;
                default:
                  frenchMessage =
                    "Une erreur inconnue est survenue ! Code de l'erreur : " +
                    error.code;
              }
              resolve({ error: { ...error, frenchMessage } });
            });
        })
        .catch((error) => {
          resolve({ error });
        });
    });
  },
};

export default authService;
