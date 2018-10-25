import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var fullname = this.props.data.fullname;
      var city = this.props.data.address.city;
      var province = this.props.data.address.province;
      var country = this.props.data.address.country;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target='_blank'><i className={network.className}></i></a></li>
      })
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="ten columns">
                <p className="lead">{message}</p>
            </div>

         </div>



            <aside className="four columns footer-widgets">

            <div className="columns contact-details">
               <h2>Contact Details</h2>
               <p className="address">
            <span>{fullname}</span><br />
            <span>
                  {city},{province},{country}
                </span><br />
            <span>{phone}</span><br />
                  <span>{email}</span>
          </p>
            </div>

            </aside>
            <ul className="social-links">
             {networks}
          </ul>

   </section>
    );
  }
}
export default Contact;
