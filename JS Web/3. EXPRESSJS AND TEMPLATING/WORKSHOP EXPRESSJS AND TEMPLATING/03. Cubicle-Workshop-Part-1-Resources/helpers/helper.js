const errorHandler = function (message, error) {
    if (error) {
        throw new Error(`${message}: ${error}`)
    }
    return;
}

module.exports = {
    errorHandler,

}