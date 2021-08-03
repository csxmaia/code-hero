import './index.scss';
import Header from './Header'
import Pagination from "../components/Pagination";
import Footer from "./Footer";

export default function Layout({ children }) {
  return(
    <>
      <Header/>
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
    )
}