// Logs the HTTP method, URL, and response status code after the response is sent
export const logger = (req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
  });
  next(); // Move to the next middleware or route handler
};

// Validates that the 'id', 'name', and 'age' fields are present and valid in the request body
export const validateUser = (req, res, next) => {
  const id = req.method === 'PUT' ? parseInt(req.params.id) : req.body.id; // Use URL param for PUT
  const { name, age } = req.body;

  if (!id || typeof id !== 'number' || id <= 0) {
    return res.status(400).json({ error: 'Valid ID is required' });
  }

  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (age === undefined || typeof age !== 'number' || age < 0) {
    return res.status(400).json({ error: 'Valid age is required' });
  }

  next(); // Proceed to the next middleware or route handler if validation passes
};