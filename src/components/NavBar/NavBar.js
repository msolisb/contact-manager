import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className='container'>
          <Link to={'/'} className='navbar-brand'>
            <i className='fa fa-mobile me-2 text-warning' />
            Contact <span className='text-warning'> Manager</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar
