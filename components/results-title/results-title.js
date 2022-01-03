import Button from '../ui/button';
import classes from './results-title.module.css';

import DateUtils from '../../utils/date.utils';

function ResultsTitle({ date }) {
    const humanReadableDate = DateUtils.toHumanReadableDate(date, {
        year: 'numeric',
        month: 'long'
    });

    return (
        <section className={classes.title}>
            <h1>Events in {humanReadableDate}</h1>

            <Button link="/events">Show all events</Button>
        </section>
    );
}

export default ResultsTitle;
