import React from 'react';

class PlayerForm extends React.Component {

    constructor(props) {
        super(props);

        this.onNameChange = this.onNameChange.bind(this);
        this.onSportChange = this.onSportChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSkillChange = this.onSkillChange.bind(this);
        this.onSubmitPlayer = this.onSubmitPlayer.bind(this);

        this.state = {
            name: props.player ? props.player.name : '',
            sport_type: props.player ? props.player.sport_type : 'hockey',
            gender: props.player ? props.player.gender : 'Male',
            skill_level: props.player ? props.player.skill_level : 'basic',
            message: props.player ? props.player.message : '', 
            error: ''
        }
    }

    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onSportChange(e) {
        const sport_type = e.target.value;
        this.setState(() => ({ sport_type }));
    };

    onGenderChange(e) {
        const gender = e.target.value;
        this.setState(() => ({ gender }));
    };

    onSkillChange(e) {
        const skill_level = e.target.value;
        this.setState(() => ({ skill_level }));
    };

    onMessageChange(e) {
        const message = e.target.value;
        this.setState(() => ({ message }));
    };

    onSubmitPlayer(e) {
        e.preventDefault();

        if (!this.state.name) {

            // Error!
            this.setState(() => ({ error: 'Please enter a name first.' }));
        }
        else {

            // Remove the error and Submit!
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
                sport_type: this.state.sport_type,
                gender: this.state.gender,
                skill_level: this.state.skill_level,
                message: this.state.message
            });
        }
    }

    render() {
        return (
            <div className="player-form">
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.onSubmitPlayer}>
                    <label>Name</label><br/>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange} autoFocus />

                    <label>Sport</label><br/>
                    <select value={this.state.sport_type} onChange={this.onSportChange}>
                        <option value="hockey">Hockey</option>
                        <option value="baseball">Baseball</option>
                        <option value="softball">Softball</option>
                        <option value="basketball">Basketball</option>
                    </select>

                    <label>Gender</label><br/>
                    <select value={this.state.gender} onChange={this.onGenderChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label>Skill Level</label><br/>
                    <select value={this.state.skill_level} onChange={this.onSkillChange}>
                        <option value="basic">Basic</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>

                    <label>Message</label><br/>
                    <textarea placeholder="Message" value={this.state.message} onChange={this.onMessageChange}></textarea>

                    <button className="button pull-right">Submit</button>
                </form>
            </div>
        );
    }
}

export default PlayerForm;