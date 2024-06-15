import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CompanyDetails.css';

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/details/${id}`);
        setCompany(response.data);
      } catch (error) {
        console.error('Error fetching company details', error);
      }
    };

    fetchCompanyDetails();
  }, [id]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div className="company-details">
      <div className="header">
        <img src={company.companyLogo} alt="Company Logo" className="company-logo" />
        <div className="company-info">
          <h1>{company.name}</h1>
          <p className="description">{company.description}</p>
          <p className="phone">{company.phoneNumber}</p>
          <p className="email">{company.email}</p>
        </div>
      </div>
      <div className="details">
        <h2>Company Details</h2>
        <p><strong>Website:</strong> {company.website}</p>
        <p><strong>Email:</strong> {company.email}</p>
        <p><strong>Facebook:</strong> <a href={company.facebookUrl}>{company.facebookUrl}</a></p>
        <p><strong>Instagram:</strong> <a href={company.instagramUrl}>{company.instagramUrl}</a></p>
        <p><strong>Twitter:</strong> <a href={company.twitterUrl}>{company.twitterUrl}</a></p>
        <p><strong>LinkedIn:</strong> <a href={company.linkedinUrl}>{company.linkedinUrl}</a></p>
        <p><strong>Address:</strong> {company.address}</p>
      </div>
      <div className="screenshot">
        <h2>Screenshot of Webpage</h2>
        <img src={company.screenshotUrl} alt="Screenshot" />
      </div>
    </div>
  );
};

export default CompanyDetails;
