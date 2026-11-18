# Reasoning keys cho agent

Đọc key của session hiện tại sau khi đã chuẩn bị câu hỏi. Không đính kèm key trong lượt yêu cầu An dự đoán. User có thể xem đáp án khi muốn; sau đó kiểm hiểu bằng biến thể mới.

## Cách chấm từng câu

Ghi câu trả lời thực tế và căn cứ. `Đúng cơ chế` khi giải thích được nguyên nhân với dữ liệu. `Một phần` khi kết luận đúng nhưng lý do thiếu/sai. `Cần sửa` khi mô hình dẫn tới dự đoán sai. Với câu đang được gợi ý, ghi mức hỗ trợ. Dùng câu mới để kiểm lại sau feedback.

## S01

Q1 const chặn gán binding, property object vẫn có thể đổi. Q2 shallow copy giữ nested reference. Q3 primitive field ở outer copy đổi riêng, nested shared mới gây ảnh hưởng qua alias.

Cần quan sát: user vẽ được hai outer objects và một nested object. Nếu nhầm, bỏ React và dùng hộp/reference hai tầng. Biến thể mới đổi tên field và vị trí mutation.

## S02

Q1 filter giữ phần tử theo predicate, map tạo giá trị theo callback. Q2 quantity phải nguyên 1..10 theo contract, invalid throw ở foundation; reducer app chọn ignore invalid. Q3 new array có thể vẫn chứa object cũ.

Cần quan sát: tổng được tính tay; user nêu khác biệt contract throw và reducer ignore. Nếu chưa rõ return, trace callback một lượt trước.

## S03

Q1 handler còn đọc snapshot hiện tại. Q2 replacement tính sẵn value, updater nhận value trước trong queue. Q3 biến local không có React-managed persistence/update mechanism như state.

Biến thể setCount(5) rồi +1 thành 6; đảo thành cuối 5. Nêu giả định count ban đầu 0 và các calls cùng handler. Nếu user chỉ thuộc output, thay giá trị ban đầu và số updater.

## S04

Q1 label đặt tên/link control; button type quyết định submit/default behavior. Q2 index định danh theo vị trí khiến row state có thể gắn sang item khác khi list thay đổi. Q3 event input thường string, parse/validate ở boundary hợp lý; chuỗi rỗng có thể là trạng thái nhập tạm.

Cần quan sát: user trace hai chiều controlled input và chỉ được CSS breakpoint. Với keys, dùng row note khác nhau và xóa item đầu.

## S05

Q1 action qua dispatch tới store/reducer, subscribers/selector dẫn UI update phù hợp. Q2 total derive tránh hai nguồn lệch; email chỉ form dùng. Q3 Immer draft trong slice tạo immutable result, mutate state ngoài reducer là hành vi khác.

Cần quan sát: Add city hai lần tạo một row qty=2, total=840000. Before state còn nguyên. Nếu lẫn danh từ, gắn từng danh từ với dòng thật trong store.ts.

## S06

Q1 closure truy cập lexical environment nơi function tạo. Q2 await tạm dừng phần tiếp diễn async function đó, caller/browser còn thực thi việc khác. Q3 Promise.all reject không tự cancel requests khác.

Ví dụ async trong repo cho A/B/promise/timer. Chỉ dùng quy tắc đó trong ngữ cảnh ví dụ, tránh tuyên bố mọi môi trường có cùng mọi ordering. Nếu chưa hiểu, dùng hai callback và bảng thời gian.

## S07

Q1 empty là success không records, error chưa có kết quả hợp lệ. Q2 total tính từ state hiện tại, effect không cần cho derivation đó. Q3 cleanup dọn effect cũ, Strict Mode development kiểm thêm lifecycle.

Bỏ attempt khiến đổi attempt không retrigger effect nếu nó không còn dependency, các dependency khác chưa đổi. Error mode retry vẫn error là expected của service cố định.

## S08

Q1 debounce giảm start frequency, không kiểm quyền commit của response đang chạy. Q2 abort dừng công việc được hỗ trợ; ignore chặn obsolete result cập nhật UI. Q3 mock không honor abort kiểm stale-commit guard độc lập.

Cần quan sát: B hiện hành được giữ dù A resolve/reject tới sau. Khi sai, chỉ cho hai request và bốn mốc trước khi thêm React.

## S09

