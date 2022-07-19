import React from "react";
import axios from "axios";

const getArtist = async (query) => {
  const res = await axios
    .get(
      `https://api.discogs.com/database/search?&type=artist&q=${query}&token=KSesRJPuCtZkTWwYBFJmAywfVYNMLqDpmISHeWtr`
    )
      const artistUrl = res.data.results[0].resource_url;
      // console.log(res.data)
      const res2 = await axios.get(`${artistUrl}/releases`)
        const results = res2.data.releases;
        const uniqueObjects = [
          ...new Map(results.map((item) => [item.title, item])).values(),
        ];
        console.log(uniqueObjects);
        // window.location.assign("/results");
        return results;
}

const getAlbum = async (query) => {
  const res = await axios
    .get(
      `https://api.discogs.com/database/search?type=master&q=${query}&token=KSesRJPuCtZkTWwYBFJmAywfVYNMLqDpmISHeWtr`
    )
      const albumUrl = res.data.results[0].resource_url;
      console.log(res.data);
      const res2 = await axios.get(`${albumUrl}`)
        const results = res2.data
        console.log(results)
        // window.location.assign("/results");
        return results;
}

const API = { getArtist, getAlbum }
export default API