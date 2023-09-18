const fs = require('fs');
const path = require('path');
const sendMail = require('./gmail');

const main = async () => {
//   const fileAttachments = [
//     {
//       filename: 'attachment1.txt',
//       content: 'This is a plain text file sent as an attachment',
//     },
//     {
//       path: path.join(__dirname, './attachment2.txt'),
//     },
//     {
//       filename: 'websites.pdf',
//       path: 'https://www.labnol.org/files/cool-websites.pdf',
//     },

//     {
//       filename: 'image.png',
//       content: fs.createReadStream(path.join(__dirname, './attach.png')),
//     },
//   ];

  const options = {
    to: 'bskdany@pm.me',
    // cc: 'cc1@example.com, cc2@example.com',
    // replyTo: 'amit@labnol.org',
    subject: 'LakeheadU WiFi is Down',
    // text: 'We noticed that the wifi is down on the lakeheadu network',
    html: `<p>Hi Heidi!</p><a href="https://bskdany.com">Unsubscribe</a>`,
    // attachments: fileAttachments,
    textEncoding: 'base64',
    headers: [
      { key: 'X-Application-Developer', value: 'Amit Agarwal' },
      { key: 'X-Application-Version', value: 'v1.0.0.2' },
    ],
  };

  const messageId = await sendMail(options);
  return messageId;
};

main()
  .then((messageId) => console.log('Message sent successfully:', messageId))
  .catch((err) => console.error(err));