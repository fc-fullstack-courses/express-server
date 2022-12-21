const yup = require('yup');

const USER_CREATION_SCHEMA = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

const USER_UPDATE_SCHEMA = yup.object({
  login: yup.string(),
  password: yup.string(),
});

module.exports.USER_CREATION_SCHEMA = USER_CREATION_SCHEMA;
module.exports.USER_UPDATE_SCHEMA = USER_UPDATE_SCHEMA;
