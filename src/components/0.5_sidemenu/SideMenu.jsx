import './sidemenu.scss'

export default function SideMenu({menuOpen, setMenuOpen}) {
    return (
        <div className={"sideMenu " + (menuOpen && "active")}>
            <ul>
                {/* 'onClick={()=>setMenuOpen(false)}'
                    will close the side menu when that section
                    is clicked */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#materials">Materials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
