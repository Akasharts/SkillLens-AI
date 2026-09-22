import '../styles/style.css'
import { Link } from 'react-router-dom';
function Home()
{
    return (<>
    <div className="nav">
        <div className="left-section">
            <h1>SkillScope AI </h1>
        </div>
        <div className="right-section">
        <ul>
            <li><Link to='/' className='links'>Home</Link></li>
            <li><Link to='/analyze' className='links'>Analyze Resume</Link></li>
        </ul>
        </div>
    </div>
    </>)
}
export default  Home;