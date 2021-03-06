import React from 'react';
import { 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';
import './ProfileIcon.css';
import profilePic from './profilePic.png';


class ProfileIcon extends React.Component { //inital state of the app
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => { //updating the state
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div className="pa4 tc">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                    >                        
                        <img
                            src={profilePic}
                            className="br-100 ba h3 w3 dib" alt="avatar" 
                        />                        
                    </DropdownToggle>
                    <DropdownMenu 
                        className="b--transparent shadow-5 dropdown-menu-right" 
                        style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                        <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
                        <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default ProfileIcon;