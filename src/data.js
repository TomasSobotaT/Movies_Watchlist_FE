export class Movie {

    constructor(id,name,csfdUrl,posterUrl)
    { 
        this.id = id;
        this.name = name;
        this.csfdUrl = csfdUrl;
        this.posterUrl = posterUrl;
    }
}


export async function apiGet(url) {

        const response = await fetch(url);
        const data = await response.json();
        return data;

  }


