class EventsAdapter {
    static fetchEvents(data) {
        return Object.keys(data).map(key => {
            const element = data[key];
            return EventsAdapter._toEvent(key, element);
        });
    }

    static _toEvent(key, element) {
        return {
            id: key,
            title: element.title,
            description: element.description,
            image: element.image,
            isFeatured: element.isFeatured,
            location: element.location,
            date: element.date
        };
    }

    static toHomePage(data) {
        return data.filter(event => event.isFeatured);
    }

    static fetchEventsIds(data) {
        return Object.keys(data);
    }

    static toEventIdPage(ids) {
        return ids.map(EventsAdapter._idToPath);
    }

    static _idToPath(id) {
        return { params: { eventId: id } };
    }

    static eventsByProvidedDate(events, { year, month }) {
        return events.filter(event =>
            EventsAdapter._eventItsInProvidedDateFilter(event, year, month)
        );
    }

    static _eventItsInProvidedDateFilter(event, year, month) {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    }
}

export default EventsAdapter;
