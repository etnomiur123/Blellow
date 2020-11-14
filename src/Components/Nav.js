import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Nav = () => {

    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState(null)
    const history = useHistory()
    
    useEffect(() => {
        return history.listen((el) => { 
           if (url !== el.pathname) {
                toggle();
                setUrl(el.pathname)
            }
         }) 
    }, [history])
    

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <nav className="nav">
            <div className="navigationDiv">
                <div className="logo">
                    <Link to="/">Blellow</Link>
                </div>
                <div>
                    <div className="hamburger" onClick={toggle}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className={`list ${open ? "open" : ""}`}>
                        <Link to="/" onClick={toggle}><li>Home</li></Link>
                        <Link to="/repository" onClick={toggle}><li>Repository</li></Link>
                        <Link to="/about" onClick={toggle}><li>About</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav