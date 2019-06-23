import React from 'react';
import {DelayInput} from 'react-delay-input';

const Search = ()=> (
  <div>
    <DelayInput
      minLength={2}
      delayTimeout={500}
      onChange={event => console.log(event)}
    />
  </div>
)

export default Search;
