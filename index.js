const axios = require('axios');

module.exports = {
    sendNotification: function(serverKey, deviceToken, title, body, icon, clickAction) {
        const options = {
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

        return axios.post('https://fcm.googleapis.com/fcm/send', data, options);
    }
};
