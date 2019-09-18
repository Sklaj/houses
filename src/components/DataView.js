import React from "react";
import {map} from "lodash";

export class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        };
      }

    componentDidMount() {
        const passedThis = this;
        fetch("http://mr-test-backend.sadek.usermd.net/houses")
        .then(function(res) {
            return res.json();
        }).then(function(res){
             passedThis.setState({houses: res.houses});
        });
    };

    render() {
        console.log(this.state.houses);
        const url = "http://mr-test-backend.sadek.usermd.net/houses";

        const onRemove = (id) => {
            fetch(url + "/" + id, {
                method: "DELETE",
            })
            .then(res => {
                console.log("usunięto dom nr.: " + id);
                console.log(res);
            });
        };

        const getHouseInfo = (id) => {
            fetch(url + "/" + id)
            .then(function(res) {
                return res.json();
            }).then(function(res){
                console.log(res);
            });
        };

        return (
            <div>
                <ul>
                    {map(this.state.houses, (house, indx) => {
                        return (
                            <li key={indx} style={{padding: "10px"}}>
                                <span style={{paddingRight: "5px"}}>Dom nr {indx}</span>
                                <span style={{paddingRight: "5px"}}>Adres: {house.address}</span>
                                <span style={{paddingRight: "5px"}}>Właściciel: {house.owner}</span>
                                <span style={{paddingRight: "5px"}}>Cena: {house.price}</span>
                                <button onClick={() => onRemove(house._id)}>Usuń</button>
                                <button onClick={() => getHouseInfo(house._id)}>Więcej info</button>
                            </li>
                        );
                    })}
                </ul>


            </div>
        );
    }
};
