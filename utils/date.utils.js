const DefaultHumanReadableOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

class DateUtils {
    static locale = 'en';

    static now() {
        return new Date();
    }

    static toHumanReadableDate(date = DateUtils.now(), options = DefaultHumanReadableOptions) {
        return new Date(date).toLocaleDateString(DateUtils.locale, options);
    }
}

export default DateUtils;
