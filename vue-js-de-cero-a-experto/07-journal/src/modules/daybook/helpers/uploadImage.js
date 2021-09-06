const axios = require("axios")

const uploadImage = async ( file ) => {
    if (!file) {
        return
    }

    try {
        
        const formData = new FormData()
        formData.append('upload_preset', 'curso-vue')
        formData.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/dsn3jftu9/image/upload'
        const { data } = await axios.post(url, formData)

        console.log(data);

        return data.secuer_url



    } catch (error) {
        console.log('Erros al cargar el archivo');
        console.log(error);
        return null
    }
}

export default uploadImage