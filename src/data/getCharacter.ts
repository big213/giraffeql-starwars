import { droidData, humanData } from "./Data";

/**
 * Helper function to get a character by ID.
 */
function getCharacter(id: string) {
  // Returning a promise just to illustrate that GraphQL.js supports it.
  return Promise.resolve(humanData[id] ?? droidData[id]);
}

export default getCharacter;
