import { Link } from "react-router-dom";
import '../styles/style.css';
import { motion } from 'motion/react';
import { FileText , UploadCloudIcon,Upload,ArrowRight, CodeXml} from "lucide-react";
import { FaPython,FaJava,FaGithub,FaJs,FaHtml5,FaReact,FaGitAlt, FaDocker, FaCode, FaCss3Alt, FaAngular, FaNodeJs, FaLinux } from "react-icons/fa";
import { useRef, useState } from "react";
import type { ChangeEvent} from "react";
import type { IconType } from "react-icons";
import { SiCplusplus,SiSharp, SiDjango, SiFastapi, SiFirebase, SiFlask, SiKubernetes, SiMongodb, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPytorch, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si";
import { TbAlertTriangle, TbBulb, TbCircleCheck, TbSql, TbTargetArrow } from "react-icons/tb";
import {handleUpload} from '../services/api.ts';
function Analyzer() 
{
    
    const fileRef=useRef<HTMLInputElement>(null);
    const[file,setFile]=useState<File|null>(null);
    const[message,setMessage]=useState(" ");
    const[dragOver,setDragOver]=useState(false);
    const[filesize,setFilesize]=useState(0);
    const[result,setResult]=useState();

    const[skills,setSkills]=useState<string[]>([]);
    const[strengths,setStrengths]=useState<string[]>([]);
    const[weakness,setWeakness]=useState<string[]>([]);
    const[suggestions,setSuggestions]=useState<string[]>([]);
    const[skillGaps,setSkillGaps]=useState<string[]>([]);
    const[atsScore,setAtsScore]=useState(0);

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
    function handleClick()
    {
        fileRef.current?.click();
    }
    const handleDragOver=(e:React.DragEvent<HTMLDivElement>)=>
    {
        e.preventDefault();
        setDragOver(true);
    }
    const handleDragLeave=()=>setDragOver(false);
    const handleFilechange=async (e:ChangeEvent<HTMLInputElement>)=>
    {
        const selectedFile=e.target.files?.[0];
        if(!selectedFile)
            return;
        setFile(selectedFile);
        const size=(selectedFile.size/(1024*1024)).toFixed(2);
        setFilesize(parseFloat(size));
        setMessage(`Uploaded File : ${selectedFile.name}\n`);
        
    }
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
            const data=await handleUpload(file);
            setResult(data);
            setSkills(data.result.skills);
            setStrengths(data.result.strengths);
            setWeakness(data.result.weaknesses);
            setSuggestions(data.result.suggestions);
            setSkillGaps(data.result.skill_gaps);
            setAtsScore(data.result.ats_score);
            console.log(data);
            if(!data.result.is_resume)
            {
                setErrorMessage("Please upload valid Resume File");
                return ;
            }
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
    const handleDrop=(e:React.DragEvent<HTMLDivElement>)=>
    {
        e.preventDefault();
        setDragOver(false);
        const droppedFile=e.dataTransfer.files[0];
        if(!droppedFile)
            return;
        setFile(droppedFile);
        setMessage(`Uploaded File : ${droppedFile.name}\n`);
    }
    const SkillsIcon: Record<string, React.ElementType> = {
  Python: FaPython,
  Java: FaJava,
  JavaScript: FaJs,
  TypeScript: SiTypescript,

  C: FaCode,
  "C++": SiCplusplus,
  "C#": SiSharp,

  HTML: FaHtml5,
  CSS: FaCss3Alt,

  React: FaReact,
  Angular: FaAngular,
  "Node.js": FaNodeJs,

  Git: FaGitAlt,
  GitHub: FaGithub,

  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,

  Firebase: SiFirebase,

  Django: SiDjango,
  Flask: SiFlask,
  FastAPI: SiFastapi,

  Docker: FaDocker,
  Kubernetes: SiKubernetes,

  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  NumPy: SiNumpy,
  Pandas: SiPandas,

  "Tailwind CSS": SiTailwindcss,
    SQL:TbSql,
  Linux: FaLinux,
};
    return(<>
       <div className="nav">
        <motion.div className="left-section"
        initial={{opacity:0,y:5}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5}}
        >
            <h1><FileText className='file-text'/>Skill<span className='Lens_text'>Lens</span>&nbsp; AI </h1>
        </motion.div>
        <div className="right-section">
        <ul>
            <li><Link to='/' className='links'>Home</Link></li>
            <li><Link to='/analyzer' className='links'>Analyze Resume</Link></li>
        </ul>
        </div>
    </div>
    {
        !isanalyzed?(
            <div className="left">
        <div className="analyzer-hero-section">
        <h1>Analyze your Resume</h1>
        <p className="analyzer-hero-desc">Get AI-powered insights into your resume in seconds.</p>
    </div>
   
    <div className={`user-input ${isAnalyzing?"analyzing":""}`}
    onClick={handleClick}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
    >
        <input  
        ref={fileRef} 
        type="file" 
        hidden
        accept=".pdf,.doc,.docx"
        onChange={handleFilechange} />
        {
            isAnalyzing?( <div className="analyzing_content">
                <div className="analyzing-spinner"></div>
                <h2>Anlayzing Your Resume...</h2>
                <p> Extracting information and generating insights</p>
            </div>
            ):(
            !file?(
            <>
            <UploadCloudIcon className="uploadIcon"/>
            <p className="input-desc"><span className="drag-drop-text">Drag and Drop </span>the File<br/><span className="upload-text">or Click here to Upload the File</span></p>
            <button className="upload_btn"><Upload className="upload_arw"/>Browse Files</button>
            </>
            ):(<>
             <div className="message">
            <FileText className="analyzer-fileText"/>
                <div className="message-desc">
                    <p>{message}</p>
                    <span className="filesize-text">{filesize}MB</span>
                </div>
            </div>
            <span className="upload-text">Click here to Change the File</span>
            </>
            )
            )
        }
       
         <p className="error_message">{errorMessage}</p>
    </div>
   <button className={`analyzer_btn `}
   onClick={analyze_resume}
   >Analyze Your Resume <ArrowRight className='arrow'/></button>
   </div>
        ):(
            <div className="right">
                <div className="ATS_card">
                <div className="ats_header">
                    <p className="atsScore">ATS Score</p>
                </div>
                <div className="ats_score">
                <motion.div className="score_ring"
                    initial={{
        background: `conic-gradient(
            #7C3AED 0deg,
            rgba(255, 255, 255, 0.08) 0deg
        )`
    }}
    animate={{
        background: `conic-gradient(
            #7C3AED ${atsScore*3.6}deg,
            rgba(255, 255, 255, 0.08) ${atsScore*3.6}deg
        )`
    }}
    transition={{
        duration: 1.5,
        ease: "easeOut"
    }}
                style={{"--score":`${atsScore*3.6}deg`} as React.CSSProperties}
                >
                    <div className="score_content">
                        <span className="Score">{atsScore}</span>
                        <small>/100</small>
                    </div>
                </motion.div>
                </div>
                </div>
            <div className="skills">
                <div className="title">
                <CodeXml className="Icon"/>
            <p className="feature_title">Skills</p>
            </div>
            <ul className="desc">{
                
                skills.map((s)=>{
                    const Icon=SkillsIcon[s];
                    return(
                    <li >
                        {Icon&&<Icon className="desc-icon"/>}
                        {s}
                    </li>
                    )
                })
            }
            </ul>
        </div>
        <div className="grid-box">
        {
            features.map((f)=>{
                const Icon=f.icon;
                return(
                    <div className={`other_features ${f.title}`} key={f.title}>
                        <div className="title">
                            <Icon className={`Icon ${f.title}`}/>
                            <p className="feature_title">{f.title}</p>
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