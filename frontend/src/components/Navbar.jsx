import { Link } from 'react-router-dom';
//el file dah react component a reusable page you write it once w it appears f kol page 

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #ccc' }}>
      <Link to="/">Fahemny</Link>
      <Link to="/browse">Browse</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
// link to browse dih works like a normal link bas it switches el pages without making the whole website reload 
// fa it makes el website asra3 It comes from react-router-dom, one of the toolsinstalled.
export default Navbar;