import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';

const Home = () => {
    return (
        <div>
            This is Home Pages
            <p>Here is <Link to="/signup">login option</Link></p>
            <Spinner/>
        </div>
    );
};

export default Home;