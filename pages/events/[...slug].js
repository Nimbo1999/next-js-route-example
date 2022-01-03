import { Fragment } from 'react';

import EventList from '../../components/events/event-list';
import ResultTitle from '../../components/results-title/results-title';

import EventsAdapter from '../../adapters/EventsAdapter';
import EventsApi from '../../service/EventsApi';

function FilteredEventsPage({ events, query }) {
    return (
        <Fragment>
            <ResultTitle date={new Date(query.year, query.month - 1)} />
            <EventList items={events} />
        </Fragment>
    );
}

function getValuesFromSlug(slug) {
    if (slug.length < 2) throw Error('Invalid params!');
    const year = Number(slug[0]);
    const month = Number(slug[1]);
    if (isNaN(year) || isNaN(month)) throw Error('Invalid params!');
    return { year, month };
}

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const api = new EventsApi();

    try {
        const values = getValuesFromSlug(slug);
        const events = EventsAdapter.eventsByProvidedDate(await api.fetchEvents(), values);

        if (!events || events.length < 1) {
            return {
                notFound: true
            };
        }

        return {
            props: {
                events,
                query: values
            }
        };
    } catch (err) {
        return {
            notFound: true
        };
    }
}

export default FilteredEventsPage;
