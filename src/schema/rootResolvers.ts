import * as Scalars from "./scalars";
import { episodeEnum } from "./enums";
import {
  lookupSymbol,
  JomqlRootResolverType,
  JomqlInputFieldType,
  JomqlInputType,
} from "jomql";
import getDroid from "../data/getDroid";
import { droid, human } from "./typeDefs";
import getHuman from "../data/getHuman";
import getHero from "../data/getHero";

export default {
  getDroid: new JomqlRootResolverType({
    name: "getDroid",
    type: droid,
    allowNull: false,
    isArray: false,
    method: "get",
    route: "/droid/:id",
    query: {
      id: lookupSymbol,
      name: lookupSymbol,
      foo: lookupSymbol,
    },
    resolver(input) {
      return getDroid(input.args.id);
    },
    args: new JomqlInputFieldType({
      required: true,
      type: new JomqlInputType({
        name: "getDroid",
        fields: {
          id: new JomqlInputFieldType({ type: Scalars.string, required: true }),
        },
      }),
    }),
  }),
  getHuman: new JomqlRootResolverType({
    name: "getHuman",
    type: human,
    allowNull: false,
    isArray: false,
    method: "get",
    route: "/human/:id",
    query: {
      id: lookupSymbol,
      name: lookupSymbol,
    },
    resolver(input) {
      return getHuman(input.args.id);
    },
    args: new JomqlInputFieldType({
      required: true,
      type: new JomqlInputType({
        name: "getHuman",
        fields: {
          id: new JomqlInputFieldType({ type: Scalars.string, required: true }),
        },
      }),
    }),
  }),

  getHeroByEpisode: new JomqlRootResolverType({
    name: "getHeroByEpisode",
    type: droid,
    allowNull: false,
    isArray: false,
    method: "get",
    route: "/heroByEpisode",
    args: new JomqlInputFieldType({
      required: true,
      type: new JomqlInputType({
        name: "getHeroByEpisode",
        fields: {
          episode: new JomqlInputFieldType({
            type: Scalars.episode,
            required: true,
          }),
        },
      }),
    }),
    resolver({ args }) {
      return getHero(args.episode);
    },
  }),
  getEpisodes: new JomqlRootResolverType({
    name: "getEpisodes",
    type: Scalars.episode,
    allowNull: false,
    isArray: true,
    method: "get",
    route: "/episodes",
    resolver() {
      return Object.keys(episodeEnum)
        .filter((key) => !Number.isNaN(parseInt(key)))
        .map((key) => parseInt(key));
    },
  }),
  getBar: new JomqlRootResolverType({
    name: "getBar",
    type: Scalars.string,
    allowNull: false,
    isArray: true,
    method: "get",
    route: "/bar/:id",
    query: {},
    resolver(input) {
      return ["bar"];
    },
  }),
};
