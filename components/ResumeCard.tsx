import React from 'react';

type ResumeData = {
  name: string;
  uploadDate: string;
  file: string
};

type ResumeCardProps = {
  data: ResumeData;
};

function ResumeCard({ name,uploadDate,file }:{name:string,uploadDate:string,file:string}) {

  return (
    <div className="resume-card">
      <h1>{name}</h1>
	  <h1>resumecard h1</h1>
      <div className="upload-date">{uploadDate}</div>
      <a href={file} target="_blank" rel="noopener noreferrer">
        View PDF Version
      </a>
    </div>
  );
}

export default ResumeCard;