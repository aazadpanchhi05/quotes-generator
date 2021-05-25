import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import quotes from '../QuoteDB';
import bg from '../bg.gif'

const HomeScreen = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [first, setFirst] = useState(true);

    if (first === true) {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomNumber].quote);
        setAuthor(quotes[randomNumber].author);
        setFirst(false);
    }

    const customQuoteHandler = () => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomNumber].quote);
        setAuthor(quotes[randomNumber].author);
    }

    return (
        <div 
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                height: "100vh",

            }}>
            <div style={{ paddingTop:"80px"}}>
                <Card className='text-white bg-primary text-center m-auto' style={{ width:"80%"}} >
                    <Card.Header>Quote</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* <p>{quotes[randomNumber].quote}</p> */}
                            <p>{quote}</p>
                            <footer className="blockquote-footer">
                                {author}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button className='btn btn-success' onClick={customQuoteHandler}>Change Quote</Button>
                </Card>

                <h5 className="text-white text-center" style={{ paddingTop:"25rem" }}>© Darshil Jadav</h5>
            </div>
        </div>
    )
}

export default HomeScreen
