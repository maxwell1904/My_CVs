# Chuỗi session học cùng agent

Đây là đường học mặc định. `GIAO_AN.md` cung cấp giải thích và đáp án để tra trong từng session. Mỗi session dự kiến 45–65 phút, có thể chia thành nhiều lần chat. Thời gian là ước lượng, kết thúc session dựa vào evidence và nhu cầu nghỉ của An.

## Nhịp chung

- 5 phút retrieval từ session trước bằng câu mới.
- 10–15 phút vấn đề, mô hình và một worked example.
- 15–20 phút predict → run → trace → explain → variation.
- 10–15 phút Q&A/interview từng câu, trộn phần mới với phần cũ.
- 3 phút ghi misconception, evidence và restart line.

Để qua một concept, An cần nói được cơ chế, dự đoán một ví dụ và giải thích một biến thể chưa lộ đáp án. Ghi riêng khả năng tự viết code. Nếu còn lỗ hổng, sửa bằng một bài nhỏ hoặc lưu review cụ thể. User có thể yêu cầu tiếp tục, agent ghi rõ phần đang pending.

## Lịch 5 ngày

| Ngày | Session | Phần dự phòng |
| --- | --- | --- |
| 1 | S01–S03 | vá reference/map/snapshot |
| 2 | S04–S06 | ôn React và Redux bằng lời |
| 3 | S07–S09 | trace async và response |
| 4 | S10 → N01 → S11–S12 | N01 60–90 phút; rút phần payment sâu nếu thiếu giờ |
| 5 | S13–S15 | mock và sửa hai điểm yếu nhất |

Ba session/ngày khoảng 2.5–3 giờ tập trung. Ngày 4 có thêm N01 nên khoảng 4–4.5 giờ; có thể làm nửa đầu N01 cuối ngày 3. Dành thêm thời gian nghỉ và retrieval. Nếu có 4 ngày, gộp S11–S13 thành hai phiên project/English, giữ N01 60 phút và hai mock ở ngày cuối. 37 chương PDF là tài liệu tra cứu; không đọc tuyến tính hết sách. Thứ tự mặc định: S01–S10 → N01 → S11–S15. N02 chỉ mở rộng khi core đã rõ.

## S01 — Value, object và reference

- Nối luồng: một row cart bị đổi dù mình tưởng đã copy.
- Đọc: chương 05. Chạy `node worked/predict.mjs reference` sau prediction.
- Thí nghiệm: vẽ a → object ngoài → object con; tạo shallow copy rồi đổi nested field.
- Biến thể: sửa bằng copy đúng path, hỏi identity nào đổi và object nào còn dùng chung.
- Q1: const có làm object bất biến không?
- Q2: outer object khác nhau có bảo đảm object con khác nhau không?
- Q3: nếu chỉ sửa field primitive ở outer copy thì object gốc có đổi không?
- Qua bài khi giải thích được reference graph và dự đoán được biến thể.

## S02 — Array operations và pure calculation

- Nối luồng: filter catalog và tính total cart.
- Đọc: chương 05–06, contracts của filterProducts/calculateTotal/changeQuantity.
- Thí nghiệm: hai sản phẩm, tự tính total, trace map/filter/reduce từng lượt. Agent có thể chạy và hiển thị từng intermediate value.
- Thực hành tùy mức: điền một function trong work hoặc annotate pseudocode.
- Q1: filter khác map ở output nào?
- Q2: quantity=0, NaN và 1.5 phải được xử lý theo contract nào?
- Q3: vì sao new array chưa bảo đảm old row không bị sửa?
- Qua bài khi tính tay, lần callback và giải thích input có bị mutate không.

## S03 — Render và state snapshot

- Nối luồng: bấm Add hai lần nhưng count tăng một.
- Đọc: chương 10. Chạy `node worked/predict.mjs snapshot`.
- Thí nghiệm: vẽ render hiện tại / handler / update queue / render tiếp.
- Biến thể: setCount(5) rồi updater +1, sau đó đảo thứ tự.
- Q1: console.log(count) ngay sau setter thấy gì và vì sao?
- Q2: replacement update và functional updater khác nhau thế nào?
- Q3: biến local bình thường và React state khác vai trò nào?
- Qua bài khi giải thích được queue bằng giá trị cụ thể.

## S04 — Props, forms, keys và layout

- Nối luồng: input quantity/search và row identity.
- Đọc: chương 08–09, 11. Mở app theo README, đọc ProductRow và form trong App.tsx.
- Thí nghiệm: state → value → onChange → state; button submit; hai row có note local rồi xóa row đầu.
- Biến thể: index key thành id; value undefined thành string; breakpoint cart chuyển xuống dưới.
- Q1: label và button type giải quyết chuyện gì?
- Q2: key sai có thể làm note gắn nhầm item vì sao?
- Q3: input value là string thì quantity number cần chuyển đổi ở đâu?
- Qua bài khi trace được form và identity, chỉ được rule CSS responsive.

