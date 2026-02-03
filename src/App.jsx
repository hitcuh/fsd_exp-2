import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Card, CardContent } from "@mui/material";

// Enhanced Navbar
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow">
      <div className="container">
        <span className="navbar-brand fw-bold">UI Lab</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Cards</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Form</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Material UI</a></li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-light">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// Bootstrap Form
function BootstrapForm() {
  return (
    <div className="card p-3 mb-4 shadow-sm">
      <h4 className="card-title">Bootstrap Form</h4>
      <input className="form-control mt-2" placeholder="Enter name" />
      <button className="btn btn-primary mt-3 w-100" onClick={() => alert("Form Submitted!")}>Submit</button>
    </div>
  );
}

// Cards with hover effect
const cards = [
  { title: "Card 1", text: "This is the first card.", img: "https://via.placeholder.com/150" },
  { title: "Card 2", text: "This is the second card.", img: "https://via.placeholder.com/150" },
  { title: "Card 3", text: "This is the third card.", img: "https://via.placeholder.com/150" },
  { title: "Card 4", text: "This is the fourth card.", img: "https://via.placeholder.com/150" },
];

function CardLayout() {
  return (
    <div className="mb-4">
      <h4 className="mb-3">Bootstrap Cards</h4>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div
              className="card h-100 shadow-sm"
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button className="btn btn-primary w-100" onClick={() => alert(`${card.title} clicked!`)}>Go</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Material UI Form
function MUIForm() {
  return (
    <Card style={{ maxWidth: 400, margin: '20px auto' }} className="shadow-sm">
      <CardContent>
        <h4>Material UI Form</h4>
        <TextField label="Name" fullWidth margin="normal" />
        <Button variant="contained" fullWidth onClick={() => alert("Material UI Form Submitted!")}>Submit</Button>
      </CardContent>
    </Card>
  );
}

// Main App Component
export default function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <BootstrapForm />
        <CardLayout />
        <MUIForm />
      </div>
    </div>
  );
}
