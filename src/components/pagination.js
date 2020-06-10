import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pagination = ({ total, setCurrentPage }) => {
  const [pages, setPages] = useState(0);
  const valueOffset = 5;
  useEffect(() => {
    const numberPage = total / valueOffset;
    setPages(Math.floor(numberPage));
  }, [total]);

  const pageCreator = pages => {
    let pageElement = [];
    for (let i = 1; i <= pages; i++) {
      pageElement.push(
        <PageNumber key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </PageNumber>
      );
    }
    return pageElement;
  };

  if (total === 0) return null;
  return <MainDiv>{pageCreator(pages)}</MainDiv>;
};

const PageNumber = styled.a`
  margin: 3px 6px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  &:active {
    color: red;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

Pagination.propTypes = {
  total: PropTypes.number,
  setCurrentPage: PropTypes.func
};

export default Pagination;
