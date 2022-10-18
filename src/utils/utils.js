import dayjs from 'dayjs';

export const convertDate = (created_at) => {
    let formatDate;
    const now = dayjs();
    const date = dayjs(created_at);
    const result = now.diff(date, 'month');
    if (result > 0) {
        formatDate = `${result} months ago`;
        return formatDate;
    }

    const days = now.diff(date, 'day');
    if (result === 0 && days !== 0) {
        formatDate = `${days} days ago`
        return formatDate;
    }

    const hours = now.diff(date, 'hour');
    if (days === 0 && hours !== 0) {

        formatDate = `${hours} hours ago`;
        return formatDate;
    }
    
    if (hours === 0) {
        const minutes = now.diff(date, 'minute');
        formatDate = `${minutes} minutes ago`;
        return formatDate;
    }
}