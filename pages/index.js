import EventList from '../components/events/event-list';

import EventsApi from '../service/EventsApi';
import EventsAdapter from '../adapters/EventsAdapter';

function HomePage({ featuredEvents }) {
    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    );
}

export async function getStaticProps() {
    const api = new EventsApi();
    const data = await api.fetchEvents();

    return {
        props: {
            featuredEvents: EventsAdapter.toHomePage(data)
        }
    };
}

export default HomePage;
