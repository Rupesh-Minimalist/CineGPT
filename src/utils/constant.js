export const loginImage="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const userLOGO="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w200/";

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_tmdb_key

    }
  };

export const TRAILER_OPTIONS= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_tmdb_key
  }
};

export const API_OPTIONS_POPULAR = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_tmdb_key
  }
};

export const API_OPTIONS_TOP_RATED={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_tmdb_key

  }
};

export const API_OPTIONS_UPCOMING={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_tmdb_key
  }
};

export const API_OPTIONS_SEARCH={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_tmdb_key
  }
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GEMINI_KEY=process.env.REACT_APP_gemini_key;


export const CORSProxy="https://thingproxy.freeboard.io/fetch/";