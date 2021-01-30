import { BaseScalars, ScalarDefinition, JomqlScalarType } from "jomql";

import { episodeEnum } from "../enums";

// base scalars
export const string = BaseScalars.string;
export const number = BaseScalars.number;
export const boolean = BaseScalars.boolean;
export const unknown = BaseScalars.unknown;

// added scalars
export { id } from "./id";

// kenums
export const episode = new JomqlScalarType(
  generateKenumScalarDefinition("episode", episodeEnum)
);

function generateKenumScalarDefinition(
  enumName: string,
  currentEnum: any
): ScalarDefinition {
  const enumValues = Object.keys(currentEnum).filter(
    (k) => !Number.isNaN(Number(currentEnum[k]))
  );
  const validate = (value: unknown) => {
    // convert from key to value
    if (typeof value !== "number" && typeof value !== "string") throw true;

    if (!(value in currentEnum)) throw true;

    return currentEnum[value];
  };
  return {
    name: enumName,
    types: enumValues.map((ele) => `"${ele}"`),
    description: `Enum stored as a separate key value`,
    serialize: validate,
    parseValue: validate,
  };
}

export function generateEnumScalarDefinition(
  enumName: string,
  currentEnum: any
): ScalarDefinition {
  const enumValues = Object.keys(currentEnum).filter(
    (k) => !Number.isNaN(Number(currentEnum[k]))
  );

  const validate = (value: unknown) => {
    // convert from key to value
    if (typeof value !== "number") throw true;

    if (!(value in currentEnum)) throw true;

    return value;
  };

  return {
    name: enumName,
    types: enumValues.map((ele) => `"${ele}"`),
    description: `Enum stored as is`,
    serialize: validate,
    parseValue: validate,
  };
}
