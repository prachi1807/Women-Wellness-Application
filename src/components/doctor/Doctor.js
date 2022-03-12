import React, { Component } from 'react'
// import { BrowserRouter as Router } from "react-router-dom";
import './Doctors.css';
import axios from 'axios'

export class Doctor extends Component {
    state = {
        venues: []
      }
    
      componentDidMount() {
        this.getVenues()
      }
    
      renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBsZrS5LkAXAqzgVYMJQQMYOoWgYCHHZTU&callback=initMap")
        window.initMap = this.initMap
      }
    
      getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
          client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
          client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
          query: "doctor",
          near: "Delhi",
          v: "20182507"
        }
    
        axios.get(endPoint + new URLSearchParams(parameters))
          .then(response => {
            this.setState({
              venues: response.data.response.groups[0].items
            }, this.renderMap())
          })
          .catch(error => {
            console.log("ERROR!! " + error)
          })
    
      }
    
    render() {
        return (
            <>
      <div className="info">
<div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <h2>10-20 Years</h2>
        
        <a href="./Details" className="btn-flip" data-back="Click Here" data-front="View Details"></a>
      </div>
    </div>

    <div className="card">
    <div className="card-image card2"></div>
      <div className="card-text card2">
        <h2>21-25 Years</h2>
        
        <a href="./Details1" className="btn-flip" data-back="Click Here" data-front="View Details"></a>
      </div>
    </div>

    <div className="card">
    <div className="card-image card3"></div>
        <div className="card-text card3">
          <h2>26-30 Years</h2>
         
        <a href="./Details2" className="btn-flip" data-back="Click Here" data-front="View Details"></a>
        </div>
      </div>
      </div>
    </>
        )
    }
}
function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }

export default Doctor
