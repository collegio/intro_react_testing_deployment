import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, setFilterType, sortByName, sortByDistance } from '../actions/filters';

const ActivitiesListFilters = (props) => (
    <div className="activities-list-filters">
        <h2>Filter Activities</h2>
        <div className="filter-group">
            <label>Search For:</label><br />
            <input type="text" value={props.filters.text} onChange={(e) => {
                props.dispatch(setFilterText(e.target.value));
            }} />
        </div>
        <div className="filter-group">
            <label>Sort By:</label><br />
            <select onChange={(e) => {
                if (e.target.value === "name") {
                    props.dispatch(sortByName());
                }
                else if (e.target.value === "distance") {
                    props.dispatch(sortByDistance());
                }
            }}>
                <option value="name">Name</option>
                <option value="distance">Distance</option>
            </select>
        </div>
        <div className="filter-group">
            <label>Activity Type:</label><br />
            <select onChange={(e) => {
                props.dispatch(setFilterType(e.target.value));
            }}>
                <option value="all">All</option>
                <option value="running">Running</option>
                <option value="walking">Walking</option>
                <option value="cycling">Cycling</option>
                <option value="swimming">Swimming</option>
            </select>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ActivitiesListFilters);