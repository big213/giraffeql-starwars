import { droidData } from "./Data";

/**
 * Allows us to query for the droid with the given id.
 */
export default function getDroid(id: string) {
  return droidData[id];
}
