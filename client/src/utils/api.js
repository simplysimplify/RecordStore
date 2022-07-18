import React from "react";
import axios from "axios";

export function getArtist(query) {
  axios
    .get(
      `https://api.discogs.com/database/search?&type=artist&q=${query}&token=KSesRJPuCtZkTWwYBFJmAywfVYNMLqDpmISHeWtr`
    )
    .then((res) => {
      const artistUrl = res.data.results[0].resource_url;
      // console.log(res.data)
      axios.get(`${artistUrl}/releases`).then((res) => {
        const results = res.data.releases;
        const uniqueObjects = [
          ...new Map(results.map((item) => [item.title, item])).values(),
        ];
        console.log(uniqueObjects);
        // window.location.assign("/results");
        return results;
      });
    });
}

export function getAlbum(query) {
  axios
    .get(
      `https://api.discogs.com/database/search?type=master&q=${query}&token=KSesRJPuCtZkTWwYBFJmAywfVYNMLqDpmISHeWtr`
    )
    .then((res) => {
      const albumUrl = res.data.results[0].resource_url;
      console.log(res.data);
      axios.get(`${albumUrl}`).then((res) => {
        const results = res.data
        console.log(results)
        // window.location.assign("/results");
        return results;
      });
    });
}
