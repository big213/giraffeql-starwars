import "../src/schema";
import * as fs from "fs";
import { TsSchemaGenerator } from "jomql";

// process nextTick, to allow inputType definitions to load
process.nextTick(() => {
  const tsSchemaGenerator = new TsSchemaGenerator();
  tsSchemaGenerator.buildSchema();

  fs.writeFile("schema.ts", tsSchemaGenerator.outputSchema(), function (err) {
    if (err) console.log(err);
    console.log("Schema Written > schema.ts");
  });
});
