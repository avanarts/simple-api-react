import { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../config";

export default function Picture({dateValue}) {
    const URL = `https://api.nasa.gov/planetary/apod?`
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState(null)
 

    const params = new URLSearchParams({
        api_key: API_KEY,
        date: dateValue
    }).toString();

    useEffect(() => {
        fetch(`${URL}${params}`)
        .then(response => response.json())
        .then(data => {
            setImage(data.hdurl);
            setDescription(data.explanation)})
    })

    //practice using Promise.all
    useEffect(() => {
        Promise.all([fetch('https://quoteslate.vercel.app/api/quotes/random'), fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')])
        .then(([res1, res2]) => {
            return Promise.all([res1.json(), res2.json()])
        })
        .then(([data1, data2]) => {
            console.log(`Congratulations, you found the random message! Enjoy a quote and a useless fact. Random Quote: ${data1.quote}; Useless Fact: ${data2.text}`)
        })
    }, [])

    //practice using Promise.any
    useEffect(() => {
        Promise.any([fetch('https://api.chucknorris.io/jokes/random'), fetch('https://official-joke-api.appspot.com/random_joke')])
        .then(res => console.log(`Promise.any Response: ${res.status}`))
    }, [])

    return (
        <>
        <img 
        src={image}
        className="image"></img>
        <p>{description}</p>
        </>
    )
}