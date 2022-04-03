const https = require('https');
const { resolve } = require('path');

const get = url => {
    const comp = url.split('/')
    const host = comp.shift();
    new Promise(resolve, reject);
    
    const options = {
        hotsname: host,
        path: `/${comp.join('/')}`,
        method: 'GET'
    }

    const req = https.request(options, res => {
        res.setEncoding('utf-8');
        let body = '';
        res.on('data', d => {
            body += d
        })

    })

    res.on('end', d => {
        const parsed = JSON.parse(body)
        resolve(parsed)

    })

    res.on('error', (e) => {
        reject(e);
    })

    req.end();
}

get('jsonplaceholder.typicode.com/users');