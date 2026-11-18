# Bài tập theo ngày

Đọc contract trước, dự đoán trước chạy. Gợi ý có thể mở theo nhu cầu. Bộ này chuẩn bị phỏng vấn, không bắt buộc gõ lại toàn bộ app để được chuyển chương.

## D1 — JS và state

### F1. Filter và total

Trong work/fundamentals.mjs, filterProducts nhận mảng có name, bỏ space hai đầu query, so không phân biệt hoa/thường, giữ input nguyên. Query rỗng trả đủ, không match trả []. calculateTotal cộng price * quantity, mảng rỗng trả 0.

H1 — Lấy query chuẩn hóa trước khi lặp. H2 — filter giữ phần tử, reduce tích lũy. Kiểm test expected 200 bằng tay.

### F2. Update không sửa input

changeQuantity nhận items/id/quantity. Chỉ row trùng id có quantity mới. Id không có giữ giá trị cũ. Invalid quantity (không nguyên hoặc ngoài 1..10) throw RangeError. Row không đổi giữ reference cũ.

H1 — Copy array chưa tự copy row. H2 — Dùng map, trả object mới đúng row. H3 — Kiểm validity trước loop.

### O1. Không gõ code

Vẽ biến → object cho reference drill. Đổi nested field thành settings.theme. Giải thích old object thay đổi vì sao. Vẽ queue hai setState replacement rồi hai functional updater. Nói English 45 giây.

## D2 — async và Redux

### F3. Latest request guard

createLatestGuard trả begin và isCurrent. begin tăng request identity. isCurrent chỉ true cho id mới nhất. Hai guard độc lập. Chạy contract tests sau prediction.

H1 — Cần một biến sống qua nhiều lần gọi. H2 — Closure giữ current riêng cho mỗi instance.

### R1. Đọc store bằng tay

Bắt đầu cart rỗng. Add city, Add city, change qty thành 3, Remove city. Viết action/state/total sau mỗi bước. Đổi rule thành tối đa 5 và liệt kê file/test cần sửa trước khi sửa thật.

### A1. Slow mode

Bật slow, gõ o rồi orbital. Dự đoán delay. Đọc cleanup/active/abort, giải thích từng dòng. Không sửa code tới khi vẽ được timeline.

### O2. Biến thể phỏng vấn

Người dùng chọn customer A rồi B. Invoice A về cuối và ghi đè B. Giải thích cách sửa bằng pseudocode 8 dòng, rồi nói ba câu English về root cause.

## D3 — tests và debug

### T1. Viết thêm test

1. Sau một lần submitPracticeOrder reject, lần retry resolve thành công và chỉ xóa cart sau success.
2. Query cũ reject sau query mới success, UI không bị chuyển sang error cũ.
3. Category không có result cho empty UI.

H1 — Mock service để kiểm thứ tự, assert kết quả user thấy. H2 — deferred Promise giúp chủ động resolve/reject. Tham khảo existing race test sau khi đã có prediction.

### B1. Cố tình gây lỗi rồi restore

Chỉ trong nhánh bản sao bài tập, bỏ active guard và abort để thấy test race fail. Restore, đổi total thành cached value sai rồi tìm test bắt. Ghi expected/actual/hypothesis/evidence.

### O3. TypeScript

Giải thích tại sao as Product[] không validate JSON, unknown khác any, union status giúp tránh state nào. Tự nói câu “compiler pass nhưng runtime data sai” bằng một ví dụ.

## N01 — Next.js sau phần core

Làm bốn thí nghiệm trong next-lab/README.md, đọc chương 37. Vẽ hai đường: initial server read → props và button → HTTP → state. Giữ 60–90 phút trong ngày 4; có thể chuyển nửa đầu sang cuối ngày 3. Trả lời bốn câu N01 trong SESSIONS.md trước mock. N02 tùy chọn, chưa có implementation mẫu.

## D4 — project và English

### P1. Evidence card

Mỗi experience/project có một card trong NOTES. Đọc từng bullet CV đã gửi, đặt câu “How did you verify that?” ở dưới. Tìm source cũ khi có. Dùng schema/endpoint từ giáo án như mô hình phân tích cho tới khi đã kiểm lại.

### E1. Chuyển ngôn ngữ

Nói self-intro English, chuyển sang Việt khi bắt đầu Redux. Sau đó giải thích bug story English. Nếu vấp từ, mô tả behavior đơn giản. Không học một đoạn độc thoại dài để né câu hỏi follow-up.

### M1. Mock A

Dùng chương 32, tự ghi âm hoặc nhờ người hỏi chọn câu ngẫu nhiên. Kết thúc ghi hai misconception và làm một ví dụ nhỏ cho mỗi misconception.

## D5 — retrieval và transfer

### M2. Mock B

Đóng tài liệu, đổi cart thành booking hoặc notification. Yêu cầu người hỏi đổi sang English giữa câu. Chấm theo rubric trong giáo án, ưu tiên evidence và variation.

### Final check

Nói 12 câu chương 33 không nhìn. Câu nào chỉ nhớ tên mà thiếu ví dụ, quay đúng concept. Next.js N01 đã nằm trong lịch chính; dùng thêm hai câu server/client và data-flow trong mock. Performance sâu và N02 để sau nếu còn thời gian.
