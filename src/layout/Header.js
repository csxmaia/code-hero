import logo from '../assets/images/logo.png'
import './header.scss';

export default function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo}/>
      </div>
      <div className="right">
        <div className="name">
          <span>Cristhian Maia</span>
        </div>
        <div className="test-name">
          <span>Teste de Front-end</span>
        </div>
        <div className="icon">
          <div>
            <span>CB</span>
          </div>
        </div>
      </div>
    </nav>
  )
}