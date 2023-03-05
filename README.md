# pushmifliminotif

A Node.js package for sending push notifications via Firebase Cloud Messaging (FCM) API.

## Installation

```npm
npm i pushmifliminotif
```

```yarn
yarn add pushmifliminotif
```

## Usage

```node js 
const pushNotification = require('pushmifliminotif');

const serverKey = 'YOUR_SERVER_KEY';
const deviceToken = 'DEVICE_TOKEN';
const title = 'New message';
const body = 'You have a new message from John';
const icon = '/images/profile_picture.jpg';
const clickAction = 'https://example.com/messages';

pushNotification.sendNotification(serverKey, deviceToken, title, body, icon, clickAction)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```