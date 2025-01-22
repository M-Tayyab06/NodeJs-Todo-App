const pool = require('../config/db');

const getTodos = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM todos');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const addTodo = async (req, res) => {
  const { task } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO todos (task) VALUES ($1) RETURNING *',
      [task]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getTodos, addTodo };