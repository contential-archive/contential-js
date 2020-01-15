import axios from 'axios';
import queryString from 'querystring';

class ListController {
  constructor({ client }) {
    this.client = client;
  }

  async create({
    regionId,
    spaceId,
    listId,
    localeId,
    fields,
    uniqueItemId,
    data,
    apiKey,
  }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
        fields,
        uniqueItemId,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/lists/${listId}?${queryString.stringify(query)}`;
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

  async add({
    regionId,
    spaceId,
    listId,
    localeId,
    fields,
    uniqueItemId,
    data,
    apiKey,
  }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
        fields,
        uniqueItemId,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/lists/${listId}?${queryString.stringify(query)}`;
      const response = await axios({
        method: 'POST',
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

  async get({ regionId, spaceId, listId, localeId, pageSize, page, apiKey }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
        pageSize,
        page,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/lists/${listId}?${queryString.stringify(query)}`;
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

  async search({
    regionId,
    spaceId,
    listId,
    localeId,
    pageSize,
    page,
    fields,
    query,
    apiKey,
  }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const queryData = {
        localeId,
        pageSize,
        page,
        fields,
        query,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/lists/${listId}/search?${queryString.stringify(
        queryData,
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

  async remove({ regionId, spaceId, listId, localeId, apiKey }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const query = {
        localeId,
      };
      const url = `${
        this.client.config[regionId].CONTENT_URL
      }/spaces/${spaceId}/lists/${listId}?${queryString.stringify(query)}`;
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

export default ListController;
