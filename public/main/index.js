import React from 'react';
import Dom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import styles from '~/assets/styles/main.css';
import {Header} from '~/components/Header'; 

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
    
        return (
                <Provider store={store}>
                    <div className="container-fluid" style={styles}>
                        <Header />
                    </div>
                </Provider>
            )
    } 
}

export default function (next) {
    Dom.render(<Main />, document.getElementById('root'));
} 