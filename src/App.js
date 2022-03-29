import './App.css'
import {CardOnline} from './components/cardOnline'
import {Card} from './components/cards/card'
import {CardTwo} from './components/cardsTwo/card'
import {Upload} from './components/cardUpload'
import { Footer } from './components/Footer'

function App() {
    return (
        <div className="">
            <Upload />
            <Card />
            <CardOnline />
            <CardTwo />
            <Footer/>
        </div>
    )
}

export default App
