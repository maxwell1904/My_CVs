# N01 — Next.js từ chính flow catalog

Lab riêng cho điểm **Next.js big plus** trong JD. Học sau S10 và trước mock, khoảng 60–90 phút; nếu mắc, chia hai lần 45 phút. Giữ React/Redux là nền, dành một lượt thực nghiệm Next bắt buộc trong lịch chính. Agent đọc chương 37 và N01 trong SESSIONS.md, hỏi prediction trước khi chạy.

## Chạy độc lập

Node 22.12+ hoặc 24. Không cần app Vite, InterDev, database, tài khoản hoặc biến môi trường.

```sh
npm ci
npm run dev
```

Mở http://127.0.0.1:3001/catalog. Nếu đang ở gốc bộ ôn, thêm `--prefix next-lab` sau `npm`. Dừng dev bằng Ctrl+C trước khi build/start production cùng lab.

```sh
npm run build
npm start
```

Ở terminal khác, khi server đã sẵn sàng:

```sh
npm run check:http
```

HTTP smoke kiểm initial HTML có product names, API success/empty/503/400, POST không hỗ trợ 405 và page không tồn tại 404. Không thay thế kiểm tương tác browser hoặc chứng minh người học đã hiểu.

## Đọc đúng 5 chỗ

| File | Vai trò | Câu phải trả lời |
| --- | --- | --- |
| `app/layout.tsx` | khung HTML, nav, metadata | vì sao hai page cùng header? |
| `app/catalog/page.tsx` | Server Component đọc data | dữ liệu tới Client qua đâu? |
| `app/catalog/CatalogClient.tsx` | state, search, selection, reload | tương tác nào cần JavaScript browser? |
| `lib/catalog.ts` | ba record local, dùng phía server | request đầu có gọi `/api/catalog` không? |
| `app/api/catalog/route.ts` | HTTP GET, status + JSON | page UI khác endpoint JSON thế nào? |

`lib/types.ts` là contract chung và kiểm shape JSON runtime, được import vào client. Giữ module chỉ server tách khỏi module client. Đừng đặt secret trong props hoặc public environment variables.

## Bốn thí nghiệm có prediction

1. Full reload `/catalog`. Dự đoán product names có ở initial HTML không; request `/api/catalog` đã xảy ra chưa. Chạy HTTP smoke, xem Network và terminal server. **Giải thích trong chương 37.**
2. Search `garden`, Select Pocket Garden. Dự đoán mỗi action có cần request tới server không. Quan sát UI/Network. Server dữ liệu ban đầu không biến mọi interaction thành server interaction.
3. Clear search, chọn Empty rồi Reload. Tiếp theo Error rồi Reload. Dự đoán status code, body và list còn gì trước mỗi lần. Cuối cùng Success rồi Reload. Error giữ last successful list: nếu lần thành công gần nhất là Empty, list vẫn rỗng và có alert.
4. Trong bản sao bài tập, bỏ `"use client"` khỏi CatalogClient, dự đoán lỗi rồi build. Khôi phục. Thử chuyển state lên page mà không chuyển boundary và giải thích vì sao lỗi quay lại. Giữ source gốc sạch sau thí nghiệm.

Ghi prediction, actual, request/status và lời giải thích vào `work/NOTES.md` ở thư mục bộ ôn. Đọc đáp án chỉ là `exposed`; giải thích biến thể mới mới cung cấp evidence.

## Giới hạn có chủ đích

- Đây là catalog minh họa: giá trị selection là local, không cart/checkout, không auth hoặc persistence.
- Server page gọi `readCatalog()` trực tiếp; button Reload mới gọi HTTP route. Không dựng một request vòng về chính server ở lúc build.
- Page catalog đặt `dynamic = "force-dynamic"` để render theo request trong cấu hình lab. Không bật Cache Components. Không dùng lab này để suy luận mọi app Next đều SSR theo request.
- GET handler trả `Cache-Control: no-store`; browser fetch cũng chọn `cache: "no-store"`. Chưa dạy cache/revalidate/ISR/Server Actions sâu.
- `"use client"` tạo boundary cho code client, không bảo đảm mọi dòng chỉ chạy browser. Browser-only API nên nằm trong effect/event thích hợp; tránh đọc `window` ở top-level/render có thể chạy server.
- Danh sách có thể được prerender thành HTML trước khi client hydration gắn tương tác. React Server Components và SSR nói về hai khía cạnh khác nhau.
- HTTP reload khóa thao tác lặp bằng ref và disabled button; đây không phải bài race song song S08. Search local nên không cần debounce/request cancellation.

## N02 — mở rộng khi core đã rõ (30–45 phút)

Chỉ chọn **một**: thêm route động `/catalog/[id]` trả `notFound()` khi không có id, hoặc thêm loading/error boundary có chỗ suspend/throw thật. Đọc docs đúng phiên bản trước khi dùng `params` vì API có thể đổi; với App Router hiện tại cần await params. Prediction và test hai id hợp lệ/không hợp lệ trước. N02 chưa được implementation trong bản giao; không kể như tính năng sẵn có.

## Docs theo phiên bản

Next 16.4.6, React 19.3.1, lockfile đi kèm. Đối chiếu [server/client](https://nextjs.org/docs/app/getting-started/server-and-client-components) và [route handlers](https://nextjs.org/docs/app/getting-started/route-handlers). Các record, UI, error mode và thí nghiệm được tạo riêng cho bộ ôn này.
