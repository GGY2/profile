import React from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import ProfilePhoto from './ProfilePhoto';
import FullName from './FullName';
import Address from './Address';

function App() {
  return (
    <div className="App">
      <Card className="card">
        <Card.Body>
          <ProfilePhoto />
          <FullName />
          <Address />
          <Button variant="primary" style={{width:'100%'}}>View profile</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
