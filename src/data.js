//třída film
export class Movie {

    constructor(id,name,posterUrl)
    { 
        this.id = id;
        this.name = name;
        this.posterUrl = posterUrl;
    }
}

// volání api
export async function apiGet(url) {

        const response = await fetch(url);
        const data = await response.json();
        return data;

  }

//nahodné seřatení pole
  export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  export function sortArrayById(array){

    const sortedArray = array.sort((a,b)=>(a.id-b.id));
    return sortedArray;

  }

  export function sortArrayByName(array){

    const sortedArray = array.sort((a,b)=>a.name.localeCompare(b.name));
    return sortedArray;

  }

  // export const API_URL = "https://localhost:7181/testApi/";
  export const API_URL = "https://www.tsapi.cz/api/";