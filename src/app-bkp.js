import React from "react";

const data = [
    {
        // title: 'Hello"',
        imgURL: 'https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d',
        desc: 'ifwnfksnfksnfsenfkfnfnmmfnnfnf,fnf,nff,,mf,mf,mfmf,ffm,fmfm,f',
    },
    {
        title: 'Helldsddds"',
        imgURL: 'https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d',
        desc: 'ifwnfksnfksnfsendsddddddfkfnfnmmfnnfnf,fnf,nff,,mf,mf,mfmf,ffm,fmfm,f',
    }
    
]
// let sodhamobj = {
//     title: 'Hello"',
//     imgURL: 'https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d',
//     desc: 'ifwnfksnfksnfsenfkfnfnmmfnnfnf,fnf,nff,,mf,mf,mfmf,ffm,fmfm,f',
// };

// let smobj = {
//     title: 'Helldsddds"',
//     imgURL: 'https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d',
//     desc: 'ifwnfksnfksnfsendsddddddfkfnfnmmfnnfnf,fnf,nff,,mf,mf,mfmf,ffm,fmfm,f',
// };

// let title = "Hello";
// let imgURL = "https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d";
// let desc = "kllllllllllllllllllllllllllllllllllllllllllllmdmfldsa fnklasfnmdsal,fnkdlsnmf dsa,fnkds,mfa ,sdnf,mfklf";
// function App (){
//     // return <h1>hello React Js App</h1>;
//     return React.createElement("h1", {className: "heading"}, "Hello world");
// }

// function App(){
//     return React.createElement(
//         "div",
//         {className: "container" },
//         React.createElement("h1",{ className: "heading"}, "hello world")
//     );
// }


// const app = () => {
//     // const firstName = "sm";
//     // const lastName = "reddy";

//     const user = {
//         firstName: "sm",
//         lastName: "reddy",
//     };

//     function printName(user) {
//         return `my full name is ${user.firstName} ${user.lastName} `;
//     }

//     return <h1>hello {printName(user)}</h1>;
// };




// function App(){
//     return (<div>  
//         <h1>Hello World</h1>
//         <p>dfdffdfdffddf</p>
//     </div>
//     );
// }


const App = () => {
return (
<section className= "movie-container"> 
<Movie title={data[0].title} imgURL={data[0].imgURL} desc={data[0].desc} />
<Movie title={data[1].title} imgURL={data[1].imgURL} desc={data[1].desc} />

</section>
);

};

const Movie = (props) => {
    return (
        <article className="each-move">
        <img src={props.imgURL} alt="jnff"/>
        <h1>{props.title || "Random Title"}</h1>
        <p>{props.desc}</p>
        </article>
    );
};
// const ImageComponent = () => {
//     return (<img src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt= "text" />
//     );
// };


// const Title = () => {

//     const styles = {
//         heading: {
//             color: "red",
//             fontSize: "30px",
//         },
//         smallheading:{
//             color: "blue",
//             fontSize: "20px",
//         },
//     };
//         // return<h3 style={{color:"red", fontSize: "20px"}}>Crash Landing page {10+30}</h3>;
//     return<h3 style={styles.heading}>Crash Landing page </h3>
// };

// function getData(firstname, lastname ){
//     console.log(firstname)
//     console.log(lastname)
// }
// getData("hldsd","dsdd");


export default App;



