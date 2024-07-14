import './Layout.css'

export default function Layout({children}) {
    return (
        <>
            <div className="header">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
            <div className="main">
                {children}
            </div>
        </>
    );
}
