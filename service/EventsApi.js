import Api from './Api';

import EventsAdapter from '../adapters/EventsAdapter';

class EventsApi extends Api {
    static BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    async fetchEvents() {
        const url = `${EventsApi.BASE_URL}/events.json`;
        const data = await this.get(url);
        return EventsAdapter.fetchEvents(data);
    }

    async fetchEventsIds() {
        const url = `${EventsApi.BASE_URL}/events.json?shallow=true`;
        const data = await this.get(url);
        return EventsAdapter.fetchEventsIds(data);
    }

    async fetchEventById(id) {
        const url = `${EventsApi.BASE_URL}/events/${id}.json`;
        const data = await this.get(url);
        return data;
    }
}

export default EventsApi;
