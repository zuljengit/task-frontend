import http from '../http-common';

class ConferenceService {
  getAll = () => {
    return http.get('conferences');
  };
}

export default new ConferenceService();
