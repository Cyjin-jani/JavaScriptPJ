import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/*Global state of the app 
* - search object
* - current recipe object
* - shopping list object
* - liked recipes
*/
const state = {};

//Search Controller
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput(); //TODO 
    //console.log(query);
    
    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        
        try {
            // 4) Search for recipes
            await state.search.getResults();
    
            // 5) render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch(error) {
            alert('Something wrong with the search...');
            clearLoader();
        }
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
    
});


//Recipe Controller

const controlRecipe = async () => {
    //Get ID from URL
    const id = window.location.hash.replace('#', '');
    //console.log(id); //check will the id really logged on console.

    if (id) {
        // Prepare UI for changes

        // Create new recipe object
        state.recipe = new Recipe(id);
        

        try {
            // Get Recipe data and parse ingredients
            await state.recipe.getRecipe();
            console.log(state.recipe.ingredients);
            
            state.recipe.parseIngredients();
    
            // Calculate Servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
    
            // Render Recipe
            console.log(state.recipe);

        } catch (error) {
            alert('Error processing recipe!');
        }
    }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
//we can write above 2 lines for this one line.
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
