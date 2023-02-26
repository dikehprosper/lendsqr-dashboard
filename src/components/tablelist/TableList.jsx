import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./tableList.scss";
import { MdOutlinePersonOff } from "react-icons/md";
import { MdHowToReg } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";

function TableList(props) {
  const [display, setDisplay] = React.useState(false);

  function openDisplay(id) {}

  function closeDisplay() {
    setDisplay(false);
  }
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell tablecell">
                ORGANIZATION &nbsp;
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                    fill="#545F7D"
                  />
                </svg>
              </TableCell>
              <TableCell className="tableCell tablecell">
                USERNAME &nbsp;
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                    fill="#545F7D"
                  />
                </svg>
              </TableCell>
              <TableCell className="tableCell tablecell">
                EMAIL &nbsp;
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                    fill="#545F7D"
                  />
                </svg>
              </TableCell>
              <TableCell className="tableCell tablecell">
                PHONE NUMBER &nbsp;
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                    fill="#545F7D"
                  />
                </svg>
              </TableCell>
              <TableCell className="tableCell tablecell">
                DATE JOINED &nbsp;
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                    fill="#545F7D"
                  />
                </svg>
              </TableCell>
              <TableCell className="tableCell tablecell">
                STATUS &nbsp;
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                    fill="#545F7D"
                  />
                </svg>
              </TableCell>
              <TableCell className="tableCell tablecell"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.files.map((row) => (
              <TableRow key={row.id}>
                <TableCell tableCell className="tableCell tablecell1">
                  {row.orgName}
                </TableCell>
                <TableCell className="tableCell tablecell1">
                  {row.userName}
                </TableCell>
                <TableCell className="tableCell tablecell1">
                  {row.email}
                </TableCell>
                <TableCell className="tableCell tablecell1">
                  {row.phoneNumber}
                </TableCell>
                <TableCell className="tableCell tablecell1">
                  {row.lastActiveDate}
                </TableCell>
                <TableCell className="tableCell tablecell1">
                  <span className={`status ${row.education.employmentStatus}`}>
                    {row.education.employmentStatus}
                  </span>
                </TableCell>
                <TableCell
                  className="tableCell tablecell2"
                  onClick={() => openDisplay(row.id)}
                >
                 <Link>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_5530_2389)">
                        <path
                          d="M10.0002 6.1111C10.9224 6.1111 11.6668 5.36666 11.6668 4.44444C11.6668 3.52222 10.9224 2.77777 10.0002 2.77777C9.07794 2.77777 8.3335 3.52222 8.3335 4.44444C8.3335 5.36666 9.07794 6.1111 10.0002 6.1111ZM10.0002 8.33333C9.07794 8.33333 8.3335 9.07777 8.3335 9.99999C8.3335 10.9222 9.07794 11.6667 10.0002 11.6667C10.9224 11.6667 11.6668 10.9222 11.6668 9.99999C11.6668 9.07777 10.9224 8.33333 10.0002 8.33333ZM10.0002 13.8889C9.07794 13.8889 8.3335 14.6333 8.3335 15.5555C8.3335 16.4778 9.07794 17.2222 10.0002 17.2222C10.9224 17.2222 11.6668 16.4778 11.6668 15.5555C11.6668 14.6333 10.9224 13.8889 10.0002 13.8889Z"
                          fill="#545F7D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5530_2389">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default TableList;
