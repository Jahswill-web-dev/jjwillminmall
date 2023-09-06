import axios from 'axios';

    const sendDataToServer = async (data)=> {

        try {
            const jsonData = JSON.stringify(data)

            const response = await axios.post('/api/hello', jsonData, {
                    headers: {
                        'Content-Type':'application/json',
                    },
            });
            // console.log("they got it ", response.data);
            return response.data;
        }
        catch(error){
            console.error('erorr in sending data:', error );
            throw new Error('failed to send data to the server')
        }

    }

export default sendDataToServer;