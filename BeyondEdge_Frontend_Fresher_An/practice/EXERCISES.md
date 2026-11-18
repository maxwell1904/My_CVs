# Làm trước khi xem core.mjs
1. Tự viết filterProducts, updateQuantity và calculateTotal trong file khác; dự đoán output rồi so reference tests.
2. `node --test core.test.mjs` kiểm ví dụ đáp án (8 tests), không chứng minh mày đã làm bài.
3. Tạo app React/TS, ProductList + SearchInput + ProductCard; dùng dữ liệu giả trong test.
4. Implement cart slice bằng Redux Toolkit: addItem (merge theo id), removeItem, changeQuantity. Local query; global cart; total derived selector. Xem quick start chính thức trong giáo án.
5. Viết reducer tests cho add trùng, remove, quantity biên. Chạy chúng trên code của mày.
6. Viết component test: search -> list đúng; add -> total đổi; loading/error/retry -> UI đúng. Đây là phần chưa có đáp án chạy sẵn; phải tự làm.
7. Mock API delay 500ms với hai response đảo thứ tự, chứng minh không bị response cũ ghi đè.
8. Demo 90 giây bằng tiếng Anh. Nêu rõ đây là practice.
