// api.js
export async function fetchHeroesData() {
  try {
    const response = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching superheroes:", error);
    throw error;
  }
}
