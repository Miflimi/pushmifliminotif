const https = require('https');

function sendNotification(options, data) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        });

        req.on('error', error => {
            reject(error);
        });

        req.write(JSON.stringify(data));
        req.end();
    });
}

module.exports = {
    sendNotification: function(serverKey, deviceToken, title, body, icon, clickAction) {
        const options = {
            hostname: 'fcm.googleapis.com',
            port: 443,
            path: '/fcm/send',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `key=${serverKey}`
            }
        };

        const data = {
            to: deviceToken,
            notification: {
                title: title,
                body: body,
                icon: icon,
                click_action: clickAction
            }
        };

        return sendNotification(options, data);
    }
};
