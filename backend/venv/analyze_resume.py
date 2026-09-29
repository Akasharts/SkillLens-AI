from ollama import chat
import json
def analyze_resume(text):
    prompt = f"""
You are an expert resume analyzer and resume document classifier.

Your task is to:
1. Determine whether the provided text is actually a resume/CV belonging to a job candidate.
2. If it is a resume, analyze it.
3. If it is NOT a resume, do not perform resume analysis and return an appropriate response.

IMPORTANT:
- A resume normally contains candidate-related information such as education, skills, work experience, projects, certifications, achievements, contact information, career objective/summary, or similar professional information.
- Do NOT assume text is a resume simply because it contains professional or technical words.
- A job description, article, essay, assignment, tutorial, cover letter alone, random text, documentation, or unrelated text is NOT a resume.
- If the text contains insufficient evidence to determine that it is a resume, treat it as NOT a resume.
- Analyze only information explicitly present in the provided text.
- Never invent skills, experience, education, projects, achievements, or qualifications.
- ATS score must be an integer from 0 to 100.
- Identify only skills explicitly mentioned in the resume.
- Identify genuine strengths and weaknesses based only on the provided information.
- Identify skill gaps based on the candidate's stated experience/skills and suitable roles.
- Give practical and specific suggestions for improving the resume.
- Recommend suitable job roles based only on the candidate's actual skills and experience.
- Keep the analysis concise and useful.
- Return ONLY valid JSON.
- Do NOT return markdown, explanations, or ```json.

IF THE TEXT IS NOT A RESUME:
- Set "is_resume" to false.
- Set "ats_score" to 0.
- Set all analysis arrays to empty arrays.
- Give a short reason in "message".
- Do not attempt to analyze the text as a resume.

IF THE TEXT IS A RESUME:
- Set "is_resume" to true.
- Set "message" to a short confirmation such as "Valid resume detected."
- Perform the complete resume analysis.

JSON FORMAT:
{{
    "is_resume": true,
    "message": "",
    "ats_score": 0,
    "skills": [],
    "strengths": [],
    "weaknesses": [],
    "skill_gaps": [],
    "suggestions": [],
    "best_roles": []
}}

RESUME TEXT:
{text}
"""
    response=chat(
         model="qwen3:8b",
            messages=[{
                "role":"user",
                "content":prompt
            }],
            think=False
    )
    result=response["message"]["content"]
    try:
        return json.loads(result)
    except json.JSONDecodeError:
        raise ValueError("Ollama returned invalid JSON")
