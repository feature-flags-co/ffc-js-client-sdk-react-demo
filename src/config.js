export const userName = '随机用户'// + Math.round(Math.random() * 1000);

const config = {
    options: {
        secret: 'NWNiLWI0ZTQtNCUyMDIyMDIyMzAzNDYyOV9fMl9fMjJfXzI5Nl9fZGVmYXVsdF9kNmRjNA==',
        anonymous: false,
        user: {
            userName: userName,
            id: 'ffc-demo-' + userName,
            customizedProperties: [
                {
                    "name": "粘性",
                    "value": Math.round(Math.random() * 10).toString()
                },
                {
                    "name": "最近7天活跃度",
                    "value": Math.round(Math.random()).toString()
                },
            ]
        }
    }
}

export default config;