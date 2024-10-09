import React from 'react'
import './programs.css'
import programimg from '../../assets/program.jpg'


const programs = () => {
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
      <button className='dark-btn'>Apply Now</button>

    </div>
      </div>
  )
}

export default programs
