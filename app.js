
class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
        )
    }
}


class Stats extends React.Component {
    render() {
        return (
            <div className="stats">
                <p>{this.props.reviews.name}</p>
                <div className="statbox">{this.props.reviews.count.map(number => <p>{number}</p>)}</div>
                {/* <p>Name</p>
                <p>Values</p> */}
            </div>
        )
    }
}

class Visitors extends React.Component {
    render() {
        return (
            <div className="visitors">
                <p>Website Visitors</p>
                <p>821</p>
                <div className="innerBox"></div>
            </div>
        )
    }
}

/* class VisitorsInside extends React.Component {
    render() {
        return (
            <div>

            </div>
        )
    }
} */
// console.log(reviews)
class App extends React.Component {
    state = {
        data: reviews
    }

    render() {
        return (
            <div className="container">
                <SideBar />
                {reviews.map(object => <Stats reviews={object}/>)}
                {/* <Stats reviews={reviews[0]}/>
                <Stats reviews={reviews[1]}/>
                <Stats reviews={reviews[2]}/> */}
                <Visitors />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.main')
);

// class SideBar extends React.Component{
//     render(){
//         return(
//             <div class='dashboard'>
//                 <h3>{this.props.name}</h3>

//             </div>
//         )
//     }
// }


// class Parts extends React.Component{
//     render(){
//         return(
//             <div class = 'parts'>
//                 {this.props.name}
//             </div>
//         )
//     }
// }
// class AnotherOne extends React.Component{
//     render(){
//         return(
//             <div class= 'anotherOne'></div>
//         )
//     }
// }

// class MainParts extends React.Component{
//     render(){
//         return(
//             <div class='main'>
//                 <h3>{this.props.name}</h3>
//                 div
//                 <AnotherOne/>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <SideBar name='Dasboard' data= 'Widget'/>
//                 <Parts name= 'Reviews' data= '1281' />
//                 <Parts name = 'Average Rating' data= '4.6'/>
//                 <Parts name= 'Sentiment Analysis' data= '960'/>
//                 <MainParts name= 'Website Visitors' data= '821'/>

//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     // <h1>{message}</h1>,
//     <App />,
//     document.querySelector('.container')
// )
