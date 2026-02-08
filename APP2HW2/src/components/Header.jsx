import './Header.css';  // Add this line at the top
// Via: https://app.rize.education/courses/8156/resource/95fdbcdd-c9fd-47a6-840f-61cea1053c19?weekId=10972
// Header.jsx
function Header() {
    return (
        <header className="app-header">
            <h1 className="logo">ComponentCorner</h1>
            <nav className="nav-menu">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Explore</a>
                <a href="#" className="nav-link">Messages</a>
                <a href="#" className="nav-link">Profile</a>
            </nav>
            <button className="post-btn">New Post</button>
        </header>
    );
}

export default Header;

export { Header };