import { JomqlObjectType, JomqlObjectTypeLookup } from "jomql";
import * as Scalars from "./scalars";
import getCharacter from "../data/getCharacter";

export const droid = new JomqlObjectType({
  name: "droid",
  description: "A droid",
  fields: {
    id: {
      type: Scalars.string,
      allowNull: false,
      description: "The ID of the droid",
    },
    name: {
      type: Scalars.string,
      allowNull: false,
    },
    foo: {
      type: Scalars.string,
      allowNull: false,
      resolver: (inputs) => {
        return "bar";
      },
    },
    friends: {
      type: new JomqlObjectTypeLookup("droid"),
      isArray: true,
      allowNull: false,
      resolver: ({ parentValue }) => {
        return Promise.all(
          parentValue.friendIds.map((id: string) => getCharacter(id))
        );
      },
    },
    appearsIn: {
      type: Scalars.episode,
      isArray: true,
      allowNull: false,
    },
    secretBackstory: {
      type: Scalars.string,
      isArray: false,
      allowNull: false,
      hidden: true,
    },
    primaryFunction: {
      type: Scalars.string,
      isArray: false,
      allowNull: false,
    },
  },
});

export const human = new JomqlObjectType({
  name: "human",
  description: "A human",
  fields: {
    id: {
      type: Scalars.string,
      allowNull: false,
      description: "The ID of the human",
    },
    name: {
      type: Scalars.string,
      allowNull: false,
    },
    friends: {
      type: new JomqlObjectTypeLookup("droid"),
      isArray: true,
      allowNull: false,
      resolver: ({ parentValue }) => {
        return Promise.all(
          parentValue.friendIds.map((id: string) => getCharacter(id))
        );
      },
    },
    appearsIn: {
      type: Scalars.episode,
      isArray: true,
      allowNull: false,
    },
    homePlanet: {
      type: Scalars.string,
      isArray: false,
      allowNull: true,
    },
    secretBackstory: {
      type: Scalars.string,
      isArray: false,
      allowNull: false,
      hidden: true,
    },
  },
});
