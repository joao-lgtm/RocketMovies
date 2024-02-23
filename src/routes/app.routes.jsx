import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { MoviePreview } from "../pages/MoviePreview";
import { CreateMovie } from "../pages/CreateMovie";


export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/moviePreview/:id" element={<MoviePreview />} />
            <Route path="/CreateMovie" element={<CreateMovie />} />
        </Routes>
    )
}