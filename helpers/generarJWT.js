import jwt from 'jsonwebtoken';

const generarJWT = (id)=>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        //cada cuanto debe autenticarse
        expiresIn : "30d",
    });
};

export default generarJWT;