const express = require('express');
const path = require('path'); 
const app = express();

const PORT = process.env.PORT || 5000; 

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");
app.use(express.static('public'))

app.use(express.static(path.join(__dirname, 'public')));

// Route trang chủ
app.get('/', (req, res) => {
    // Lấy ngày hiện tại
    const days = ['Chủ Nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const today = new Date();
    const dayOfWeek = days[today.getDay()];

    res.render('home', { today: dayOfWeek });
});
app.get('/shop', (req, res) => {
    const products = [
        { name: "Sách Lập Trình", price: 150000, image: "/images/book.jpg" },
        { name: "Bút Máy", price: 50000, image: "/images/book.jpg" },
        { name: "Laptop", price: 15000000, image: "/images/book.jpg" }
    ];
});

    app.get('/shop', (req, res) => {
        res.render('shop', { products });
 });

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
