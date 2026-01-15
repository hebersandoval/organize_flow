import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

// Local imports
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider, useUser } from './context/UserContext';

function App() {
    return (
        <UserProvider>
            <ChakraProvider>
                <BrowserRouter>
                    <Toaster position="bottom-right" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />

                        <Route element={<PrivateRoute />}>
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </UserProvider>
    );
}

export default App;
