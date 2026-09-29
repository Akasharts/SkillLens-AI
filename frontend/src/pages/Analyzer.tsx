import { Link } from "react-router-dom";
import '../styles/style.css';
import { motion } from 'motion/react';
import { FileText , UploadCloudIcon,Upload,ArrowRight, CodeXml} from "lucide-react";
import { FaPython,FaJava,FaGithub,FaJs,FaHtml5,FaReact,FaGitAlt, FaDocker, FaCode, FaCss3Alt, FaAngular, FaNodeJs, FaLinux } from "react-icons/fa";
import { useRef, useState } from "react";
import type { ChangeEvent} from "react";
import { SiCplusplus,SiSharp, SiDjango, SiFastapi, SiFirebase, SiFlask, SiKubernetes, SiMongodb, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPytorch, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si";
import { TbAlertTriangle, TbCircleCheck, TbSql } from "react-icons/tb";
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
        try
        {
            const data=await handleUpload(selectedFile);
            setResult(data);
            setSkills(data.result.skills);
            setStrengths(data.result.strengths);
            setWeakness(data.result.weaknesses);
            console.log(data);
        }
        catch(error)
        {
            console.error(error);
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
    const handleAnalyze =()=>
    {
        if(!file)
        {
            setMessage("Please select a File");
            return;
        }

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
    <div className="container">
        <div className="left">
        <div className="analyzer-hero-section">
        <h1>Analyze your Resume</h1>
        <p className="analyzer-hero-desc">Get AI-powered insights into your resume in seconds.</p>
    </div>
    <div className="user-input" 
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
        {!file?(
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
        }
    </div>
   <button className={`analyzer_btn ${file?"active":"disabled"}`}
   disabled={!file}
   onClick={handleAnalyze}
   >Analyze Your Resume <ArrowRight className='arrow'/></button>
   </div>
    <div className="right">
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
        <div className="other_features strength">
            <div className="title">
                <TbCircleCheck className="Icon strength"/>
            <p className="feature_title">Strengths</p>
            </div>
            <ul className="other_desc">
            {
                strengths.map((st)=>
                    <li>✦&nbsp;{st}</li>
                )
            }
            </ul>
        </div>
        <div className="other_features">
            <div className="title">
                <TbAlertTriangle className="Icon"/>
            <p className="feature_title">Weakness</p>
            </div>
            <ul className="other_desc">
            {
                weakness.map((w)=>
                    <li>✦&nbsp;{w}</li>
                )
            }
            </ul>
        </div>
    </div>
   </div>
 
    </>)
}
export default Analyzer;