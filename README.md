# jomql-starwars

An example jomql server

## Scripts

### Running the code

```
npm install
npm run start
```

### Generate schema

`npm run generate:schema`

## Example Requests

```
POST http://localhost:8080/jomql
{
  "getDroid": {
    "id": true,
    "name": true,
    "appearsIn": true,
    "primaryFunction": true,
    "friends": {
      "id": true,
      "name": true
    },
    "__args": {
      "id": "2000"
    }
  }
}
```
