export const fileUpload = async( file ) => {

    if ( !file ) throw new Error('The file do not exist');

    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dspf8mb6l/image/upload';

    const formData = new FormData();
    formData.append('file', file );
    formData.append('upload_preset', 'react-course');

    try {
        const resp = await fetch( cloudinaryUrl, {
            method: 'POST',
            body: formData
        });

        console.log(resp);

        if ( !resp.ok ) throw new Error('The image can not uploaded');

        const response = await resp.json();
        console.log(response);

        return response.secure_url;
        
    } catch ( error ) {
        console.log(error);
        throw new Error( error.message );
    }
}