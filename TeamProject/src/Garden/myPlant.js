import React, { useState } from 'react';
import { View } from 'react-native';

class myPlant extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            plants: this.props.myGarden,
        }
    }

    ComponentDidMount() {
        // let plantList = [];
        // props.myGarden.map((plant) => (
        //     plantList.push ({
        //         key: plant.name,
        //         value: plant,
        //     })
        // ))
        // this.setState({
        //     plants: plantList,
        // });
        // console.log(this.state.plants);
        console.log(this.state.plants);
        this.props.parentCallback(this.state.plants);
    }

    render() {
        return (
            <View/>
        )
    }
}

export default myPlant;