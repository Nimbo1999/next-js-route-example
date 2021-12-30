import Image from 'next/image';

import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrorRightIcon from '../icons/arrow-right-icon';

import DateUtils from '../../utils/date.utils';

import classes from './event-item.module.css';

function EventItem({ title, image, date, location = '', id }) {
    const humanReadableDate = DateUtils.toHumanReadableDate(date);
    const formattedAddress = location.replace(', ', '\n');

    return (
        <li className={classes.item}>
            <Image src={'/'.concat(image)} alt={title} width={324} height={216} />

            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>

                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>

                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>
                        <span>Explore Event</span>

                        <span className={classes.icon}>
                            <ArrorRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
