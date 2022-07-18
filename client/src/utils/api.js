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
      axios
        .get(
          `${artistUrl}/releases`
        )
        .then((res) => {
          const results = res.data.releases;
          // const filter = results.filter(item => {
          //   results.title(item) === item.title;
          // });
          // console.log(results);
          const filteredResults = [];
          const unique = results.filter(element => {
            const isDuplicate = filteredResults.includes(element.title);
            if (!isDuplicate) {
              filteredResults.push(element.id);
              return true;
            }
            return false;
          })
          console.log(unique);
          // window.location.assign("/results");
          return results;
        });
    });
}

export function getAlbum(query) {
  axios
    .get(
      `https://api.discogs.com/database/search?release_title=${query}&token=KSesRJPuCtZkTWwYBFJmAywfVYNMLqDpmISHeWtr`
    )
    .then((res) => {
      const releaseId = res.data.results[0].resource_url;
      console.log(res.data);
      axios.get(``).then((res) => {
        const results = res.data.releases;
        console.log(results);
        // window.location.assign("/results");
        return results;
      });
    });
}

function uniq(a) {
  return Array.from(new Set(a));
}
