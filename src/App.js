import React from 'react';
import './App.css';
import {ProfileCard} from "./components/ProfileCard";
import {ProfileForm} from "./components/ProfileForm";
import axios from "axios";
import {Loader} from "./components/Loader";
import {Center} from "./components/Center";
import {Hero} from "./components/Hero";

function App() {
    const [profile, setProfile] = React.useState(undefined);
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('Please type a valid Twitter handle');

    const submitSearch = async (search) => {
        setLoading(true);
        try {
            const result = await axios.post(`http://localhost:3500/handles/${search}`);
            setProfile(result.data);
        } catch (e) {
            setMessage(e);
        } finally {
            setLoading(false);
        }
    }

    const renderProfile = () => {
        if (loading) {
            return <Center><Loader/></Center>
        }

        if (profile) {
            return <Center>
                <ProfileCard profile={profile}/>
            </Center>;
        }

        return <Center>
            <span style={{fontStyle: 'italic'}}>{message}</span>
        </Center>;
    }

    return (
        <div className="container" style={{backgroundColor: 'var(--main-bg-color)'}}>
            <Hero/>
            <div className="mb-5"/>
            <ProfileForm submitSearch={submitSearch}/>
            <div className="mb-5"/>
            {renderProfile()}
        </div>
    );
}

export default App;
