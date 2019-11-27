import React from 'react';

var myInt = 0;
var myHtml = "";

var testJSON = {
  "id": "0",
  "nameFR": "Wahaha",
  "nameJP": "Wahaha",
  "year": "2019",
  "author": "me",
  "genre": "nonexistant"
}

class MyAwesomeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: []};
  }
  
  // MY FUNCITONS

   getForm () {
    return (
      <div>
        <p><b>Form to read entry</b></p>
        <p>
        <button className="square" value = "0" onClick={() => myInt = 0}></button> 
        <button className="square" value = "1" onClick={() => myInt = 1}></button>
        <button className="square" value = "2" onClick={() => myInt = 2}></button>
        <button className="square" value = "3" onClick={() => myInt = 3}></button>
      </p>
      </div>
    )
  }
   postForm () {
    return (
      <div>
        <p><b>Form to add entry</b></p>
        <p>
        <button className="square" value = "0" onClick={() => myInt = 0}></button> 
        <button className="square" value = "1" onClick={() => myInt = 1}></button>
        <button className="square" value = "2" onClick={() => myInt = 2}></button>
        <button className="square" value = "3" onClick={() => myInt = 3}></button>
      </p>
      </div>
    )
  }
   putForm () {
    return (
      <div>
        <p><b>Form to update entry</b></p>
  
        <p>
        <button className="square" value = "0" onClick={() => myInt = 0}></button> 
        <button className="square" value = "1" onClick={() => myInt = 1}></button>
        <button className="square" value = "2" onClick={() => myInt = 2}></button>
        <button className="square" value = "3" onClick={() => myInt = 3}></button>
      </p>
      </div>
    )
  }
   deleteForm () {
    return (
      <div>
        <p><b>Form to delete entry</b></p>
  
        <p>
        <button className="square" value = "0" onClick={() => myInt = 0}></button> 
        <button className="square" value = "1" onClick={() => myInt = 1}></button>
        <button className="square" value = "2" onClick={() => myInt = 2}></button>
        <button className="square" value = "3" onClick={() => myInt = 3}></button>
      </p>
      </div>
    )
  }
   errorPage () {
    return (
      <div>
        <h1>ERROR</h1>
        <h2>Reloading</h2>
  
        <p>
        <button className="square" value = "0" onClick={() => myInt = 0}></button> 
        <button className="square" value = "1" onClick={() => myInt = 1}></button>
        <button className="square" value = "2" onClick={() => myInt = 2}></button>
        <button className="square" value = "3" onClick={() => myInt = 3}></button>
      </p>
      </div>
    )
  }
  
   endHtml (){
    return(
      <p style="padding-top: 10px;padding-bottom: 10px;padding-left: 10px;padding-right: 10px;">
        <button className="square" value = "0" onClick={() => myInt = 0}></button> 
        <button className="square" value = "1" onClick={() => myInt = 1}></button>
        <button className="square" value = "2" onClick={() => myInt = 2}></button>
        <button className="square" value = "3" onClick={() => myInt = 3}></button>
      </p>
    )
  }

  totalForm (){
    return(
    <div>
      <p>
        <h1>GET</h1>
        <form action = "http://172.30.40.52:4545/mangas/" method = "GET">
            ID: <input type = "text" name = "id"/> <br/>
            <input type = "submit" value = "READ !"/>
        </form> 
      </p>
      <p>
        <h1>POST</h1>
        <form action = "http://172.30.40.52:4545/mangas/" method = "POST">
            Title FR: <input type = "Express forms" name = "NameFR"/> <br/>
            Title JP: <input type = "Express forms" name = "NameJP"/> <br/>
            Author: <input type = "Express forms" name = "Author"/> <br/>
            Year: <input type = "Express forms" name = "Year"/> <br/>
            Genre: <input type = "Express forms" name = "Genres"/><br/>
            <button type = "submit" value = "ADD !"/> 
        </form> 
      </p>
      <p>
        <h1>DELETE</h1>
        <form action = "http://172.30.40.52:4545/mangas/" method = "DELETE">
            ID: <input type = "text" name = "id"/> <br/>
            <input type = "submit" value = "REMOVE !"/> 
        </form> 
      </p>
    </div>
    )
  }
  
  // ====================================
  // THE FETCH
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'MIIINE',
				body: 'New body added. Hello body.',
				userId: 2
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
			});
  }
  

  // THE RENDER
	render() {
    
    // if(myInt === 0) // then READ
    // {
    //   myHtml = this.getForm();
    // }
    // else if (myInt === 1) // then POST
    // {
    //   myHtml = this.postForm();
    // }
    // else if (myInt === 2) // then PUT
    // {
    //   myHtml = this.putForm();
    // }
    // else if (myInt === 3) // then DELETE
    // {
    //   myHtml = this.deleteForm();
    // }
    // else
    // {
    //   myInt = 0;
      // myHtml = this.errorPage();
    // }
    myHtml = this.totalForm();

    return (myHtml)
	}
}

export default MyAwesomeForm;
 

