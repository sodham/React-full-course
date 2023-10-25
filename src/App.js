import React from 'react';

// import Profile from './Profile';

// import data from './data';

import datanew from './data-new';

import ListItem from './ListItem';


// const App = () => {
//         return (
//         //     <section className="post-container">
//         //   {
//         //     data.map((eachObj) => {

//         //         const {id, thumbnailUrl, title, url } = eachObj;
//         //         return<Profile key={id} id={id} thumbnailUrl={thumbnailUrl} title={title} url={url} />
//         //     })
//         //   }
//         //     </section>
//         <main className="container">
//             <ul className="Comment-container">
//                 {datanew.map((eachComment) => {
//                     const {id, email, name, body } = eachComment;
//                     return (
//                        <ListItem  key={id} id={id} email={email} name= {name} body= {body}/>
//                     );
//                 })}
//                 {/* <li className="comment">
//                 <div className="comments-header">
//                     <h3 className='email'>ypur@gmail.com</h3>
//                     <h3>some name random name</h3>
//                 </div>
//             <p className='message'>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatem, 
//                 nemo enim dolor atque voluptates est molestiae beatae nam quas.
//             </p>

//                 </li> */}
                
//             </ul>
//         </main>
//         );
// };



const App = () => {
    const clickHandle = () => {
        console.log("Hello I clicked");
    };

    return (
        <main className="container">
<button className="button" onClick={clickHandle}>
    Click Me 
</button>

        </main>
    )
}

export default App;