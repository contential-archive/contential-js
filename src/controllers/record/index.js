import axios from 'axios';
import queryString from 'querystring';

class RecordController {
  constructor({ client }) {
    this.client = client;
  }

  async add({ regionId, spaceId, recordId, localeId, data, apiKey }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/records/${recordId}?${queryString.stringify(query)}`;
      const contentType =
        typeof data === 'object' ? 'application/json' : 'text/plain';
      const response = await axios({
        method: 'POST',
        url,
        headers: {
          'content-type': contentType,
          'x-api-key': apiKeyId,
        },
        data,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async get({ regionId, spaceId, recordId, localeId, apiKey }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/records/${recordId}?${queryString.stringify(query)}`;
      const response = await axios({
        method: 'GET',
        url,
        headers: {
          'x-api-key': apiKeyId,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async remove({ regionId, spaceId, recordId, localeId, apiKey }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/records/${recordId}?${queryString.stringify(query)}`;
      const response = await axios({
        method: 'DELETE',
        url,
        headers: {
          'x-api-key': apiKeyId,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}

export default RecordController;
