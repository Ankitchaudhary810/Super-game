import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"c89299b7dcd2470f93f8a54c3aa84b5c",
    }
})