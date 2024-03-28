export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "98afb56a22msh04fe5810ae5fe29p126885jsn62a1e134f012",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

// export const recipeOptions = {
//   method: "GET",
//   // url: "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2",

//   headers: {
//     "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
//     "X-RapidAPI-Key": "177ed6bc56mshdb0536d4d73cf38p1a682fjsn9405fee34da6",
//   },
// };

export const fetchData = async (baseUrl, options) => {
  try {
    let url = new URL(baseUrl);
    if (options.params) {
      Object.keys(options.params).forEach((key) =>
        url.searchParams.append(key, options.params[key])
      );
    }

    const { params, ...fetchOptions } = options;
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not fetch data: ${error}`);
    throw error;
  }
};
