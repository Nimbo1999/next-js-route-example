import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

import EventsApi from '../../service/EventsApi';

function AllEventsPage({ events }) {
    const router = useRouter();

    function isFormValid(formValues) {
        const keys = ['month', 'year'];
        for (const key of keys) {
            if (!formValues[key]) return false;
        }
        return true;
    }

    function onSearch(formKeyValues) {
        if (isFormValid(formKeyValues)) {
            return router.push(`/events/${formKeyValues['year']}/${formKeyValues['month']}`);
        }

        return alert('Invalid parameters!');
    }

    return (
        <Fragment>
            <EventsSearch onSearch={onSearch} />
            <EventList items={events} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const api = new EventsApi();
    const events = await api.fetchEvents();

    return {
        props: {
            events,
            revalidate: 600
        }
    };
}

export default AllEventsPage;
