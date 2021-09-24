import React, {useState, useEffect} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './../../axios';
import { postLiked } from '../../api';

export const TinderCards = () => {
    const [people, setPeople] = useState([]);
    const [likeItem, setLikeItem] = useState({});
 
    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards');
            console.log(req.data);
            setPeople(req.data);
        }
        fetchData();
    },[])

const swiped = (direction, nameToDelete, imgUrl) => {
    console.log('removing: ' + nameToDelete);
    console.log(direction);
    if (direction === "right"){
        postLiked({name:nameToDelete, imgUrl:imgUrl})
    }

}
const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
}

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {
                people.map((person) => {
                    return (
                        <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name, person.imgUrl)} onCardLeftScreen={() => outOfFrame(person.name)}>
                            <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    )
                })
            }
            </div>
        </div>
    )
}


