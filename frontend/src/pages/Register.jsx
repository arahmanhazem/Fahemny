import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //dah part el memory, usestate gives el page memory, each line gives creates a value w a function to change it
  //form holds kol haga el user katabha f el 4 fields 
  //error dih bethold ay error message , its empty law mafeesh error
  //loading is only true lama el request is being sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //this runs every time el user types a letter

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    //validation lel pass, it checks the password before bothering the server return stops here
    setLoading(true);
    try {
      const res = await api.post('/auth/register', form);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Could not reach the server');
    } finally {
      setLoading(false);
    }
  };

  //catch runs if anything goes wrong law the backend sent a message like eno el email already exists
  //finally runs keda keda fa el button always goes back to normal

  return (
    <div style={{ maxWidth: 400 }}>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password (min 8 characters)" value={form.password} onChange={handleChange} required />

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="educator">Educator</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default Register;