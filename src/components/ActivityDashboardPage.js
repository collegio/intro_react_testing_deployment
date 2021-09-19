import React from 'react';
import ActivitiesList from './ActivitiesList';
import ActivitiesListFilters from './ActivitiesListFilters';

const ActivityDashboardPage = (props) => (
    <div className="container">
        <ActivitiesListFilters />
        <ActivitiesList />
    </div>
);

export default ActivityDashboardPage;