module.exports.RestError = (message, statusCode, data) => {
    const error = new Error(message);
    error.status = statusCode;
    error.statusCode = statusCode;
    error.data = data || {};
    error.error = true;
    return error
}