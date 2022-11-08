import React, { Component } from 'react'

export default class Base extends Component {
    // dont forget to use super or the page will break
    constructor() {
        super()
        this.stuff = {
            candy: {
                choclate: 'snickers',
                sweet: 'starburst',
                sour: 'Cherry Sours'
            },
            juice: 'Caprisun',
            Spanish: 'True'
        }
    }
    render() {
        return (
            <div>
                <h3>What something sweet?</h3>
                <p>Have some {this.stuff.candy.sweet}</p>
            </div>


        )
    }
}
