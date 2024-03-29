import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Places you should visit this summer</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Bali in a private cruise"
                            label="Adventure"
                            path="/services"
                        />

                        <CardItem 
                            src="images/img-3.jpg"
                            text="Travel through in a Cruise for 15 days"
                            label="Sea Life"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Bali in a private cruise"
                            label="Adventure"
                            path="/services"
                        />

                        <CardItem 
                            src="images/img-3.jpg"
                            text="Travel through in a Cruise for 15 days"
                            label="Sea Life"
                            path="/services"
                        />
                        <CardItem 
                            src="images/img-4.jpg"
                            text="Football spot in island"
                            label="Sport"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
