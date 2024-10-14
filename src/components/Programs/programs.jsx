import React from 'react'
import { useState } from 'react';
import './programs.css'
import programimg from '../../assets/program.jpg'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const programs = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = {};
    
    if (!email) validationErrors.email = 'Email is required';
    if (!password) validationErrors.password = 'Password is required';
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
    }
  };

  return (
    <div className='programs'>
      <div className='program-left'>
        <img src={programimg} alt="" className='program-img'/>
    </div>
    <div className='program-right'>
    <h3>Kataria Foundation Scholarship Program</h3>
      <h2>Program Details</h2>
      <p>
      Kataria Foundation Scholarship Program is designed to provide tuition fee support to deserving Indian students from recognized educational boards, such as CBSE, ICSE, and State Boards. The scholarship is aimed at encouraging academic excellence and alleviating the financial burden of education for students with consistent academic achievements. By offering financial assistance, Kataria Foundation seeks to empower young learners to pursue their educational goals without economic constraints. This initiative is part of the foundation’s broader mission to nurture and support future talent, ensuring access to quality education for all.
      </p>
      <h2>Eligibility Criteria</h2>
      <p>To be eligible for the scholarship, students must meet one of the following criteria:</p>
      <ul>
        <li>80% average marks over the last three academic years</li>
        <li>90% or above score in both Class 10 and Class 12.</li>
      </ul>
      <p>Students fulfilling either of these criteria will be considered for tuition fee support.</p>
      <button className='dark-btn' onClick={handleShow}>Apply Now</button>
      <button className="my-custom-button" onClick={handleShow}>
      </button>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-centered">
        <Modal.Header closeButton>
          <Modal.Title>Form Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        <button className='form-btn' onClick={handleClose}>Back</button>
        <button className='form-btn' onClick={handleClose}>Submit Now</button>
        </Modal.Footer>
      </Modal>


    </div>
      </div>
  )
}

export default programs
