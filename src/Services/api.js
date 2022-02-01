const API_URL = "https://www.fruityvice.com/api/fruit/all";

export default async function ApiRequest() {
  const herokuHead = "https://cors-anywhere.herokuapp.com/";

  let response = await fetch(herokuHead + API_URL);
  let json = await response.json();
  return json;
}
