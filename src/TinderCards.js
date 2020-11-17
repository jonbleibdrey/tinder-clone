import React from 'react'
import TinderCard from 'react-tinder-card'




function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: 'sonny',
        url:''
        },
        {
        name: 'bunny',
        url:''
        },
    ]);


    return (
        <div>
            <h1>Tinder card!</h1>
            {people.map(person => (
                <TinderCard/>
            ))}
        </div>
    )
}

export default TinderCards
