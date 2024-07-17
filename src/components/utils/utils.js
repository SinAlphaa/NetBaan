export function PUBLIC_URL(path) {
    if (path.indexOf('http') !== -1) {
        path = path.substring(0)
        return path;
    }
    if (path.startsWith('/'))
        path = path.substring(1);
    if (path.endsWith('/'))
        path = path.substring(0, path.length - 1);
    return process.env.PUBLIC_URL + '/' + path;
}
export function BG_URL(path) {
    return `url('${path}')`;
}
export const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${month}/${day}/${year} at ${hours}:${minutes}`;
};
