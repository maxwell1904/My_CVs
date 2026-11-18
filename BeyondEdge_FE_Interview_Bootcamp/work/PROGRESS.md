# Tiến độ sprint 15/11/2026

## Điểm tiếp tục

C0 trong docs/ONE_DAY.md. Sau giải thích, An nhận ra shallow copy chỉ copy lớp ngoài và tự dự đoán đúng biến thể `b.item = { qty: 5 }`: a.qty=1, b.qty=5. Trước đó An nhầm `friend = player` là hai object, nên vẫn cần kiểm độc lập alias và phân biệt sửa object con với thay property bằng một ví dụ mới. Trạng thái practicing, không suy đã thành thạo toàn bộ C0.

Ghi chép thử Copilot đã chuyển work/archive-copilot theo yêu cầu user, không dùng để suy trình độ. Lịch dài S01–S15/N01 là thư viện, sprint C0–C6 là ưu tiên hiện tại.

| Block | Trạng thái | Evidence / bước tiếp |
| --- | --- | --- |
| C0 | practicing | sau hướng dẫn dự đoán đúng nested reassignment; cần kiểm alias và nested mutation bằng ví dụ mới |
| C1 | unseen | callback → hell → Promise/await/dependency |
| C2 | unseen | React/Redux và problem |
| C3 | unseen | HTTP/debug/tests |
| C4 | unseen | contribution và một flow project |
| C5 | unseen | Next server/client/HTTP |
| C6 | unseen | mock và hai lỗ hổng |

Không có evidence mới từ việc agent tạo tài liệu. Sau mỗi block ghi câu trả lời thực tế, hỗ trợ, misconception và restart line. Nếu user muốn nhanh hơn, tăng cụm giải thích rồi kiểm bằng biến thể.
