import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import { callQNAListAPI } from "../../apis/QNAAPICalls";
import { TableHead } from "@mui/material";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function QNAList({isSw}) {
  const qna = useSelector((state) => state.qnaReducer);
  const qnas = qna.list;
  console.log("qnas: ", qnas);

  const [psw, setPsw] = React.useState(isSw);

  const dispatch = useDispatch();

  useEffect(() => {
    setPsw(isSw);
  }, [isSw]);

  useEffect(() => {
    dispatch(callQNAListAPI({

    }));
  }, [dispatch]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - qnas.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(isSw);

  return (
    qnas && (
      <TableContainer
        sx={{
          width: "80%",
          margin: "auto",
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableCell>
              문의 제목
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              답변 상태
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              문의 일자
            </TableCell >
          </TableHead>
          <TableBody>
            
            { psw && (rowsPerPage > 0
              ? qnas
              .filter((qna)=> qna.qnaStatus === '-')
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : qnas.filter((qna)=> qna.qnaStatus === '-')
            )
            .map((qna) => (
              <TableRow key={qna.qnaId} component={Link} to={String(qna.qnaId)}>
                <TableCell component="th" scope="row">
                  {qna.qnaTitle}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {qna.qnaStatus}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {qna.qnaModifyTime=moment().format('YYYY-MM-DD')}
                </TableCell>
              </TableRow>
            ))}

            { !psw && (rowsPerPage > 0
              ? qnas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : qnas
            )
            .map((qna) => (
              <TableRow key={qna.qnaId} component={Link} to={String(qna.qnaId)}>
                <TableCell component="th" scope="row">
                  {qna.qnaTitle}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {qna.qnaStatus}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {qna.qnaModifyTime=moment().format('YYYY-MM-DD')}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={qnas.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    )
  );
}

export default QNAList;