## S05 — Redux và derived total

- Nối luồng: ProductRow và Cart cùng dùng cart.
- Đọc: chương 12, 14–15; app/src/store.ts.
- Thí nghiệm: [] → Add city → Add city → qty=3 → remove. Tự tính action/state/count/total từng bước.
- Biến thể: giới hạn qty=5; liệt kê validator/reducer/UI/tests cần xét.
- Q1: dispatch/reducer/selector/store tham gia ra sao?
- Q2: vì sao total derive và email form giữ local?
- Q3: cú pháp mutate draft của Toolkit khác mutate state ngoài reducer thế nào?
- Qua bài khi mô tả data flow và preservation của before state.

## S06 — Closure và Promise timeline

- Nối luồng: callback nhớ giá trị cũ, request hoàn thành khác thứ tự bắt đầu.
- Đọc: chương 06–07. Chạy drills closure và async sau prediction.
- Thí nghiệm: hai logger từ hai giá trị; sync/Promise/timer timeline.
- Biến thể: request độc lập dùng Promise.all, request cần id phải chờ.
- Q1: closure giữ gì từ nơi tạo function?
- Q2: await tạm dừng phần nào?
- Q3: Promise.all reject có tự hủy request khác không?
- Qua bài khi giải thích đúng thứ tự và captured value.

## S07 — Effects và UI states

- Nối luồng: search bắt đầu tải, thành công rỗng hoặc lỗi.
- Đọc: chương 12–13; effect trong App.tsx và app/src/api.ts.
- Thí nghiệm: app Success/Empty/Error, Retry. Kể dependency query/scenario/attempt.
- Biến thể: bỏ attempt, hỏi tại sao retry không bắt đầu request mới theo effect.
- Q1: empty khác error thế nào?
- Q2: vì sao tính total không cần effect?
- Q3: effect setup/cleanup và Strict Mode liên quan ra sao?
- Qua bài khi xác định external synchronization và từng trạng thái UI.

## S08 — Race và cleanup

- Nối luồng: query B nhưng result A.
- Đọc: chương 13, 19; race test trong App.test.tsx.
- Thí nghiệm: drill race, Slow mode, viết mốc A-start/B-start/B-finish/A-finish.
- Biến thể: customer/invoice, hoặc stale rejection sau newer success.
- Q1: debounce có giải quyết response đã bắt đầu không?
- Q2: abort và ignore giải quyết những phần nào?
- Q3: vì sao test mock không honor abort vẫn hữu ích?
- Qua bài khi chọn đúng request được commit và giải thích biến thể mới.

## S09 — HTTP, data contract và TypeScript

- Nối luồng: response về nhưng shape/status không đúng.
- Đọc: chương 08, 16–17; ví dụ fetch trong sách.
- Thí nghiệm: agent tạo response giả nhỏ trong work để so 404, invalid shape và empty success. Chưa cần backend.
- Biến thể: unknown JSON có price string thay number; narrow union theo status.
- Q1: fetch 404 có chắc vào catch không?
- Q2: as Product[] có kiểm JSON runtime không?
- Q3: ẩn button có enforce quyền trên server không?
- Qua bài khi phân biệt HTTP outcome, runtime data và compiler types.

## S10 — Tests, debug và Git

- Nối luồng: chứng minh fix đúng và giữ behavior cũ.
- Đọc: chương 18–20; chọn một test domain, một reducer, một component.
- Thí nghiệm: agent chạy test liên quan, An giải thích từng oracle. Gây một bug hẹp trong bản sao rồi chẩn đoán bằng evidence.
- Biến thể: total sai do mapping hay do selector; viết kế hoạch test checkout fail rồi retry thành công.
- Q1: test pass chứng minh được phạm vi nào?
- Q2: evidence nào phân biệt API sai với UI mapping sai?
- Q3: commit một bugfix cần đọc diff và kiểm gì?
- Qua bài khi giải thích được assertion và chọn evidence phân biệt hypotheses.

## N01 — Next.js big plus, catalog qua server/client

