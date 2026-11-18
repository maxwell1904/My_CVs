LỊCH SỬ KHÔNG DÙNG ĐÁNH GIÁ: user cho phép bỏ ngày 15/11/2026.

# Ghi chép của An

Chưa có bằng chứng học tập được ghi. Điền sau mỗi lượt tự làm.

## 2026-11-14 — S01 A1: object/reference

- Prediction trước chạy: `b.item.qty = 2` khiến `a.item.qty` thành 2; kết luận đúng, chưa giải thích lý do. Chưa biết cú pháp object spread `...a`; đã được giải thích và xem output agent-run.
- Actual: `2 false true` — outer objects khác nhau, nested object cùng reference.
- Biến thể `b.item = { qty: 9 }`: dự đoán `a.item.qty` là 9; chưa phân biệt đổi property trên outer object `b` với mutate nested object dùng chung.
- Mức hỗ trợ: đã xem output, nhưng cú pháp `...a` chưa rõ; đổi tên biến và lặp lại cùng ví dụ gây confusing. Với ví dụ hero, An tự diễn đạt đúng: `{}` là object, `const` cố định binding chứ không khóa object, và cùng object có thể được nối từ biến khác.
- Tiếp theo: kiểm tra bằng alias mới để xem một biến sửa object thì biến kia quan sát gì; sau đó nối lại với shallow copy. Chưa đánh dấu demonstrated.

## Một concept / một vòng

- Ngày và bài
- Prediction trước chạy
- Lý do của prediction
- Actual sau chạy
- Dòng/boundary đầu tiên giải thích khác biệt
- Misconception đã sửa
- Biến thể mới và prediction
- Teach-back Việt 60 giây
- Teach-back English 45 giây
- Ôn lại cuối buổi / ngày sau / sau 2 ngày

## Một project

- Flow thật còn nhớ
- File hoặc evidence đã kiểm lại
- Phần mình phụ trách
- Phần thuộc team
- Request / response / state / UI
- Bug thật và verification
- Chi tiết còn chưa xác nhận

## Sau mock

- Câu bị kẹt
- Câu mình đã nói
- Cơ chế đúng
- Ví dụ phản chứng
- Câu trả lời mới ba câu
- Lần retrieval kế tiếp
