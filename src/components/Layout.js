import NavBar from './Navbar/Navbar';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

//overarching component that wraps all page contents. This is used in _app.js
const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <Box minHeight="77.5vh">{children}</Box>
            <Footer />
        </>
    );
}

export default Layout;