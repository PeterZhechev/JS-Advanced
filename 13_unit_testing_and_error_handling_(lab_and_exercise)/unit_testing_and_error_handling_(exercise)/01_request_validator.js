function requestValidator(inputObj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[a-zA-Z0-9\.]+$/g;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messagePattern = /[<>\\&\'\"]/g;

    if (!methods.includes(inputObj.method) || !inputObj.hasOwnProperty('method')) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!inputObj.hasOwnProperty('uri') || !uriPattern.test(inputObj.uri) || inputObj.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!versions.includes(inputObj.version) || !inputObj.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!inputObj.hasOwnProperty('message') || messagePattern.test(inputObj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return inputObj;
}

// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     version: 'HTTP/2.0'
// });

// requestValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// });

// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });