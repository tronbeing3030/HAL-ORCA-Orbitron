import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Formic } from './components/Formic';
import { Office } from './components/Office';
import { OfficeDetails } from './components/OfficeDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/form" element={<Formic />} />
                <Route path="/office" element={<Office />} />
                <Route path="/office/:id" element={<OfficeDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
