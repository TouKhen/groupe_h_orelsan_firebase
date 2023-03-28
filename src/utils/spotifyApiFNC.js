import { Client } from "spotify-api.js";

const spotifyApiFNC = async () => {
  const clientId = "b4de5e7905ac4579a4b4ebc88bd9f473";
  const clientSecret = "383f9a60e6294067bdc2a63b2392bf71";

  const client = await Client.create({
    token: { clientID: "id", clientSecret: "secret" },
  });
  console.log(await client.tracks.get("id"));
};

export default spotifyApiFNC;
