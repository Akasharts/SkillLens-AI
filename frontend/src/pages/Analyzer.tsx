
import '../styles/style.css';
import { motion } from 'motion/react';
import { FileText , CodeXml} from "lucide-react";
import { useState } from "react";
import type { IconType } from "react-icons";
import { TbAlertTriangle, TbBulb, TbCircleCheck,  TbTargetArrow } from "react-icons/tb";

import { SkillsIcon,skillColors } from '../data/skills.ts';
import {handleUpload} from '../services/api.ts';
import Navbar from '../components/Navbar';
import ResumeUpload from "../components/ResumeUpload.tsx";
function Analyzer() 
{
    
    const[file,setFile]=useState<File|null>(null);

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
    type Feature={
        title:string,
        desc:string[],
        icon:IconType
    };
    const features:Feature[]=[{
        title:"Strengths",
        desc:strengths,
        icon:TbCircleCheck
    },{
        title:"Weakness",
        desc:weakness,
        icon:TbAlertTriangle
    },
    {
        title:"Suggestions",
        desc:suggestions,
        icon:TbBulb
    },
    {
        title:"Skill Gaps",
        desc:skillGaps,
        icon:TbTargetArrow
    }
    ]
    const analyze_resume= async()=>
    {
        if(!file)
        {
            setErrorMessage("Please select a File");
            setErrorMessage("Something went wrong while analyzing the resume.");
            return;
        }
         try
        {
            setIsAnalyzing(true);
            const data=await handleUpload(file);
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
            onAnalyze={analyze_resume}
            />
        ):(
            <div className="right">
                <div className="result_header">
                    <h1 className="result_title">Resume Analysis</h1>
                    <p className="result_desc">Here's how your resume performs and where you can improve.</p>
                </div>
                <div className="top_result">
                    <div className="ATS_card">
                        <div className="ats_header">
                            <p className="atsScore">ATS Score</p>
                        </div>
                        <div className="ats_score">
                            <motion.div className="score_ring"
                            initial={{background: `conic-gradient(#7C3AED 0deg,rgba(255, 255, 255, 0.08) 0deg)`}}
                            animate={{background: `conic-gradient(#7C3AED ${atsScore*3.6}deg,rgba(255, 255, 255, 0.08) ${atsScore*3.6}deg)`}}
                            transition={{duration: 1.5, ease: "easeOut"}}
                            style={{"--score":`${atsScore*3.6}deg`} as React.CSSProperties}>
                            <div className="score_content">
                            <span className="Score">{atsScore}</span>
                            <small>/100</small>
                            </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="summary">
                        <div className="summary_head">
                            <FileText className="analyzer-fileText"/>
                            <p className="summary_title">Summary</p>  
                        </div>
                        <p className="summary_content">{summary}</p>
                    </div>
                </div>
                <div className="skills">
                    <div className="title">
                        <CodeXml className="Icon" />
                        <p className="feature_title">Skills</p>
                    </div>
                    <ul className="desc">
                    {
                    skills.map((s)=>{
                        const Icon=SkillsIcon[s];
                        return(
                        <li >
                            {Icon&&<Icon className="desc-icon" style={{color:skillColors[s]}}/>}
                            {s}
                        </li>
                        )
                        })
                    }
                    </ul>
                </div>
                <div className="grid-box">
                {
                    features.map((f)=>
                    {
                        const Icon=f.icon;
                        return(
                        <div className={`other_features ${f.title}`} key={f.title}>
                            <div className="title">
                                <Icon className={`Icon ${f.title}`}/>
                                <p className={`feature_title ${f.title}` }>{f.title}</p>
                            </div>
                            <ul className="other_desc">
                            {
                                f.desc.map((fd)=>(
                                    <li>✦&nbsp;{fd}</li>
                                ))
                            }
                            </ul>
                        </div>
                    );
                    })
                }
                </div>
            </div>
            )
    }
    </>)
}
export default Analyzer;