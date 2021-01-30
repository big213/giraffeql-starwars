import { humanData } from "./Data";

/**
 * Allows us to query for the human with the given id.
 */
function getHuman(id: string) {
  return humanData[id];
}

export default getHuman;
