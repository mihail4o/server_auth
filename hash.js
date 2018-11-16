const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');

/** 
bcrypt.genSalt(10,(err,salt)=>{
    if(err) return next(err);

    bcrypt.hash('password123',salt,(err,hash)=>{
        if(err) return next(err);
        console.log(hash)
    })
})

const secret = 'mysecret';
const secretSalt = 'fgerfgvb56456fgb7r5gdf23dvdfg'

const user = {
    id:1,
    token: MD5('aaaaaa').toString() + secretSalt
}

const recievedToken = '0b4e7a0e5fe84ad35fb5f95b9ceeac79fgerfgvb56456fgb7r5gdf23dvdfg';
if(recievedToken === user.token){
    console.log('move forward')
}

console.log(user);
*/

const id = '1000';
const secret = 'supersecret';

const recievedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(recievedToken, secret);

console.log(decodeToken);
