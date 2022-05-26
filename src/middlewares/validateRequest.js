function validateRequest(ajvInstance) {
  return (req, res, next) => {
    const valid = ajvInstance(req.body);
    if (!valid) {
      const errors = ajvInstance.errors;
      next({ status: 400, errors });
    }
    next();
  };
}

module.exports = validateRequest;
