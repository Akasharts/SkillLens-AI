from fastapi import UploadFile
from pypdf import PdfReader
from analyze_resume import analyze_resume
from docx import Document

def extract_text(file:UploadFile):
    file_type=file.content_type
    if file_type=="application/pdf":
        return extract_pdf(file)
    elif file_type=="application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return extract_docx(file)
    else:
        raise ValueError("File format not supported")

def extract_pdf(file):
    reader=PdfReader(file.file)
    text=""
    for page in reader.pages:
        text+=page.extract_text() or ""
    result=analyze_resume(text)
    return result



def extract_docx(file):
    doc=Document(file.file)
    text=[]
    for phara in doc.paragraphs:
        if phara.text.strip():
            text.append(phara.text.strip())
    result =analyze_resume("\n".join(text))
    return result



