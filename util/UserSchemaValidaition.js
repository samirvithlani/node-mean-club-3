const zod = require('zod');

const userSchemaValidation = zod.object({
    body: zod.object({
        name: zod.string().min(3).max(20),
        email: zod.string().email(),
        password: zod.string().min(6).max(20)
    }).strict()

})
module.exports = userSchemaValidation