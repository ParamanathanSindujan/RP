import React from 'react';
import './Section.css';

const documentsData = [
  {
    category: 'Project Proposal',
    files: [
      { name: 'IT21368066.pdf', url:"/docs/Proposal-report-24-IT21368066.pdf"},
      { name: 'IT21158568.pdf', url: '/docs/Proposal-report-24-IT21158568.pdf'},
      { name: 'IT21369988.pdf', url: '/docs/Proposal-report-24-IT21369988.pdf' },
      { name: 'IT21389092.pdf', url: '/docs/IT21389092_SABEER S.M.pdf' },
      
    ],
  },
  {
    category: 'Proposal Presentation',
    files: [
      { name: 'Proposal Presentation.ppt', url: '/Project presentation/Proposal Presentation.pdf' },
    ],
  },
  {
    category: 'Status Documents',
    files: [
      { name: 'IT21368066.pdf', url: '/docs/proposal1.pdf' },
      { name: 'IT21158568.pdf', url: '/docs/proposal2.pdf' },
      { name: 'IT21369988.pdf', url: '/docs/proposal3.pdf' },
      { name: 'IT21389092.pdf', url: '/docs/proposal4.pdf' },
    ],
  },
  {
    category: 'Progress Presentation 1',
    files: [
      { name: 'Progress Presentation 1.ppt', url: '/pp1/PP1.pdf' },
    ],
  },
  {
    category: 'Research Paper',
    files: [
      { name: 'Research Paper.pdf', url: 'RP paper/24-25J-202_Research Paper 2025.docx' },
    ],
  },
  {
    category: 'Progress Presentation 2',
    files: [
      { name: 'Progress Presentation 2.ppt', url: '/PP2/PP2.pdf' },
    ],
  },
  {
    category: 'Status Document 2',
    files: [
      { name: 'IT21368066.pdf', url: '/docs/proposal1.pdf' },
      { name: 'IT21158568.pdf', url: '/docs/proposal2.pdf' },
      { name: 'IT21369988.pdf', url: '/docs/proposal3.pdf' },
      { name: 'IT21389092.pdf', url: '/docs/proposal4.pdf' },
    ],
  },
  {
    category: 'Final Report',
    files: [
      { name: 'IT21368066.pdf', url: '/finalreport/IT21368066_Final.docx' },
      { name: 'IT21158568.pdf', url: '/finalreport/IT21158568_Final.docx' },
      { name: 'IT21369988.pdf', url: '/finalreport/IT21369988.docx' },
      { name: 'IT21389092.pdf', url: '/finalreport/IT21389092 (1).docx' },
    ],
  },
  {
    category: 'Final Presentation',
    files: [
      { name: 'Final Presentation.ppt', url: '/finalpresentation/final Presentation.pdf' },
    ],
  },
  {
    category: 'Logbook',
    files: [
      { name: 'IT21368066.pdf', url: '/docs/proposal1.pdf' },
      { name: 'IT21158568.pdf', url: '/docs/proposal2.pdf' },
      { name: 'IT21369988.pdf', url: '/docs/proposal3.pdf' },
      { name: 'IT21389092.pdf', url: '/docs/proposal4.pdf' },
    ],
  },
];

const Documents = () => {
  return (
    <div className="section documents">
      <h1 className="documents-title">Research Documents</h1>
      <div className="documents-grid">
        {documentsData.map(({ category, files }) => (
          <div key={category} className="document-category-card">
            <h2>{category}</h2>
            <ul>
              {files.map(({ name, url }) => (
                <li key={name} className="document-item">
                  <span>{name}</span>
                  <a href={url} download className="download-btn" target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
