const bcrypt = require('bcrypt');

// const hashPassword = (password)=>{

//     //rounds is the number of times the password is hashed
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(password, salt);

//     return hash;
// }

// const matchPassword = (password, hash)=>{
//     return bcrypt.compareSync(password, hash);
// }



const matchPasswordAsyn = async (password, hash)=>{
    return await bcrypt.compare(password, hash);
}

const hashPasswordAsyn = async (password)=>{

    //rounds is the number of times the password is hashed
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;

}
hashPasswordAsyn('password').then((hash)=>{
    console.log(hash);
  //  console.log(matchPassword('password', hash));
}
);

matchPasswordAsyn('password', '$2b$10$rcxHFcoWaUNaFtZPqgw5juo82q7lEiAMEtNODeQQj7csKdSzIn17a').then((result)=>{
    console.log(result);
});




//console.log(hashPassword('password'));
//console.log(matchPassword('password1', hashPassword('password')));