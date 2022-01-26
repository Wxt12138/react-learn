let basicUrl;
if (process.env.NODE_ENV == 'development') {
    basicUrl = 'http://localhost:3001/';
    // basicUrl = 'http://123.57.226.10/www'
} else {
    basicUrl = 'http://123.57.226.10/'
}
export default basicUrl
