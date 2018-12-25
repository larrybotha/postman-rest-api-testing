require('dotenv').config();

const newman = require('newman');
const {handleResult} = require('jest-runner-newman/handle-result');

const apiUrlBase = 'https://api.getpostman.com';

const getCollectionUrl = (uid, apiKey) =>
  `${apiUrlBase}/collections/${uid}?apikey=${apiKey}`;
const getEnvironmentUrl = (uid, apiKey) =>
  `${apiUrlBase}/environments/${uid}?apikey=${apiKey}`;

const postmanApiKey = process.env.POSTMAN_WORKSPACE_API_KEY;
const collectionUid = '3615879-fde260d7-263f-46b7-ad17-328ec96ebf64';

newman.run(
  {
    collection: getCollectionUrl(collectionUid, postmanApiKey),
    reporters: ['cli'],
  },
  (err, summary) => {
    handleResult(err, summary);
  }
);
