import '../styles/style.css'
import { CheckCircle,ArrowRight,Sparkles} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
function Home()
{
    const navigate=useNavigate();
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
    <Navbar/>
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
        onClick={()=>navigate("/analyzer")}
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