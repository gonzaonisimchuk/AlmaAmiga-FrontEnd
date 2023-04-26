import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../screens/Home';
import Login from '../screens/Login';
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
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/friends-list" element={<FriendsList />} />
                <Route path="/friend-search" element={<FriendSearch />} />
                <Route path="/therapeutic-chatbots" element={<TherapeuticChatbots />} />
                <Route path="/mindfulness-exercises" element={<MindfulnessExercises />} />
                <Route path="/emotional-journal" element={<EmotionalJournal />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/progress-tracking" element={<ProgressTracking />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
