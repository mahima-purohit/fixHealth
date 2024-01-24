import React, { useEffect } from "react";
import styles from "./DoctorList.module.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

// ResponsiveTable component
const DoctorList = ({ doctors, onBookAppointment }) => {
  useEffect(() => {
    console.log(doctors, "doctors from prop");
  });
  return (
    <TableContainer>
      <Table className={styles.tableWrapper}>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={styles.heading}>
              Doctor Name
            </TableCell>
            <TableCell align="center" className={styles.heading}>
              Expertise
            </TableCell>
            <TableCell align="center" className={styles.heading}>
              City
            </TableCell>
            <TableCell align="center" className={styles.heading}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctors.map((doctor, index) => (
            <TableRow key={doctor.id}>
              <TableCell className={styles.text} align="center">
                {doctor.name}
              </TableCell>
              <TableCell className={styles.text} align="center">
                {doctor.expertise}
              </TableCell>
              <TableCell className={styles.text} align="center">
                {doctor.city}
              </TableCell>
              <TableCell className={styles.text} align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onBookAppointment(doctor)}
                >
                  Book Appointment
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DoctorList;
