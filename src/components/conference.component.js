import React from 'react';
import ConferenceService from '../services/conference.service';

function getConferences() {
  ConferenceService.getAll()
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(`Error: ${e}`);
    });
}

export const ConferenceComponent = () => {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div>
          <h2>Conference</h2>
          <br />
          <button
            onClick={getConferences}
            type="button"
            className="btn btn-primary"
          >
            Conferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceComponent;
