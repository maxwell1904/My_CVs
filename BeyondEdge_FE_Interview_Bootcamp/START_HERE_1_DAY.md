# Bắt đầu ở đây: technical interview ngày 16/11/2026

Đọc file này và AGENTS.md trước. Ngày chuẩn bị 15/11/2026; phỏng vấn offline 14:00 ngày 16/11, BeyondEdge Cần Thơ, Jackson Tran (Technical Manager). Không gửi mail hoặc đổi CV trong chế độ học.

## Bối cảnh đủ để dạy ở chat mới

- An có nền JavaScript/Node.js nhưng lâu không dùng, vừa báo không nhớ object và spread `...a`. Cần khôi phục cú pháp trước khi hỏi reference/React. Đây là kiến thức đang rỉ, chưa đủ căn cứ kết luận mọi phần đều từ zero.
- User xác nhận ghi chép PROGRESS/NOTES từ lần học thử GitHub Copilot có thể bỏ. Đã lưu bản cũ để tham chiếu lịch sử, không dùng làm evidence hiện tại. Trong chat ngày 15/11, agent mới giải thích object/property/access/update; An chưa trả lời bài kiểm tra product.price. Không ghi là đã hiểu.
- User muốn nhịp nhanh, có thể học nhiều hơn một concept trong một lượt nếu giải nghĩa và nối ví dụ rõ. Không ép chat chỉ một câu quá nhỏ mãi. Sau một cụm 10–20 phút, hỏi 2–3 câu kiểm hiểu, chờ trả lời rồi điều chỉnh.
- Một chị từng phỏng vấn được user thuật lại có hỏi hiểu vấn đề và đóng góp project. User làm rõ callback hell chỉ là ví dụ của dạng hỏi hiểu, không phải chủ đề chắc xuất hiện. Không chuyển chương trình thành problem-first. An suy đoán không có code tay, chưa có xác nhận. Ưu tiên reasoning, snippet và nói Anh–Việt; giữ một bài pseudocode ngắn dự phòng.
- InterDev implementation chủ yếu do Agents tạo, An prompting/coordinating. Không mặc định user tự code những bullet Developed trong CV. Chuẩn bị giải thích flow và contribution thật, không dựng bug hay số liệu thành chuyện đã xảy ra.
- FSoft: OJT TypeScript/Playwright maintenance, điều tra test fail, locator/assertion/wait, Git; test cases manual đã chuẩn bị. MobiFone: internship frontend có thật; chi tiết từng màn hình chưa xác minh. LEGO: CV ghi MERN/auth/cart/orders, chưa kiểm source trong bộ này.
- English là trọng tâm tuyển dụng đã được HR nhấn mạnh. Học ý bằng Việt rồi nói lại English đơn giản, tránh bắt thuộc bài diễn văn.

## File tối thiểu và thứ tự

1. `docs/ONE_DAY.md`: giáo án chính hôm nay, C0–C6, có ví dụ và answer keys. Chỉ đọc block đang dạy để tiết kiệm context.
2. `work/PROGRESS.md`, `work/NOTES.md`: evidence, không suy agent-run thành learner mastery.
3. `docs/GIAO_AN.md`: chỉ tra chương khi ONE_DAY chỉ tới, không bắt đọc hết 37 chương.
4. `worked/rescue.mjs`: primitives/object/spread/array/callback/callback-hell/promise/parallel/closure/race. Hỏi prediction rồi agent chạy một case.
5. `app/`, `next-lab/`: lab độc lập có sẵn. Không setup InterDev.

## Lệnh bắt đầu chat mới

“Đọc START_HERE_1_DAY.md và AGENTS.md. Ôn cấp tốc cho tao theo docs/ONE_DAY.md, bắt đầu C0 từ object/property vì tao đang quên cú pháp. Dạy theo cụm nhanh: lý thuyết → ví dụ → phân tích → tình huống vận dụng; giữ hỏi sâu CV/project riêng; cuối block kiểm hiểu và ghi checkpoint. Ưu tiên lý thuyết và giải thích snippet, nhưng hình thức interview chưa xác nhận. Đừng nạp toàn bộ giáo án và đừng tự ghi tao đã hiểu.”

Điểm bắt đầu: cho product có name/price, chỉ cách đọc và thay price, rồi yêu cầu An giải thích output. Sau đó nối alias → spread → nested copy. Không mở ngay bài ba reference comparisons.

## Bàn giao ngắn cuối block

Ghi C-block đang học, concept đã tự giải thích được, misconception, mức hỗ trợ, file/lệnh đã chạy và câu hỏi kế tiếp chưa lộ đáp án. C0–C6 là lịch cấp tốc hiện tại; S01–S15/N01 vẫn là thư viện lịch dài. User có thể yêu cầu chậm/nhanh bất kỳ lúc nào.

## Sửa hướng sau phản hồi của An

Bản 14 trang trước rút props/state quá mức. ONE_DAY hiện có bài React đầy đủ với ví dụ Quantity/SharedName, events/render/snapshot, forms/lifting, keys, hooks và Redux; C3 có nền HTML/CSS/HTTP/TS/tests trước tình huống. Đừng dùng bản PDF/ZIP 14 trang đã cache. Ưu tiên bản file hiện tại trong repo; sách dài để đào sâu.

Docs React đã đối chiếu khi sửa: https://react.dev/learn/passing-props-to-a-component ; https://react.dev/learn/state-a-components-memory ; https://react.dev/learn/synchronizing-with-effects .

Cập nhật: An yêu cầu đề mục gọi tên chính xác từng khái niệm và giải thích từ lạ khi xuất hiện. Tra bảng từ điển ở đầu C0, không yêu cầu học thuộc cả bảng. C0 hiện practicing: đã phân biệt nested reassignment sau giải thích, cần kiểm alias/nested mutation bằng ví dụ mới.
