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

    // dynamic click select inputs
    const [selectedWork, setSelectedWork] = useState("")
    const [selectedUser, setSelectedUser] = useState("")


    

    // handle inputs
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleSelectWork = (id) => {
        setSelectedWork(id)
    }

    const handleSelectUser = (id) => {
        setSelectedUser(id)
    }

    // time conversion
    const timeConversion = (minutes) => {
    
        var hours = Math.floor(minutes / 60)
    
        var restMinutes = (minutes % 60)
    
        /* pad.Start(maxLenght, StringToAdd) to make correct format */
        return {
            'hours': hours,
            'minutes': restMinutes
          }
    }

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

    // outgoing fetch to create new Entry
    const handleNewEntry = (e) => {
        e.preventDefault();

        const url = "http://localhost:8000/entry/"

        const body = {
            comment: comment,
            time: time,
            worker: selectedUser,
            work_project: selectedWork
          };

          const config = {
            method: "Post",
            headers: new Headers({
                "Content-Type": "application/json",
              }),
            body: JSON.stringify(body)
          };
    
          fetch(url, config)
    }

  return (<div className="all">
    <div className="title">
    <img src="/smartLogo.png"></img>
    <h1>Smartfactory Time-Tracker</h1>
</div>
    <div className="App">
        <form className='inputs' onSubmit={(e) => handleNewEntry(e)}>
        <h3>New Entry</h3>
            <div className='users'>
            <div className='workList'>
            <h4>Employee</h4>
                    {userData.map(d => (
                        <div className="workElement" key={d.id} onClick={() => handleSelectUser(d.id)}>
                            {selectedUser === d.id ?
                                <p style={{background: 'lightblue'}}>{d.username} {d.first_name} {d.last_name}</p> : 
                                <p>{d.username} {d.first_name} {d.last_name}</p>
                            }
                        </div> 
                    ))}
                </div>
            </div>
            <h4>Project</h4>
            <div className='work'>
                <div className='workList'>
                    {work.map(project => (
                        <div className="workElement" key={project.id} onClick={() => handleSelectWork(project.id)}>
                            {selectedWork === project.id ?
                                <p style={{background: 'lightblue'}}>{project.project_name} {project.customer}</p> :
                                <p>{project.project_name} {project.customer}</p>
                            }
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
            <button type="submin" className="submitButton">Create Entry</button>
        </form>

        <div className="entries">
            <h3>Entries</h3>
            <div className='workList'>
                    {entries.map(e => (
                        <div className="entryElement" key={e.id}>
                            {selectedUser === e.worker ? 
                                <div>
                                    <p style={{color: 'red'}}>{e.work_project.project_name}</p>
                                    <p>{timeConversion(e.time).hours} h {timeConversion(e.time).minutes} min</p>
                                    <p>{e.comment}</p>
                                    ------------------------------------
                                </div> : ""
                            }
                        </div> 
                    ))}
                </div>

        </div>

    </div>
    </div>
  );
}

export default App;
