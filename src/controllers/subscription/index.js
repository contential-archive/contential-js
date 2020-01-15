import queryString from 'querystring';
import { isBrowser } from '../../utils';

class SubscriptionController {
  constructor({ client }) {
    this.client = client;
    this.retryAttempts = 0;
  }

  async subscribe(args) {
    const _this = this;
    const { regionId, options, apiKey } = args;
    const emptyMethod = () => {};
    const onData = args.onData || emptyMethod;
    const onError = args.onError || emptyMethod;
    const onConnect = args.onConnect || emptyMethod;
    const onDisconnect = args.onDisconnect || emptyMethod;
    const onFinalDisconnect = args.onFinalDisconnect || emptyMethod;
    const retryDelay = args.retryDelay || 5000;
    const maxRetryAttempts = args.maxRetryAttempts || 10;

    const apiKeyId = apiKey || this.client.apiKey;
    const optionsString = JSON.stringify(options);
    const query = {
      apiKey: apiKeyId,
      options: optionsString,
      type: 'records-subscription',
    };
    const url = `${
      this.client.config[regionId].CONTENT_SUBSCRIPTION_URL
    }/subscribe?${queryString.stringify(query)}`;

    const _onConnect = () => {
      _this.retryAttempts = 0;
      onConnect();
    };
    const _onDisconnect = () => {
      _this.retryAttempts++;
      onDisconnect();

      setTimeout(() => {
        if (_this.retryAttempts < maxRetryAttempts) {
          _this.subscribe(args);
        } else {
          onFinalDisconnect();
        }
      }, retryDelay);
    };

    if (isBrowser) {
      const ws = new WebSocket(url);

      ws.onopen = _onConnect;
      ws.onerror = onError;
      ws.onmessage = event => {
        onData(JSON.parse(event.data));
      };
      ws.onclose = _onDisconnect;
    } else {
      const WebSocket = require('ws');
      const ws = new WebSocket(url);

      ws.on('open', _onConnect);
      ws.on('message', data => {
        onData(JSON.parse(data));
      });
      ws.on('error', onError);
      ws.on('close', _onDisconnect);
    }
  }
}

export default SubscriptionController;
