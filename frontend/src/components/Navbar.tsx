import { FileText} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Navbar()
{
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

    </>)
}
export default Navbar;