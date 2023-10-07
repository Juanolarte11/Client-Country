import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from 'axios';
import styles from './AddActivity.module.css'

const AddActivity = () => {
    const [activities, setActivities] = useState({
        name: '',
        difficulty: 3,
        duration: 0,
        season: 'summer',
        countries: []
    })

    const [countries, setCountries] = useState([]);

    useEffect(async () => {
        let response = await axios('http://localhost:3001/countries')
        setCountries(response.data)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "countries") {
            if (!activities.countries.includes(value)) {
                setActivities({
                    ...activities,
                    countries: activities.countries.concat(value),
                });
            }
        } else {
            setActivities({
                ...activities,
                [name]: value,
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Se creó la actividad.")
        const { data } = await axios.post('http://localhost:3001/activity', {
            name: activities.name,
            difficulty: activities.difficulty,
            duration: activities.duration,
            season: activities.season,
            countries: activities.countries
        })
        setActivities({
            name: '',
            difficulty: 3,
            duration: 0,
            season: 'summer',
            countries: []
        })
    }

    return (
        <div className={styles.addActivityContainer}>
            <Nav />
            <h1>New activity</h1>
            <form onSubmit={handleSubmit} className={styles.activityForm}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={activities.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Difficulty</label>
                    <input
                        type="number"
                        min='1'
                        max='5'
                        name="difficulty"
                        value={activities.difficulty}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Duration:</label>
                    <input
                        type="number"
                        min="0"
                        max="10"
                        name="duration"
                        value={activities.duration}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Season: </label>
                    <select
                        name="season"
                        value={activities.season}
                        onChange={handleChange}
                    >
                        <option value="summer">Summer</option>
                        <option value="spring">Spring</option>
                        <option value="autumn">Autumn</option>
                        <option value="winter">Winter</option>
                    </select>
                </div>

                <div>
                    <label>Countries: </label>
                    <select
                        name="countries"
                        value={activities.countries}
                        onChange={handleChange}
                    >
                        <option>Select country</option>
                        {
                            countries.length > 0 && countries.map(el => {
                                return (
                                    <option value={el.name} key={el.id}>{el.name}</option>
                                )
                            })
                        }
                    </select>
                    <div>
                        <label>Selected Countries:</label>
                        <ul>
                            {activities.countries.map((country, index) => (
                                <li key={index}>{country}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}


export default AddActivity;


