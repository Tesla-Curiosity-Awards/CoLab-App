import { logo } from '../../assets/images/index'
import './top-nav-bar.scss'

const TopNavBar = () => {
  return (
    <nav>
      <div className="left">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="right">
        <ul className='nav-list'>
          <li className='nav-item'><a href='/setup'>Create Session</a></li>
          <li className='nav-item'><a href='#'>About Us</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default TopNavBar