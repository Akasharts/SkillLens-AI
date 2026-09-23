import '../styles/style.css'
import { Link } from 'react-router-dom';
import { CheckCircle,ArrowRight,Sparkles,FileText} from 'lucide-react';
function Home()
{
    type feature={
        title:string,
        desc:string
    };
    const features:feature[]=[
        {
            title:"ATS Analysis",
            desc:"Know where you stand"
        },
        {
            title:"Skill Gap Detection",
            desc:"Find areas to improve"
        },
        {
            title:"Role Recommendations",
            desc:"Get personalized suggestions"
        }
    ];
    return (<>
    <div className="nav">
        <div className="left-section">
            <h1><FileText className='file-text'/>Skill<span className='Lens_text'>Lens</span>&nbsp; AI </h1>
        </div>
        <div className="right-section">
        <ul>
            <li><Link to='/' className='links'>Home</Link></li>
            <li><Link to='/analyze' className='links'>Analyze Resume</Link></li>
        </ul>
        </div>
    </div>
    <div className="hero-section">
        <p className='hero-title'><Sparkles className='sparkles'/>AI-Powered Resume Analysis</p>
        <h1 >Turn your resume into <br/>your
          <span className='hero-span'> next opportunity.</span>
        </h1>
        <p>
          Upload your resume and get an AI-powered analysis of <br/>your
          skills, ATS score, weaknesses, and the roles you're best 
          suited for.
        </p>
    </div>
    <div className="analyze">
        <button className='analyze_btn'>Analyze Your Resume <ArrowRight className='arrow'/></button>
    </div>
    <div className="features">
        {
            features.map((f)=>(
                <div className="feature">
                    <CheckCircle className='CheckCircle'/>
                    <div className="feature-desc">
                        <span className='title'>{f.title}</span>
                        <p className='desc'>{f.desc}</p>
                    </div>
                </div>
            ))
        }
    </div>
    </>)
}
export default  Home;