Q1 fetch thường resolve Response với 404, phải xét ok/status. Q2 assertion type không validate JSON runtime, dùng checks/schema khi cần. Q3 server enforce quyền/ownership.

Cần quan sát: phân biệt lỗi HTTP, schema và error UI. TypeScript union narrow theo discriminator, unknown cần kiểm trước dùng.

## S10

Q1 test chỉ chứng minh condition/oracle/môi trường đã kiểm. Q2 kiểm request/response rồi mapping/state/selector/UI để tìm boundary đầu lệch. Q3 đọc diff, contract, regression liên quan và scope trước commit.

Chưa chấp nhận câu “test rồi” nếu thiếu expected cụ thể. Muốn phân biệt giả thuyết phải chọn observation cho kết quả khác nhau giữa chúng.

## N01

Q1 không: page gọi readCatalog trực tiếp và truyền initialProducts qua props; Reload mới fetch API. Q2 không: client subtree có thể có HTML prerender, sau đó hydrate cho event/state. Q3 không: RSC là mô hình component, SSR/SSG liên quan lúc tạo HTML. Lab chọn force-dynamic cho /catalog; không suy ra mặc định của mọi route.

Q4 cần nêu server read → serializable props → initial HTML/client hydration; button fetch → check status → JSON validation → state → UI. Browser fetch no-store và header no-store được chọn rõ ở lab, không dạy quy tắc cache mặc định từ trí nhớ.

Biến thể favorite: tách một Client Component nhỏ nhận data/children hợp lệ, giữ phần đọc data server. Bỏ use client sẽ lỗi vì module hiện dùng state/ref/events. Thêm use client không biến top-level window thành an toàn trên initial server render; đọc browser API trong event hoặc effect phù hợp. Regular callback từ Server page không serialize như plain data; Server Functions là cơ chế riêng ngoài N01.

Empty 200 cho []; Error 503 vào catch, giữ list lần success gần nhất (có thể là []). Selected IDs giữ local độc lập với filter/list; không suy ra chỉ đếm visible items. Full browser reload reset selection. N01 không dùng Redux để tránh thêm phạm vi; S05 vẫn kiểm Redux bằng app chính.

## N02

Extension chưa có code baseline. Chấm theo task agent/user đã chọn, docs phiên bản và evidence thực tế. Không tự ghi hoàn thành.

## S11

Q1 retry reload khi mutation đã confirm; không mặc định apply lại. Q2 visible list/count derive từ requests và current user/filter. Q3 phần contribution theo user xác nhận và evidence đã thực hiện.

Script success cho server/UI applied=1/1; refresh-error cho 1/0. Mô phỏng console dùng await cho output ổn định; page chính gọi refresh không await. Không gán mô phỏng thành integration test hệ thống thật.

## S12

Q1 approval, provider capture và app confirmation là các bước khác nhau. Q2 sync fail có thể để payment outcome chưa rõ phía app, cần reconcile trước retry mutation. Q3 state hiển thị capturing, ref giữ callback hiện hành cho SDK.

Script cancel false/false, success true/true, sync-error true/false. Không kết luận toàn backend idempotent chỉ từ UI. Nếu user đang quá tải, giữ mô hình hai cờ, hoãn SDK.

## S13

Không có script đúng duy nhất. Cần trả lời trúng câu hỏi, nói scope thật, nêu dữ liệu/behavior/evidence và dùng English dễ hiểu. Chấm nội dung tách độ trôi chảy. InterDev agent-assisted, FSoft maintenance TS/Playwright; không đổi thành đã tự code FE ở FSoft.

## S14–S15

Dùng rubric chương 32 để tổng hợp, giữ evidence từng câu. Hai lỗi cùng gốc snapshot nên vá mô hình gốc. S15 dùng input/context mới để kiểm lại. Điểm tự học không phải điểm tuyển dụng BeyondEdge.

## Quyết định tiếp tục

- Có cơ chế, prediction và biến thể độc lập: ghi demonstrated, thêm retrieval buổi sau.
- Kết luận đúng nhưng lý do yếu: ghi practicing, hỏi một counterexample.
- Mô hình sai: giải thích một bước, chạy ví dụ nhỏ rồi hỏi biến thể mới.
- Đã xem đáp án: ghi exposed, chưa suy ra demonstrated.
- User muốn đi tiếp dù còn lỗi: giữ pending review cụ thể và làm theo ưu tiên user.
