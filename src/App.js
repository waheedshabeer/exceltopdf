import React from 'react'
import './App.css'
import {CardOnline} from './components/cardOnline'
import {Card} from './components/cards/card'
import {CardTwo} from './components/cardsTwo/card'
import {Upload} from './components/cardUpload'
import {Footer} from './components/Footer'
// import {NavBar} from './components/NavBar'

function App() {
    return (
        <React.Fragment>
            {/* <NavBar /> */}
            <Upload />
            <Card />
            <CardOnline />
            <CardTwo />
            <Footer />
        </React.Fragment>
    )
}

export default App
