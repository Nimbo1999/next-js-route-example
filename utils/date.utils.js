class DateUtils {
    static locale = 'pt-BR';

    static now() {
        return new Date();
    }

    static toHumanReadableDate(date = DateUtils.now()) {
        return new Date(date).toLocaleDateString(DateUtils.locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
}

export default DateUtils;
