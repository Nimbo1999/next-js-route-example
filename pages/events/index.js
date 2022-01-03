import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();

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

export default AllEventsPage;
