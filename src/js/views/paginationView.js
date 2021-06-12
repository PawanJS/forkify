import View from './view.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      //   change to number
      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupBtnNext(curPage);
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupBtnPrev(curPage);
    }

    // Other page
    if (curPage < numPages) {
      return `${this._generateMarkupBtnPrev(
        curPage
      )}${this._generateMarkupBtnNext(curPage)}`;
    }

    // Page 1 and there are no other pages
    return ``;
  }

  _generateMarkupBtnNext(curPage) {
    return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
    `;
  }

  _generateMarkupBtnPrev(curPage) {
    return `
          <button data-goto="${
            curPage - 1
          }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
      `;
  }
}

export default new PaginationView();
