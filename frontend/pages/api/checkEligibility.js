export default async function handler(req, res) {
    const { rollNumber } = req.query;
  
    try {
      const response = await fetch(`http://localhost:5000/api/students/check-eligibility/${rollNumber}`);
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json({ message: data.message });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
  