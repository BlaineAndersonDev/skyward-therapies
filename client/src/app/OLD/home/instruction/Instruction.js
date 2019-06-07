import React, { Component } from 'react';
import './Instruction.css';

class Instruction extends Component {
  render() {
    return (
    <div id="instContainer">

        <h1 id="instSectionTitle">Appointment Policies</h1>

        <div className="instSubSection">
          <h3 className="instSubSectionTitle">When you arrive for your appointment</h3>
          <p className="instText">Please arrive at least 10 minutes before your scheduled appointment to allow sufficient time to discuss your needs, and allow time to get on the table without rushing.</p>
        </div>

        <div className="instSubSection">
          <h3 className="instSubSectionTitle">Children</h3>
          <p className="instText">It’s completely understandable that getting a sitter isn’t always possible, and that shouldn’t necessarily stop you from getting the care you need. However, we have a very quiet facility, so please be aware if you do decide to bring your children with you, they will have to stay with you during your session. They will also have to be as quiet as possible as to not disturb other guests who are receiving their services. It’s recommended that you bring a device with headphones so they are entertained during your service. Unfortunately, if your child/children do make too much of a fuss, your session may be ended early.</p>
        </div>

        <div className="instSubSection">
          <h3 className="instSubSectionTitle">24 Hour Cancellation Policy</h3>
          <p className="instText">It is understandable that illness, emergencies, and sudden life events can occur during your appointment time frame, however it can be extremely difficult to replace your appointment with someone else in such a short time frame. Skyward Therapies LLC does not hold credit cards on file, however if you do cancel within 24 hours on your next visit you will have a $25 dollar fee added to your session to compensate for your missed session. Repeated last minute cancellations may result in refusal of continued services.
          </p>
        </div>

    </div>
    );
  }
}

export default Instruction;
