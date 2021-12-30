import Image from 'next/image';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';

import DateUtis from '../../utils/date.utils';

import classes from './event-logistics.module.css';

function EventLogistics({ date, address, image, imageAlt }) {
    const humanReadableDate = DateUtis.toHumanReadableDate(date);
    const addressText = address.replace(', ', '\n');

    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
            </div>

            <ul className={classes.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>

                <LogisticsItem icon={AddressIcon}>
                    <address>{addressText}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;