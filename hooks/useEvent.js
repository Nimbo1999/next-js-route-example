import { getEventById } from '../dummy-data';

function useEvent(id = '') {
    return getEventById(id);
}

export default useEvent;
