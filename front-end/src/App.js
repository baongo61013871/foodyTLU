import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import ProtectedRoute from './routes/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/Customer/HomePage';
import MenuPage from './pages/Customer/MenuPage';
import Login from './pages/Auth/Login';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Các route công khai */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}

                    {/* Route cho trang đăng nhập */}
                    <Route path="/login" element={<Login />} />

                    {/* Route cho người dùng đã đăng nhập, không yêu cầu quyền đặc biệt */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <MenuPage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Route chỉ dành cho admin */}
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <HomePage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
