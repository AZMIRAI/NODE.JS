const os = require('os');

console.log('운영체제 정보~')

console.log('아처',os.arch());
console.log('플랫폼',os.platform());
console.log('타입',os.type());
console.log('업타임',os.uptime());
console.log('호스트네임',os.hostname());
console.log('릴리즈',os.release());

console.log('경로------------------');
console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.cpus());
console.log(os.cpus().length);

console.log(os.freemem());
console.log(os.totalmem());

