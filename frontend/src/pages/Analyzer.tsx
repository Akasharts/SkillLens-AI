import '../styles/style.css';
import { useState } from "react";

import {handleUpload} from '../services/api.ts';
import Navbar from '../components/Navbar';
import ResumeResults from '../components/ResumeResults.tsx';
import ResumeUpload from "../components/ResumeUpload.tsx";
function Analyzer() 
{
    
    const[file,setFile]=useState<File|null>(null);
    const[jobDesc,setJobDesc]=useState<string>("");

    const[skills,setSkills]=useState<string[]>([]);
    const[strengths,setStrengths]=useState<string[]>([]);
    const[weakness,setWeakness]=useState<string[]>([]);
    const[suggestions,setSuggestions]=useState<string[]>([]);
    const[skillGaps,setSkillGaps]=useState<string[]>([]);
    const[atsScore,setAtsScore]=useState(0);
    const[summary,setSummary]=useState<string>("");

    const[isanalyzed,setIsanalyzed]=useState(false);
    const[errorMessage,setErrorMessage]=useState("");
    const[isAnalyzing,setIsAnalyzing]=useState(false);
    const analyze_resume= async()=>
    {
        if(!file)
        {
            setErrorMessage("Please select a File");
            return;
        }
         try
        {
            setIsAnalyzing(true);
            const data=await handleUpload(file,jobDesc);
            console.log(data);
            if(!data.result.is_resume)
            {
                setErrorMessage("Please upload valid Resume File");
                return ;
            }
            setSkills(data.result.skills);
            setStrengths(data.result.strengths);
            setWeakness(data.result.weaknesses);
            setSuggestions(data.result.suggestions);
            setSkillGaps(data.result.skill_gaps);
            setAtsScore(data.result.ats_score);
            setSummary(data.result.summary.join(""));
            setIsanalyzed(true);
        }
        catch(error)
        {
            console.error(error);
            setErrorMessage("Something went wrong while analyzing the resume.");
        }
        finally
        {
            setIsAnalyzing(false);
        }
    }
    
    
    return(<>
       <Navbar/>
    {
        !isanalyzed?(
            <ResumeUpload
            file={file}
            setFile={setFile}
            isAnalyzing={isAnalyzing}
            errorMessage={errorMessage}
            jobDesc={jobDesc}
            setJobDesc={setJobDesc}
            onAnalyze={analyze_resume}
            />
        ):(
            <ResumeResults
            atsScore={atsScore}
            summary={summary}
            skills={skills}
            strengths={strengths}
            weakness={weakness}
            suggestions={suggestions}
            skillGaps={skillGaps}
            />
            )
    }
    </>)
}
export default Analyzer;