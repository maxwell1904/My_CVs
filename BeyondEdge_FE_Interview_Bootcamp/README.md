# Cập nhật ưu tiên ngày 15/11: ôn một ngày

Bản hiện tại đã mở rộng lý thuyết và ví dụ sau phản hồi props/state thiếu nền; thay bản sprint 14 trang trước. Bắt đầu bằng `START_HERE_1_DAY.md` và `docs/ONE_DAY.md` (C0–C6). Đây là đường chính cho interview 14:00 ngày 16/11. Bản PDF sprint riêng giao cùng bộ; sách dài bên dưới dùng tra cứu. Chạy `node worked/rescue.mjs object`, rồi alias/spread/nested/array/callback/callback-hell/async/promise/parallel/closure/race sau prediction. Ghi chép Copilot cũ đã lưu archive, không dùng đánh giá hiện tại. Xem lệnh bàn giao chat mới trong START_HERE.

# Frontend interview bootcamp — Nguyễn Phúc An

Bộ ôn 4–5 ngày cho BeyondEdge Frontend Fresher, theo CV đã gửi Jena ngày 10/11/2026. Đọc từ `docs/GIAO_AN.md` hoặc PDF được giao cùng bộ này. Bắt đầu bằng chương 01–04.

## Học cùng agent

Mở thư mục bộ ôn làm workspace để agent đọc `AGENTS.md`. Nếu công cụ không tự nạp file này, dùng lời nhắn dưới đây.

> Đọc AGENTS.md và work/PROGRESS.md trong repo này. Dạy tao theo chuỗi S01–S10 → N01 → S11–S15 trong docs/SESSIONS.md, từng concept một, có Q&A và interview cuối buổi. Bắt đầu bằng câu prediction tại điểm tiếp tục, chờ tao trả lời rồi mới chạy và phân tích. Ghi tiến độ theo evidence sau bài học.

Agent dùng `work/PROGRESS.md` để tiếp tục qua các chat và `work/NOTES.md` để giữ giải thích, lỗi hiểu và bài biến thể. Đường học mặc định là 15 session nền và N01 Next.js bắt buộc ở `docs/SESSIONS.md`, khoảng 3 session/ngày. Agent dùng `docs/SESSION_KEYS.md` để đánh giá câu trả lời và thích nghi. Giáo án PDF cung cấp phần giải thích theo chủ đề để tra trong từng session.

## Bắt đầu trong 10 phút

Mở terminal ở thư mục này. Node 22.12+ hoặc Node 24 được khuyến nghị cho bộ công cụ đã khóa phiên bản.

```sh
node --version
node worked/predict.mjs reference
```

Viết prediction trong `work/NOTES.md` trước khi chạy ví dụ. Các drill khác là `snapshot`, `closure`, `async`, `derived`, `race`. Hai bài `node worked/marketplace.mjs refresh-error` và `node worked/payment-flow.mjs sync-error` mô phỏng flow InterDev bằng code nhỏ độc lập.

Cài và chạy app tham chiếu trong terminal thứ nhất.

```sh
cd app
npm ci
npm run dev
```

Vite in URL localhost, thường là http://127.0.0.1:5173. Ctrl+C dừng server. App là công cụ thí nghiệm, có source đáp án chạy sẵn. Tránh đọc hết trước khi làm bài foundation.

Ở terminal khác, từ thư mục gốc bộ ôn.

```sh
npm --prefix app test
npm --prefix app run build
node --test contracts/fundamentals.test.mjs
```

App tests/build phải xanh. Foundation tests của `work` ban đầu đỏ vì starter còn TODO. Khi cần kiểm infrastructure và sau timebox mới xem reference.

```sh
TARGET=reference node --test contracts/fundamentals.test.mjs
```

## Cấu trúc

- `docs/GIAO_AN.md` — 37 chương, lý thuyết có cơ chế, 58 câu hỏi có reasoning key, 2 mock, 4 experience/project walkthrough, English/Việt và lịch 5 ngày.
- `worked/predict.mjs` — 6 ví dụ nhỏ về reference, snapshot, closure, async, derived state và race.
- `work/fundamentals.mjs` — 4 function learner tự làm. `NOTES.md` giữ prediction và evidence.
- `contracts/fundamentals.test.mjs` — 13 test dùng cùng contract cho work/reference.
- `reference/fundamentals.mjs` — lời giải sau timebox. Sau khi đọc, làm biến thể đóng tài liệu.
- `exercises/ROADMAP.md` — tasks, hints và bài lý thuyết theo ngày.
- `app/` — React + TypeScript + Redux Toolkit + Vitest/Testing Library.
- `next-lab/` — Next.js App Router độc lập, server page, client state/search, route handler HTTP; hướng dẫn ở next-lab/README.md. N01 60–90 phút sau S10, trước mock; N02 tùy chọn.

```sh
npm --prefix next-lab ci
npm --prefix next-lab run dev
```

Mở http://127.0.0.1:3001/catalog. Chỉ chạy Next cũng học được N01; không cần app Vite hoặc InterDev.

## Hành vi của app

Brick Desk là catalog + cart cho practice order. Query và category local, cart ở Redux. Total/count derive từ items. Quantity nguyên 1..10, add trùng tăng quantity tới giới hạn. Practice controls có Success, Empty, Error, Slow. Error là lỗi cố định, Retry còn lỗi cho tới khi chọn Success. Slow cố tình cho query ngắn trả về chậm hơn query dài để học stale response.

Catalog dùng Promise local, không gọi API HTTP thật. Email được kiểm local và không gửi lên server. Checkout là mô phỏng, không thanh toán hoặc lưu đơn thật. Cart reset khi refresh. Font web có fallback hệ thống nếu offline. Để luyện HTTP/Network với endpoint có sẵn, dùng next-lab theo chương 37/N01.

## Học lý thuyết bằng thực nghiệm

Một vòng là predict → run → trace → explain → change → retrieve. Đọc code rồi giải thích timeline. Đóng code, trả lời “vì sao” trong 45 giây. Đổi query thành customer/invoice hoặc cart thành notification để kiểm transfer. Dù interviewer không yêu cầu gõ code, chuỗi này vẫn giúp trả lời cơ chế.

## Kiểm chứng bộ lab

Baseline khi giao được ghi ở `docs/VERIFICATION.md`. Tests xanh xác minh code tham chiếu. Tiến độ của người học để trống, chỉ cập nhật sau bài tự làm. Không chép thành tích lab vào kinh nghiệm MobiFone/FSoft.

Project stories có mô hình kiến trúc luyện nói được đánh dấu giả định. Chương 24/35 đối chiếu source repo GitHub chính của An, chương 36 hướng dẫn trình bày đóng góp khi implementation do Agents hỗ trợ. Kiểm lại source project cũ trước khi dùng một tên API, schema hoặc contribution cụ thể trong interview.
