import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

import useEvent from '../../hooks/useEvent';

function EventDetailPage() {
    const { query } = useRouter();
    const { eventId } = query;
    const event = useEvent(eventId);

    if (!event) {
        return <p>No event found!</p>;
    }

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

export default EventDetailPage;
