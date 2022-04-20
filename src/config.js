import { queryParams } from "./utils";

export const userName = '随机用户';// + Math.round(Math.random() * 1000);

const secret = queryParams['secret']; //'YmE3LWNkN2EtNCUyMDIxMTEyNDEzNDYxOV9fNV9fMTI1X18yNjVfX2RlZmF1bHRfMmY1MTE=';

const configBase = {
    options: {
        secret,
        bootstrap: []
    }
}

export const configWithUser = {
    options: {
        anonymous: false,
        user: {
            userName: userName,
            id: 'ffc-demo-' + userName,
            customizedProperties: []
        },
        ...configBase.options
    }
}

export const configWithAnonymousUser = {
    options: {
        anonymous: true,
        ...configBase.options
    }
}