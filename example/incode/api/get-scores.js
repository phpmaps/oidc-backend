import dotenv from 'dotenv';
import { doGet } from '../helpers/http-get';

dotenv.config();

export const getScores = async (interviewId, header) => {
    const endpoint = `omni/get/score?id=${interviewId}`;
    const url = `${process.env.API_URL}/${endpoint}`;

    try {
        return doGet(url, header);
    } catch (error) {
        throw Error(`error using ${endpoint}`);
    }
};
