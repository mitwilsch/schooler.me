import React, { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { Button, Typography, TextField, Input } from '@material-ui/core';

const FamilyTree = () => {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState(currentPage);
  function handleNumPages({ numPages }) {
    setNumPages(numPages);
  }

  const handleClick = direction => {
    switch (direction) {
      case 'left':
        if (currentPage != 1) {
          setCurrentPage(currentPage - 1);
        }
        break;
      case 'right':
        if (currentPage != numPages) {
          setCurrentPage(currentPage + 1);
        }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Button onClick={() => handleClick('left')}>Left</Button>

      <Document
        file={'public/tree.pdf'}
        onLoadSuccess={handleNumPages}
        options={{
          cMapUrl: 'cmaps/',
          cMapPacked: true,
        }}
      >
        <Typography variant="h5">
          Page: {currentPage} of {numPages}
        </Typography>

        <Input
          onChange={e => {
            if (e.target.value == '') {
              e.target.value = 0;
            }
            setPageInput(parseInt(e.target.value));
          }}
          value={pageInput}
          type="number"
        />
        <Button
          onClick={() => {
            setCurrentPage(pageInput);
          }}
        >
          Go
        </Button>

        <Page pageNumber={currentPage}></Page>
      </Document>

      <Button onClick={() => handleClick('right')}>Right</Button>
    </div>
  );
};
export default FamilyTree;
