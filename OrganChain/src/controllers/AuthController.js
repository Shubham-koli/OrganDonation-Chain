module.exports = function(req,  res , next ){
    if(req.isAuthenticated()){
		return next();
	} else {
		return next();
		//res.status(403).send({message: 'User logged out. Please login again.'});
	}
}