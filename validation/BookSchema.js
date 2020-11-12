const Joi = require("joi");

const BookSchema = Joi.object({
    title: Joi.string().required().min(4).max(20),
    author: Joi.string().required().min(4).max(20),
    genre: Joi.string().required().min(4).max(20),
    yearPublished: Joi.date().required().min(4).max(20),
    price: Joi.number().required().min(4).max(20),
});
    
module.exports = BookSchema;