import Home from "../../../src/pages/Home"
import React from "react"

<reference types="cypress" />

describe('testing app', () => {

    it('renders correctly', () => {
        cy.visit('http://127.0.0.1:5173/')
        cy.contains("Hi! I'm Joshua Mo");
    })
})