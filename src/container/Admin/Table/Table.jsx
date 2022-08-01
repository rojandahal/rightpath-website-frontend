import './Table.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { DOCUMENTFETCH } from "../../Constants/ApiConstants";

const Tables = () => {
  const {setError} = useForm();
  const [data, setData] = useState();

  function useData() {
    return useQuery(
      "fetchData",
      async () => {
        return await axios.get(DOCUMENTFETCH, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      },
      {
        enabled: false,
        onSuccess: (res) => {
          setData(res?.data.data);
        },
        onError: (err) => {
          if (err.response?.data) {
            setError("SubmitError", {
              type: "custom",
              message: err.response?.data?.error,
            });
          }
        },
        retry: 0,
      }
    );
  }

  const {refetch, isLoading} =  useData();

  useEffect(()=> {
    refetch();
    console.log(data==null ? "Null" : "NOT")
  },[data]);

    const rows = [];
      return (
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Name</TableCell>
                <TableCell className="tableCell">Age</TableCell>
                <TableCell className="tableCell">Contact</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Address</TableCell>
                <TableCell className="tableCell">Passport No</TableCell>
                <TableCell className="tableCell">Level Of Study</TableCell>
                <TableCell className="tableCell">Desired Country</TableCell>
                <TableCell className="tableCell">Desired Course</TableCell>
                <TableCell className="tableCell">IELTS/PTE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data==null ?
                <TableRow key="Name">
                </TableRow>
               : data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">{row.name}</TableCell>
                  <TableCell className="tableCell">{row.age}</TableCell>
                  <TableCell className="tableCell">{row.contactNumber}</TableCell>
                  <TableCell className="tableCell">{row.email}</TableCell>
                  <TableCell className="tableCell">{row.address}</TableCell>
                  <TableCell className="tableCell">{row.passportNo}</TableCell>
                  <TableCell className="tableCell">{row.levelStudy}</TableCell>
                  <TableCell className="tableCell">{row.desiredCountry}</TableCell>
                  <TableCell className="tableCell">{row.desiredCourse}</TableCell>
                  <TableCell className="tableCell">{row.courseReq}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default Tables;