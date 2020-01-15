import axios from 'axios';
import queryString from 'querystring';

class GraphqlController {
  constructor({ client }) {
    this.client = client;
  }

  async query({ regionId, query, variables, apiKey }) {
    try {
      const apiKeyId = apiKey || this.client.apiKey;
      regionId = regionId || 'global';
      const url = `${
        this.client.config[regionId].GRAPHQL_URL
      }?${queryString.stringify(query)}`;
      const response = await axios({
        method: 'POST',
        url,
        headers: {
          'x-api-key': apiKeyId,
        },
        data: {
          query,
          variables,
        },
      });

      return response.data.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}

export default GraphqlController;
