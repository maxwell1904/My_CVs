# Kiểm chứng khi giao bộ ôn

Ngày 10/11/2026, tại workspace CVs. Các kiểm tra dưới đây xác minh tài liệu/code tham chiếu. Chưa ghi nhận An hoàn thành bài học.

## App độc lập

- Cài dependencies thành công, package-lock.json được giao cùng repo.
- `npm --prefix app test` — 25 tests pass trên 4 files, gồm domain, reducer, component interaction và local async service.
- `npm --prefix app run build` — TypeScript check và Vite production build pass.
- Browser thật ở desktop 1280 và viewport hẹp 390: đã quan sát catalog, cart add hai lần, total 840.000 VND, pending checkout khóa thao tác, order success xóa cart, error mode và retry control.
- Các kiểm tra browser là smoke thủ công bằng automation UI, chưa phải một E2E suite đóng gói trong repo.
- App dùng Promise local, không cần InterDev/NestJS/PostgreSQL/Supabase/PayPal hay API key.

## Next.js N01 độc lập

- Cài dependencies và khóa Next 16.4.6, React 19.3.1 trong package-lock.json. Next root được giới hạn ở thư mục lab.
- `npm --prefix next-lab run build` — compile, TypeScript và production build pass. Route / prerender static, /catalog và /api/catalog dynamic trong cấu hình baseline.
- Chạy production server cổng 3001; `npm --prefix next-lab run check:http` pass: initial server HTML có tên products, API success/empty/503/400, POST 405 và page 404.
- Browser desktop: search garden còn một sản phẩm, select tăng counter; clear search, Empty → Error → Success cho list/alert đúng contract; full reload reset selection về 0.
- Ảnh baseline ở docs/next-preview.png. Browser smoke chưa đóng gói thành E2E test suite; chưa kiểm mobile Next riêng.
- Không có DB, auth, payment hoặc API ngoài. N02 chưa implementation. Chưa xác minh learner mastery hoặc production Next experience.

## Foundation và ví dụ

- 6 prediction drills cho output đúng với bảng trong giáo án.
- `TARGET=reference node --test contracts/fundamentals.test.mjs` — 13 pass.
- Starter `work` ban đầu có 3 pass, 10 fail đúng thiết kế TODO. Không coi là lỗi hỏng bộ lab.
- Marketplace có success và refresh-error, payment có success/cancel/sync-error. Tất cả chạy bằng Node độc lập.

## Tài liệu

- PDF có 47 trang, 37 bookmark chương, mục lục có link, text tiếng Việt trích xuất được.
- Kiểm tra text bounds và ảnh render toàn bộ trang để phát hiện clipping, bảng/code tràn và trang dư ít nội dung.
- Source InterDev chính được đối chiếu tĩnh ở commit `c851ee9244b7ea580a4be331b18ac8a00dcf8103` từ repo do An cung cấp.
- Không chạy hoặc xác minh integration/backend/payment thật của InterDev. Ví dụ rút gọn có ghi rõ những khác biệt với source.
- Phần InterDev phản ánh xác nhận implementation chủ yếu do Agents hỗ trợ, không gán authorship từ việc tìm thấy code.

## Sprint 15/11/2026

- PDF sprint riêng: 14 trang, 8 bookmarks; đã render và kiểm toàn bộ trang, text bounds không tràn. Sách 5 ngày giữ nguyên.
- `worked/rescue.mjs`: 12 cases chạy Node độc lập và so output expected đều pass. Đây là ví dụ tham chiếu, chưa có learner mastery.
- START_HERE_1_DAY, ONE_DAY và AGENTS ưu tiên C0–C6, cho phép cụm kiến thức nhanh và problem reasoning.
- Theo user, ghi chép học thử Copilot cũ không dùng để đánh giá; đã lưu archive local, reset checkpoint hiện tại về chưa kiểm độc lập.
- Không sửa CV đã gửi, không xác nhận giả định không code tay, không gán contribution mới từ source.

## Sprint v2: lý thuyết trước vận dụng

- Thay bản 14 trang bằng PDF v2 21 trang, 8 bookmark; đã render toàn bộ và kiểm text bounds, giữ code block cùng heading phù hợp.
- C2 có component/JSX/props/state/events/render/forms/lifting/keys/hooks/Context/reducer/Redux theo định nghĩa → ví dụ → trace → vận dụng. C0/C3/C5 bổ sung lý thuyết nền.
- app/src/learning/PropsStateExample.tsx và app/tests/learning.test.tsx: 5 bài kiểm props/state/lifting, nằm trong tổng 30 tests pass trên 5 files. Typecheck và Vite build pass.
- Tests dùng DOM mô phỏng, không phải browser E2E; chưa đánh dấu learner hiểu. App chính và Next lab không đổi behavior trong lần sửa này.
- Callback hell được ghi đúng là ví dụ user đưa về dạng hỏi hiểu; chưa xác nhận đề/cấu trúc interview. Hướng dẫn agent dùng theory → example → analysis → application, không problem-first.

## 15/11: nhãn khái niệm và từ điển

- PDF hiện tại có 25 trang; đã render, rà bố cục, text bounds và xác nhận tên alias/shallow copy/destructuring.
- Bổ sung bảng thuật ngữ và ví dụ ngắn; phân tách đề mục JS, hooks và Redux. Nội dung tiến độ C0 cập nhật dựa trên câu trả lời user, không suy phần chưa kiểm là đã hiểu.
