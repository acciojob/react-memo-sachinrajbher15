import React, { useState } from 'react'

function ReactMemo() {
    const [skill, setSkill] = useState("");
    const [memoData, setMemoData] = useState([]);

    const handleSkillInputChange = (e) => {
        setSkill(e.target.value);
    };
    const handleMemoClick = () => {
        if (skill.trim() !== "") {
            setMemoData((prevData) => [...prevData, skill]);
            setSkill("");
        }
    };
    return (
        <div>
            <input type='text' onChange={handleSkillInputChange} value={skill}></input>
            <button onClick={handleMemoClick}>Add Skill</button>
            <ul>
                {memoData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ReactMemo
