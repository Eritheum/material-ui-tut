import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ResList from "./ResList";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
  tableContainer: {
    borderRadius: 10,
    margin: "10px 10px",
    maxWidth: 1260,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 10,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

const BookingList = ({ bookings }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Customer</TableCell>
            <TableCell className={classes.tableHeaderCell}>Booking #</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Date Booked
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Reservation Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row._id}>
                <TableCell>
                  <Grid container>
                    <Grid item lg={1}>
                      <Avatar
                        alt={row.customer.lastName}
                        src="."
                        className={classes.avatar}
                      />
                    </Grid>
                    <Grid item lg={10}>
                      <Typography className={classes.name}>
                        {row.customer.lastName + " "}
                        {row.customer.firstName}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {row.customer.email}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid item lg={10}>
                    <Typography color="primary" variant="subtitle2">
                      {row.bookingNumber}
                    </Typography>
                  </Grid>
                </TableCell>
                <TableCell>
                  {row.createdAt
                    .toLocaleString()
                    .split(/\D/)
                    .slice(0, 3)
                    .map((num) => num.padStart(2, "0"))
                    .join("/")}
                </TableCell>
                <TableCell>
                  <Grid item lg={10}>
                    <ResList reservations={row.reservations} />
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30]}
            component="div"
            count={bookings.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default BookingList;
