import React from 'react';

const FilterButton = (props) => {
  return (
    <div className="ui action input">
      <select className="ui compact selection dropdown">
        <option value="all">All Todos</option>
        <option value="finished">Finished Todos</option>
        <option value="unfinished">Unfinished Todos</option>
      </select>
    </div>
  )
}

export default FilterButton;
