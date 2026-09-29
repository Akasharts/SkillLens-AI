export const handleUpload=async (file:File)=>{
    const formData=new FormData();
    formData.append("file",file);
    const response=await fetch('http://127.0.0.1:8000/upload',
        {
            method:"POST",
            body:formData
        }
    );
    const data = await response.json();
    if(!response.ok)throw new Error("Failed to analyze resume");
    return data;
};