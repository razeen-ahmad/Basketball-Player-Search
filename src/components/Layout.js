import NavBar from './Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    );
}

export default Layout;