// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

console.log("Messages sent to your Twilio number:");
client.messages
  .list()
  .then((messages) => messages.forEach((m) => console.log(m.sid)));
  console.log("Gathering messages log");