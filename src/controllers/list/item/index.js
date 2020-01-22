import axios from 'axios';
import queryString from 'querystring';

class ListItemController {
  constructor({ client }) {
    this.client = client;
  }

  async get({ regionId, spaceId, listId, itemId, localeId, apiKey }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/lists/${listId}/${itemId}?${queryString.stringify(
        query,
      )}`;
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

  async update({ regionId, spaceId, listId, itemId, localeId, data, apiKey }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/lists/${listId}/${itemId}?${queryString.stringify(
        query,
      )}`;
      const response = await axios({
        method: 'PUT',
        url,
        headers: {
          'content-type': 'application/json',
          'x-api-key': apiKeyId,
        },
        data,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async remove({ regionId, spaceId, listId, localeId, itemId, apiKey }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/lists/${listId}/${itemId}?${queryString.stringify(
        query,
      )}`;
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

export default ListItemController;
