from fastapi import UploadFile
from pypdf import PdfReader
from analyze_resume import analyze_resume
def extract_text(file:UploadFile):
    file_type=file.content_type
    if file_type=="application/pdf":
        return extract_pdf(file)
    # elif file_type=="application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    #     extract_docx(file)
    else:
        raise ValueError("File format not supported")

def extract_pdf(file):
    reader=PdfReader(file.file)
    text=""
    num_pages=reader.get_num_pages()
    for page in reader.pages:
        text+=page.extract_text() or ""
    result=analyze_resume(text)
    return result