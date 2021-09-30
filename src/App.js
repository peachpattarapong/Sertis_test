
import Axios from "axios"


import { useState } from 'react'
function App() {

  const [name, setName] = useState("")
  const [status, setstatus] = useState("")
  const [content, setcontent] = useState("")
  const [category, setcategory] = useState("")
  const [newcategory, setnewcategory] = useState("")
  const [newname, setnewname] = useState("")
  const [newstatus, setnewstatus] = useState("")
  const [newcontent, setnewcontent] = useState("")
  const [author, setauthor] = useState("")


  const [nameList, setNameList] = useState([]);
  const getName = () => {
    Axios.get('http://localhost:3001/cards').then((response) => {
      setNameList(response.data);
    });
  }




  const addCard = () => {

    Axios.post('http://localhost:3001/create', {
      name: name,
      status: status,
      content: content,
      category: category,
      author: author
    }).then(() => {
      setNameList([
        ...nameList,
        {
          name: name,
          status: status,
          content: content,
          category: category,
          author: author
        }])
    })
  }
  const updatecard3 = (id) => {
    Axios.put("http://localhost:3001/update/3", { content: newcontent, id: id }).then(
      (response) => {
        setNameList(
          nameList.map((val) => {
            return val.id == id
              ? {
                id: val.id,
                name: val.name,
                status: val.status,
                content: newcontent,
                category: val.category,
                author: val.author
              }
              : val;
          })
        );
      }
    );
  };

  const updatecard4 = (id) => {
    Axios.put("http://localhost:3001/update/4", { category: newcategory,   id: id }).then(
      (response) => {
        setNameList(
          nameList.map((val) => {
            return val.id == id
              ? {
                id: val.id,
                name: val.name,
                status: val.status,
                content: val.content,
                category: newcategory,
                author: val.author
              
              }
              : val;
          })
        );
      }
    );
  };

  const updatecard2 = (id) => {
    Axios.put("http://localhost:3001/update/2", { status: newstatus,   id: id }).then(
      (response) => {
        setNameList(
          nameList.map((val) => {
            return val.id == id
              ? {
                id: val.id,
                name: val.name,
                status: newstatus,
                content: val.content,
                category: val.category,
                author: val.author
              }
              : val;
          })
        );
      }
    );
  };

  const updatecard1 = (id) => {
    Axios.put("http://localhost:3001/update/1", { name: newname,   id: id }).then(
      (response) => {
        setNameList(
          nameList.map((val) => {
            return val.id == id
              ? {
                id: val.id,
                name: newname,
                status: val.status,
                content: val.content,
                category: val.category,
                author: val.author
              }
              : val;
          })
        );
      }
    );
  };


  const deletecard = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setNameList(
        nameList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };



  return (
    <div className="App container">
      <h1>Simple CRUD Test</h1> 
      <div className="Card">
        <from action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text"
              className="form-control"
              placeholder="Enter your name"
              onChange={(event) => {
                setName(event.target.value)
              }}

            />
            <label htmlFor="status" className="form-label">
              Status:
            </label>
            <input type="text"
              className="form-control"
              placeholder="Enter your status"
              onChange={(event) => {
                setstatus(event.target.value)
              }}

            />
            <label htmlFor="btn btn-content" className="form-label">
              Content:
            </label>
            <input type="text"
              className="form-control"
              placeholder="Enter your content"
              onChange={(event) => {
                setcontent(event.target.value)
              }}

            />
            <label htmlFor="category" className="form-label">
              Category:
            </label>
            <select id="category" onChange={(event) => {
              setcategory(event.target.value)
            }}>
              <option value="biology">Biology </option>
              <option value="finance">Finance</option>
              <option value="chemisty">Chemisty</option>
              <option value="engineering" >Engineering</option>
              <option value="" selected></option>


            </select>
            <br /><br />
            <label htmlFor="btn btn-content" className="form-label">
              Author:
            </label>
            <input type="text"
              className="form-control"
              onChange={(event) => {
                setauthor(event.target.value)
              }}

            />


          </div>
          <button className="btn btn-success" onClick={addCard}>Add Card</button>
        </from>
      </div>
      <hr />
      <div className="list">
        <button className="btn btn-lg btn-primary" onClick={getName}>Show list</button>
        <br /><br />
        {nameList.map((val, key) => {
          return (
            <div className="Name Card">
              <div className="card-body text-left">
                <p className="card-text">Author:{val.author}</p>
                <p className="card-text">Name:{val.name}
                  <input
                    className="form-control"
                    style={{ width: "100px" }}
                    type="text"
                    onChange={(event) => {
                      setnewname(event.target.value)
                    }}
                  /><button className="btn btn-secondary" onClick={() => { updatecard1(val.id) }}>EDIT</button></p>

                <p className="card-text">Status:{val.status}<input
                  className="form-control"
                  style={{ width: "100px" }}
                  type="text"
                  onChange={(event) => {
                    setnewstatus(event.target.value)
                  }}
                /><button className="btn btn-secondary" onClick={() => { updatecard2(val.id) }}>EDIT</button></p>

                <p className="card-text">Content:{val.content}<input
                  className="form-control"
                  style={{ width: "100px" }}
                  type="text"
                  onChange={(event) => {
                    setnewcontent(event.target.value)
                  }}
                /><button className="btn btn-secondary" onClick={() => { updatecard3(val.id) }}>EDIT</button></p>


                <p className="card-text">Category:{val.category}<input
                  className="form-control"
                  style={{ width: "100px" }}
                  type="text"
                  onChange={(event) => {
                    setnewcategory(event.target.value)}}

                    /><button className="btn btn-secondary" onClick={() => { updatecard4(val.id) }}>EDIT</button></p>

                <button className="btn btn-danger" onClick={() => { deletecard(val.id) }} > DELETE </button>


                <hr />
              </div>



            </div>

          )
        })}


      </div>
    </div>
  );
}

export default App;
