const jwt = require("jsonwebtoken");
const { TokenExpiredError } = jwt;

// catch error and send response to client.
const catchError = (err, res) => {
   if (err instanceof TokenExpiredError) {
      return res
         .status(401)
         .send({ message: "Unauthorized! Access Token was expired!" });
   }

   return res.sendStatus(401).send({ message: "Unauthorized!" });
};

/**
 *@description This function is a middleware to verify the token and return the decoded token.
 * @param {*} req  it contains data coming from client server.
 * @param {*} res  send res data to client server.
 * @param {*} next if no error then next() will be called.
 * @returns
 */
const verifyToken = (req, res, next) => {
   let token = req.headers["x-access-token"];

   if (!token) {
      return res.status(403).send({ message: "No token provided!" });
   }

   const onlyToken = token.replace("Bearer ", "");

   // verify token and get user info from payload (decoded)
   jwt.verify(onlyToken, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
         return catchError(err, res);
      }
      req.userId = decoded.id;
      next();
   });
};

module.exports = {
   verifyToken,
};
