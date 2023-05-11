import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Navbar from '../components/Navbar';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Logout from '../screens/Logout';
import Register from '../screens/Register';
import UserProfile from '../screens/UserProfile';
import FriendsList from '../screens/FriendsList';
import FriendSearch from '../screens/FriendSearch';
import TherapeuticChatbots from '../screens/TherapeuticChatbots';
import MindfulnessExercises from '../screens/MindfulnessExercises';
import EmotionalJournal from '../screens/EmotionalJournal';
import Recommendations from '../screens/Recommendations';
import ProgressTracking from '../screens/ProgressTracking';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />

                <Route path="/user-profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                <Route path="/friends-list" element={<PrivateRoute><FriendsList /></PrivateRoute>} />
                <Route path="/friend-search" element={<PrivateRoute><FriendSearch /></PrivateRoute>} />
                <Route path="/chatbot" element={<PrivateRoute><TherapeuticChatbots /></PrivateRoute>} />
                <Route path="/mindfulness-exercises" element={<PrivateRoute><MindfulnessExercises /></PrivateRoute>} />
                <Route path="/journal" element={<PrivateRoute><EmotionalJournal /></PrivateRoute>} />
                <Route path="/recommendations" element={<PrivateRoute><Recommendations /></PrivateRoute>} />
                <Route path="/progress-tracking" element={<PrivateRoute><ProgressTracking /></PrivateRoute>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
