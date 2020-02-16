const { createSchema, validateSync } = require('@vjcli/cli-shared-utils')

const schema = createSchema(joi => ({
  title: joi.string().required(),
  message: joi.string().required(),
  icon: joi.string()
}))

exports.validateNotify = (options) => {
  validateSync(options, schema)
}
