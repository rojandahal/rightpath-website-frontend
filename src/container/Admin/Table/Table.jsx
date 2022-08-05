import "./Table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import PrintIcon from "@mui/icons-material/Print";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { DOCUMENTAPI } from "../../Constants/ApiConstants";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Spinner from "../../Loaders/Spinner";
import { Button } from "@mui/material";
const Tables = () => {
  const { setError } = useForm();
  const [data, setData] = useState();
  const [deleteId, setDeleteId] = useState();
  const [spinnerLoad, setSpinnerLoading] = useState(false);
  const printRef = useRef();

  function useData() {
    return useQuery(
      "fetchData",
      async () => {
        return await axios.get(DOCUMENTAPI, {
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

  const { refetch, isLoading } = useData();

  useEffect(() => {
    refetch();
    console.log(data == null ? "Null" : "NOT");
    axios
      .delete(DOCUMENTAPI + "/" + deleteId, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        setSpinnerLoading(false);
        refetch();
      })
      .catch((error) => {
        setSpinnerLoading(false);
        console.log(error.message);
      });
  }, [deleteId]);

  const handleClick = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  const deleteHandler = (id) => {
    setDeleteId(id);
    setSpinnerLoading(true);
  };

  return (
    <TableContainer component={Paper} className="table print" ref={printRef}>
      <TableCell className="tableCell">
        <PrintIcon type="submit" onClick={handleClick} />
      </TableCell>
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
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data == null ? (
            <TableRow key="Name"></TableRow>
          ) : (
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.age}</TableCell>
                <TableCell className="tableCell">{row.contactNumber}</TableCell>
                <TableCell className="tableCell">{row.email}</TableCell>
                <TableCell className="tableCell">{row.address}</TableCell>
                <TableCell className="tableCell">{row.passportNo}</TableCell>
                <TableCell className="tableCell">{row.levelStudy}</TableCell>
                <TableCell className="tableCell">
                  {row.desiredCountry}
                </TableCell>
                <TableCell className="tableCell">{row.desiredCourse}</TableCell>
                <TableCell className="tableCell">{row.courseReq}</TableCell>
                <TableCell className="tableCell">
                  <ArchiveIcon />
                </TableCell>
                <TableCell className="tableCell">
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={() => deleteHandler(row.id)}
                  >
                    {spinnerLoad ? (
                      <div>
                        <Spinner />{" "}
                      </div>
                    ) : (
                      <DeleteIcon sx={{ color: "white" }} />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
