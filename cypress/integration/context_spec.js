describe('Using the demo account', function (){
    it('Visits the Context web page', function(){
        cy.visit('/');
    })
    it('The user can log in immediately with the demo account', function(){
        cy.visit('/');
        cy.contains('Demo').click();
        cy.url().should('include', 'dashboard');
    })
    it('The user can log out from the demo account', function(){
        cy.contains('Logout (demoAccount)').click();
        cy.url().should('not.include', 'dashboard');
    })

});
describe('Logging in to an account', function (){
    beforeEach('The user logs in',function(){
        cy.fixture('users.json').then((users)=>{
            console.log("users:",users)
            cy.wrap(users).as('users');
            cy.route
            console.log("loginUser: ",users.loginUser);
            cy.get('input[name=username]').type(users.loginUser.username);
            cy.get('input[name=password]').type(`${users.loginUser.password}{enter}`);
            cy.url().should('include', 'dashboard');
        });
    })
    afterEach('The user logs out', function(){
        cy.contains(`Logout (${this.users.loginUser.username})`).click();
        cy.url().should('not.include', 'dashboard');
        cy.get('nav').contains('Sign in');
    });
    it('The user can annotate text and click annotations', function(){
        const textToAnnotate = "Carbon has the unique ability to bind four atoms and form stable tetravalent structures that are prevalent in nature. The lack of one or two valences leads to a set of species—carbocations, carbanions, radicals and carbenes—that is fundamental to our understanding of chemical reactivity1. In contrast, the carbyne—a monovalent carbon with three non-bonded electrons—is a relatively unexplored reactive intermediate2,3,4,5,6; the design of reactions involving a carbyne is limited by challenges associated with controlling its extreme reactivity and the lack of efficient sources7,8,9. Given the innate ability of carbynes to form three new covalent bonds sequentially, we anticipated that a catalytic method of generating carbynes or related stabilized species would allow" + 
            "what we term an ‘assembly point’ disconnection approach for the construction of chiral centres. Here we describe a catalytic strategy that generates diazomethyl radicals as direct equivalents of carbyne species using visible-light photoredox catalysis.";
        cy.get('textarea').type(textToAnnotate);
        cy.get('button[type="submit"]').click();
        cy.wait(7000);
        cy.scrollTo('top');
        cy.get('button[type="button"]').contains('tetravalent').click();
        cy.wait(7000);
        cy.get('h2').should('contain','tetravalent');
        cy.get('h3').should('contain','Abstract');
        cy.get('h3').should('contain','External Links');
        cy.get('button.modalCloseButton').click();
        cy.wait(7000);
    });
    it('The user can navigate to the main page', function(){
        cy.contains('Main').click();
        cy.get('nav').contains('Dashboard');
        cy.url().should('not.include', 'dashboard');
    });
    it('The user can navigate to the dashboard', function(){
        cy.contains('Main').click();
        cy.get('nav').contains('Dashboard');
        cy.url().should('not.include', 'dashboard');
        cy.contains('Dashboard').click();
        cy.url().should('include', 'dashboard');
    });
});