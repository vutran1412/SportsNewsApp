const url =
  "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=33fbb867976b4b6b9adccb50660919b9";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
