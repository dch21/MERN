import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            education: '',
            age: '',
            politicalLeaning: '',
            religiousAffiliation: '',
            gender: '',
            location: '',
            petChoice: '',
            ethnicity: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            education: this.state.education,
            age: this.state.age,
            politicalLeaning: this.state.politicalLeaning,
            religiousAffiliation: this.state.religiousAffiliation,
            gender: this.state.gender, 
            location: this.state.location,
            petChoice: this.state.petChoice,
            ethnicity: this.state.ethnicity
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        
                        <select placeholder="Highest Level of Education" onChange={this.update('education')}>
                            <option value="highschool or lower">highschool or lower</option>
                            <option value="undergraduate degree">undergraduate degree</option>
                            <option value="masters/professional degree">masters/professional degree</option>
                            <option value="PhD">PhD</option>
                        </select>
                        
                        <select placeholder="Age Range" onChange={this.update('age')}>
                            <option value="under 18">under 18</option>
                            <option value="18 to 22">18 to 22</option>
                            <option value="22 to 40">22 to 40</option>
                            <option value="40 to 60">40 to 60</option>
                            <option value="60 plus">60 plus</option>
                        </select>

                        <select placeholder="Political Leaning" onChange={this.update('politicalLeaning')}>
                            <option value="Far-left">Far-left</option>
                            <option value="Moderate-left">Moderate-left</option>
                            <option value="Centrist">Centrist</option>
                            <option value="Moderate-right">Moderate-right</option>
                            <option value="Far-right">Far-right</option>
                        </select>

                        <select placeholder="Religious Affiliation"
                            onChange={this.update('religiousAffiliation')}
                        >
                            <option value="Christianity">Christianity</option>
                            <option value="Islam">Islam</option>
                            <option value="Judaism">Judaism</option>
                            <option value="Hinduism">Hinduism</option>
                            <option value="Buddhism">Buddhism</option>
                            <option value="Sikhism">Sikhism</option>
                            <option value="Other">Other</option>
                            <option value="Atheism/Agnosticism">Atheism/Agnosticism</option>
                            <option value="Prefer not to self id">Prefer not to self id</option>
                        </select>

                        <select placeholder="Gender Identity"
                            onChange={this.update('gender')}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Non-Bianary">Non-Bianary</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to self id">Prefer not to self id</option>
                        </select>

                        <select placeholder="Pet Choice"
                            onChange={this.update('petChoice')}
                        >
                            <option value="dog">dog</option>
                            <option value="cat">cat</option>
                        </select>

                        <select
                        onChange={this.update('ethnicity')}
                        placeholder="ethnicity">
                            <option value="White">White</option>
                            <option value="Black">Black</option>
                            <option value="Non-White Hispanic">Hispanic</option>
                            <option value="East-Asian">East-Asian</option>
                            <option value="South-Asian">South-Asian</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to self id">Prefer not to self id</option>
                        </select>
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);