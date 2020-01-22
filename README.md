# Contential - JavaScript SDK

JavaScript SDK for Contential content and GraphQL APIs. It helps you to easily access your data stored in Contential with your JavaScript applications.

## Core features

- Create, retrieve, update and remove records
- Create, retrieve, update and remove lists
- Subscribe to records and lists
- Search lists
- Make GraphQL queries on lists
- Works in the browser and in Node.js

## Requirements

- A [Contential](https://contential.io) account
- Created a [space](https://app.contential.io/account/spaces)
- Created an [API key](https://app.contential.io/api-keys)
- Node.js 8 or above

## Installation

```
npm install contential
```

## Contential client

Use the `createClient` method to create an authenticated client that connects to your data.

```javascript
const { createClient } = require('contential');
const contential = createClient({
  apiKey: 'e347fea300b50578870fda807ec455',
});
```

The Contential APIs use API keys to authenticate requests. You can view and manage your API keys in the [Contential Dashboard](https://app.contential.io).

## Creating your first record

| Property | Type             | Example        | Required | Description                                            |
| -------- | ---------------- | -------------- | -------- | ------------------------------------------------------ |
| regionId | String           | us             | true     | Region of where the data will be stored.               |
| spaceId  | String           | 4dcb2eaf1d     | true     | ID of space of where the data will be stored.          |
| recordId | String           | my-record      | true     | The ID for your record.                                |
| localeId | String           | en-US          | false    | Locale for your data to allow for translations.        |
| data     | String \| Object | My record data | true     | The data for the record. Can be a string or an object. |

```javascript
const { createClient } = require('contential');
const contential = createClient({
  apiKey: 'e347fea300b50578870fda807ec455',
});

contential.record
  .add({
    regionId: 'us',
    spaceId: '4dcb2eaf1d',
    recordId: 'my-record',
    localeId: 'en-US',
    data: { 'message":"Contential is amazing!' },
  })
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

## Documentation

For more details on getting started with Contential, visit the [Contential Docs](https://contential.io/docs)

## Get involved

We appreciate any help you can give to improve Contential.

PRs are welcome!

## Licencse

This repository is published under the [MIT](https://github.com/contential/contential-js/blob/master/LICENSE) license.
