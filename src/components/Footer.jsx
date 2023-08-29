import "./footer.css"
import { Link } from 'react-router-dom'
import data from "../../src/data/db.json"
const Footer = () => {
  return (
    <footer>
      <Link to="/" className="footer__logo">
        الشركة الأوربية للمصاعد
      </Link>
      <ul className="permalinks">
        {data.Links.map((link) => (
          <li key={link.Navlink}>
            <Link
              to={link.Navlink}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="footer__socials">
      مدينه نصر الحي العاشر بلوك 21
      </div>
      <div className="footer__copyright">
        <small>©copyright <span className="copyright__name">Mahmoud BaraKaT</span> . All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer