from fastapi import FastAPI,UploadFile,File,HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from text_extracter import extract_text
app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
users=[]
class User(BaseModel):
    name:str
    email:str
@app.get('/')
async def root():
    return{"message":"backend is running"}
@app.post('/upload')
async def upload_file(file:UploadFile=File(...)):
    try:
        result=extract_text(file)
        return {
        "message":"File recieved",
        "result":result
        }
    except ValueError as e:
        print("VALUE ERROR:", repr(e))
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except Exception as e:
        print("ACTUAL ERROR:", repr(e))
        raise HTTPException(
            status_code=500,
            detail="Error while processing File"
        )
