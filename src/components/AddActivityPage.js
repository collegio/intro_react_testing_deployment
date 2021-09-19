import React from 'react';
import { connect } from 'react-redux';
import ActivityForm from './ActivityForm';
import { addActivity } from '../actions/activities';

const AddActivityPage = (props) => (
    <div className="container">
        <h1>Add a Activity</h1>
        <ActivityForm 
            onSubmit={(activity) => {
                props.dispatch(addActivity(activity));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddActivityPage);