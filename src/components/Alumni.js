import React from "react";
import "../styles/Alumni.css";

const alumniData = [
  {
    id: 1,
    firstName: "Gilbert",
    lastName: "Muriithi",
    email: "N/a",
    phoneNumber: "Not provided",
  },
   {
    id: 2,
    firstName: "Ndereba",
    lastName: "Mbogori",
    email: "N/a",
    phoneNumber: "Not provided",
  }, {
    id: 3,
    firstName: "Grace",
    lastName: "Muriithi",
    email: "N/a",
    phoneNumber: "Not provided",
  }, {
    id:4,
    firstName: "Ireen",
    lastName: "Makena",
    email: "N/a",
    phoneNumber: "Not provided",
  }, {
    id: 5,
    firstName: "Catherine",
    lastName: "Mukiri",
    email: "N/a",
    phoneNumber: "Not provided",
  }, {
    id: 6,
    firstName: "Rael",
    lastName: "Ntinyari",
    email: "N/a",
    phoneNumber: "Not provided",
  }, {
    id: 7,
    firstName: "Doreen",
    lastName: "Nkunja",
    email: "N/a",
    phoneNumber: "Not provided",
  }, {
    id:8,
    firstName: "Gilbert",
    lastName: "Muriithi",
    email: "N/a",
    phoneNumber: "Not provided",
  },
  {
    id: 9,
    firstName: "Maingi",
    lastName: "Mugambi",
    email: "N/a",
    phoneNumber: "Not provided",
  },
  
  // Add more fake data here
];

function AlumniTable() {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {alumniData.map((alumni) => (
            <tr key={alumni.id}>
              <td>{alumni.firstName}</td>
              <td>{alumni.lastName}</td>
              <td>{alumni.email}</td>
              <td>{alumni.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlumniTable;
