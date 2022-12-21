const { USER_CREATION_SCHEMA, USER_UPDATE_SCHEMA } = require("../utils/validationSchemas");

module.exports.validateUserMW = async (req, res, next) => {
  try {
    await USER_CREATION_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.validateUserUpdateMW = async (req, res, next) => {
  try {
    await USER_UPDATE_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

