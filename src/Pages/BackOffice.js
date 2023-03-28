import { useEffect, useState } from "react";
import databaseService from "../utils/database";
import authService from "../utils/auth";

const BackOffice = () => {
  // check if user is connected else redirect to login page
  if (localStorage.getItem("UserCreds") === null) {
    window.location.href = "/login";
  }
  let dates = [];
  const [getDates, setDates] = useState(dates);

  useEffect(() => {
    // get all dates from database
    databaseService.readData("dates/", (data) => {
      if (data === null) {
        setDates([]);
      } else {
        const dateArray = [];
        // loop over to get object keys and values then push object with id, ville, date and lieu to dateArray
        for (let i = 0; i < Object.keys(data).length; i++) {
          dateArray.push({
            id: Object.keys(data)[i],
            ville: Object.values(data)[i].ville,
            date: Object.values(data)[i].date,
            pays: Object.values(data)[i].pays,
            lieu: Object.values(data)[i].lieu,
            complet: Object.values(data)[i].complet,
          });
        }

        setDates(Object.values(dateArray));
      }
    });
  }, []);

  const addDate = (event) => {
    event.preventDefault();
    let date = event.target.children.date.value;
    let ville = event.target.children.ville.value;
    let pays = event.target.children.pays.value;
    let lieu = event.target.children.lieu.value;
    let complet = event.target.children.complet.value;

    const data = {
      date: date,
      ville: ville,
      pays: pays,
      lieu: lieu,
      complet: complet,
    };

    if (date !== "" && ville !== "") {
      databaseService.pushData("dates/", data);
    }
  };

  const removeDate = (id) => {
    databaseService.removeData(id);
  };

  const editDate = (event) => {
    event.preventDefault();
    let id = event.target.children.id.value;
    let date = event.target.children.date.value;
    let ville = event.target.children.ville.value;
    let pays = event.target.children.pays.value;
    let lieu = event.target.children.lieu.value;
    let complet = event.target.children.complet.value;

    const data = {
      date: date,
      ville: ville,
      pays: pays,
      lieu: lieu,
      complet: complet,
    };

    databaseService.updateData(`dates/${id}`, data);
  };

  const [pwdErrors, setPwdErrors] = useState();

  const addUser = (event) => {
    event.preventDefault();
    let email = event.target.children.email.value;
    let pwd = event.target.children.pwd.value;

    if (pwd.length > 6) {
      authService.signUp(email, pwd);
      event.target.reset();
    } else {
      setPwdErrors(
        <p>Votre mot de passe doit contenir au minimum 6 caractères</p>
      );
    }
  };

  return (
    <div>
      <nav>
        <form onSubmit={addUser} className="nav-form">
          <p>Ajouter un collaborateur :</p>
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="pwd">Mot de passe :</label>
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="Mot de passe du collaborateur"
          />
          {pwdErrors}

          <button>Ajouter</button>
        </form>
        <form onSubmit={addDate} className="nav-form">
          <p>Ajouter une date de tournée :</p>
          <label htmlFor="date">Date :</label>
          <input type="date" name="date" id="date" />

          <label htmlFor="ville">Ville du concert :</label>
          <input
            type="text"
            name="ville"
            id="ville"
            placeholder="Ville du concert"
          />

          <label htmlFor="pays">Pays du concert :</label>
          <input
            type="text"
            name="pays"
            id="pays"
            placeholder="Pays du concert"
          />

          <label htmlFor="lieu">Lieu du concert :</label>
          <input
            type="text"
            name="lieu"
            id="lieu"
            placeholder="Lieu du concert"
          />

          <label htmlFor="complet">Le concert est-il pleint ?</label>
          <input type="checkbox" name="complet" id="complet" />

          <button>Ajouter</button>
        </form>
      </nav>

      <ul className="date-list">
        {getDates.map((date) => (
          <li key={date.id}>
            <p>
              {date.date} à {date.ville} | {date.lieu}
            </p>
            <div>
              <form onSubmit={editDate}>
                <label htmlFor="editDate">Date :</label>
                <input
                  type="date"
                  name="date"
                  id="editDate"
                  defaultValue={date.date}
                />

                <label htmlFor="editVille">Lieu du concert :</label>
                <input
                  type="text"
                  name="ville"
                  id="editVille"
                  placeholder="Ville du concert"
                  defaultValue={date.ville}
                />

                <label htmlFor="editPays">Pays du concert :</label>
                <input
                  type="text"
                  name="editPays"
                  id="editPays"
                  placeholder="Pays du concert"
                  defaultValue={date.pays}
                />

                <label htmlFor="editLieu">Lieu du concert :</label>
                <input
                  type="text"
                  name="lieu"
                  id="editLieu"
                  placeholder="Lieu du concert"
                  defaultValue={date.lieu}
                />

                <label htmlFor="editComplet">Le concert est-il pleint ?</label>
                <input
                  type="checkbox"
                  name="editComplet"
                  id="editComplet"
                  defaultValue={date.complet}
                />

                <input type="hidden" name="id" value={date.id} />

                <button>Edit</button>
              </form>
              <button
                className="remove-btn"
                onClick={() => removeDate(date.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BackOffice;
