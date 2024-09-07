import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import ProtectedRoute from './routes/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/Customer/HomePage';
import MenuPage from './pages/Customer/MenuPage';
import Login from './pages/Auth/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
    const foodItems = [
        {
            id: 1,
            name: 'Samosa',
            type: 'Indian Food',
            price: '20₹',
            rating: 4.0,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 2,
            name: 'Pav-Bhaji',
            type: 'Indian Food',
            price: '60₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 3,
            name: 'Pakora',
            type: 'Indian Food',
            price: '20₹',
            rating: 3.5,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 4,
            name: 'Keema',
            type: 'Indian Food',
            price: '40₹',
            rating: 4.0,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 5,
            name: 'Dal Makhani',
            type: 'Indian Food',
            price: '50₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'VietNam Food',
            price: '40₹',
            rating: 3.0,
            time: '40min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },

        {
            id: 1,
            name: 'Samosa',
            type: 'VietNam Food',
            price: '20₹',
            rating: 4.0,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 2,
            name: 'Pav-Bhaji',
            type: 'VietNam Food',
            price: '60₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 3,
            name: 'Pakora',
            type: 'Indian Food',
            price: '20₹',
            rating: 3.5,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 4,
            name: 'Keema',
            type: 'Indian Food',
            price: '40₹',
            rating: 4.0,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 5,
            name: 'Dal Makhani',
            type: 'Indian Food',
            price: '50₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'Indian Food',
            price: '40₹',
            rating: 3.0,
            time: '40min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },

        {
            id: 1,
            name: 'Samosa',
            type: 'Indian Food',
            price: '20₹',
            rating: 4.0,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 2,
            name: 'Pav-Bhaji',
            type: 'Indian Food',
            price: '60₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 3,
            name: 'Pakora',
            type: 'Indian Food',
            price: '20₹',
            rating: 3.5,
            time: '20min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 4,
            name: 'Keema',
            type: 'Indian Food',
            price: '40₹',
            rating: 4.0,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 5,
            name: 'Dal Makhani',
            type: 'Indian Food',
            price: '50₹',
            rating: 4.5,
            time: '30min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'Indian Food',
            price: '40₹',
            rating: 3.0,
            time: '40min',
            imageUrl: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg',
            description:
                'A juicy gourmet burger with premium beef, fresh lettuce, tomatoes, and a special sauce. Served with crispy fries.',
        },
    ];
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Routes>
                        {/* Các route công khai */}
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            if (route.product) {
                                return <Route key={index} path={route.path} element={<Page foodItems={foodItems} />} />;
                            }
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
        </Provider>
    );
}

export default App;
