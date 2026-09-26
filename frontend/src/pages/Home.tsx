import '../styles/style.css'
import { Link } from 'react-router-dom';
import { CheckCircle,ArrowRight,Sparkles,FileText} from 'lucide-react';
import { motion } from 'motion/react';
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
    <motion.div className="hero-section">
        <p className='hero-title'><Sparkles className='sparkles'/>AI-Powered Resume Analysis</p>
        <motion.h1 
        initial={{opacity:0,y:5}}
        animate={{opacity:1,y:0}}
        transition={{duration:1,delay:0.3}}
        >Turn your resume into <br/>your
          <span className='hero-span'> next opportunity.</span>
        </motion.h1>
        <motion.p className='hero-desc'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1,delay:1}}
        >
          Upload your resume and get an AI-powered analysis of <br/>your
          skills, ATS score, weaknesses, and the roles you're best 
          suited for.
        </motion.p>
    </motion.div>
    <div className="analyze">
        <motion.button className='analyze_btn'
        initial={{opacity:0,x:-15}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.5,delay:0.5}}
        >Analyze Your Resume <ArrowRight className='arrow'/></motion.button>
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