import NavBar from './Navbar/Navbar';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

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