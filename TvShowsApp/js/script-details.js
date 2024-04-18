import { getShowsDetails } from "./tvmaze-api.js";
const url = new URL(document.URL);
const searchParams = url.searchParams;
const query = searchParams.get("id");

getShowsDetails(showId, (show)=>{

    const title = document.getElementById("title");
    const image = document.getElementById("image");

    title.innerHTML = show.name;
    image.setAttribute("src", show.image.original)

});