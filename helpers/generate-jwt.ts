import jwt from "jsonwebtoken";

const generateJWT = (id: number) => {

    return new Promise((resolve, reject) => {

        const payload = { id };

        const secret = process.env.JWT_SECRETORPRIVATEKEY || 'b2281595217199259b2b0c2d106095a92e55a00f1c8ce5297b138472c5e3b1442c5404691acf842d4ac7adbd4958679ba238d98a4b506bdb57acde490e33f6c9';
        jwt.sign(payload, secret, {
            expiresIn: '2h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('Error to generate token')
            } else {
                resolve(token as string);
            }
        });
    });
}

export {generateJWT}