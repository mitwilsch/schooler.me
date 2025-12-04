import React, { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { Button, Typography, TextField, Input } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', align: 'center' },
}));

const FamilyTree = () => {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState(currentPage);

  const classes = useStyles();

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
    <React.Fragment>
      <Typography variant="h3">Family Tree</Typography>
      <Typography variant="h5" paragraph={true}>
        This is a scan of our family tree. Use the buttons to go through the
        doument.
      </Typography>
      <br />
      <div className={classes.root}>
        <Button onClick={() => handleClick('left')}>
          <ArrowBack />
        </Button>

        <Document
          file={'/public/tree.pdf'}
          onLoadSuccess={handleNumPages}
          options={{
            cMapUrl: 'cmaps/',
            cMapPacked: true,
          }}
        >
          <Typography variant="h5">
            Page: {currentPage} of {numPages} {'   '}
            <Input
              onChange={e => {
                if (e.target.value == '') {
                  e.target.value = 0;
                }
                setPageInput(parseInt(e.target.value));
              }}
              value={pageInput}
              type="number"
            />{' '}
            <Button
              onClick={() => {
                setCurrentPage(pageInput);
              }}
            >
              Go
            </Button>
          </Typography>

          <Page pageNumber={currentPage}></Page>
        </Document>

        <Button onClick={() => handleClick('right')}>
          <ArrowForward />
        </Button>
      </div>
    </React.Fragment>
  );
};
export default FamilyTree;
