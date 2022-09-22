import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('SWSFY6ZO07', '286c1017af1002e899ded37866d02198');


const Hit = ({ hit }) => <p>{hit.name}</p>;


    
export default function Search() {
  return (
    <div className='container mt-5'>
          <InstantSearch  searchClient={searchClient} indexName="artba_fly_in">
              <SearchBox />
              <Hits hitComponent={Hit} />
          </InstantSearch>
    </div>
  )
}

