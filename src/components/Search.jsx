import { React, useState, useContext } from "react";
import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Configure,
    Highlight,
    connectStateResults,
} from "react-instantsearch-dom";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../App";

const searchClient = algoliasearch(
    "SWSFY6ZO07",
    "286c1017af1002e899ded37866d02198"
);

function Hit({ hit }) {
    const { setHit } = useContext(EventContext);
    const navigate = useNavigate();
    return (
        <div
            className="card "
            onClick={() => {
                setHit(hit);
                navigate("/check");
            }}
        >
            <div className="hit-name">
                <Highlight attribute="name" hit={hit} />
            </div>
            <div className="hit-description">
                <Highlight attribute="Name" hit={hit} />
            </div>
            <div className="Name">{hit.FullName}</div>
            <div className="Email">{hit.CompanyName}</div>

            <div className="Email">{hit.Email}</div>
        </div>
    );
}

const Results = connectStateResults(
    ({ searchState, searchResults, children }) =>
        searchResults && searchResults.nbHits !== 0 ? (
            children
        ) : (
                <div className="text-danger" >No results have been found for {searchState.query}. <br /> Please see someone at the registration  desk.  </div>
            
        )
);

export default function Search() {
    const [showHits, setShowHits] = useState(false);

    return (
        <div className="container mt-5">
            <InstantSearch searchClient={searchClient} indexName="artba_fly_in">
                <Configure hitsPerPage={3} />

                <SearchBox
                    onFocus={() => setShowHits(true)}
                    onBlur={() => setShowHits(true)}
                    ClassName="searchbox"
                />
                <Results>
                    {showHits ? <Hits hitComponent={Hit} /> : null}
                </Results>
            </InstantSearch>
        </div>
    );
}
