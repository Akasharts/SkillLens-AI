import { ArrowRight, FileText, Upload, UploadCloudIcon } from "lucide-react";
import right_image from '../assets/right_image.png';
import { useRef, useState, type ChangeEvent } from "react";

type ResumeProps=
{
    file:File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    isAnalyzing:boolean;
    errorMessage:string;
    onAnalyze:()=>void;
}
function ResumeUpload({
        file,
        setFile,
        isAnalyzing,
        errorMessage,
        onAnalyze
    }:ResumeProps)
{
    const fileRef=useRef<HTMLInputElement>(null);
    const[message,setMessage]=useState(" ");
    const[dragOver,setDragOver]=useState(false);
    const[filesize,setFilesize]=useState(0);

    const handleClick=()=>
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
        if(!selectedFile)return;
        setFile(selectedFile);
        const size=(selectedFile.size/(1024*1024)).toFixed(2);
        setFilesize(parseFloat(size));
        setMessage(`Uploaded File : ${selectedFile.name}\n`);
    }
    const handleDrop=(e:React.DragEvent<HTMLDivElement>)=>
    {
        e.preventDefault();
        setDragOver(false);
        const droppedFile=e.dataTransfer.files[0];
        if(!droppedFile)return;
        setFile(droppedFile);
        const size=(droppedFile.size/(1024*1024)).toFixed(2);
        setFilesize(parseFloat(size));
        setMessage(`Uploaded File : ${droppedFile.name}\n`);
    }
    
    return(
    <>
    <div className="left">
        <div className="upload_file">
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
            {isAnalyzing?( 
            <div className="analyzing_content">
                <div className="analyzing-spinner"></div>
                <h2>Anlayzing Your Resume...</h2>
                <p> Extracting information <br/> and generating insights</p>
            </div>
            ):(!file?(
            <>
            <UploadCloudIcon className="uploadIcon"/>
            <p className="input-desc"><span className="drag-drop-text">Drag and Drop </span>the File<br/><span className="upload-text">or Click here to Upload the File</span></p>
            <button className="upload_btn"><Upload className="upload_arw"/>Browse Files</button>
            </>
            ):(
            <>
            <div className="message">
                <FileText className="analyzer-fileText"/>
                <div className="message-desc">
                    <p>{message}</p>
                    <span className="filesize-text">{filesize}MB</span>
                </div>
            </div>
            <span className="upload-text">Click here to Change the File</span>
            <p className="error_message">{errorMessage}</p>
            </>
            ))}
            </div>
        <button className={`analyzer_btn `}
        onClick={onAnalyze}>{isAnalyzing?"Analyzing...":<> Analyze Your Resume <ArrowRight className='arrow'/></>}</button>
        </div>
        <div  className="image">
            <img className="right_image" src={right_image}/>
        </div>
   </div>


    </>);

}
export default ResumeUpload;