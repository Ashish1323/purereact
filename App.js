const Pet = (props) => {
    return React.createElement("div",{}, 
    [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.sex)
    ]
    )
}

const App = () => {
    return React.createElement("div",{}, 
    [React.createElement(
        "h1",{}, "Hey Ther!"
    ),
    React.createElement(Pet,{name:"jakki", animal:"dog", sex:"female"}),    
    React.createElement(Pet,{name:"fahyan", animal:"dog", sex:"male"}),    
    React.createElement(Pet,{name:"laly", animal:"dog", sex:"female"})    
]
 ) 
}

 ReactDOM.render(React.createElement(App),document.getElementById("root"))