//třída film
export class Movie {

    constructor(id,name,posterUrl)
    { 
        this.id = id;
        this.name = name;
        this.posterUrl = posterUrl;
        this.dateAdded = new Date(2023,10,2); 
        this.dateWatched = new Date(2023,11,22);  
    }

    }


// volání api
export async function apiGet(url) {

      const token = localStorage.getItem("jwt");
      console.log("taham data")
        const response = await fetch(url,{
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`
          }
          });
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
  export const API_URL = "https://www.tsapi.cz/testApi/";



 export const demonstrationData =  () =>
 {
  return [
 new Movie(1, 'Pán prstenů: Návrat Krále', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/80393c756708cdd1df9250c23270ddfe_95ecd3a7-8515-4772-b830-2f3132eb7ad6_500x749.jpg?v=1573585494'),
 new Movie(2, 'Gangy New Yorku', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/3ca473e979586717008aa00ec0888c6f_b1d5bed4-3871-453d-8d7c-62578cf0b50d_500x749.jpg?v=1655997435'),
 new Movie(3, 'Bláznivá Runway', 'https://m.media-amazon.com/images/I/217e2WA6NVL.jpg'),
 new Movie(4, 'Memento', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/memento24_500x749.jpg?v=1617303456'),
 new Movie(5, 'Looper', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4ceaa6ec56b7551f3e1b8c622519370d_25d4dffa-72c7-4d9e-9c61-43ee1e133647_500x749.jpg?v=1573584378'),
 new Movie(6, 'Duna 2', 'https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'),
 new Movie(7, 'Vikingové', 'https://m.media-amazon.com/images/I/51joeGfawxL._AC_.jpg'),
 new Movie(8, 'Můj otec šílenec', 'https://www.movieposters.com/cdn/shop/products/1d6b4696d9d8432688d67dfbd7948453_00380e4a-82de-4f55-b684-10ab46710896_480x.progressive.jpg?v=1573587589'),
 new Movie(9, 'Sicario', 'https://www.movieposters.com/cdn/shop/products/sicario_85c858bc_480x.progressive.jpg?v=1614194644'),
   new Movie(10, 'Rozhněvaný muž', 'https://www.movieposters.com/cdn/shop/products/scan-090_480x.progressive.jpg?v=1622217898'),
   new Movie(11, 'Zhoubné zlo', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31LZJQESEaL._QL70_FMwebp_.jpg'),
   new Movie(12, ' Free Solo', 'https://www.movieposters.com/cdn/shop/products/cb91630393b7317d7be597e96e8fd9ce_c8670830-bbf3-4a79-9879-862ed89f9d90_480x.progressive.jpg?v=1573593913'),
   new Movie(13, 'Interstellar', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/files/interstellar_593eaeff_500x749.jpg?v=1698434355'),
 new Movie(14, 'Proč právě on?', 'https://www.movieposters.com/cdn/shop/products/04281c628bc6acdc502cb4f823128199_2803f702-0c51-4f22-b8f8-c9475559ea8c_480x.progressive.jpg?v=1573584631'),
 new Movie(15, 'Big Lebovski', 'https://www.movieposters.com/cdn/shop/products/7a7b194fe1c5eb92da6637ae197fa4e7_554d36d1-b64c-47f4-8ed4-bea2bbec1ef6_480x.progressive.jpg?v=1573587264'),
 new Movie(16, 'Pošetilost mocných', 'https://images.affiches-et-posters.com//albums/3/48096/medium/affiche-film-folie-des-grandeurs.jpg'),
 new Movie(17, 'V Brugách', 'https://m.media-amazon.com/images/I/61ntZcqIUzL.jpg'),
 new Movie(18, 'Alien', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ffd005c1c156c002d6318d24e08c3e60_027e0963-448d-457f-a46b-5db0550dc0c1_500x749.jpg?v=1573587257'),
 new Movie(19, 'Dokonalý trik', 'https://www.movieposters.com/cdn/shop/products/99763af666ee931302e21c9cad3243ed_48a46774-8baf-4a98-b2bc-9ecf85dbff8b_480x.progressive.jpg?v=1573655133'),
 new Movie(20, 'Hanebný pancharti', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/inglourious-basterds-style1.24x36_500x749.jpg?v=1615395292')


]
 }
 
 export const demonstrationDataDel =  () =>
{
 return [
  new Movie(1, 'Pán prstenů: Společenstvo Prstenu', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/files/ItemP2658_jpg_500x749.jpg?v=1692302023'),
  new Movie(2, 'Pán prstenů: Dvě věže', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1b79183b579ac34b737cf8bfac9876f9_ba6144de-326e-4d2d-b32f-a7f895b76f1e_500x749.jpg?v=1573587238'),
  new Movie(3, 'Z Pekla', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/from_hell_ver2_171ffa7f-55b9-429f-af9d-61df6270d3ca_500x749.jpg?v=1670609896'),
  new Movie(4, 'Lovci lvů', 'https://www.movieposters.com/cdn/shop/products/b8a632b37ec2dfe445db54c3eaeb2ea9_66d1c7c4-2835-451b-8498-8803c37dcea6_480x.progressive.jpg?v=1573613826'),
  new Movie(5, 'Godzilla 1.0', 'https://www.movieposters.com/cdn/shop/files/Godzilla_Minus_One_Final_480x.progressive.jpg'),
 new Movie(6  , 'Děda je lotr', 'https://upload.wikimedia.org/wikipedia/en/6/62/Dirty_Grandpa_teaser_poster.jpg'),
  new Movie(7  , 'Návštěvníci', 'https://www.movieposters.com/cdn/shop/products/7c7a2f33b52896553f61f7a0d0f8923e_23df17d6-c73d-44f8-800c-b941f8f9ab3f_480x.progressive.jpg?v=1573592601'),
  new Movie(8  , 'Bratrstvo vlků', 'https://www.movieposters.com/cdn/shop/products/brotherhood_of_the_wolf_480x.progressive.jpg?v=1639077810'),
  new Movie(9  , 'Gentlemani', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-gentlemen_63zoc5ha_500x749.jpg?v=1667586688'),
  new Movie(10  , 'Superman: Red son', 'https://m.media-amazon.com/images/I/71XSPYfWdWL.__AC_SX300_SY300_QL70_ML2_.jpg'),
  new Movie(11  , 'Wind River', 'https://www.movieposters.com/cdn/shop/products/c32e642b55717dad89cfb4fdb8659c2b_2bd3d796-6aa9-494d-a4d9-cb4f356f51d1_480x.progressive.jpg?v=1573593707'),
  new Movie(12  , 'Sultan ', 'https://img.theweek.in/content/dam/week/news/entertainment/2016/june/images/Sultan-Poster1.jpg'),
  new Movie(13, '	The Man from Earth', 'https://m.media-amazon.com/images/M/MV5BZDRlMWMwYzctZGQzNC00ODI0LThiY2YtNzc3ZmFlNWE2ZDhhXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg'),
  new Movie(14, 'Boss Level', 'https://m.media-amazon.com/images/I/71fCsve2QDL._AC_UF894,1000_QL80_.jpg'),
  new Movie(15, 'Zdrojový kod', 'https://www.movieposters.com/cdn/shop/products/c395f4d18063c5cc10657c639429772c_edca7c39-502b-401f-930c-277c8d19c6b7_480x.progressive.jpg?v=1573590276'),
  new Movie(16, 'Černočerná tma', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7d60e246eacbe643e9315a7330eac47b_bb3312eb-6183-40b4-b355-7af641f14017_500x749.jpg?v=1573591374'),
  new Movie(17, 'Sunshine', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a47e1fcc-e194-45a8-93ea-42c07a4feb00_1_500x749.jpg?v=1628177559'),
  new Movie(18, 'King Kong', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6f435fde73a2173524187ea15e8ec786_107a6989-b0d5-4556-abc9-b6eeb24b8f2b_500x749.jpg?v=1573651192'),
  new Movie(19, 'Počátek ', 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff_500x749.jpg?v=1573618694'),
  new Movie(20, 'Princezna Nevěsta', 'https://www.movieposters.com/cdn/shop/products/13d32f1edc9b772b9cb8220cf0a5462a_e61c1195-9dd6-4167-91d5-d7ef5876a1c4_480x.progressive.jpg?v=1573590428'),

 ]
 }

 