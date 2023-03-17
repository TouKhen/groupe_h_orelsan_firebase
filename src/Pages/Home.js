import { useEffect, useState } from "react";
import databaseService from "../utils/database";
import spotifyApiFNC from "../utils/spotifyApiFNC";

const Home = () => {
  let dates = [],
    tracks_array = [];
  const [getDates, setDates] = useState(dates);
  const [getTracks, setTracks] = useState(tracks_array);

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

    fetch("https://api.spotify.com/v1/albums/68YP0pEgwhnfRqQAzu71gP", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQCibz8tPUZQZ6yCV08TLiG2iwuqmUv6_hE6Rnz_ILVSCtX4o5MemjO1tjhOIYceTBPFnv_LMLp6wrFyhi7aWiTd2Da9f5Dsqif6X8rMOLdJK3hchKUFX0S-pNDdn1fQyzm2iVlY3T-dfLDddq_VyBDUfhnYTFIl8UPJr6spp5YpfcYotQkQfgkdFncg_X6qSayzUsxVAqyR6qwG",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTracks(result.tracks.items);
        console.log(result.tracks);
      });
  }, []);

  return (
    <div>
      <p>hey</p>

      <ul className="date-list">
        {getDates.map((date) => (
          <li key={date.id}>
            <p>
              {date.date} à {date.ville} | {date.lieu}
            </p>
          </li>
        ))}
      </ul>

      <ul className="tracks-list">
        {getTracks.map((track) => (
          <li>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
