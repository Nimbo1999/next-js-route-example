import Api from './Api';

import EventsAdapter from '../adapters/EventsAdapter';

class EventsApi extends Api {
    static BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    async fetchEvents() {
        const url = `${EventsApi.BASE_URL}/events.json`;
        const data = await this.get(url);
        return EventsAdapter.fetchEvents(data);
    }
}

export default EventsApi;
