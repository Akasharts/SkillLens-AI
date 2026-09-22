import { Link } from "react-router-dom";
import '../styles/style.css';
function Analyzer()
{
    return(<>
       <div className="nav">
        <div className="left-section">
            <h1>SkillScope AI </h1>
        </div>
        <div className="right-section">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/analyze'>Analyze Resume</Link></li>
        </ul>
        </div>
    </div>
    </>)
}
export default Analyzer;