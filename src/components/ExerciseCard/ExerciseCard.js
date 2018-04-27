import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

class ExerciseCard extends Component {
    render() {
        const {name, bpm} = this.props;
        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                        {name}
                    </Card.Header>
                    <Card.Meta>
                        Jan 12, 2018
                    </Card.Meta>
                    <Card.Description>
                        {bpm} BPM
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

ExerciseCard.prototypes = {
    name: PropTypes.string,
    bpm: PropTypes.number,
}

export default ExerciseCard;