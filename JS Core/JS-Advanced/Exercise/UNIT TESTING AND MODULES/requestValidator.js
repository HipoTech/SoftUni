function requestValidator(obj) {
    let inputObject = obj;
    const regexUri = /^[\w.]+$/;
    const regexMessage = /^$|^[^<>\\&'"]+$/;
    const trowError = function (type) {
        throw new Error(`Invalid request header: Invalid ${type}`);
    }

    if (inputObject.method !== 'GET' &&
        inputObject.method !== 'POST' &&
        inputObject.method !== 'DELETE' &&
        inputObject.method !== 'CONNECT'
    ) {
        trowError('Method');
    }

    if (!regexUri.test(inputObject.uri) || inputObject.uri === undefined) {
        trowError('URI');
    }

    if (inputObject.version !== 'HTTP/0.9' &&
        inputObject.version !== 'HTTP/1.0' &&
        inputObject.version !== 'HTTP/1.1' &&
        inputObject.version !== 'HTTP/2.0'
    ) {
        trowError('Version');
    }

    if (!regexMessage.test(inputObject.message) || !inputObject.message === '' || inputObject.message === undefined) {
        trowError('Message');
    }

    return inputObject;

}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asl<pls'
}
)