import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';

import EventList from '../../components/events/event-list';
import ResultTitle from '../../components/results-title/results-title';

function getValuesFromUrl(slug) {
    if (slug.length < 2) throw Error('Invalid params!');
    const year = Number(slug[0]);
    const month = Number(slug[1]);
    if (isNaN(year) || isNaN(month)) throw Error('Invalid params!');
    return { year, month };
}

function FilteredEventsPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <p>Loading...</p>;
    }

    try {
        const urlValue = getValuesFromUrl(slug);
        const filteredEvents = getFilteredEvents(urlValue);
        if (!filteredEvents || filteredEvents.length === 0)
            return <p>No events found for the chosen filter!</p>;

        return (
            <Fragment>
                <ResultTitle date={new Date(urlValue.year, urlValue.month - 1)} />
                <EventList items={filteredEvents} />
            </Fragment>
        );
    } catch (err) {
        return (
            <div>
                <h1>{err.message}</h1>
            </div>
        );
    }
}

export default FilteredEventsPage;
