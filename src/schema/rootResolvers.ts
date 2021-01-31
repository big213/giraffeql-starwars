import * as Scalars from "./scalars";
import { episodeEnum } from "./enums";
import {
  lookupSymbol,
  JomqlRootResolverType,
  JomqlInputFieldType,
  JomqlInputType,
  inputTypeDefs,
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
    restOptions: {
      method: "get",
      route: "/droid/:id",
      query: {
        id: lookupSymbol,
        name: lookupSymbol,
        foo: lookupSymbol,
      },
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
    restOptions: {
      method: "get",
      route: "/human/:id",
      query: {
        id: lookupSymbol,
        name: lookupSymbol,
      },
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
    restOptions: {
      method: "get",
      route: "/heroByEpisode/:episode",
      query: {
        id: lookupSymbol,
        name: lookupSymbol,
      },
    },
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
    restOptions: {
      method: "get",
      route: "/episodes",
      query: lookupSymbol,
    },
    resolver() {
      return Object.keys(episodeEnum)
        .filter((key) => !Number.isNaN(parseInt(key)))
        .map((key) => parseInt(key));
    },
  }),
  getSum: new JomqlRootResolverType({
    name: "getSum",
    type: Scalars.number,
    allowNull: false,
    isArray: false,
    restOptions: {
      method: "get",
      route: "/getSum",
      query: lookupSymbol,
      argsTransformer: (req) => {
        const values = <Array<string>>req.query.values;
        return Array.isArray(values) ? values.map((ele) => Number(ele)) : [];
      },
    },
    args: new JomqlInputFieldType({
      required: true,
      isArray: true,
      type: Scalars.number,
    }),
    resolver({ args }) {
      return args.reduce((total: number, ele: number) => {
        return total + ele;
      }, 0);
    },
  }),
  getBar: new JomqlRootResolverType({
    name: "getBar",
    type: Scalars.string,
    allowNull: false,
    isArray: true,
    restOptions: {
      method: "get",
      route: "/bar/:id",
      query: lookupSymbol,
    },
    args: new JomqlInputFieldType({
      required: false,
      type: new JomqlInputType({
        name: "getBar",
        fields: {
          id: new JomqlInputFieldType({ required: true, type: Scalars.string }),
        },
      }),
    }),
    resolver(input) {
      console.log(input.args);
      return ["bar"];
    },
  }),
  getFoo: new JomqlRootResolverType({
    name: "getFoo",
    type: Scalars.string,
    allowNull: false,
    isArray: true,
    restOptions: {
      method: "get",
      route: "/foo/:id",
      query: lookupSymbol,
      argsTransformer: (req) => {
        return !!req.params.id;
      },
    },
    args: new JomqlInputFieldType({
      required: false,
      type: Scalars.boolean,
    }),
    resolver(input) {
      console.log(input.args);
      return ["foo"];
    },
  }),
};
