import { Link } from "react-router-dom";
import '../styles/style.css';
import { motion } from 'motion/react';
import { FileText , UploadCloudIcon,Upload,ArrowRight} from "lucide-react";
import { useRef, useState } from "react";
import type { ChangeEvent} from "react";
function Analyzer()
{
    const fileRef=useRef<HTMLInputElement>(null);
    const[file,setFile]=useState<File|null>(null);
    const[message,setMessage]=useState(" ");
    const[dragOver,setDragOver]=useState(false);
    const[filesize,setFilesize]=useState(0);
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
    const handleFilechange=(e:ChangeEvent<HTMLInputElement>)=>
    {
        const selectedFile=e.target.files?.[0];
        if(!selectedFile)
        {
            setMessage("Please select a file");
            return;
        }
        setFile(selectedFile);
        console.log(selectedFile);
        const size=(selectedFile.size/(1024*1024)).toFixed(2);
        setFilesize(parseFloat(size));
        setMessage(`Uploaded File : ${selectedFile.name}\n`);
    }
    const handleDrop=(e:React.DragEvent<HTMLDivElement>)=>
    {
        e.preventDefault();
        setDragOver(false);
        const droppedFile=e.dataTransfer.files[0];
        if(!droppedFile)
        {
            
            setMessage("Please select a file");
            return;
        }
        setFile(droppedFile);
        setMessage(`Uploaded File : ${droppedFile.name}\n`);
    }
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
   >Analyze Your Resume <ArrowRight className='arrow'/></button>
    </>)
}
export default Analyzer;