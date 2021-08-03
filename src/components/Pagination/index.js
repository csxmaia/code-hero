import {useEffect, useState} from "react";
import {connect} from "react-redux";
import './index.scss';
import {bindActionCreators} from "redux";
import * as Heroes from "../../store/actions/heroes";

function Pagination(props) {
  const {
    currentPage,
    onChangePage,
    total,
    heroPerPage
  } = props;

  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let calcPages = [];
    let totalPages = Math.ceil(total/heroPerPage)
    setTotalPages(totalPages)

    for(let i = currentPage -2 ; i <= currentPage + 2; i++) {
      if(i > 0 && i <= totalPages) {
        calcPages.push(i)
      }
    }

    if(calcPages[calcPages.length - 1] !== totalPages) {
      if(calcPages.length < 5) {
        for(let i = calcPages.length + 1; i <= 5; i++) {
          if( i < totalPages + 1) {
            calcPages.push(i)
          }
        }
      }
    }
    else {
      if(calcPages.length < 5) {
        for(let i = calcPages.length + 1; i <= 5; i++) {
          calcPages.unshift(calcPages[0]-1);
        }
      }
    }

    calcPages = calcPages.filter((pages) => pages > 0);

    setPages(calcPages);
  }, [currentPage, total])

  return (
    <div className="pagination">
      <div className="navigator">
        { currentPage > 2 && (
          <div className="double-arrow left" onClick={() => onChangePage(1)}>
            <span>{"<<"}</span>
          </div>
        )}
        { currentPage > 1 && (
          <div className="arrow left" onClick={() => onChangePage(currentPage - 1)}>
            <span>{"<"}</span>
          </div>
        )}
      </div>

      {pages.map(page => (
        <div
          key={page}
          className={`button ${currentPage === page? "active" : ""}`}
          onClick={ currentPage === page? () => {} : () => onChangePage(page)}
        >
          <span>
            { page }
          </span>
        </div>
      ))}
      { !(pages.includes(totalPages - 1) || (currentPage === totalPages) || totalPages === 0) && (
        <div
          className={`button ${currentPage === totalPages? "active" : ""} last-extra`}
          onClick={ currentPage === totalPages? () => {} : () => onChangePage(totalPages)}
        >
          <span>
            ... { totalPages }
          </span>
        </div>
      )}

      <div className="navigator">
        { (currentPage !== totalPages && (totalPages !== 0)) && (
          <div className="arrow right" onClick={() => onChangePage(currentPage + 1)}>
            <span>{">"}</span>
          </div>
        )}
        { (!pages.includes(totalPages) && (totalPages !== 0)) && (
          <div className="double-arrow right" onClick={() => onChangePage(totalPages)}>
            <span>{">>"}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  total: state.heroes.total,
  currentPage: state.heroes.currentPage,
  heroPerPage: state.heroes.heroPerPage
})

const mapDispatchToProps = dispatch => (bindActionCreators(Heroes, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)