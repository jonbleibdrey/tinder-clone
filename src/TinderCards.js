import React from 'react'
import TinderCard from 'react-tinder-card'




function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: 'obama',
        url:'https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg'
        },
        {
        name: 'trump',
        url:'https://c.files.bbci.co.uk/3137/production/_115099521_hi061644034.jpg'
        },
    ]);


    return (
        <div>
            <h1>Tinder card!</h1>
            {people.map(person => (
                <TinderCard className="swipe" key={person.name}>
                    <div style={{backgroundImage: `url(${person.url})`}} class="card">
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard> 
            ))}
        </div>
    )
}

export default TinderCards
