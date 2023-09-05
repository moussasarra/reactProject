import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

const register = async (nom,prenom, email, password) => {
    const response = await axios.post("http://127.0.0.1:8000/api/register", {
        nom:nom,
        prenom:prenom,
        email: email,
        password: password,
    },
    {
        headers: {
            "Content-Type": "application/json",
        }
    }
    );

    return response.data;
}



export  {
    register,
}