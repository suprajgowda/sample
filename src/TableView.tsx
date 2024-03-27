import React from "react";
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
import { ContactUsInterface } from "./theme2/ContactUs";
import { TableHead } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDocument } from "./App";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
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

export default function TableView(props: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const data: ContactUsInterface[] = props.data;
  const { collection } = props;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableHeaderStyle = {
    border: "1px solid #e2e2e2",
    fontWeight: "bold",
  };

  const handleDelete = async (row: any) => {
    console.log("You Clicked Delete-----", row);
    await deleteDocument(collection, row.id);
    // Optionally, you can perform additional actions after deletion
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={tableHeaderStyle}>
              Name
            </TableCell>
            <TableCell align="left" sx={tableHeaderStyle}>
              Email
            </TableCell>
            <TableCell align="left" sx={tableHeaderStyle}>
              Phone Number
            </TableCell>
            <TableCell align="left" sx={tableHeaderStyle}>
              Branch
            </TableCell>
            <TableCell align="left" sx={tableHeaderStyle}>
              College
            </TableCell>
            <TableCell align="left" sx={tableHeaderStyle}>
              Message
            </TableCell>
            <TableCell align="left" sx={tableHeaderStyle}>
              Created At
            </TableCell>
            <TableCell align="left" sx={tableHeaderStyle}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell
                style={{ width: 160 }}
                align="left"
                sx={{ border: "1px solid #e2e2e2" }}
              >
                {row.name}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="left"
                sx={{ border: "1px solid #e2e2e2" }}
              >
                {row.email}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="left"
                sx={{ border: "1px solid #e2e2e2" }}
              >
                {row.phone_number}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="left"
                sx={{ border: "1px solid #e2e2e2" }}
              >
                {row.branch}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="left"
                sx={{ border: "1px solid #e2e2e2" }}
              >
                {row.college}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="left"
                sx={{ border: "1px solid #e2e2e2" }}
              >
                {row.message}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="left"
                sx={{ border: "1px solid #e2e2e2" }}
              >
                {row.createdAt}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="left"
                sx={{ border: "1px solid #e2e2e2" }}
              >
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(row)}
                >
                  <DeleteIcon />
                </IconButton>
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
              count={data.length}
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
  );
}
