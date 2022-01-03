import Button from '../ui/button';
import classes from './events-search.module.css';

function EventsSearch({ onSearch }) {
    function formatFormDataValues(formData) {
        const result = {};
        for (const key of formData.keys()) {
            const value = formData.get(key);
            result[key] = value;
        }
        return result;
    }

    function submitHandler(event) {
        event.preventDefault();
        const formValues = formatFormDataValues(new FormData(event.target));
        onSearch(formValues);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>

                    <select id="year" name="year">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>

                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" name="month">
                        <option value="0">January</option>
                        <option value="1">February</option>
                        <option value="2">March</option>
                        <option value="3">April</option>
                        <option value="4">May</option>
                        <option value="5">June</option>
                        <option value="6">July</option>
                        <option value="7">August</option>
                        <option value="8">September</option>
                        <option value="9">October</option>
                        <option value="10">November</option>
                        <option value="11">December</option>
                    </select>
                </div>
            </div>

            <Button type="submit">Find Events</Button>
        </form>
    );
}

export default EventsSearch;
