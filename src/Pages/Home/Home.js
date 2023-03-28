import { useEffect, useState } from "react";
import databaseService from "../../utils/database";
import logo from "./Logo Orelsan neon 5.svg";
import logo2 from "./Logo Orelsan neon 4.svg";
import spotifyApiFNC from "../../utils/spotifyApiFNC";
import { Client } from "spotify-api.js";

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

    // get all tracks from orelsan album civilization ultime via Spotify API
    fetch("https://api.spotify.com/v1/albums/68YP0pEgwhnfRqQAzu71gP", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQA_88fHYjojhI99YJMWIwSePOsGYoQUSgo5aCSksxvXiVWpM4PNeamQY_bgjoeJTJte8Cy_IQRWENsyoSZlHFpchl4iOXMCeARRvpVp56Xe_LlZcQAU0ZmkKEguTh7PVwqLb5FC6mazf6Ka-05FDfsMdARU756W6_xSWFUSA8AX2mIWD7vg8mNTtYZjZo02FAQsOCkS68Q-",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTracks(result.tracks.items);
      });
  }, []);

  const clientId = "b4de5e7905ac4579a4b4ebc88bd9f473";
  const clientSecret = "383f9a60e6294067bdc2a63b2392bf71";

  return (
    <div>
      <img className="logo-svg" src={logo} />
      <img className="logo-svg" src={logo2} />
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
