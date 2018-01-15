import React from 'react';
import Dom from 'react-dom';
import {Provider} from 'react-redux';
import store from '~/public/store.js';
import viewStyles from '~/assets/styles/main.css';
import globalStyles from '~/assets/styles/globals.css';
import Header from '~/components/Header'; 
import NavBar from '~/components/NavBar';
import Content from '~/components/Content';
import Feature from '~/components/Feature';
import Form from '~/components/Form';
import Footer from '~/components/Footer';
import LoadingScreen from '~/components/LoadingScreen';   
//identify layout blocks i.e. header, footer, navigation bar, maybe infomodals for about and contact rather than discrete pages
//do the stuff I know I can do without Thinkful resources, don't spike my own wheel

//path--> 
// 1a. context product page -- save user info plus a list of urls "bookmarked" for convenience for the user
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
            paddingLeft: "0",
            margin: "0"
        }

        const contentOptions = {
            position:"center",
            image: null,
            copy: "Context puts the world at the fingertips of the voracious reader. Take any article and Context will annotate its named entities with a definition and external links to learn more. Powered by DBpedia Spotlight, a tool to recognize named entities and to pair them with resources from Wikipedia, Context will supercharge your consumption of the web.",
            title: "The Pitch",
            name: "about",
            key:0 
        }
        const featureOptions1 = {
            position:"left",
            image: "assets/images/step1gif.gif",
            copy: "While browsing the web, come across an interesting article you'd like more context on. Highlight the article and copy it into you clipboard.",
            title: "Step 1",
            name: "step1",
            key:1  
        }
        const featureOptions2 = {
            position:"right",
            image: "assets/images/step2gif.gif",
            copy: "Back on the Context website, after logging in or making an account, paste in your text. Then annotate it!",
            title: "Step 2",
            name: "step2",
            key:2 
        }
        const featureOptions3 = {
            position:"left",
            image: "assets/images/step3gif.gif",
            copy: "Context works to highlight named entities and provide an abstract and external links for each one.",
            title: "Step 3",
            name: "step3",
            key:3 
        }

        const featureOptions4 = {
            position:"right",
            image: "assets/images/step4gif.gif",
            copy: "The Recent Annotations feature lets you pick up where you left off last time.",
            title: "Step 4",
            name: "step4",
            key:3 
        }
    
        return (
                <Provider store={store}>
                    <div className="dark-slate-gray-background-color" style={styles} id="main-view">
                        <NavBar link1={contentOptions.name} link2={featureOptions1.name} link3="form"/>
                        <Header />
                        <Content key={contentOptions.key} title={contentOptions.title} position={contentOptions.position} copy={contentOptions.copy} name={contentOptions.name} />
                        <Feature key={featureOptions1.key} title={featureOptions1.title} position={featureOptions1.position} image={featureOptions1.image} copy={featureOptions1.copy} name={featureOptions1.name} />
                        <Feature key={featureOptions2.key} title={featureOptions2.title} position={featureOptions2.position} image={featureOptions2.image} copy={featureOptions2.copy} name={featureOptions2.name} />
                        <Feature key={featureOptions3.key} title={featureOptions3.title} position={featureOptions3.position} image={featureOptions3.image} copy={featureOptions3.copy} name={featureOptions3.name} />
                        <Feature key={featureOptions4.key} title={featureOptions4.title} position={featureOptions4.position} image={featureOptions4.image} copy={featureOptions4.copy} name={featureOptions4.name} />
                        <Form />
                        <Footer />
                        <LoadingScreen />
                    </div>
                </Provider>  
            )
    } 
}

export default function (next) {
    Dom.render(
        <Main />
        , document.getElementById('root'));
} 

//<NavBar name0={sectionOptions0.name} name1={sectionOptions1.name} name2={sectionOptions2.name} name3={sectionOptions3.name} />