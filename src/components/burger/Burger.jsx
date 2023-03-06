import './Burger.css'

export default function Burger({showAside}) {
    
    return (
        <div onClick={() => showAside()} id="nav-icon1">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

