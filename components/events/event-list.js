import EventItem from './event-item';

import classes from './event-list.module.css';

function EventList({ items }) {
    return (
        <ul className={classes.list}>
            {items.map(({ id, ...eventRest }) => (
                <EventItem key={id} id={id} {...eventRest} />
            ))}
        </ul>
    );
}

export default EventList;
