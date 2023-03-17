import { useEffect, useState } from "react";
import databaseService from "../utils/database";

const BackOffice = () => {
  if (localStorage.getItem("UserCreds") === null) {
    window.location.href = "/login";
  }
  let dates = [];
  const [getDates, setDates] = useState(dates);

  useEffect(() => {
    databaseService.readData("dates/", (data) => {
      if (data === null) {
        setDates([]);
      } else {
        const dateArray = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
          dateArray.push({
            id: Object.keys(data)[i],
            ville: Object.values(data)[i].ville,
            date: Object.values(data)[i].date,
            lieu: Object.values(data)[i].lieu,
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
    let lieu = event.target.children.lieu.value;

    const data = {
      ville: ville,
      date: date,
      lieu: lieu,
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
    let lieu = event.target.children.lieu.value;

    const data = {
      ville: ville,
      date: date,
      lieu: lieu,
    };

    databaseService.updateData(`dates/${id}`, data);
  };

  return (
    <div>
      <form onSubmit={addDate} className="date-form">
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

        <label htmlFor="lieu">Lieu du concert :</label>
        <input
          type="text"
          name="lieu"
          id="lieu"
          placeholder="Lieu du concert"
        />

        <button>Ajouter</button>
      </form>

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

                <label htmlFor="editLieu">Lieu du concert :</label>
                <input
                  type="text"
                  name="lieu"
                  id="editLieu"
                  placeholder="Lieu du concert"
                  defaultValue={date.lieu}
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
