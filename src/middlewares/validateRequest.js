function validateRequest(ajvInstance) {  
  return (req, res, next) => {
    const valid = ajvInstance(req.body);    
    if (!valid) {
      const invalids = ajvInstance.errors;
      const errors = invalids.map(e => {         
        return { instancePath: e.instancePath, message: e.message, params: e.params } 
      });
      next({ status: 400, errors });
    }
    next();
  };
}

module.exports = validateRequest;
