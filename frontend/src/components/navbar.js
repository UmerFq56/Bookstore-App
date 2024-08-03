import {Link} from 'react-router-dom'
const Navbar = () => {
    
    return (
        <header>
            <div className="linkc">
                <Link className='link' to= '/'>
                <h1>Library Record Maintenance</h1>
                </Link>
                <Link className='link' to='/form'>
                <h2>Create Form</h2>
                </Link>
                <Link className='link' to ='/books'>
                <h2>Records</h2>
                </Link>
            </div>
        </header>)
    
}
export default Navbar;