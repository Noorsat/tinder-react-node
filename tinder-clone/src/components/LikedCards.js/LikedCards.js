import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import { deleteLiked, getLiked } from '../../api';
import './LikedCards.css';
import DeleteIcon from '@material-ui/icons/Delete'

export const LikedCards = () => {
    const [liked, setLiked] = useState([]);
    useEffect(async () => {
        let req = await getLiked();
        console.log(req.data);
        setLiked(req.data);
    }, [])
    
    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        console.log(direction)
    }
    
    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    }

    const deleteHandler = (name) => {
        deleteLiked(name);
    }
    
    return (
        <div>
            <div className="liked__title">
                People you liked
            </div>
            <div className="liked__items">
            {
                liked.map(person => {
                    return (
                        <div className="liked__item">
                            <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                                <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                                    <h3>{person.name}</h3>
                                </div>
                            </TinderCard>
                            <div className="liked__delete" onClick={() => deleteHandler(person.name)}>
                                <DeleteIcon style={{ fontSize: 50 }}/>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
