import { useEffect, useState } from "react";
import './App.css';

// Redux, Redux Toolkit installed. Blank store and slice files ready.
// Router installed. Routes set up in main index.js

function App() {

    // Input States
    const [comment, setComment] = useState("")
    const [time, setTime] = useState(0)

    // Backend States
    const [work, setWork] = useState([])
    const [entries, setEntries] = useState([])
    const [userData, setUserData] = useState([])
    

    // handle inputs
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleTimeChange = (e) => {
        setComment(e.target.value);
    };

    useEffect(() => {

        const url1 = "http://localhost:8000/work/"
        const url2 = "http://127.0.0.1:8000/entry/"
        const url3 = "http://127.0.0.1:8000/user/"

          const config = {
            method: "GET",
          };
    
          fetch(url1, config)
            .then((response) => response.json())
            .then((data) => setWork(data));

            fetch(url2, config)
            .then((response) => response.json())
            .then((data) => setEntries(data));

            fetch(url3, config)
            .then((response) => response.json())
            .then((data) => setUserData(data));

        
      }, [])

    
  return (<>
    <div className="title">
    <img src="/smartLogo.png"></img>
    <h1>Smartfactory Time-Tracker</h1>
</div>
    <div className="App">

        <form className='inputs'>
        <h3>New Entry</h3>
            <div className='users'>
            <div className='workList'>
            <h4>Employee</h4>
                    {userData.map(d => (
                        <div className="workElement" key={d.id}>
                            <p>{d.username} {d.first_name} {d.last_name}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <h4>Project</h4>
            <div className='work'>
                <div className='workList'>
                    {work.map(project => (
                        <div className="workElement" key={project.id}>
                            <p>{project.project_name} {project.customer}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div className="time">
            <h4>Time</h4>
            <input
                    type="number"
                    name="time"
                    value={time}
                    placeholder="time"
                    onChange={handleTimeChange}
                  ></input>
            </div>
            <div className="comment">
            <h4>Comment</h4>
            <input
                    type="text"
                    name="street"
                    value={comment}
                    placeholder="comment"
                    onChange={handleCommentChange}
                  ></input>
            </div>
        </form>

        <div className="entries">
            <h3>Entries</h3>
            <div className='workList'>
                    {entries.map(e => (
                        <div className="workElement" key={e.id}>
                            <p>{e.comment}</p>
                            <p>{e.time}</p>
                            <p>{e.work_project.project_name}</p>
                        </div> 
                    ))}
                </div>

        </div>

    </div>
    </>
  );
}

export default App;
