import { Headers as HttpHeader } from 'node-fetch';
import { executiveToken } from "../api/executive-token.js";
import { start } from '../api/start.js';

export class Auth {
    token;
    apikey;
    apiversion;
    flowid;

    constructor(flowId) {
        this.apikey = process.env.API_KEY;
        this.apiversion = process.env.API_VERSION;
        this.flowid = flowId;
    }

    async getLoginHeader() {
        this.token = await executiveToken();
        const header = new HttpHeader();
        header.append('Content-Type', "application/json");
        header.append('x-incode-hardware-id', this.token);
        header.append('api-version', this.apiversion);
        header.append('x-api-key', process.env.API_KEY);
        return header;
    }

    async getSessionHeader() {
        this.token = await start(this.flowId);
        const header = new HttpHeader();
        header.append('Content-Type', "application/json");
        header.append('x-incode-hardware-id', this.token);
        header.append('api-version', this.apiversion);
        //header.append('x-api-key', process.env.API_KEY);
        return {
            header: header,
            token: this.token
        };
    }
};