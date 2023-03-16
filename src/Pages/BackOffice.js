import { useEffect, useState } from "react";
import databaseService from "../utils/database";

const BackOffice = () => {
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
            city: Object.values(data)[i].city,
            date: Object.values(data)[i].date,
          });
        }

        setDates(Object.values(dateArray));
      }
    });
  }, []);

  const addDate = (event) => {
    event.preventDefault();
    let date = event.target.children.date.value;
    let city = event.target.children.ville.value;

    const data = {
      city: city,
      date: date,
    };

    if (date !== "" && city !== "") {
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
    let city = event.target.children.ville.value;

    const data = {
      city: city,
      date: date,
    };

    databaseService.updateData(`dates/${id}`, data);
  };

  return (
    <div>
      <form onSubmit={addDate}>
        <p>Ajouter une date de tournée :</p>
        <label htmlFor="date">Date :</label>
        <input type="date" name="date" id="date" />

        <label htmlFor="ville">Lieu du concert :</label>
        <input
          type="text"
          name="ville"
          id="ville"
          placeholder="Ville du concert"
        />

        <button>Ajouter</button>
      </form>

      <ul>
        {getDates.map((date) => (
          <li key={date.id}>
            <p>
              {date.date} à {date.city}
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
                  defaultValue={date.city}
                />

                <input type="hidden" name="id" value={date.id} />

                <button>Edit</button>
              </form>
            </div>
            <button onClick={() => removeDate(date.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BackOffice;
