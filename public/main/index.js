import React from 'react';
import Dom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import styles from '~/assets/styles/main.css';
import Header from '~/components/Header'; 
import NavBar from '~/components/NavBar';
import Section from '~/components/Section';
import Form from '~/components/Form';  
//identify layout blocks i.e. header, footer, navigation bar, maybe infomodals for about and contact rather than discrete pages
//do the stuff I know I can do without Thinkful resources, don't spike my own wheel

//path--> 
// 1a. context product page
// 1b. tessellated product page
// 2. user creating an account, look over auth0 maybe, will maybe solve some problems and look better to the end user 
//      but not at the cost of time or complexity
// 3. log in and log out
// 4. back end up and running
// 5. unit tests for server, e2e tests for client (probably don't need unit tests for client, e2e is more comprehensive)
// 6. then saving saving content
// 7. content annotation stuff
//      a. need to work with iframes in a special way, it's like a mini web browser, check MDN tutorials/stackoverflow
//      b. check out NPM for any potential tools or component wrappers
//      c. how did Evernote crawl pages? Most sibling nodes as the proper level in the tree
//      d. text content property on vanilla DOM
//      e. jQuery has .contents() to return all of the text content of a particular node
//      f. implement a UI selection experience similar to Evernote, that seemed to work really well
//      g. remember to keeping consulting my user stories, wireframes, they still pretty much work for this
//      h. look at domlight or something similar on NPM for convenience of highlighting things to just sidestep the CSS
//

class Main extends React.Component {
    constructor(){
        super()
    
    }


    render() {
        
        const styles = {
            paddingRight: "0",
            paddingLeft: "0"
        }

        const sectionOptions0 = {
            position:"center",
            image: null,
            copy: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            title: "Explanation",
            name: "about",
            key:0 
        }
        const sectionOptions1 = {
            position:"left",
            image: "assets/images/wikipedia_icon.svg",
            copy: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            title: "Feature 1",
            name: "feature1",
            key:1  
        }
        const sectionOptions2 = {
            position:"right",
            image: "",
            copy: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            title: "Feature 2",
            name: "feature2",
            key:2 
        }
        const sectionOptions3 = {
            position:"left",
            image: "",
            copy: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            title: "Feature 3",
            name: "feature3",
            key:3 
        }
    
        return (
                
                    <div className="container-fluid" style={styles}>
                        <NavBar name0={sectionOptions0.name} name1={sectionOptions1.name} name2={sectionOptions2.name} name3={sectionOptions3.name} />
                        <Header />
                        <Section key={sectionOptions0.key} title={sectionOptions0.title} position={sectionOptions0.position} image={sectionOptions0.image} copy={sectionOptions0.copy} name={sectionOptions0.name} />
                        <Section key={sectionOptions1.key} title={sectionOptions1.title} position={sectionOptions1.position} image={sectionOptions1.image} copy={sectionOptions1.copy} name={sectionOptions1.name} />
                        <Section key={sectionOptions2.key} title={sectionOptions2.title} position={sectionOptions2.position} image={sectionOptions2.image} copy={sectionOptions2.copy} name={sectionOptions2.name} />
                        <Section key={sectionOptions3.key} title={sectionOptions3.title} position={sectionOptions3.position} image={sectionOptions3.image} copy={sectionOptions3.copy} name={sectionOptions3.name} />
                        <Form />
                    </div>
                
            )
    } 
}

export default function (next) {
    Dom.render(
        <Provider store={store}>
            <Main />
        </Provider>    
        , document.getElementById('root'));
} 

