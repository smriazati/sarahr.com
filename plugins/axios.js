export default function ({
    $axios, env
}) {

    $axios.onRequest(config => {
        // console.log('Making request to ' + config.url)
    })
    const app_id = env.AIRTABLE_ID;
    const app_key = env.AIRTABLE_KEY;

    $axios.setHeader('Authorization', 'Bearer ' + app_key);
    $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded');
    $axios.setHeader('Accept', 'application/json');
    $axios.setBaseURL('https://api.airtable.com/v0/' + app_id);


    $axios.onError(error => {
        console.log('error is ', error);
    })
}
