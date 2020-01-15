import {
  RecordController,
  ListController,
  GraphqlController,
  SubscriptionController,
} from '../controllers';

class ContentialClient {
  constructor(args) {
    this.options = this._formatOptionsFromArgs(args);
    this.apiKey = this.options.apiKey;
    this.config = this._getConfig();
    this.record = new RecordController({ client: this });
    this.list = new ListController({ client: this });
    this.graphql = new GraphqlController({ client: this });
    this.subscription = new SubscriptionController({ client: this });
  }

  _formatOptionsFromArgs(args) {
    const options = args || {};

    return options || {};
  }

  _getConfig() {
    const config = {
      global: {
        CONTENT_URL: `https://content.contential.io/v0`,
        CONTENT_SUBSCRIPTION_URL: `wss://content.contential.io/v0`,
        GRAPHQL_URL: `https://graphql.contential.io/v0`,
      },
      europe: {
        CONTENT_URL: `https://content-europe.contential.io/v0`,
        CONTENT_SUBSCRIPTION_URL: `wss://content-europe.contential.io/v0`,
        GRAPHQL_URL: `https://graphql-europe.contential.io/v0`,
      },
      us: {
        CONTENT_URL: `https://content-us.contential.io/v0`,
        CONTENT_SUBSCRIPTION_URL: `wss://content-us.contential.io/v0`,
        GRAPHQL_URL: `https://graphql-us.contential.io/v0`,
      },
      asia: {
        CONTENT_URL: `https://content-asia.contential.io/v0`,
        CONTENT_SUBSCRIPTION_URL: `wss://content-asia.contential.io/v0`,
        GRAPHQL_URL: `https://graphql-asia.contential.io/v0`,
      },
    };

    return config;
  }
}

export default ContentialClient;