- Điều kiện: đã làm S04, S07 và S09; ưu tiên học sau S10. Thời lượng 60–90 phút, có thể chia đôi.
- Đọc: chương 21 và 37; next-lab/README.md. Agent chạy next-lab độc lập ở cổng 3001, chủ động xử lý setup.
- 0–15 phút: vẽ layout → server page → readCatalog → props → CatalogClient. Phân loại file trước khi mở toàn bộ source.
- 15–35 phút: prediction initial HTML và API request; full reload, kiểm HTML/Network/server log. So search local với Reload HTTP.
- 35–55 phút: Success → Empty → Error → Success; ghi status/body/UI. Giải thích error giữ list lần thành công gần nhất.
- 55–70 phút: bản sao bỏ use client rồi build; giải thích error và khôi phục. Phân biệt RSC, HTML prerender và hydration.
- Q1: catalog lần đầu có cần gọi /api/catalog không? Vì sao?
- Q2: Client Component có đồng nghĩa HTML chỉ sinh ở browser không?
- Q3: Server Component và per-request SSR có phải cùng một khái niệm không?
- Q4 English: explain the first page load and the Reload button in this lab.
- Biến thể: thêm favorite state vào Server page; đề xuất boundary nhỏ hợp lý. Hỏi vị trí đọc window/localStorage an toàn.
- Qua bài khi tự trace được hai đường data, dự đoán network và sửa boundary bằng lý do. Ghi riêng phần chỉ đã xem.
- Thiếu giờ: giảm payment SDK, performance sâu và N02; vẫn giữ lab Next ngắn cùng React/Redux core.

## N02 — Extension tùy chọn

Chọn một task trong next-lab/README.md, 30–45 phút. Không chặn mock. Phải có prediction, kiểm behavior và giải thích biến thể. Không đánh dấu N02 hoàn thành chỉ vì N01 pass.

## S11 — InterDev Marketplace đọc hiểu

- Nối luồng: application thành công nhưng list refresh lỗi.
- Đọc: chương 24, 36. Chạy marketplace.mjs success rồi refresh-error.
- Thí nghiệm: server state/UI state; requests/searchTerm/derived counts; chỉ mở source đúng flow nếu cần.
- Biến thể: mutation reject, hoặc reload success với filter đang bật.
- Q1: action nào nên retry khi chỉ refresh fail?
- Q2: bộ đếm nào derive từ source data?
- Q3: phần này An đã tự đọc, tự kiểm hoặc để Agents làm tới đâu?
- Qua bài khi giải thích partial success và contribution đúng evidence.

## S12 — Payment timeline và project walkthrough

- Nối luồng: provider đã capture nhưng app chưa confirm.
- Đọc: chương 22–25, 35. Chạy payment-flow.mjs success/cancel/sync-error.
- Thí nghiệm: providerCaptured và appConfirmed; chọn một flow project để nói 60 giây.
- Biến thể: callback tới muộn, user đóng UI hoặc nhận timeout.
- Q1: buyer approved có đồng nghĩa app đã xác nhận escrow không?
- Q2: vì sao không lập tức yêu cầu trả tiền lần nữa khi sync lỗi?
- Q3: state UI và ref callback có vai trò khác nhau nào?
- Qua bài khi tách được các bước xác nhận; phần payment sâu có thể để review nếu Marketplace/core còn yếu.

## S13 — English và kinh nghiệm thực tế

- Đọc: chương 23, 26, 36. Dùng ghi chú project đã xác nhận.
- Thí nghiệm: self-intro 60 giây, một FSoft issue, một MobiFone flow, một agent-assisted capstone explanation.
- Biến thể: interviewer đổi ngôn ngữ giữa câu, hỏi how did you verify hoặc what was your own contribution.
- Q1: why frontend after QC?
- Q2: explain a bug from symptom to evidence and verification.
- Q3: tell me which part you personally changed, reviewed or coordinated.
- Qua bài khi nghe hiểu câu hỏi, diễn đạt đúng scope và mô tả cơ chế bằng câu đơn giản.

## S14 — Mock A

- Dùng chương 32, đóng đáp án. Interview theo thứ tự gợi ý, mỗi lần một câu.
- Dùng snippet/dữ liệu mới ở JS/React/Redux và ít nhất một câu project/English và hai câu Next từ N01 (một câu cơ chế, một tình huống).
- Trong pha chấm, ghi nguyên ý user đã trả lời, misconception và mức hỗ trợ; sau đó mới giải thích.
- Kết quả: chọn hai lỗ hổng gây ảnh hưởng lớn nhất cho S15, giữ review list cụ thể.

## S15 — Repair và Mock B

- Retrieval hai điểm yếu của S14; dùng ví dụ mới và chờ lý do.
- Sau sửa, Mock B đổi cart thành booking/notification hoặc search thành invoice.
- Kết quả: ghi phần demonstrated, phần còn pending, câu trả lời cần luyện và cheat sheet cá nhân tối đa một trang trong NOTES.
- Nếu vẫn sai cơ chế, chọn bước tiếp theo cụ thể. Hoàn thành số session không tự biến mọi concept thành đã hiểu.

## Kết thúc mỗi buổi học

Nếu một buổi chứa nhiều session, interview cuối buổi gồm 5 câu: hai câu trọng tâm mới, một câu từ buổi trước, một tình huống biến thể và một câu English. Hỏi từng câu, chưa lộ đáp án. Nếu user nghỉ giữa session, dùng 2–3 câu phù hợp phần đã học. Reasoning keys cho agent ở SESSION_KEYS.md.
