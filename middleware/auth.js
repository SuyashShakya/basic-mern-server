import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization?.split(" ")[1]
        const decodedData = jwt.verify(token, 'sign_in_test')
        req.userId = decodedData?.id
        next();
    } catch(error) {
        return res.status(400).json({error})
    }
}

export default auth;