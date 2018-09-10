import React, { Component } from 'react';
import axios from 'axios';
import './css/Dogs.css';
import isMovie from './mediaSorter';

class Jokes extends Component {
    constructor() {
        super()
        this.state = {
            dogs: [],
            show: "show",
            hidden: "hidden",
            media: ''
        };
        this.gimmehDoggies = this.gimmehDoggies.bind(this)
    }
    gimmehDoggies() {
        axios.get('https://random.dog/woof.json'
        )
            .then(({ data }) => {
                return data.url;

            })
            .then((url) => {
                console.log(url);
                this.setState({ media: isMovie(url) ? <video controls src={url} autoPlay={0}></video> : <img height="auto" width="300px" src={url} ></img > })
            })

    }

    toggleJoke() {
        this.setState({ show: "hidden", hidden: "show" })
    }
    render() {


        return (
            <div className="textStuff">
                <button className="dogbutton" onClick={this.gimmehDoggies}>
                    Gimmeh Doggies
                </button>
                <div className="doggo">{this.state.media}
                </div>
            </div>
        )
    }
}




// { if (this.state.dogs === 'jpg' || this.state.dogs === 'gif') {
//     return (
//       <div>
//         <img src={this.state.dogs} />
//       </div>
//     )
//     }
//     else if (this.state.dogs === 'mp4') {
//       return (
//         <div>
//           <video>
//             <source src={this.state.dogs}></source>
//           </video>
//         </div>
//       )
//     }
//     else {
//       null
//     }
//   }

export default Jokes;