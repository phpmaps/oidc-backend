import dotenv from 'dotenv';
import { doGet } from '../helpers/http-get.js';

dotenv.config();

export const getOnboardingUrl = async (header) => {
    const endpoint = `omni/onboarding-url?clientId=${process.env.CLIENT_ID}`;
    const url = `${process.env.API_URL}/${endpoint}`;
    console.log("onboarding-url")
    console.log(url)

    try {
        return doGet(url, header);
    } catch (error) {
        throw Error(`error using ${endpoint}`);
    }
};
