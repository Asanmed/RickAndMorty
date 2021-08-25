import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CardSet from './components/CardSet/CardSet';

import { GlobalStyle } from './styles/globalStyles';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { AdvancedSearchForm } from './components/AdvancedSearchForm/AdvancedSearchForm';
import CharDetails from './components/CharDetails/CharDetails';
import LocationDetails from './components/LocationDetails/LocationDetails';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetais';
import {
    ErrorMessage,
    NoSearchResults,
} from './components/ErrorMessages/ErrorMessages';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Router>
                <NavBar />

                <Switch>
                    <Route exact path="/">
                        <AdvancedSearchForm />
                        <CardSet />
                    </Route>
                    <Route exact path="/:id">
                        <CharDetails />
                    </Route>
                    <Route exact path="/location/:id">
                        <LocationDetails />
                    </Route>
                    <Route exact path="/episode/:id">
                        <EpisodeDetails />
                    </Route>
                </Switch>
            </Router>

            <Footer />
        </div>
    );
}

export default App;
