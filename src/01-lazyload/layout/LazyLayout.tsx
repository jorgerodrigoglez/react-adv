import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPage1,LazyPage2,LazyPage3 } from "../pages";


export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>
            {/* Rutas hijas iran aqui */}
            <ul>
                <li>
                    <NavLink to="lazy1">lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2">lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3">lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={ <LazyPage1 /> } />
                <Route path="lazy2" element={ <LazyPage2 /> } />
                <Route path="lazy3" element={ <LazyPage3 /> } />

                {/* <Route path="*" element={ <p>Page not fount - Error 404</p> }/> */}
                <Route path="*" element={ <Navigate to="lazy1" replace /> } />
            </Routes>
        </div>
    )
}

export default LazyLayout;