import { useEffect, useState } from "react";
import { Game } from "./useGame";
import apiClient from "../Services/api-client";

interface Genre{
    id: number; 
    name: string;
}

interface FetchGenreResponse{
    count : number; 
    results: Genre[];
}



const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
        .get<FetchGenreResponse>("/genres", {signal: controller.signal})
        .then((res) => {
            setGenres(res.data.results)
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message)
            setLoading(false);
        });
        return () => controller.abort()
    },[]);

    return {genres, error , isLoading}
}

export default useGenres

