import crypto from 'crypto';

const numberOfKeys = 2

for (var i = 0; i < numberOfKeys; i++){ 
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(`Hash ${i+1} - ` ,secretKey);
}