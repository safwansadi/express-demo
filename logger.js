function log(req, res, next) {
  console.log("logging..."); //created a custom middleware function 
  next();
}
module.exports = log;
