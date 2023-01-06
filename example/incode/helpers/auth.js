import { Headers as HttpHeader } from 'node-fetch';
import { executiveToken } from "../api/executive-token";

export class Auth {
    token;
    apikey;
    apiversion;
    flowid;

    constructor() {
        this.apikey = process.env.API_KEY;
        this.apiversion = process.env.API_VERSION;
        this.flowid = process.env.FRLOW_ID;
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
        //TODO: implement omni/start api
    }
};