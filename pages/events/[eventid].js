import { Fragment } from 'react';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

import EventsApi from '../../service/EventsApi';
import EventsAdapter from '../../adapters/EventsAdapter';

function EventDetailPage({ event }) {
    return (
        <Fragment>
            <EventSummary title={event.title} />

            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />

            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const { eventId } = context.params;

    const api = new EventsApi();
    const event = await api.fetchEventById(eventId);

    if (!event) {
        return {
            notFound: true
        };
    }

    return {
        props: { event }
    };
}

export async function getStaticPaths() {
    const api = new EventsApi();
    const ids = await api.fetchEventsIds();

    return {
        paths: EventsAdapter.toEventIdPage(ids),
        fallback: false
    };
}

export default EventDetailPage;
