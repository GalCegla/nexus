/* tslint:disable */
/**
 * This file is automatically generated by gqliteral
 * Do not make changes directly
 */

import * as swapi from "./gqliteral/backingTypes";

export interface Generated_Interface_Character_Fields {
  appearsIn: {
    returnType:
      | GeneratedEnums["Episode"][]
      | PromiseLike<GeneratedEnums["Episode"][]>
      | PromiseLike<GeneratedEnums["Episode"]>[];
    args: {
      id: string;
    };
  };
  friends: {
    returnType:
      | Generated_Interface_Character["backingType"][]
      | PromiseLike<Generated_Interface_Character["backingType"][]>
      | PromiseLike<Generated_Interface_Character["backingType"]>[];
    args: {};
  };
  id: {
    returnType: string | PromiseLike<string>;
    args: {};
  };
  name: {
    returnType: string | PromiseLike<string>;
    args: {};
  };
}

export interface Generated_Interface_Character {
  implementingTypes: "Droid" | "Human";
  backingType: swapi.Droid | swapi.Human;
  fields: Generated_Interface_Character_Fields;
}

export interface Generated_Type_Query_Field_droid {
  returnType:
    | Generated_Type_Droid["backingType"]
    | PromiseLike<Generated_Type_Droid["backingType"]>;
  args: Generated_Type_Query_Field_droid_Args;
}

export interface Generated_Type_Query_Field_droid_Args {
  id: string;
}

export interface Generated_Type_Query_Field_hero {
  returnType:
    | Generated_Interface_Character["backingType"]
    | PromiseLike<Generated_Interface_Character["backingType"]>;
  args: Generated_Type_Query_Field_hero_Args;
}

export interface Generated_Type_Query_Field_hero_Args {
  episode?: GeneratedEnums["Episode"] | null | undefined;
}

export interface Generated_Type_Query_Field_human {
  returnType:
    | Generated_Type_Human["backingType"]
    | PromiseLike<Generated_Type_Human["backingType"]>;
  args: Generated_Type_Query_Field_human_Args;
}

export interface Generated_Type_Query_Field_human_Args {
  id: string;
}

export interface Generated_Type_Query_Fields {
  droid: Generated_Type_Query_Field_droid;
  hero: Generated_Type_Query_Field_hero;
  human: Generated_Type_Query_Field_human;
}

export interface Generated_Type_Query {
  backingType: unknown;
  fields: Generated_Type_Query_Fields;
}

export interface Generated_Type_Droid_Field_primaryFunction {
  returnType: string | PromiseLike<string>;
  args: {};
}

export interface Generated_Type_Droid_Fields
  extends Generated_Interface_Character_Fields {
  primaryFunction: Generated_Type_Droid_Field_primaryFunction;
}

export interface Generated_Type_Droid {
  backingType: swapi.Droid;
  fields: Generated_Type_Droid_Fields;
}

export interface Generated_Type_Human_Field_homePlanet {
  returnType: null | string | PromiseLike<null | string>;
  args: {};
}

export interface Generated_Type_Human_Fields
  extends Generated_Interface_Character_Fields {
  homePlanet: Generated_Type_Human_Field_homePlanet;
}

export interface Generated_Type_Human {
  backingType: swapi.Human;
  fields: Generated_Type_Human_Fields;
}

export interface GeneratedScalars {}

export interface GeneratedInterfaces {
  Character: Generated_Interface_Character;
}

export interface GeneratedUnions {}

export interface GeneratedEnums {
  Episode: 5 | 6 | 4;
  MoreEpisodes: 5 | 6 | 4 | "OTHER";
}
export interface GeneratedInputObjects {}
export interface GeneratedObjects {
  Query: Generated_Type_Query;
  Droid: Generated_Type_Droid;
  Human: Generated_Type_Human;
}

export interface GeneratedSchema {
  context: {};
  enums: GeneratedEnums;
  objects: GeneratedObjects;
  inputObjects: GeneratedInputObjects;
  unions: GeneratedUnions;
  scalars: GeneratedScalars;
  interfaces: GeneratedInterfaces;
  allInputTypes:
    | Extract<keyof GeneratedInputObjects, string>
    | Extract<keyof GeneratedEnums, string>
    | Extract<keyof GeneratedScalars, string>;
  allOutputTypes:
    | Extract<keyof GeneratedObjects, string>
    | Extract<keyof GeneratedEnums, string>
    | Extract<keyof GeneratedUnions, string>
    | Extract<keyof GeneratedInterfaces, string>
    | Extract<keyof GeneratedScalars, string>;
}

export type Gen = GeneratedSchema;

declare global {
  interface GQLiteralGen extends GeneratedSchema {}
}
