# Notes sprint một ngày

## 15/11/2026 — bàn giao

- User có nền Node.js, đang quên cú pháp object/spread. Agent đã giải thích object/property và access/update, chưa có đáp án độc lập trong phiên này.
- User muốn học theo cụm nhanh, thêm callback hell/problem và hỏi sâu project/CV. Hình thức không code tay là suy đoán, chưa xác nhận.
- Ghi chép học thử Copilot được user cho phép bỏ; archive-copilot chỉ là lịch sử, không dùng chấm tiến độ.
- Bắt đầu C0, chưa mở đáp án prediction thay user.

## Mẫu checkpoint

Block/concept — prediction và lý do — actual — misconception — mức hỗ trợ — biến thể mới — câu nói English — restart line.

## Project evidence card

Tên project — việc trực tiếp đã xác nhận — flow đã tự trace — bug có thật/evidence — phần Agents/team — chưa xác minh — ba follow-up.

## Sửa giáo án theo phản hồi (chưa là phiên học)

User muốn lý thuyết đầy đủ trước ví dụ/phân tích rồi mới problem. Callback hell chỉ là ví dụ dạng hỏi hiểu. Agent đã mở rộng chương nền React/Web và ví dụ props/state; chưa có learner answer mới, không tăng trạng thái học.

## 15/11/2026 — C0 alias và shallow copy

- Ban đầu An dự đoán `const friend = player; friend.score = 20` tạo hai object và player.score vẫn 10; đã giải thích hai biến trỏ cùng object.
- An nhận ra spread là shallow copy; sau gợi ý phân biệt nested mutation và reassignment, dự đoán đúng biến thể `b.item = { qty: 5 }`: a.item.qty=1, b.item.qty=5, giải thích là gán object khác vào item.
- Mức hỗ trợ: đã được hướng dẫn và xem sơ đồ, chưa kiểm lại độc lập alias/nested mutation; trạng thái practicing.
- Tiếp theo: một ví dụ mới phân biệt `b.child.qty = ...` với `b.child = {...}`; sau đó object/array destructuring.
