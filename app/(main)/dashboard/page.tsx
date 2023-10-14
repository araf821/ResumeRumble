import { Button } from "@/components/ui/button"
import ResumeCard from "@/components/ResumeCard";
import { useEffect } from "react";

type ResumeData = {
  name: string;
  uploadDate: string;
  file: string
};

const resumes = [{
  name:"Johnny Donuts",
  uploadDate:"00-00-00",
  file:'https://example.com/johndoe_resume.pdf',
}]


type DashboardProps = {
  resumes: ResumeData[]; // Define the type explicitly as an array of ResumeData
};

const DashboardPage = () => {
  const resumes = [{
    name:"Johnny Donuts",
    uploadDate:"00-00-00",
    file:'https://example.com/johndoe_resume.pdf',
  }]
  return (
    <div>
      <h1>DashboardPagell</h1>
      <div className="">
        <Button>Rating</Button>
        <Button>Ranking</Button>
        <Button>Leaderboard</Button>
      </div>
      <div className="resumes">
        <h2>your resumes:</h2>
        <div>
          {resumes.map((resume, index) => (
          <ResumeCard key={index} name={resume.name} uploadDate={resume.uploadDate}  file={resume.file}/>
          ))}
        </div>
      </div>
    </div>
  )
}
/*
*/
export default DashboardPage