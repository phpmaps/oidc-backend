import dotenv from 'dotenv';
import { flatten } from './helpers/flatten.js';
import { getOnboardingUrl } from './api/onboarding-url.js';
import { Auth } from './helpers/auth.js';

dotenv.config();

export const initFlow = async (flowId) => {
    console.log("initFlow")
    console.log(flowId);
    const auth = new Auth(flowId);
    const session = await auth.getSessionHeader();
    const onboardingUrl = await getOnboardingUrl(session.header);
    const data = { url: onboardingUrl.body.url, token: session.token, interviewId: session.interviewId };
    console.log(flatten(data));
    return data

}

