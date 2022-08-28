import axios from "axios";
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID F_e9U-527so8fnp3G_oPKF0hrr2FXjSd-0w_Jci0yYo'
    }
})