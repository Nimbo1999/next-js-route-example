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
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>

                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" name="month">
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>

            <Button type="submit">Find Events</Button>
        </form>
    );
}

export default EventsSearch;
