
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': "c9bd9e559fmsh3337b8bf7fe461fp1b6a7djsn4b354728b08d"
  }
};

export const fetchData = async (url, options) => {
 const response = await fetch(url, options);
 const data = await response.json();

 return data;
}