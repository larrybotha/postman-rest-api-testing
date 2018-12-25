require('dotenv').config();

const newman = require('newman');
const {handleResult} = require('jest-runner-newman/handle-result');

const apiUrlBase = 'https://api.getpostman.com';

const getCollectionUrl = (uid, apiKey) =>
  `${apiUrlBase}/collections/${uid}?apikey=${apiKey}`;
const getEnvironmentUrl = (uid, apiKey) =>
  `${apiUrlBase}/environments/${uid}?apikey=${apiKey}`;

const postmanApiKey = process.env.POSTMAN_WORKSPACE_API_KEY;
const collectionUid = '3615879-38ac76b0-04ce-420a-bf0d-430f4fca0f9a';

newman.run(
  {
    collection: getCollectionUrl(collectionUid, postmanApiKey),
    reporters: ['cli'],
  },
  (err, summary) => {
    handleResult(err, summary);
  }
);
