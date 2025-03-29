import sql from 'better-sqlite3'

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((res) => setTimeout(res, 4000))
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * from meals").all()
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug=?").get(slug);
}