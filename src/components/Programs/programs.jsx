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
  const [phone, setPhone] = useState('+91 ')
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.startsWith('+91')) {
      const number = value.slice(3).replace(/\D/g, '');
      if (number.length <= 10) {
        setPhone(`+91 ${number}`);
      }
    }
  }

    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);

      // Simple email validation (name@example.com)
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailPattern.test(value)) {
        setError(''); // Clear error if valid
      } else {
        setError('Invalid email format. Please use name@example.com');
      }
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        // Check file size (400 KB)
        if (file.size > 400 * 1024) {
          setError('File size exceeds 400 KB. Please choose a smaller image.');
          setImage(null); // Clear previous image
        } else {
          setError(''); // Clear error if valid
          setImage(file); // Set the file
        }
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

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-dialog-centered"
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="as per documents" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                placeholder="+91 10-digit mobile number"
                inputMode="numeric"
                onChange={handlePhoneChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="name@example.com"
                onChange={handleEmailChange}
                // isInvalid={!!error}
              />
            </Form.Group>
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                accept='image/*'
                onChange={handleImageChange}

                // isInvalid={!!error}
              />
              {image && (
                <div style={{ marginTop: '10px' }}>
                  <p>Uploaded Image:</p>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded preview"
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                </div>
              )}
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
