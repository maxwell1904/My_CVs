# 01 / Đích học và cách sử dụng

BEYONDEDGE FRONTEND FRESHER · NGUYỄN PHÚC AN · 10/11/2026

Bộ ôn này bám CV Frontend đã gửi chị Jena, JD React/Redux và nền JavaScript/Node.js của An. Lộ trình chính là 5 ngày, khoảng 5-6 giờ tập trung mỗi ngày, có phương án 4 ngày và phương án 3 giờ/ngày. Giờ nghỉ nằm ngoài thời gian tập trung. Kết quả cần đạt là giải thích được cơ chế, đọc được một đoạn code lạ, dự đoán lỗi và kể rõ phần việc của mình.

## Ba mức cần phân biệt

- Nhận ra thuật ngữ khi nhìn đáp án là mức làm quen.
- Nói được định nghĩa và ví dụ quen là mức nhớ.
- Dự đoán được biến thể, giải thích nguyên nhân và tìm được evidence là mức hiểu có thể dùng trong phỏng vấn.

Tài liệu ưu tiên mức thứ ba. Mỗi bài đi từ vấn đề cụ thể tới cơ chế, chạy thử, rồi quay lại trả lời lý thuyết. Viết code nhỏ phục vụ việc hiểu cả trong trường hợp buổi phỏng vấn hoàn toàn hỏi đáp.

## Bản đồ ưu tiên

| Mức | Phần ôn | Đầu ra cần có |
| --- | --- | --- |
| P0 | JS reference/closure/async, React state/hooks/effect, Redux | giải thích timeline và sửa biến thể |
| P0 | MobiFone, FSoft, InterDev, LEGO; English | 4 walkthrough và 2 bug stories |
| P1 | HTML/CSS, API, unit tests, TS, Git; Next.js N01 | ví dụ chạy được, trace server/client và trả lời 45 giây |
| P2 | Next N02, performance sâu, security/backend details | giải thích mục đích và giới hạn |

JD yêu cầu React hoặc Angular, Redux, JS/HTML/CSS, API, Git và giao tiếp tiếng Anh. Công việc có unit test. TypeScript là điểm cộng; Next.js được JD nhấn mạnh là big plus. N01/chương 37 đưa Next vào lịch chính sau React core. Lịch, rubric và đề mock trong bộ này là công cụ tự học do tài liệu thiết kế. Chưa có thông tin xác nhận cấu trúc vòng phỏng vấn thực tế của BeyondEdge.

## Điểm bắt đầu

Mở README của repo. Dành 20 phút làm bài chẩn đoán ở chương 04 trước khi đọc đáp án. Ghi câu trả lời bằng lời mình trong work/NOTES.md. Ngày đầu chưa cần xem toàn bộ code app. Bắt đầu bằng các ví dụ trong worked/ và một flow state rất nhỏ.

# 02 / Học để hiểu và nhớ sau vài ngày

## Một vòng 45 phút

| Phút | Hành động | Bằng chứng |
| --- | --- | --- |
| 0-5 | trả lời lại 2 câu hôm trước, đóng tài liệu | câu trả lời có nguyên nhân |
| 5-12 | đọc vấn đề và mô hình, xem một ví dụ | vẽ được data hoặc timeline |
| 12-17 | dự đoán output trước khi chạy | viết prediction và why |
| 17-27 | chạy, so sánh, trace từng bước | chỉ ra bước dự đoán sai |
| 27-37 | đổi một điều kiện rồi thử lại | dự đoán biến thể trước chạy |
| 37-45 | giải thích 60 giây Việt, 45 giây Anh | nói được khi đóng code |

Sau mỗi vòng nghỉ 5-10 phút. Sau hai vòng đổi từ đọc/code sang nói hoặc ngược lại. Nếu một concept chưa rõ, giảm độ lớn ví dụ. Đừng mở thêm ba framework để tìm cảm giác tiến bộ.

## Vì sao dùng tự nhớ lại

Roediger và Karpicke (2006) quan sát lợi ích của việc tự kiểm tra đối với khả năng nhớ sau khoảng trì hoãn. Karpicke và Blunt (2011) cũng nghiên cứu retrieval với nội dung khoa học. Ở đây áp dụng bằng cách đóng đáp án rồi tái dựng lời giải và thử biến thể. Hai nghiên cứu không đo xác suất đậu phỏng vấn frontend hay xác nhận một lịch 5 ngày tối ưu cho mọi người. Lịch dưới đây là quyết định thực dụng cho thời hạn của An. Nguồn đầy đủ ở chương 34.

## Lịch ôn lại

Với state snapshot học ngày 1, ôn lại cuối ngày 1, đầu ngày 2, ngày 4 và trước mock cuối. Mỗi lần dùng dữ liệu hoặc câu hỏi khác. Khi trả lời sai, xem lại đúng phần cơ chế rồi thử một câu mới sau 10-20 phút. Chưa đánh dấu hiểu chỉ vì vừa nhìn đáp án.

## Năm câu tự giải thích

1. Dữ liệu ban đầu là gì, có kiểu gì?
2. Ai giữ dữ liệu, ai được thay đổi nó?
3. Dòng nào chạy ngay, dòng nào chạy sau?
4. Thay đổi nào khiến UI được tính lại?
5. Evidence nào phân biệt hai nguyên nhân có vẻ giống nhau?

## Gợi ý tăng dần

H1 nhắc lại contract. H2 chỉ đúng vùng state/timeline cần nhìn. H3 cho pseudocode. H4 mới đọc fragment đáp án. Sau khi đã mở reference, đóng nó và làm biến thể. Với hạn gấp, timebox một lần mắc là 15-20 phút, sau đó đọc lời giải có chủ đích và ghi đúng misconception. Không cần tự hành hạ một lỗi setup cả buổi.

# 03 / Lịch 5 ngày và đường rút 4 ngày

## Kế hoạch chính

| Ngày | Nội dung chính | Phân bổ giờ | Đầu ra cuối ngày |
| --- | --- | --- | --- |
| 1 | chẩn đoán; JS; HTML/CSS; React state | 1.5 JS + 1 browser/CSS + 1.5 React + 1 luyện nói | đọc được snapshot, reference, form/list |
| 2 | effects, async/API, Redux | 1.5 effect/API + 2 Redux + 1 lab + 0.5 retrieval | lần được Add -> reducer -> selector -> UI |
| 3 | tests, TypeScript, debug, Git | 1.5 tests + 1 TS + 1 debug/Git + 1 project | 2 tests tự viết, 2 bug walkthrough |
| 4 | N01 Next.js; projects; English; mock A | 1-1.5 Next + 1.5 projects + 1 English + 1 mock | trace Next data flow; stories; mock có nhận xét |
| 5 | retrieval; mock B; vá điểm yếu | 1 ôn lại + 1 mock + 2 vá + 1 diễn tập | trả lời biến thể, sẵn CV và câu hỏi ngược |

Mỗi ngày bắt đầu bằng 15 phút tự nhớ bài hôm trước. Cuối ngày nói 5 câu lý thuyết ngẫu nhiên và ghi hai lỗi hiểu sai. Phần lớn ngày 4-5 dùng lời nói, sơ đồ và code ngắn. App đầy đủ là tài liệu thí nghiệm để quay lại kiểm chứng.

## Nếu chỉ có 4 ngày

Gộp HTML/CSS vào nửa cuối ngày 1. Giữ nguyên state/effects/Redux. Ngày 3 buổi sáng tests/TS, buổi chiều project. Ngày 4 mock và sửa lỗi. Giữ N01 Next 60 phút ở cuối ngày 3 hoặc đầu ngày 4; backend nâng cao/N02 và các bài extension đọc tùy chọn. Vẫn phải làm ít nhất một mock đóng tài liệu.

## Nếu mỗi ngày chỉ có 3 giờ

Chọn P0 trong bảng chương 01. Mỗi ngày 90 phút hiểu bằng ví dụ, 45 phút nói project/English, 45 phút retrieval/debug. Bỏ mục tiêu xây lại app đầy đủ. Tự dựng Search + Cart nhỏ từ trí nhớ đủ để kiểm cơ chế. Tổng 15 giờ chỉ là phần ưu tiên, chưa tương đương hoàn thành toàn bộ giáo án.

## Điều chỉnh theo lỗi thật

- Map/filter hoặc object copy chưa giải thích được thì dành thêm ngày 1, chia N01 thành hai phiên nhỏ sau core; hoãn N02.
- Redux còn là học thuộc định nghĩa thì làm lại store nhỏ vào ngày 3.
- Đọc hiểu tốt nhưng nói vấp thì dùng 2 vòng nói xen kẽ Việt/Anh, không tăng lượng lý thuyết.
- Project không nhớ rõ thì lấy 30 phút lục code/README cũ, chỉ ra component/route có thật rồi dựng timeline.

# 04 / Chẩn đoán đầu vào trong 20 phút

Đóng đáp án ở chương 30. Với mỗi câu ghi câu trả lời và mức chắc chắn bằng một câu lý do. Điểm dùng để phân bổ giờ, không phải dự báo đậu.

1. const b = {...a} có copy độc lập tất cả object con không? Cho ví dụ.
2. Hai lần setCount(count + 1) cùng handler tăng bao nhiêu nếu count đang 0? Vì sao?
3. Promise callback và setTimeout(0) chạy trước hay sau phần code đồng bộ?
4. Search A rồi B, B về trước A. UI cuối cùng nên hiển thị gì? Ai bảo đảm?
5. Một list có input dùng index làm key, xóa dòng đầu thì rủi ro gì?
6. Total từ cart nên lưu state riêng hay tính từ items? Khi nào cần lưu snapshot?
7. UI dispatch Redux action thì reducer, store và selector tham gia theo thứ tự nào?
8. Fetch trả 404 thì có chắc nhảy catch không?
9. CORS báo lỗi nhưng Postman chạy được, evidence nào cần xem?
10. Access token trong frontend có đủ để cấm user khác sửa tài nguyên không?
11. Cho một bug ở FSoft, tách actual/expected/evidence/fix/check.
12. Giới thiệu 60 giây bằng tiếng Anh, giải thích tại sao từ QC apply FE.

## Cách dùng kết quả

Nếu 1-3 chưa rõ, ưu tiên chương 05-07. Nếu 4-6 chưa rõ, chương 10-13. Nếu 7 chưa rõ, chương 14-15. Nếu 8-10 chưa rõ, chương 08 và 16. Nếu 11-12 chưa nói được, mỗi ngày dành thời gian chương 21-27.

## Bài nhỏ quan sát được

Tự viết filter theo tên cho hai sản phẩm. Nếu không viết được, đọc test contract rồi làm version chỉ nhận query rỗng. Sau đó mới thêm trim và lowercase. Nếu viết được nhanh, giải thích có mutate mảng đầu vào không, chi phí theo số sản phẩm và chuyện tên null đến từ API. Cách trả lời biến thể đo hiểu tốt hơn tự chấm mình từ 1 tới 5.

# 05 / JavaScript values, object và immutability

## Vấn đề

UI giữ một object cart. Một chỗ khác sửa quantity và UI hoặc history trở nên khó đoán. Muốn hiểu, vẽ binding trỏ tới object. Biến giữ reference tới object. Spread tạo object mới ở một tầng, các object con còn có thể được dùng chung.

```js
const first = { item: { quantity: 1 } };
const second = { ...first };
second.item.quantity = 3;
console.log(first.item.quantity);
```

Trước khi chạy, vẽ first -> A -> item B; second -> C -> item B. Kết quả là 3. first !== second nhưng first.item === second.item. Chạy node worked/predict.mjs reference để xem một biến thể tương đương.

## Sửa theo đúng tầng thay đổi

```js
const next = {
  ...first,
  item: { ...first.item, quantity: 3 },
};
```

Lúc này first.item.quantity còn 1. Với mảng, map tạo mảng mới nhưng object bên trong chỉ mới khi callback trả object mới. Một array spread rồi mutate row cũ vẫn làm đổi object dùng chung.

## Primitive và ép kiểu

const chặn gán lại binding. const không đóng băng object. Number('') là 0 nên cần xét chuỗi rỗng trước nếu field bắt buộc. Number('abc') là NaN. typeof NaN vẫn là 'number'. Kiểm lượng cần cả Number.isInteger và khoảng hợp lệ. Dùng === khi muốn tránh ép kiểu ngầm. Với default, 0 ?? 10 cho 0, còn 0 || 10 cho 10.

## Thí nghiệm và transfer

- Chạy reference drill, nói object nào có identity mới.
- Trong work/fundamentals.mjs hoàn thành changeQuantity. Contract yêu cầu input không bị sửa, quantity nguyên 1..10, invalid throw RangeError.
- Đổi domain thành notification read/unread. Giữ notification chưa đổi cùng identity, đổi đúng row thành object mới.
- Giải thích vì sao structuredClone không tự giải quyết thiết kế state dư thừa và không phải lựa chọn bắt buộc cho mọi update React.

## Trả lời 45 giây

VI - Em tạo object mới ở những tầng thay đổi để giữ state cũ nguyên vẹn. Copy mảng một tầng chưa đủ nếu sau đó sửa object cũ bên trong. Cách đó giúp suy luận trước/sau và hỗ trợ cơ chế so sánh reference.

EN - A shallow copy creates a new outer object, but nested objects may still be shared. For a state update, I copy the path that changes and keep the previous state intact. I would test both the new value and whether the earlier object changed.

# 06 / Functions, scope và closure

## Vì sao cần closure

Handler thường cần đọc dữ liệu từ nơi nó được tạo. Closure cho function truy cập lexical environment ngay cả khi function bên ngoài đã return. Điều cần hỏi trong React là handler này được tạo ở render nào, đóng lên giá trị nào.

```js
function createLogger(value) {
  return () => console.log(value);
}
const oldLog = createLogger(0);
const newLog = createLogger(1);
oldLog();
newLog();
```

Output 0 rồi 1. Tạo newLog không thay lexical environment cũ của oldLog. Chạy node worked/predict.mjs closure. Sau đó tự giải thích tại sao timer tạo trong một render có thể đọc count của render đó.

## Return khác log

Function tính total phải return kết quả cho caller. console.log chỉ in ra, không thay return. Callback map có dấu {} cần return rõ nếu muốn tạo value. Ví dụ items.map(item => { item.price * 2; }) tạo các phần tử undefined. Arrow expression items.map(item => item.price * 2) trả trực tiếp expression.

## Scope và this

let/const có block scope. var có function scope, hoisting và khởi tạo undefined, dễ làm loop callback cùng đọc một binding. let ở for tạo binding phù hợp từng lượt. Arrow không tạo this riêng. Với React function component hiện đại, ưu tiên hiểu closure và event handler trước khi học sâu class binding.

## Completion

Viết createLatestGuard trong work. begin tăng mã request và trả id. isCurrent so id với mã hiện tại. Gọi begin hai lần, id thứ nhất phải cũ. Closure ở đây giữ biến current riêng cho từng guard. Tạo hai guard để chứng minh chúng không chia sẻ state.

## Bẫy lý thuyết

Closure không tự gây lỗi. Lỗi stale closure xảy ra khi logic cần giá trị mới nhưng callback đang giữ snapshot cũ. Thêm dependency, functional updater hoặc thiết kế lại handler có thể giải quyết, tùy dữ liệu đang cần. Không dùng ref để che mọi dependency warning.

EN - A closure retains access to its lexical environment. In React, an event handler belongs to a particular render, so it can capture that render's state. I check when the callback was created before deciding how to fix a stale value.

# 07 / Async, Promise và timeline

## Bắt đầu bằng dự đoán

```js
console.log('A');
setTimeout(() => console.log('timer'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('B');
```

Trong tình huống đơn giản này output A, B, promise, timer. Code đồng bộ hoàn thành trước. Promise reaction vào microtask, timer callback là task chạy khi phù hợp. Số 0 không có nghĩa callback chen ngay giữa hai dòng đồng bộ. Chạy node worked/predict.mjs async.

## async/await đang làm gì

async function luôn trả Promise. await tạm dừng phần tiếp diễn của function đó và cho caller tiếp tục, không khóa toàn bộ browser. try/catch chỉ bắt rejection khi Promise được await hoặc được return đúng cách vào chuỗi xử lý. Bỏ await trong try có thể để rejection xảy ra ngoài catch như mình tưởng.

## Tuần tự hay song song

Nếu request B cần id từ A, phải đợi A. Nếu lấy profile và categories độc lập, có thể Promise.all. Promise.all reject khi một Promise reject, nhưng không tự hủy những request còn lại. allSettled cho kết quả từng tác vụ khi muốn hiển thị phần thành công riêng.

## Race thí nghiệm

Chạy node worked/predict.mjs race. Request old mất 40ms, new mất 5ms. Cả hai ghi displayed khi xong. Cuối cùng old ghi đè new. Câu trả lời “async chạy song song nên random” chưa đủ. Hãy ghi timeline 0 -> 5 -> 40 và quy tắc ai được commit state.

## Ba chiến lược phân biệt

- Debounce giảm số lần bắt đầu request khi người dùng gõ liên tục.
- Abort yêu cầu dừng request/công việc được hỗ trợ cancellation.
- Ignore hoặc request id kiểm quyền ghi kết quả vào UI khi response tới.

Debounce riêng chưa ngăn request đã bắt đầu về sai thứ tự. Abort phía client cũng không chứng minh server đã rollback một mutation. Với search, chặn stale commit là phần cần giải thích chắc.

EN - Requests may finish in a different order from the order they started. I associate the response with the current query, cancel obsolete work where possible, and ignore results that no longer belong to the active request.

# 08 / Browser, HTML và HTTP

## Một click đi đâu

Người dùng click -> browser phát event -> handler đọc input -> cập nhật state hoặc gọi API -> React render -> browser cập nhật layout/paint khi cần. DOM là biểu diễn tài liệu browser cung cấp. React component là mô tả cách tính UI. Re-render không đồng nghĩa thay toàn bộ DOM.

## Form dùng được

label liên kết input bằng htmlFor/id. name dùng khi serialize form theo cơ chế form. type=email hỗ trợ UX nhưng vẫn cần server validation. button trong form mặc định có thể submit, nút Cancel cần type=button. preventDefault ngăn hành vi mặc định của event, stopPropagation chặn lan truyền theo event path, hai cơ chế phục vụ mục đích khác nhau.

## HTTP và contract

| Tình huống | Kiểm ở đâu | Kết luận thận trọng |
| --- | --- | --- |
| 400/422 | payload và error body | dữ liệu/validation chưa hợp lệ |
| 401 | session/token/request | cần xác thực hoặc phiên hết hạn |
| 403 | policy và quyền | request không được phép |
| 404 | URL/resource id | endpoint hoặc tài nguyên không tìm thấy |
| 409 | trạng thái hiện tại | xung đột nghiệp vụ |
| 429 | rate limit headers | giảm tốc và theo policy retry |
| 5xx | response/request id | lỗi server hoặc dependency, cần evidence |

Mã HTTP phải được đọc cùng contract của hệ thống. 200 với field sai vẫn có thể làm frontend lỗi. Fetch không tự reject chỉ vì status 404, phải kiểm response.ok. Rejection còn có thể đến từ network, abort hoặc parse JSON.

## CORS và DevTools

CORS do browser kiểm theo nguồn và header phản hồi. Postman thành công không bảo đảm browser được phép đọc response. Kiểm request URL, Origin, preflight OPTIONS nếu có, response headers, credentials và Console. Không gán mọi lỗi fetch thành CORS.

## Bài nói lại

Mở Network ở một app thật, chọn một request và kể method, URL, query/payload, status, response và đoạn code dùng dữ liệu. App luyện của bộ này dùng Promise local, vì vậy catalog không tạo request HTTP trong Network. Muốn thực hành HTTP, dùng ví dụ fetch chương 16 với một endpoint hợp lệ của dự án riêng.

# 09 / CSS layout và accessibility

## Mô hình hộp

Với border-box, width gồm content, padding và border. Margin ở ngoài hộp. Nếu child tràn, xem width/min-width của parent và nội dung dài trước khi thêm overflow:hidden. Trong flex/grid, min-width:0 cho vùng text co lại khi cần có thể giải quyết tràn do kích thước nội tại.

## Chọn layout

Flex phù hợp sắp xếp theo trục và phân bổ khoảng cách. Grid mô tả hàng/cột. Responsive cần thay cấu trúc theo bề rộng khả dụng. App lab dùng catalog + cart trên desktop và xếp dọc dưới 760px. Breakpoint là quyết định của bài tập dựa trên nội dung.

```css
.workspace {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 350px;
}
@media (max-width: 760px) {
  .workspace { grid-template-columns: 1fr; }
}
```

## Cascade, position, stacking

Inspect rule thực sự thắng trong DevTools. Specificity tham gia sau các yếu tố như origin, importance và cascade layer. Inline style không nên được mô tả là luôn thắng mọi CSS. absolute định vị theo containing block thích hợp, thường là ancestor có position khác static. z-index chỉ có nghĩa trong quan hệ stacking context tương ứng.

## Accessibility thực dụng

Button thật nhận keyboard/focus phù hợp. Mọi input có tên truy cập. Loading dùng status, lỗi cần thông báo rõ. Disabled cần đi cùng lý do người dùng thấy được. Focus ring không bị xóa để trang trông sạch. Test Tab, Shift+Tab, Enter, zoom và màn hẹp. Màu là một kênh bổ sung, tránh chỉ dùng xanh/đỏ để truyền trạng thái.

## Thí nghiệm 20 phút

Mở lab ở 1280px và 390px. Thử tên sản phẩm dài 80 ký tự. Sửa min-width/wrapping theo evidence. Sau đó giải thích code rule nào khiến sidebar chuyển xuống dưới. Không tính việc nhìn screenshot là bằng chứng đã kiểm keyboard.

EN - I start with semantic HTML and a layout that adapts to available space. I inspect the box model and parent constraints when something overflows, then verify keyboard access and visible focus along with the visual layout.

# 10 / React render, props và state snapshot

## Render là một lần tính

Function component nhận props, đọc state hiện tại và trả JSX. Trong một render, count là giá trị của render đó. Setter yêu cầu React xử lý một update, không gán lại biến count đang được handler dùng. Sau update, render mới có giá trị mới.

```js
const [count, setCount] = useState(0);
function onClick() {
  setCount(count + 1);
  setCount(count + 1);
  console.log(count);
}
```

Ở click đầu, log 0 và kết quả count sau xử lý là 1. Hai biểu thức đều tính 0+1. Với setCount(previous => previous + 1) hai lần, mỗi updater nhận kết quả trước đó trong queue nên thành 2. Chạy worked/predict.mjs snapshot để xem mô hình queue JS thuần. Đó là mô hình minh họa, không phải implementation nội bộ React.

## Props và luồng dữ liệu

Parent giữ source state, child nhận product hoặc callback. Child gọi onAdd(product) để đề nghị thay đổi. Không mutate props của parent. Khi nhiều sibling cần dữ liệu, đặt state ở common owner hoặc store dùng chung nếu nhu cầu phù hợp.

## State và ref

State phù hợp dữ liệu cần phản ánh trên UI. Ref lưu value qua render nhưng thay ref.current không yêu cầu render. App dùng ref làm chốt submit trong lúc request đang pending. Đừng dùng ref cho total hiển thị rồi mong UI tự cập nhật.

## Bài hiểu không cần code tay

Vẽ ba cột render 0, click handler, render 1. Điền count mỗi nơi, update queue và label được hiển thị. Đổi thứ tự hai updater thành setCount(5), setCount(c=>c+1). Kết quả 6. Đổi ngược thì cuối 5. Nêu rõ vì sao.

EN - State is a snapshot for a render. Calling a setter schedules an update, while the current handler still sees its existing snapshot. When the next value depends on the previous value, a functional updater expresses that dependency explicitly.

# 11 / Components, forms, list và keys

## Chia component theo trách nhiệm

App điều phối catalog query/scenario và effect. ProductRow hiển thị một sản phẩm, dispatch Add. Cart đọc store, đổi quantity và xử lý practice order. Chia như vậy để theo luồng dữ liệu dễ hơn, không tách mọi dòng JSX thành component.

## Controlled input

value thuộc state, onChange cập nhật state. Khởi tạo string rỗng giúp input có source nhất quán. Nếu value từ API có thể undefined, cần normalize hoặc xử lý loading trước. Với number input, event.target.value vẫn là string. Chuỗi rỗng là một trạng thái nhập tạm thời, không nên vội biến thành 0 nếu cần cho user xóa để nhập lại.

## List identity

key giúp React gắn identity các phần tử qua những lần thay đổi list. Dùng id ổn định. Nếu index làm key và xóa dòng đầu, state của row trước có thể gắn sang item khác. Nếu key=Math.random(), mỗi render tạo identity mới, có thể remount và mất input/focus. Key không tự xuất hiện trong props của child.

## Bài thử

Tạo hai row có input local note. Nhập note ở row thứ hai. Xóa row đầu. Dự đoán note đi đâu khi key=index, rồi đổi key=id và thử lại. Với lab hiện tại, đọc key={product.id} và key={item.id}, giải thích vấn đề được tránh.

## Validation và submit

Client validation giúp phản hồi nhanh. Server vẫn cần kiểm dữ liệu và quyền. Khi submit, hiện trạng thái đang xử lý và khóa thao tác xung đột. Khi lỗi, giữ input cần sửa và có lời nhắc hữu ích. Khi thành công, chỉ cập nhật phần state phù hợp response đã xác nhận.

## Trả lời hỏi sâu

“Tại sao không gom email vào Redux?” Vì chỉ form checkout dùng nó. “Khi refresh mất cart?” Store memory bị tạo lại, nếu yêu cầu giữ cần persistence riêng. “Có lỗi khi chọn qty rỗng?” Lab dùng select 1..10 để loại trạng thái nhập đó, còn number input cần policy khác.

# 12 / Derived state và effect đúng mục đích

## Đừng tạo hai nguồn sự thật

Cart items chứa price/quantity, total có thể tính từ items. Nếu giữ thêm total trong state rồi tự cập nhật ở add/remove/change, bỏ sót một nhánh sẽ lệch. Cũng vậy, filteredProducts thường tính từ products/query/category.

```js
const visible = products.filter(matchesCurrentFilters);
const total = items.reduce((sum, item) =>
  sum + item.price * item.quantity, 0);
```

Một order đã tạo lại cần lưu snapshot giá tại thời điểm giao dịch ở server. Đó là business record có mục đích riêng. Không lấy nguyên tắc derived UI để nói mọi giá trị đã tính đều không được lưu.

## Effect đồng bộ với hệ thống bên ngoài

Effect hữu ích khi đồng bộ network, subscription, timer hoặc widget ngoài React. Tính filtered list từ props/state thường thực hiện trong render. Gửi order do click submit nằm trong handler. Đưa POST order vào effect theo cart thay đổi có thể tạo mutation ngoài ý muốn.

## Dependency và cleanup

Dependency thể hiện các reactive values effect đọc. Bỏ query khỏi dependencies có thể làm request giữ query cũ. Thêm một object mới tạo ở render vào dependency có thể khiến effect chạy lại liên tục. Cleanup hủy đăng ký, clear timer hoặc đánh dấu request cũ không còn hiệu lực.

## Strict Mode

Trong development, Strict Mode có các kiểm tra bổ sung, gồm chạy thêm setup/cleanup của effect để phát hiện thiếu cleanup. Nếu thấy hai lần fetch khi dev, kiểm lifecycle và cleanup, so production behavior khi cần. Tắt Strict Mode không sửa được một effect thiếu an toàn.

## Drill

Trong App.tsx tìm effect. Kể vì sao query/scenario/attempt nằm trong dependency. Nếu bỏ attempt, Retry làm gì? Nếu bỏ active guard và service không tôn trọng abort thì test race có bắt lỗi không? Nếu effect cleanup không gọi controller.abort thì còn tốn công việc cũ dù ignore có ngăn UI sai?

EN - I use effects to synchronize with external systems. Values that can be calculated from current props and state are usually derived during rendering. Cleanup matters when an earlier effect starts work that should no longer affect the current UI.

# 13 / Async UI, race và error state

## State machine tối thiểu

Catalog đi từ loading tới success hoặc error. Success có thể chứa mảng rỗng. Empty là kết quả hợp lệ, còn error là việc chưa lấy được kết quả. Một discriminated union giúp diễn đạt những trạng thái được phép và dữ liệu đi kèm.

```ts
type CatalogState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; products: Product[] };
```

Với UI phức tạp, có thể giữ data cũ khi refetch và gắn trạng thái refreshing. Lab này chủ động thay bằng loading để dễ quan sát. Hãy giải thích lựa chọn UX rồi mới thay thiết kế.

## Đọc timeline của lab

1. Render query='o', effect tạo controller A và active A=true.
2. Người dùng gõ thêm, React render query='orbital'.
3. Cleanup A đánh active A=false, abort A.
4. Setup B tạo controller B, active B=true.
5. Response B tới, chỉ B được commit.
6. Nếu A vẫn resolve vì service không hủy thật, guard active A ngăn ghi đè.

Chuyển Practice controls sang Slow / race drill. Gõ 'o' rồi 'orbital' thật nhanh. Đọc service delay và tự vẽ thời gian. App.test.tsx còn dùng mock cố tình không hỗ trợ abort để kiểm guard stale response độc lập với implementation service.

## Lỗi và Retry

Retry tăng attempt để effect bắt đầu công việc mới. Error mode là lỗi cố định, retry vẫn lỗi là expected. Chọn Success để mô phỏng service hồi phục. Không coi retry lặp lại là fix root cause. Khi cần phân biệt lỗi network, validation và permission, dựa vào contract response và evidence.

## Completion bằng lời

Người phỏng vấn đưa snippet chỉ có setData(await search(query)). Hãy nêu bốn câu trước khi sửa. Request có thể đảo thứ tự. Response cũ có thể ghi state mới. Effect cần cleanup/current-request check. UI cần phân biệt loading/error/empty. Sau đó viết 5-10 dòng pseudocode, không phải một thư viện query hoàn chỉnh.

## Transfer

Đổi search product thành chọn customer rồi load invoice. Customer B được chọn nhưng invoice A còn hiện là bug dữ liệu nghiêm trọng hơn hiệu ứng nháy. Cùng một cơ chế stale response, khác mức độ ảnh hưởng. Khi trình bày, nối cơ chế kỹ thuật với hậu quả người dùng.

# 14 / Redux từ nhu cầu đến data flow

## Vấn đề cụ thể

ProductRow tạo thay đổi cart, Cart hiển thị quantity và tổng. Nếu mỗi component giữ cart riêng, hai nơi có thể lệch. Store tạo một nguồn shared state. Redux phù hợp khi cần luồng update rõ, nhiều phần dùng chung state và tooling giúp lần action/state.

```text
click Add
  -> dispatch(addItem(product))
  -> store chạy cart reducer
  -> next cart state
  -> subscribers kiểm selected values
  -> component cần update render lại
  -> total được tính từ items mới
```

## Bốn danh từ cần nói đúng

Action là mô tả việc xảy ra, thường có type/payload. Dispatch gửi action vào store. Reducer nhận state/action và tính next state theo quy tắc. Selector đọc/derive dữ liệu từ state. Store giữ state và cơ chế cập nhật/subscription. Middleware có thể tham gia quanh dispatch, ví dụ thunk xử lý công việc async.

## Giải thích bằng dữ liệu lab

Trước Add city, items=[]. addItem payload có id city và price 420000. Reducer thêm quantity 1. selectCount trả 1, selectTotal trả 420000. Add lần hai tìm cùng id và tăng quantity thành 2. Total thành 840000. Query vẫn local vì chỉ catalog cần nó.

## Khi nào không cần Redux

Một form nhỏ chỉ một component dùng có thể dùng useState. Lifting state lên parent giải quyết chia sẻ giữa vài sibling. Context chuyển value tới descendant, còn Redux cung cấp mô hình store/action/reducer, tooling và subscription phù hợp. Context với useReducer có thể làm nhiều bài toán tương tự. Chọn theo độ phức tạp và convention team.

## Câu hỏi người phỏng vấn có thể xoáy

- “Đưa mọi state vào Redux có đồng bộ tốt hơn không?” Tăng state global cũng tăng coupling và lượng event khó lần. Giữ đúng owner.
- “Redux tự gọi API?” Store/reducer thuần không tự tải data. Dùng logic async như thunk hoặc query layer.
- “Refresh có giữ state?” Cần persistence/hydration riêng.
- “Sao selector đổi reference lại quan trọng?” React-Redux theo dõi selected value. Tạo object mới mỗi lần có thể làm render thừa. Đo trước khi tối ưu.

EN - I keep the cart in Redux because product actions and the cart summary need a shared source of truth. A component dispatches an action, the reducer calculates the next state, and selectors provide the values used by the UI. Search text can remain local to the catalog.

# 15 / Redux Toolkit, Immer và async

## Đọc code store.ts

configureStore tạo store với cart reducer. createSlice gom initial state, reducer cases và action creators. Provider truyền store tới cây React. Typed useAppDispatch/useAppSelector giữ inference RootState/AppDispatch. Đọc type RootState được suy từ store thay vì viết lại một bản có thể lệch.

```ts
addItem(state, action: PayloadAction<Product>) {
  const existing = state.items.find(item =>
    item.id === action.payload.id);
  if (!existing) {
    state.items.push({ ...action.payload, quantity: 1 });
    return;
  }
  existing.quantity = Math.min(10, existing.quantity + 1);
}
```

Cú pháp ở đây cập nhật draft do Immer quản lý trong case reducer. Kết quả Redux state vẫn tuân theo immutable update. Đem state lấy từ store ra ngoài rồi tự push là thao tác khác và phá mô hình cập nhật.

## Reducer cần deterministic

Không fetch, không random order id, không đọc Date.now để quyết định business outcome trong reducer. Thực hiện side effect bên ngoài, đưa kết quả cần thiết qua action. Trong app lab, order được xử lý tại handler rồi dispatch clearCart sau success.

## Async thunk và server state

Một async flow thường có pending/fulfilled/rejected. createAsyncThunk cung cấp lifecycle actions cho request, còn reducer quyết định lưu status/data/error. Request id vẫn cần được xét nếu nhiều request cạnh tranh. RTK Query hỗ trợ fetching/caching/invalidation, đáng hiểu mục đích trước khi thêm vào bài gấp này.

## Test để hiểu Immer

Lấy before có quantity 1, dispatch add, after quantity 2. before vẫn 1. Nếu trước và sau cùng thay thành 2, cần tìm mutation ngoài reducer draft hoặc helper dùng chung. Test trong store.test.ts kiểm điều này bằng giá trị thực, không chỉ kiểm tên action.

## Bài sửa rule

Đổi max quantity từ 10 thành 5 trong một nhánh riêng. Tìm tất cả nơi contract bị ảnh hưởng, gồm UI options, validator, reducer cap và tests. Viết giải thích tại sao sửa đúng một Math.min có thể chưa đủ. Sau thí nghiệm restore để giữ baseline tài liệu.

EN - Redux Toolkit uses Immer in slice reducers, so draft updates are translated into immutable state updates. I still keep network side effects outside the reducer, and I test both the resulting state and preservation of the previous state.

# 16 / API integration, validation và security

## Fetch mẫu để đọc

```ts
async function readProducts(signal: AbortSignal) {
  const response = await fetch('/api/products', { signal });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const data: unknown = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Expected an array');
  }
  return data;
}
```

Đây là ví dụ HTTP, không được gọi trong app lab. Array.isArray mới kiểm được container. Để dùng Product[], còn phải kiểm từng row có id/name/price hợp lệ. Type assertion data as Product[] chỉ làm compiler tin mình, không kiểm JSON runtime.

## API contract cần hỏi

Tên field, kiểu dữ liệu, nullable fields, pagination, sort/filter, error shape, timezone, monetary units và quyền. Phân biệt price VND nguyên với một giá trị thập phân được biểu diễn bằng currency nhỏ nhất. Phải thống nhất client/server. Giá checkout có thẩm quyền thuộc server, không tin total do browser tự gửi.

## Authentication và authorization

Authentication trả lời user là ai. Authorization quyết định user được làm gì với resource cụ thể. Ẩn button theo role chỉ cải thiện UX. Backend phải kiểm quyền. User đổi resource id trên request vẫn cần bị chặn nếu không sở hữu tài nguyên.

## Token và cookie

localStorage tiện nhưng JavaScript chạy trong origin có thể đọc, cần xét nguy cơ XSS. HttpOnly cookie hạn chế JS đọc cookie nhưng cần xem CSRF, SameSite, Secure và kiến trúc session. Không có một lựa chọn đúng cho mọi hệ thống. Tuyệt đối không đặt secret backend trong bundle FE hoặc biến môi trường được xuất ra client.

## Payment và retry

Khi POST timeout, trạng thái có thể chưa rõ vì server đã xử lý trước khi response mất. Idempotency key và kiểm trạng thái server giúp tránh tạo hai giao dịch. Disable button giảm double click từ UI, chưa xử lý retry hoặc nhiều tab. App lab chỉ mô phỏng order local, chưa triển khai payment/idempotency backend.

## English

“I treat the API response as external data. TypeScript describes the expected shape, while runtime validation checks what actually arrived. For permissions and checkout totals, the server remains authoritative even when the frontend validates input and hides unavailable actions.”

# 17 / TypeScript để diễn đạt điều mình biết

## Bắt đầu từ data shape

Product có id string, name string, category string, price number. CartItem thêm quantity. Prop ProductRow nhận Product và disabled boolean. Type giúp phát hiện lỗi truyền string vào quantity trước khi chạy.

```ts
type Result<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };
function describe(result: Result<Product[]>) {
  if (result.status === 'error') return result.message;
  return `${result.data.length} products`;
}
```

Sau check status, compiler narrow đúng union branch. Nếu tạo ba optional fields không ràng buộc, có thể biểu diễn trạng thái error nhưng thiếu message. Union giúp đặt điều kiện có cấu trúc.

## unknown, any và narrowing

any tắt nhiều kiểm tra và lan tới nơi dùng value. unknown buộc kiểm trước thao tác. catch nhận unknown nên kiểm instanceof Error trước đọc message. Optional chaining tránh lỗi truy cập khi nullish, không chứng minh field nghiệp vụ bắt buộc đã đủ.

## Generics và utility types

Generic giữ quan hệ type giữa input/output, không có nghĩa luôn viết abstraction. Với fetch JSON, Promise<T> không tự tạo runtime validator. Pick chọn field, Partial làm các property tùy chọn ở một tầng, Readonly hạn chế gán qua kiểu ở một tầng. Không nhầm những utility này với deep cloning hoặc freeze runtime.

## Drill 15 phút

Trong CatalogState, thử đọc catalog.products ngay khi status='loading'. Quan sát lỗi type. Sau đó đặt check branch đúng. Thêm field stock vào Product ở một nhánh thí nghiệm, xem compiler chỉ các chỗ cần cung cấp data. Tự giải thích lợi ích cụ thể thay vì câu “TypeScript giúp code tốt hơn”.

EN - I use TypeScript to describe data contracts and make invalid states harder to express. A discriminated union lets the compiler narrow the available fields after a status check. External JSON still needs runtime checks when the data cannot be trusted.

# 18 / Unit, component và E2E tests

## Một behavior, ba góc nhìn

Pure function test kiểm total, validator, filter. Reducer test kiểm state transition. Component test render UI, thao tác user và assert kết quả nhìn thấy. E2E test chạy luồng trong browser với hệ thống tích hợp phù hợp. Công cụ Playwright có thể phục vụ nhiều loại test tùy cấu hình, nên mô tả phạm vi thay vì chỉ gắn một nhãn công cụ.

## Arrange, Act, Assert

```ts
it('merges a duplicate product', () => {
  const before = cartReducer(undefined, addItem(product));
  const after = cartReducer(before, addItem(product));
  expect(after.items).toHaveLength(1);
  expect(after.items[0].quantity).toBe(2);
  expect(before.items[0].quantity).toBe(1);
});
```

Expected lấy từ rule add cùng id, không tạo bằng chính reducer đang kiểm. Test total phải có số tính tay. Test chỉ gọi function rồi không assert chưa chứng minh behavior.

## React Testing Library

Tìm controls theo role/name hoặc label để gần cách user truy cập. userEvent mô phỏng tương tác ở mức phù hợp môi trường test. findBy đợi element xuất hiện. waitFor đợi assertion đạt điều kiện. queryBy phù hợp kiểm không tồn tại. Không thay mọi chờ bằng sleep cố định.

## Test có ý nghĩa trong repo

App.test.tsx kiểm loading, category, add/quantity/remove, lỗi rồi retry, stale result và checkout. api.test.ts kiểm abort và deterministic service. Store/domain tests kiểm invariant input và biên quantity. Đây là test chạy trong jsdom, chưa thay thế browser thật cho layout, focus behavior đầy đủ hoặc network production.

## Bài learner phải bổ sung

Đọc test checkout rejection giữ cart, rồi tự viết biến thể retry thành công sau lần lỗi. Tự viết test category không có result. Tự viết test stale error không ghi đè success của query mới. Đọc test race hiện có sau khi đã dự đoán thứ tự resolve, rồi đổi biến thể customer/invoice bằng lời.

EN - I test pure calculations and reducers separately from user interactions. For the component, I enter data and click controls, then assert visible results. I also test loading, errors and out-of-order responses because a happy-path test alone misses important state transitions.

# 19 / Debug có giả thuyết và evidence

## Mẫu một trang

Symptom - hiện tượng nhìn thấy. Expected - nguồn xác định đúng. Reproduce - steps/data/environment. Hypotheses - hai hoặc ba nguyên nhân có thể phân biệt. Evidence - phép quan sát rẻ nhất để loại trừ. Fix - thay đổi nhỏ có lý do. Verify - check lỗi gốc, biên và ảnh hưởng lân cận.

## Case UI hiển thị sai tiền

H1 server trả sai unit. H2 client map nhầm field. H3 total giữ snapshot cũ. H4 format currency sai. Kiểm response trước. Nếu response price=420000 đúng, kiểm mapping sang state. Nếu state đúng, kiểm selector và format. Không đổi CSS khi value đã sai từ selector.

## Case Add không update

Kiểm handler chạy chưa, button disabled không, dispatch action type/payload, store có thay items không, Provider đúng store không, component select đúng path không. Log ở đúng boundary. Nếu store đúng nhưng UI chưa đổi, tập trung subscription/render. Nếu action payload sai, đi ngược về handler.

## Case Playwright fail ở FSoft

Trước hết phân biệt app lỗi, test lỗi, timing/data hoặc environment. Chọn một test có expected rõ. Xem locator match bao nhiêu, state element, assertion đang kiểm gì và request/UI khi fail. Một locator đổi theo accessible name có thể đúng hơn selector theo vị trí. Assertion retry đúng trạng thái tốt hơn thêm sleep vô điều kiện.

## Failure injection trong lab

Mỗi lần chỉ thay một thứ, dự đoán rồi chạy test liên quan.

- Bỏ active guard, để API mock không honor abort. Test race phải đỏ.
- Lưu total thành local state và quên update sau remove. Theo dõi hai source lệch.
- Chuyển button phụ vào form và bỏ type=button. Quan sát submit ngoài ý muốn.
- Đổi key sang index trong list có note local. Quan sát identity sau xóa.

Restore trước khi đổi bug tiếp theo. Ghi test nào bắt được, test nào không bắt và vì sao.

# 20 / Git, teamwork và giao tiếp kỹ thuật

## Git cần dùng và giải thích

status cho biết working tree/index. diff xem thay đổi chưa stage, diff --staged xem thứ sẽ commit. Branch là nhánh công việc dựa trên history. Commit lưu snapshot cùng metadata. Push đưa commits tới remote. Pull gồm fetch và tích hợp theo config. Không nói pull luôn chỉ là tải file mới.

## Merge, rebase và conflict

Merge tích hợp histories, có thể tạo merge commit. Rebase phát lại commits lên base mới và đổi commit identities. Với branch chia sẻ, cần theo convention team trước khi rewrite history. Conflict yêu cầu hiểu intended final behavior, không bấm Accept Current cho hết rồi coi xong.

## Một bugfix nhỏ

Tạo branch có tên rõ. Reproduce bug. Sửa phạm vi cần thiết. Chạy test liên quan và build/typecheck khi phù hợp. Đọc diff để bỏ debug/log nhạy cảm. Mô tả expected/actual/root cause/fix/verification trong PR. Nếu chưa rõ requirement, đưa ví dụ cụ thể để hỏi.

## Mẫu cập nhật tiến độ

VI - Em đã tái hiện lỗi total sau khi đổi quantity. API response đúng, nhưng UI đang giữ total riêng nên bị cũ. Em đang chuyển total sang derive từ items và bổ sung test đổi quantity rồi remove. Em cần xác nhận giới hạn số lượng tối đa với anh/chị.

EN - I reproduced the incorrect total after a quantity change. The API data is correct, but the UI keeps a separate total that becomes stale. I am deriving the total from cart items and adding a regression test. I need to confirm the maximum allowed quantity before finalizing the change.

## Hỏi khi bị kẹt

Nêu mục tiêu, đã thử gì, error đầu tiên, hai giả thuyết và câu hỏi hẹp. Ví dụ “Endpoint trả 403 với account có role X. Em đã xác nhận token còn hạn. Rule này yêu cầu thêm ownership hay permission nào?” Câu hỏi như vậy cho team đủ dữ liệu để giúp.

# 21 / Performance, Next.js và điểm cộng AI

## Performance nên nói theo đo đạc

Chọn interaction chậm, reproduce với dữ liệu đại diện, đo bottleneck. React DevTools Profiler giúp quan sát render, browser Performance giúp xem main thread/network/layout. Danh sách lớn có thể cần pagination hoặc virtualization. Request trùng có thể cần cache/dedup. Không dùng useMemo/useCallback toàn app theo phản xạ.

useMemo cache kết quả tính, useCallback giữ function identity theo dependency. React.memo có thể bỏ qua render khi props phù hợp cơ chế so sánh. Các công cụ đó có chi phí và không thay logic đúng. Một callback ổn định chỉ hữu ích khi nơi nhận thực sự hưởng lợi.

## Next.js ở mức phỏng vấn fresher

React là thư viện UI. Next.js bổ sung framework với routing, rendering và các khả năng server/client. Với App Router, cần hiểu Server Component và ranh giới Client Component cho state, effects, events hoặc browser APIs. Client Component vẫn có thể được prerender thành HTML theo ngữ cảnh, nên không nói mọi Client Component chỉ render ở browser.

SSR tạo HTML phía server cho request theo cách hệ thống cấu hình. SSG tạo trước theo quy trình phù hợp. Hydration gắn khả năng tương tác vào HTML đã có. Đọc document/window trong môi trường server có thể lỗi. Chương 37 có next-lab độc lập và session N01 60-90 phút để chạy, trace và kiểm boundary sau React/Redux core.

## AI workflow gắn CV

CV ghi research/debug support và kiểm suggestion bằng behavior. Chuẩn bị một ví dụ dùng AI để hiểu Git/CLI hoặc khái niệm, sau đó tự kiểm tài liệu, diff và kết quả. Ở FSoft, user đã xác nhận không dùng AI trực tiếp làm dự án do hạn chế truy cập/bảo mật. Kể đúng ranh giới này khi được hỏi.

EN - I use AI for technical research, clarifying concepts and exploring debugging hypotheses. I check the suggestion against documentation and actual behavior. During my OJT, I followed the project's restrictions, so I did not use AI to operate on confidential project code.

## Câu truy vấn sâu

“Suggestion chạy được đã đủ chưa?” Kiểm contract, edge cases, types, regression, security và maintainability theo scope. “AI nói useMemo nhanh hơn?” Đo bottleneck, kiểm dependency và so trước/sau. “Đưa code khách hàng lên AI?” Theo policy được phép, dùng ví dụ tối giản không chứa dữ liệu riêng khi cần hỏi khái niệm.

# 22 / Chuẩn bị project story từ CV đã gửi

## Cấu trúc 90 giây

Bối cảnh 10 giây -> phần mình phụ trách 15 giây -> một luồng cụ thể 25 giây -> một vấn đề kỹ thuật và evidence 25 giây -> kết quả/bài học 15 giây. Người hỏi cần lần được data và quyết định kỹ thuật. Không cần câu chuyện có quy mô hoành tráng.

## Bốn lớp cần ghi rõ trong notes

| Lớp | Nội dung | Cách dùng khi nói |
| --- | --- | --- |
| Kinh nghiệm đã xác nhận | TS/Playwright maintenance ở FSoft, frontend internship | kể công việc đúng scope |
| Nội dung đã ghi CV | React portal, InterDev/LEGO flows | rà code cũ để xác nhận contribution |
| Thiết kế hợp lý để giải thích | ví dụ API/state machine ở chương sau | nói như phương án hoặc bài phân tích |
| Lab mới | Brick Desk, Redux/component tests | kể như bài practice độc lập |

Những endpoint, schema và status enum mẫu ở chương 24-25 là mô hình luyện nói. Chương 24/35 ghi flow InterDev từ repo GitHub chính, có link cố định và giới hạn xác minh. Khi tìm lại source, thay tên theo code thật. Không suy từ mô hình mẫu thành việc đã triển khai ở công ty.

## Một tờ chuẩn bị cho mỗi project

Tên app/domain. Người dùng/role. Stack. Một feature mình trực tiếp làm. Data source. State chính. API request/response. Một failure. Cách kiểm. Một tradeoff. Phần do người khác phụ trách. Phần hiện chưa nhớ. Link hoặc file evidence khi có.

## Nếu chưa nhớ chi tiết

VI - Em nhớ rõ luồng và phần tích hợp, còn tên endpoint cụ thể đã lâu em cần kiểm lại source. Về xử lý, em sẽ lần từ payload tới response mapping và state hiển thị.

EN - I remember the workflow and the integration concerns, but I would need to check the source for the exact endpoint name. I can walk through the data flow and explain how I would verify the behavior.

## Bài tập

Đọc từng bullet CV. Viết ngay câu “How did you know it worked?” phía dưới. Nếu câu trả lời chỉ là “em test rồi”, thêm input, observed output và evidence. Dành ít nhất 30 phút tìm lại project thật nếu còn source hoặc GitHub access. Đừng học thuộc endpoint mẫu thay cho bước này.

# 23 / MobiFone và FSoft - kể kinh nghiệm rõ hơn

## MobiFone - script theo phạm vi CV

VI - Em thực tập frontend trên một portal nội bộ. Công việc trong CV gồm giao diện React/JavaScript, component cho form và hiển thị dữ liệu, rồi phối hợp backend để tích hợp API. Khi UI hiển thị chưa đúng, em kiểm request/response bằng DevTools hoặc Postman, sau đó lần cách frontend map dữ liệu và hiển thị. Phần em muốn trình bày sâu là một form hoặc danh sách thực tế em đã sửa. Em sẽ chỉ rõ input, request, trạng thái loading/error và cách xác nhận sau sửa.

EN - During my frontend internship at MobiFone, I worked on an internal web portal using React and JavaScript. My work involved forms, data display and frontend-backend integration. When something looked incorrect, I inspected the request and response, then traced how the frontend mapped that data into the UI. I would like to walk through one concrete screen and explain my contribution and the checks I used.

Trước sử dụng script, điền một screen thật vào notes. CV cũ có thời gian kết thúc khác nhau, bản đã gửi ghi Jun 2025. Xác nhận với hồ sơ của mình để trả lời nhất quán nếu được hỏi.

## MobiFone - câu hỏi follow-up

Form chứa field gì? Component nhận props nào? Ai sở hữu state? API gọi khi submit hay effect? Có field null không? Error hiển thị ra sao? Làm sao phân biệt lỗi API với mapping? Có dùng Redux tại đó không? Nếu chưa xác nhận Redux usage, chuyển câu trả lời sang bài practice đang dùng Redux và nói rõ phạm vi.

## FSoft - script dựa trên việc đã xác nhận

VI - Ở FSoft em làm Automation QC OJT, chủ yếu bảo trì script TypeScript/Playwright trên bộ test case đã được nhóm manual chuẩn bị. Em điều tra test fail bằng cách so expected behavior, observed UI và script. Những phần đã chạm gồm locator, assertion và điều kiện chờ. Em quản lý thay đổi bằng Git. Công việc này rèn cho em thói quen lần vấn đề theo evidence trước khi sửa, hữu ích khi debug frontend.

EN - At FPT Software, my OJT work mainly involves maintaining existing TypeScript and Playwright scripts. The manual test cases are prepared by another testing group. I investigate failures by comparing the expected behavior, the observed UI and the script logic, including locators, assertions and waiting conditions. This work has strengthened my debugging discipline and my understanding of UI behavior.

## FSoft - cách dựng một ví dụ cụ thể

Lấy một lần locator match sai hoặc assertion đợi chưa đúng trạng thái mà mình còn nhớ. Ghi old behavior -> DOM/state evidence -> change -> verification. Không cần con số tiết kiệm thời gian khi chưa đo. Nếu chỉ sửa script, kết quả hợp lý là test kiểm đúng behavior và chạy lại case liên quan.

# 24 / InterDev - đọc flow Marketplace từ source chính

## Nguồn và đóng góp

Repo do An xác nhận là https://github.com/bangdcce/SEP492-Project. Bản đối chiếu trong bộ ôn là commit c851ee9244b7ea580a4be331b18ac8a00dcf8103, ngày 23/04/2026. Phần lớn implementation InterDev được An điều phối qua Agents theo xác nhận mới. Chương này phục vụ xây hiểu biết trực tiếp về một flow hẹp. Chưa suy ra An đã tự viết các file được đọc.

## Những file cần nhìn

client/src/features/project-requests/ProjectRequestsPage.tsx giữ requests/loading/searchTerm/kycStatus bằng useState. project-requests/api.ts đóng gói calls tới backend. shared/api/client.ts là Axios wrapper. useCurrentUser.ts đọc user đã lưu và đồng bộ theo custom event/storage event. Không cần chạy cả InterDev để học bài này.

## State nào là nguồn, state nào derive?

requests là danh sách lấy từ API. searchTerm là text người dùng nhập. marketRequests được tính từ requests với điều kiện status PUBLIC_DRAFT và chưa có brokerId. filteredMarketRequests tiếp tục filter theo title, description, techPreferences hoặc budgetRange. myProjects và appliedCount cũng derive từ requests/user. Code này minh họa đúng lý do tránh giữ thêm các bộ đếm phải đồng bộ tay.

## Luồng Apply đang dùng

handleApply nhận requestId/coverLetter, gọi applyToRequest. Khi mutation resolve, code hiện toast success rồi gọi fetchRequests để lấy danh sách mới. fetchRequests tự quản loading, setRequests và finally tắt loading. Nếu lỗi refresh, catch hiện chỉ console.error, không có state lỗi UI riêng. Mutation đã confirm nhưng list có thể còn cũ.

Bản hiện tại đã chuyển nghiệp vụ sang broker apply và client lựa chọn. Trong service, assignBroker cũ ném ForbiddenException với thông điệp broker không được tự nhận marketplace request. Kể flow apply/client chọn broker khi nói về version này.

## Thí nghiệm độc lập

Chạy node worked/marketplace.mjs success và dự đoán hai bộ đếm server/UI. Sau đó chạy refresh-error. Server applied=1, UI applied=0 cho thấy mutation thành công và view refresh chưa thành công là hai outcome khác nhau. Script rút gọn dùng await để output cuối ổn định, còn page gốc khởi động refresh mà không await.

## Đề xuất cải tiến và kiểm chứng

Giữ thông báo mutation success khi API đã xác nhận, thêm feedback refresh error và nút retry list. Không yêu cầu người dùng gửi lại application chỉ vì reload lỗi. Test mock apply resolve rồi getAll reject, assert trạng thái partial success được diễn đạt rõ. Test riêng apply reject thì không báo success. Đây là kế hoạch kiểm, chưa chạy integration test của InterDev trong bộ ôn.

## Cách nói sau khi tự học flow

EN - InterDev was an agent-assisted capstone. I coordinated the implementation through prompts and iterations. I am now reviewing key flows directly. In the Broker Marketplace, the page stores the request list and search text locally, then derives the visible market and application counts. After a successful application, it reloads the list. One improvement I can explain is to separate a confirmed application from a failed list refresh so the user does not retry the wrong operation.

## Câu hỏi truy vấn

Tại sao appliedCount derive? Nếu user đổi nhưng requests chưa reload thì hiển thị ra sao? Nếu response thiếu description, toLowerCase có thể lỗi không? Tại sao UI KYC blocker chưa đủ để bảo đảm quyền backend? Nếu cùng mở hai tab, storage event và custom event phục vụ tình huống nào? Phần nào trong flow mày đã tự kiểm bằng script nhỏ?

# 25 / LEGO e-commerce và nền Node.js

## Luồng end-to-end mẫu

Catalog -> filter -> add cart -> quantity -> checkout -> create order -> confirmation. Client gửi product id và quantity. Backend lấy giá và tồn kho theo rule hệ thống. Order lưu snapshot item/price phù hợp thời điểm tạo. MongoDB document shape cần chọn theo access pattern và tính nhất quán dữ liệu.

## Component/state tham chiếu

ProductList đọc catalog, ProductRow nhận product, Cart chọn cart items, CheckoutForm giữ input, OrderStatus đọc kết quả server. Redux đã dùng ở lab hiện tại. Project LEGO cũ cần kiểm source trước khi kể công nghệ quản lý state đã dùng.

## Backend cần nói được

Express route đọc params/body, middleware xử lý auth/validation, logic nghiệp vụ gọi DB và error handler chuẩn hóa lỗi. Express không bắt buộc controller/service. NestJS cung cấp modules, controllers, providers và dependency injection.

## Data model để phân tích

```text
Product { id, name, price, active }
CartLine { productId, quantity }
Order { userId, lines[priceSnapshot, quantity], total, status }
```

Đối chiếu schema với project thật. Với demo, kiểm quantity biên, product bị xóa, validation error và retry. Inventory reservation/payment live là phần cần xác minh riêng.

## Script 60 giây

VI - LEGO là project e-commerce học thuật dùng React, Node.js/Express và MongoDB. Em chuẩn bị sâu luồng catalog, cart và tạo đơn, gồm validation, error handling và response mapping. Em có thể giải thích vì sao server phải tính lại giá và kiểm quyền. Đợt ôn này em làm thêm lab cart Redux để kiểm state và async behavior.

EN - LEGO was an academic e-commerce project using React, Node.js, Express and MongoDB. I am reviewing the cart and order workflow, including API validation and frontend response handling. I am also building a separate Redux cart lab to refresh state management and test the important UI states.

## Bài phân tích bug mẫu

Total vẫn bằng giá cũ sau đổi quantity. Theo UI, event đổi select có chạy không? Action payload quantity là number hay string? Reducer đổi đúng id không? Selector tính từ state mới hay total được cache riêng? Backend trả total chuẩn nào? Chọn evidence ở từng boundary. Case này trong lab dùng giá VND nguyên, tránh thêm vấn đề floating-point vào khi đang học state.

## Tám follow-up

Sao dùng MongoDB? Embed hay reference order lines? Cart ở client có cần DB không? Login hết hạn khi checkout? Validation thất bại giữ input ra sao? Vì sao không gửi total client làm giá cuối? Khi nào transaction cần thiết? Em từng debug ở tầng nào và bằng cách nào?

# 26 / English và lý do chuyển sang FE

## Self-introduction 60-75 giây

Hi, I'm An. My main background is JavaScript and Node.js, and I have frontend internship and React project experience. At MobiFone, I worked on an internal web portal and frontend-backend integration. I am currently doing an Automation QC OJT at FPT Software, maintaining TypeScript and Playwright scripts and investigating failures. I want to build on my web development background and work more directly on user-facing features. I am refreshing React and Redux through a practice project and can explain its implementation.

## Why move from testing to frontend?

VI - Nền học của em là JavaScript/Node.js và trước OJT em đã có frontend internship, project React. OJT giúp em quan sát behavior và khoanh vùng lỗi tốt hơn. Ở role frontend em muốn dùng cả nền phát triển lẫn thói quen kiểm chứng đó để làm feature rõ ràng, ổn định.

EN - My earlier internship and projects involved web development. The OJT strengthened my debugging discipline and understanding of UI behavior. A frontend role lets me build on both experiences and work directly on features that users interact with.

## Why leave FSoft?

VI - Lộ trình từ OJT sang Fresher hiện phụ thuộc nhu cầu và kế hoạch nhân sự của đơn vị. Em đang tìm một vị trí chính thức phù hợp nền web và có môi trường được review, học và đóng góp đều đặn. Em vẫn hoàn thành trách nhiệm của giai đoạn hiện tại.

EN - The transition from OJT to a fresher position depends on the unit's staffing needs. I am exploring a suitable full-time role where I can contribute consistently, receive feedback and grow in web development. I am continuing to complete my current responsibilities.

## Why BeyondEdge?

The role matches my JavaScript background and my interest in React frontend development. The job description includes feature implementation, troubleshooting and unit testing under guidance, which fits the areas I want to strengthen. I would also value the opportunity to work in English and learn through code review and feedback.

## Giao tiếp hai ngôn ngữ

Học ý bằng tiếng Việt rồi nói tiếng Anh bằng câu ngắn. Đổi ngôn ngữ giữa câu để kiểm hiểu. Khi quên từ race condition, mô tả “the older request overwrites the newer result”.

## Phrases dùng đúng lúc

- Could you clarify whether you mean client-side state or server data?
- May I walk through a concrete example?
- Let me trace the sequence from the user action to the updated UI.
- I would check the request and response before deciding where the defect is.
- I have practiced that in the lab. I would need to check the older project source for its exact implementation.
- My first hypothesis is ..., and I would verify it by checking ...

# 27 / Ngân hàng lý thuyết - JS và browser

Với mỗi câu, trả lời từ trí nhớ trước. Sau đó đọc đáp án, nói lại bằng một ví dụ khác. Tự hỏi thêm “vì sao” và “đổi điều kiện thì sao”.

## 1. let, const và var?

let/const có block scope, const không cho gán lại binding. Object của const vẫn có thể đổi property. var có function scope và hoisting behavior khác. Ví dụ liên quan callback trong loop quan trọng hơn chỉ đọc ba định nghĩa.

## 2. null và undefined?

undefined thường là chưa có giá trị hoặc property không tồn tại. null thường được dùng có chủ đích để biểu diễn vắng mặt. Contract API quyết định ý nghĩa. Kiểm nullish khi cần giữ 0/false là dữ liệu hợp lệ.

## 3. map, filter, find và reduce?

map biến đổi mỗi phần tử, filter chọn phần tử, find lấy match đầu hoặc undefined, reduce tích lũy kết quả. Callback và return phải khớp mục đích. Lấy ví dụ cart theo từng hàm.

## 4. Shallow copy khác deep copy?

Shallow copy chỉ tạo container mới ở một tầng. Object con vẫn có thể shared. Với update state, copy đúng path thay đổi thường đủ. Deep copy toàn bộ mọi lần có thể tốn và làm mất structural sharing hữu ích.

## 5. Closure là gì và lỗi nào liên quan?

Function giữ quyền truy cập lexical environment. Handler từ render cũ có thể đọc snapshot cũ. Hãy nói data nào cần current và callback được tạo lúc nào trước khi chọn fix.

## 6. Event loop giải thích sao?

JS đồng bộ thực thi trên call stack. Promise reactions chạy theo microtask scheduling, timer callbacks theo task scheduling khi phù hợp. Dùng ví dụ A/B/promise/timer. Tránh quy tắc tuyệt đối cho mọi môi trường và mọi nested scheduling.

## 7. Promise.all có tuần tự không?

Nó tổng hợp các Promise được đưa vào. Những tác vụ thường đã bắt đầu khi tạo Promise. Một reject làm Promise.all reject, không tự abort các công việc còn lại. Dependency dữ liệu mới buộc await tuần tự.

## 8. Debounce và throttle?

Debounce đợi một khoảng yên lặng theo policy để thực thi, phù hợp search. Throttle giới hạn tần suất, ví dụ xử lý scroll. Cả hai không tự giải quyết stale response của request đang chạy.

## 9. Event bubbling là gì?

Event có các pha theo DOM event model. Bubbling đi từ target lên ancestors khi event hỗ trợ. preventDefault và stopPropagation khác nhiệm vụ. Dùng form submit hoặc row click với button con để giải thích.

## 10. localStorage, sessionStorage và cookie?

Web storage được JS truy cập trong origin và có lifecycle khác nhau. Cookie được gửi theo rule request/domain/path/attributes, có thể HttpOnly. Chọn theo loại dữ liệu và mô hình bảo mật. Không coi browser storage là nơi an toàn để cất secret.

## 11. GET và POST khác gì?

GET có semantics lấy representation, thường dùng query và cần tránh mutation side effects. POST dùng submit/create hoặc processing theo contract. HTTP method không tự cung cấp authorization hoặc mã hóa.

## 12. 401 và 403 khác gì?

401 liên quan cần authentication hợp lệ. 403 là từ chối truy cập. Đọc cùng response và policy cụ thể. Không refresh token liên tục cho mọi 403.

## 13. CSS flex và grid?

Flex tập trung phân bổ theo một trục, grid biểu diễn hàng/cột. Có thể dùng kết hợp. Nêu layout catalog/cart và hàng product để minh họa.

## 14. position và z-index?

Position thay cách định vị và ảnh hưởng containing block/stacking tùy trường hợp. z-index không luôn so được giữa mọi element toàn trang vì stacking context. Inspect ancestor khi tăng z-index mãi không có tác dụng.

## 15. Semantic HTML có lợi gì?

Thể hiện ý nghĩa, hỗ trợ browser và accessibility, giảm code giả lập tương tác. Button thực tế tốt hơn div onClick cho thao tác button vì keyboard, focus và semantics sẵn có.

# 28 / Ngân hàng lý thuyết - React và Redux

## 16. React giải quyết gì?

Mô tả UI từ dữ liệu và chia thành component. Update state dẫn tới tính lại phần UI theo mô hình React. Không nói React tự xử lý mọi state/network/business rule cho mình.

## 17. Props khác state?

Props là đầu vào từ parent, state là dữ liệu được React giữ cho component theo identity. Props/state đều nên được xem như snapshot đọc trong render. Thay đổi thông qua owner và cơ chế update thích hợp.

## 18. Vì sao setter không đổi ngay biến đang đọc?

Biến thuộc snapshot hiện tại. Update được xếp để xử lý và tạo render mới. Nêu ví dụ hai replacement updates cùng 0+1 và hai functional updates.

## 19. Khi nào component render lại?

State update, parent render hoặc context/subscription thay đổi có thể liên quan. React có thể bỏ qua một số công việc theo equality/memoization. Render là tính UI, không đảm bảo DOM thật bị thay toàn bộ.

## 20. key dùng để làm gì?

Giữ identity giữa siblings qua các lần thay đổi list. ID ổn định giúp state/focus gắn đúng item. Index có rủi ro khi reorder/insert/delete, random key gây identity mới liên tục.

## 21. Rules of Hooks?

Gọi hooks ở top level của React function component hoặc custom hook theo quy tắc tương ứng. Không đặt useState/useEffect trong if/loop của component. React cần nhận diện hooks theo thứ tự ổn định.

## 22. useEffect dùng khi nào?

Đồng bộ với hệ thống bên ngoài. Derived data thường tính ở render, event-specific mutation nằm trong handler. Mô tả setup, dependency, cleanup bằng một request search.

## 23. Dependency rỗng có nghĩa chạy đúng một lần không?

Nó không phụ thuộc reactive value trong effect, thường chạy khi mount theo lifecycle. Remount chạy lại. Development Strict Mode có kiểm tra setup/cleanup bổ sung. Đừng dựa vào [] như bảo đảm mutation chỉ xảy ra duy nhất.

## 24. useRef và useState khác gì?

Cả hai giữ value qua render theo component identity. Thay ref.current không yêu cầu render. State dành cho dữ liệu cần UI phản ánh. Ref hữu ích cho DOM handle hoặc mutable value không phải output render.

## 25. Controlled và uncontrolled input?

Controlled nhận value/checked từ state và update qua handler. Uncontrolled để DOM giữ value, có thể đọc bằng ref/FormData khi cần. Chọn nhất quán, tránh chuyển undefined sang string ngoài ý muốn.

## 26. useMemo/useCallback có bảo đảm nhanh hơn?

Không. Cần biết computation hoặc identity nào đang gây chi phí. Dependency sai còn gây stale behavior. Tối ưu sau khi có evidence, không dùng như điều kiện để code React đúng.

## 27. Redux cần khi nào?

Khi shared state và update flow cần được quản lý rõ ở quy mô phù hợp. Cart nhiều nơi dùng là ví dụ. Form input cục bộ không nhất thiết vào store. Convention team cũng là yếu tố.

## 28. Reducer có mutate được không?

Plain Redux reducer cần trả next state mà không sửa state trước. Toolkit slice cho cập nhật draft qua Immer. Đây là hai cách viết có bối cảnh. Không mutate state trực tiếp bên ngoài reducer.

## 29. Selector là gì?

Function đọc hoặc derive dữ liệu từ store. Total là ví dụ. Tránh lưu thêm total rồi phải đồng bộ tay. Với selector trả object mới nhiều lần, cần hiểu reference và khả năng render thừa.

## 30. Async Redux đặt ở đâu?

Logic như thunk/middleware/query layer làm side effects. Reducer xử lý action và state transition. Đừng gọi fetch trong reducer. Kể lifecycle loading/success/error và stale request policy.

## 31. Context thay Redux hoàn toàn?

Context truyền value, kết hợp state/reducer có thể phục vụ nhiều nhu cầu. Redux có kiến trúc event/store, middleware, tooling và subscription riêng. Quyết định theo độ phức tạp, performance quan sát được và convention.

## 32. Global client state và server state khác gì?

Cart draft là client-owned state. Catalog/transaction status có nguồn thẩm quyền server, có vấn đề cache/freshness/invalidation. Phân biệt giúp tránh tự nghĩ store client luôn là dữ liệu đúng cuối cùng.

# 29 / Ngân hàng lý thuyết - integration và kinh nghiệm

## 33. Loading, empty và error?

Loading chưa có kết quả, empty là thành công không có bản ghi, error là không lấy được kết quả hợp lệ. Cho UI và retry khác nhau. Không nuốt lỗi rồi trả [] khiến lỗi trông như không có dữ liệu.

## 34. Vì sao fetch 500 không vào catch?

Fetch resolve Response cho HTTP error status. Kiểm response.ok và throw hoặc xử lý theo contract. catch còn bắt network, abort và parse error tùy code.

## 35. TypeScript có validate JSON không?

Types bị loại ở runtime. as Product[] chỉ assertion cho compiler. Dùng runtime checks/schema khi cần xác thực dữ liệu. unknown giúp buộc xét dữ liệu trước dùng.

## 36. Frontend ẩn nút Admin đủ bảo mật?

User có thể gửi request trực tiếp. Backend kiểm identity, permission và ownership. FE ẩn action để UX rõ, quyền truy cập cần được enforce tại server.

## 37. Double click checkout xử lý sao?

UI disable và chốt pending giảm gửi trùng tại một instance. Backend cần idempotency/unique constraints và transaction logic theo nghiệp vụ để chịu retry/nhiều tab. Lab chỉ có chốt UI/local simulation.

## 38. Lỗi ở backend hay frontend?

Theo input -> handler -> request -> response -> mapping -> state -> UI. Tìm boundary đầu tiên dữ liệu lệch contract. Một screenshot riêng chưa xác định được layer.

## 39. Em test component thế nào?

Render với dependencies cần thiết, thao tác theo role/label, assert visible outcome. Kiểm success, loading, empty, error và async ordering. Tách domain/reducer tests khi logic có contract riêng.

## 40. Tại sao test đang xanh vẫn có bug?

Test chỉ kiểm những condition/oracle đã viết trong môi trường đó. Có thể thiếu edge case, expectation sai, mock quá dễ, hoặc không chạy layout/network thật. Cần đọc behavior coverage thay vì dựa vào số test.

## 41. Unit test khác Playwright ở FSoft ra sao?

Nêu phạm vi thực tế. FSoft sửa script UI automation có sẵn. Lab hiện tại kiểm calculations/reducers/component với Vitest/RTL. Kiến thức locator/assertion/timing giúp chuyển kỹ năng, hai phạm vi có setup và evidence khác nhau.

## 42. Làm sao chọn việc sửa trước?

Xét user impact, phạm vi ảnh hưởng, rủi ro dữ liệu/bảo mật, khả năng tái hiện và deadline. Thanh toán/permission sai có thể ưu tiên hơn lỗi spacing. Cần xác nhận business priority với người phụ trách.

## 43. Requirement mơ hồ thì sao?

Đưa hai ví dụ dẫn tới hai behavior khác nhau, hỏi rule cần chốt và ghi quyết định. Ví dụ “qty vượt max thì cap hay báo lỗi?” Sau đó cập nhật UI/validation/tests nhất quán.

## 44. Review code của người khác?

Đọc mục tiêu và contract trước, lần data flow, kiểm failure/edge cases, test, readability và scope. Comment nêu trigger, hậu quả và đề xuất có lý do. Hỏi khi thiếu context.

## 45. AI viết được rồi cần hiểu gì?

Phải kiểm behavior, assumptions, data exposure, maintainability và failure. Nêu một suggestion mình kiểm chứng được. Trong interview có thể đọc/sửa biến thể để thể hiện ownership kiến thức.

## 46. Điểm yếu hiện tại?

Chọn phần cụ thể, cách bù và evidence. Ví dụ “em đang khôi phục độ thành thạo React/Redux qua lab, đã thực hành reducer và race, phần em còn cần làm nhiều hơn là component tests phức tạp”. Chỉ dùng mức đã thực sự làm.

## 47. Kết quả kỹ thuật không có số liệu thì kể sao?

Kể observable result, case tái hiện được, state trước/sau và regression checks. “Tổng tiền cập nhật sau đổi qty và remove” đủ cụ thể. Không cần gắn phần trăm giả.

## 48. Không nhớ framework API thì trả lời sao?

Nêu mục tiêu, data flow và cách tra official docs. Có thể viết pseudocode. Nếu đang sai cơ chế, dừng nhận định chắc chắn và dùng ví dụ để kiểm lại.

# 30 / Đáp án chẩn đoán và prediction drills

## Đáp án chương 04

1. Copy nông, object con vẫn shared. Cần copy path thay đổi.
2. Sau click đầu thành 1, handler log vẫn 0. Hai replacement cùng snapshot.
3. Phần đồng bộ trước. Trong ví dụ đơn giản, promise reaction trước timer.
4. Hiển thị B vì query hiện tại B. Chặn stale commit bằng identity/cleanup.
5. Row state có thể gắn sang item khác do identity theo vị trí.
6. UI total derive từ cart, order snapshot có thể lưu theo rule nghiệp vụ.
7. UI dispatch action -> store/reducer tính next state -> selector/subscriber -> render cần thiết.
8. Không. Kiểm response.ok hoặc status.
9. URL/Origin, preflight và headers, credential policy, Console. Postman không áp cùng CORS gate.
10. Không. Backend enforce permission/ownership.
11. Phải có một case thực tế, evidence và verification rõ. Không có một đáp án project duy nhất.
12. Phải nghe lại bản nói thật và chấm theo mạch lạc/đúng scope, không dựa riêng transcript mẫu.

## Prediction drills trong repo

| ID | Output | Cơ chế |
| --- | --- | --- |
| reference | 2 false true | outer mới, nested shared |
| snapshot | 1 rồi 2 | replacement queue và updater queue |
| closure | 0 rồi 1 | hai lexical environments |
| async | A B promise timer | sync, microtask, task trong ví dụ |
| derived | 20 rồi 30 | cached state cũ, derive từ data mới |
| race | old | response bắt đầu trước hoàn thành sau |

Sau khi xem bảng, chọn một biến thể chưa chạy. Ví dụ snapshot bắt đầu 5 và ba updater, race thêm request thứ ba, reference copy sâu đúng path. Viết output trước, rồi tự kiểm. Xem đáp án là exposed, ghi understood sau khi biến thể đạt.

## Vì sao starter ban đầu đỏ

work/fundamentals.mjs chứa function hợp lệ cú pháp nhưng chưa đáp ứng contract. Test fail chỉ ra requirement chưa hoàn thành. Reference chạy xanh kiểm lab infrastructure. Không đổi expected trong test để khớp stub. Lệnh và file liên quan nằm trong README.

# 31 / Thực hành theo ngày với repo

## Ngày 1 - từ giá trị tới UI

Chạy hai drill reference và async sau khi viết prediction. Hoàn thành filterProducts/calculateTotal. Viết một SearchInput và list riêng trong work/mini-react.md bằng pseudocode hoặc file component mình tạo. Với mỗi event, ghi value trước/sau và thời điểm render. Học chương 05-11.

Điều kiện qua ngày 1 - tự tính được array/object, giải thích snapshot và viết/đọc controlled input. Nếu map/filter chưa vững, giảm CSS tùy chọn và quay về dữ liệu hai row.

## Ngày 2 - state chia sẻ và công việc tới muộn

Hoàn thành createLatestGuard. Chạy race drill, vẽ timeline. Đọc App effect và store slice. Tự vẽ flow Add, đổi qty và remove. Dùng app Error/Empty/Slow để quan sát. Đổi rule max qty trong một nhánh thực hành rồi restore. Học chương 12-16.

Điều kiện qua - trả lời được vì sao debounce chưa đủ, tại sao total derive và vì sao reducer không gọi network. Nói lại flow 45 giây bằng tiếng Anh.

## Ngày 3 - test, TS và debug

Chạy 25 baseline tests, đọc đúng test đang quan tâm. Tự thêm test retry order thành công sau lần lỗi và test stale error. Gây một bug trong nhánh riêng, chạy test để chứng minh fail, sửa rồi chạy lại. Đọc phần union và Git. Học chương 17-21.

Điều kiện qua - giải thích được một assertion kiểm gì và bỏ nó sẽ mất điều kiện nào. Phân biệt compiler typecheck với runtime validation.

## Ngày 4 - N01 Next.js và truy vấn sâu CV

Làm N01 ở chương 37 trong 60-90 phút; trace initial page và Reload HTTP trước khi học story. Sau đó mở source project cũ nếu còn. Điền feature đã tự đọc/kiểm vào work/NOTES.md và luyện contribution theo chương 36. Tập MobiFone/FSoft mỗi phần 60 giây, InterDev/LEGO mỗi phần 90 giây. Sau mỗi story tự hỏi 5 follow-up ngẫu nhiên. Làm Mock A. Học chương 22-29.

Điều kiện qua - trace được server/client/HTTP trong Next lab; phân biệt team feature với contribution cá nhân, nêu evidence và tradeoff. Nói được một đoạn Anh rồi tiếp bằng Việt khi interviewer đổi ngôn ngữ.

## Ngày 5 - retrieval và áp lực nhẹ

Làm Mock B đóng tài liệu. Chọn hai điểm yếu theo evidence. Ôn bằng ví dụ mới, rồi trả lời lại sau 30 phút. Cuối buổi chỉ giữ cheat sheet và CV. Học chương 32-33.

## Extension nếu còn giờ

Thay local catalog service bằng fetch với response.ok/runtime validator. Thêm persistence có xử lý JSON hỏng. Tách server data sang query layer. Những phần này là bài mở rộng, chưa nằm trong baseline app/test đang giao.

# 32 / Hai mock interview và rubric

## Mock A - 50 phút, trọng tâm giải thích

| Phút | Người hỏi làm gì | Cần quan sát |
| --- | --- | --- |
| 0-5 | intro English, why FE/why leave | đúng scope, câu ngắn, có mạch |
| 5-12 | reference + closure + async snippet | dự đoán và nguyên nhân |
| 12-22 | state snapshot, key, effect | timeline và biến thể |
| 22-30 | Redux cart và async search | owner, action, stale response |
| 30-40 | MobiFone/FSoft và InterDev | contribution, evidence, tradeoff |
| 40-46 | hai câu Next N01, chọn thêm API/debug nếu đủ giờ | boundary, rendering và evidence |
| 46-50 | hỏi ngược và next steps | hiểu công việc, giao tiếp |

## Mock B - 45 phút, đổi ngữ cảnh

User chọn customer B nhưng invoice A xuất hiện. Hãy vẽ timeline và đề nghị fix. Tiếp theo cart cho quantity 0, total sai. Hãy đọc requirement và phân biệt validation với selector bug. Người hỏi yêu cầu giải thích bằng tiếng Anh ở giữa câu trả lời. Cuối cùng chọn một bullet CV bất kỳ và hỏi “How did you verify that?”

Thêm hai câu Next từ chương 37 vào Mock B: một câu first load so với Reload, một biến thể window ở module client hoặc HTTP 503. Lấy tối đa 6 phút, rút thời gian lặp lại phần core đã rõ.

Có thể bỏ phần gõ code. Người hỏi đưa snippet, người học annotate, dự đoán output và sửa bằng pseudocode. Mục tiêu vẫn là hiểu cơ chế.

## Rubric 100 điểm dùng trong bộ ôn

| Nhóm | Điểm | Điều kiện đủ điểm |
| --- | --- | --- |
| JS và browser | 15 | đúng output, có timeline/reference |
| React và effects | 20 | giải thích state/identity/cleanup và biến thể |
| Redux | 15 | data flow, Immer, local/global, async boundary |
| API/TS/tests/debug | 10 | nêu layer, contract và evidence |
| Next.js N01 | 10 | trace hai đường data, boundary và biến thể |
| Project ownership | 15 | feature cụ thể, contribution, failure và checks |
| English và giao tiếp | 15 | hiểu câu hỏi, diễn đạt cơ chế, clarify đúng |

Mỗi nhóm chấm theo ví dụ thực tế. Thuộc định nghĩa nhưng không giải thích biến thể chỉ nhận khoảng nửa điểm. Mức 75/100 là mốc tự ôn để chọn phần vá, không phải thang chấm hoặc ngưỡng tuyển dụng BeyondEdge.

## Phiếu sửa sau mock

Câu bị kẹt -> mình đã nói gì -> cơ chế đúng -> ví dụ phản chứng -> câu trả lời mới 3 câu -> ngày ôn lại. Không chép toàn chương. Nếu phát hiện ba lỗi cùng gốc snapshot, sửa một mô hình gốc rồi thử lại ba tình huống.

## Câu hỏi ngược nên chuẩn bị

Trong hai tháng đầu fresher sẽ làm dạng feature nào? Team dùng React/Redux và test setup gì? Review code/feedback diễn ra thế nào? Giao tiếp tiếng Anh chủ yếu trong daily, review hay với client? Khi thiếu kinh nghiệm một công nghệ, kỳ vọng học và được hỗ trợ ra sao?

# 33 / Cheat sheet trước phỏng vấn

## 60 phút cuối

15 phút nói hai stories quan trọng. 15 phút vẽ React/Redux/async timeline. 10 phút JS/API pitfalls. 10 phút English intro và clarify phrases. 10 phút CV, lịch, audio/camera/đường truyền nếu interview online.

## Mười hai câu cần tự trả lời

1. Props/state khác nhau và snapshot được tạo lúc nào?
2. Hai setCount(count+1) khác hai functional update vì sao?
3. Key=id giữ identity thế nào?
4. Vì sao tính total trong render/selector?
5. Effect đang đồng bộ hệ thống nào, cleanup để làm gì?
6. Request A cũ có quyền ghi state sau B không?
7. Dispatch -> reducer -> selector -> UI ra sao?
8. Immer draft khác mutate object ngoài reducer thế nào?
9. Fetch 500 và runtime JSON validation kiểm ở đâu?
10. Một bug thật ở FSoft và một flow ở MobiFone?
11. InterDev/LEGO phần mình làm, phần team làm?
12. Tại sao muốn FE và làm việc bằng tiếng Anh được ra sao?

## Nếu đầu óc trống

Xin vài giây, chọn một ví dụ hai phần tử hoặc một request. Nói input, state trước, action, state sau, UI. Nếu chưa biết công nghệ, nêu phần cơ chế đã hiểu và cách kiểm tài liệu. Chưa nhớ endpoint thì nói không nhớ exact name rồi tiếp tục luồng dữ liệu.

## Từ khóa Anh-Việt

Snapshot - giá trị tại một render. Identity - định danh instance/item qua thay đổi. Derived value - giá trị tính từ source state. Stale - đã cũ so với dữ liệu hiện tại. Cleanup - dọn công việc effect trước không còn phù hợp. Dispatch - gửi action. Reducer - tính next state. Selector - đọc/tính dữ liệu cần dùng. Reproduce - tái hiện. Regression - kiểm ảnh hưởng sau thay đổi. Tradeoff - đánh đổi giữa các lựa chọn. Ownership - phần trách nhiệm/contribution thực tế.

## Bắt đầu buổi đầu tiên

Mở work/NOTES.md, viết dự đoán reference drill. Chạy đúng một ví dụ. Giải thích vì sao output có giá trị đó, rồi đổi object con khác. Sau khi làm được mới chuyển state snapshot. Tài liệu dài phục vụ tra cứu theo lỗ hổng, lịch học ở chương 03 quyết định thứ tự.

# 34 / Nguồn, phạm vi và cách cập nhật

## Nguồn cho bộ ôn

CV main.tex trong BeyondEdge_Frontend_Fresher_An và bản PDF đã gửi Jena là nguồn về các bullet cần chuẩn bị. JD Frontend do user cung cấp được đối chiếu trong phiên. Giáo án Tester cũ được tham khảo về bài tập, bug report, English và mock. Repo Playwright_QA_SWP391_Self_Study_v4 được tham khảo về worked/work/reference/contracts, prediction, failure injection và retrieval. Bộ Frontend này điều chỉnh timebox và rubric cho deadline riêng, không cập nhật tiến độ học ở repo v4.

## Tài liệu chính thức để tra đúng mục đang mắc

- React state - https://react.dev/learn/state-a-components-memory
- React snapshot - https://react.dev/learn/state-as-a-snapshot
- React effects - https://react.dev/learn/you-might-not-need-an-effect
- Redux quick start - https://redux.js.org/tutorials/quick-start
- Redux Toolkit Immer - https://redux-toolkit.js.org/usage/immer-reducers
- React Testing Library - https://testing-library.com/docs/react-testing-library/intro/
- TypeScript narrowing - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
- MDN fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN event loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model
- Next.js server/client - https://nextjs.org/docs/app/getting-started/server-and-client-components
- Next.js route handlers - https://nextjs.org/docs/app/getting-started/route-handlers
- JD - https://drive.google.com/file/d/1refj-6UXRUaoGom6-LFAWS5fvoISn9l5/view

Các giải thích, data, câu hỏi và code thí nghiệm là bài dạy do bộ ôn xây dựng. Khi đi sâu một API cụ thể, đối chiếu docs tương ứng phiên bản trong package-lock.json. Repo pin versions qua lockfile để npm ci có thể cài lại baseline.

## Nghiên cứu về retrieval

Roediger, H. L. & Karpicke, J. D. (2006). Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention. Psychological Science, 17(3), 249-255. DOI 10.1111/j.1467-9280.2006.01693.x. https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/

Karpicke, J. D. & Blunt, J. R. (2011). Retrieval Practice Produces More Learning than Elaborative Studying with Concept Mapping. Science, 331, 772-775. DOI 10.1126/science.1199327. https://pubmed.ncbi.nlm.nih.gov/21252317/

## Những giới hạn cần biết khi dùng

Code lab mới do trợ lý dựng là tài liệu tham chiếu. Kết quả test baseline chỉ xác minh bộ lab, chưa xác minh An tự làm hoặc hiểu các bài. Story mẫu có assumptions được đánh dấu. Chương 24/35 đã đối chiếu repo GitHub chính của InterDev. An xác nhận phần implementation chủ yếu do Agents, được phản ánh ở chương 36. Chưa kiểm source MobiFone/LEGO. App Vite dùng Promise local và fault modes, không có payment thật, persistent cart hay auth. next-lab có Next server và HTTP route với dữ liệu local; không cần backend/database riêng. Hai app là ví dụ học, không phải production integration.

Bản này chuẩn bị theo CV đã gửi, chưa sửa CV hoặc thư ứng tuyển. Khi tìm được code cũ hoặc nhận lịch/phạm vi phỏng vấn, cập nhật project details và phân bổ giờ theo evidence mới.

# 35 / InterDev - payment, auth và cách đọc source

## Chốt nguồn đúng version

Nguồn chính là bangdcce/SEP492-Project ở commit c851ee9244b7ea580a4be331b18ac8a00dcf8103. Chỉ đọc source tĩnh và dựng mô hình console độc lập, chưa cài dependencies/chạy backend, database hoặc provider của InterDev.

## Flow thanh toán cần học

PayPalMilestoneCheckout.tsx giữ loading/renderError/isCapturing/hasRenderedButtons. Effect khởi tạo SDK/button theo cấu hình. Callback onApprove thực hiện capture và đồng bộ kết quả về ứng dụng. Hai nhánh đáng phân biệt là vault-enabled và fallback. Vault-enabled tạo order qua API backend và gửi orderId để backend hoàn tất. Fallback dùng actions.order.create/capture rồi gửi order response để app hoàn tất funding.

payments/api.ts có POST /payments/milestones/:id/paypal/order và POST /payments/milestones/:id/paypal/capture. API wrapper xử lý response Axios, còn feature payments unwrap thêm envelope success/data. Đây là hai tầng data khác nhau. Generic type mô tả kỳ vọng nhưng chưa đủ validate JSON runtime.

## Vì sao cần state và ref khác nhau?

isCapturing là state để UI phản ánh đang xử lý. onErrorRef/onFundedRef giữ callback hiện hành cho SDK callbacks trong effect. Effect nhỏ cập nhật các ref khi callback prop đổi. active flag giúp tránh một số cập nhật khởi tạo đã cũ. Cleanup gọi close button instance, hỗ trợ quản lý widget bên ngoài React. Khi đọc, chỉ rõ nhánh nào có active check, không suy rằng mọi callback đều được bảo vệ giống nhau.

## Tình huống captured nhưng app sync lỗi

Code error message có tình huống payment đã capture nhưng app không đồng bộ escrow được. Nếu mù quáng bắt user thanh toán lại thì có thể gây tác động lặp. Cần kiểm lại provider/app state và policy backend. Đây là nguyên tắc xử lý partial failure. Chưa audit toàn bộ service để kết luận mọi rủi ro payment đã được giải quyết.

Chạy node worked/payment-flow.mjs success, cancel và sync-error. Với sync-error, providerCaptured=true nhưng appConfirmed=false. Dự đoán các cờ trước chạy. Sau đó nói bằng Việt rồi Anh vì sao pending/uncertain khác failed hoàn toàn.

## Auth trong source hiện tại

shared/api/client.ts dùng withCredentials=true, có comment và logic theo cookie HttpOnly, refresh theo 401 và cơ chế single-flight. Request interceptor xử lý FormData boundary, thêm timezone và trace headers. Auth client phức tạp là phần đọc thêm, không bắt buộc học thuộc trong 5 ngày.

## Bản đồ source có link cố định

- Marketplace page — https://github.com/bangdcce/SEP492-Project/blob/c851ee9244b7ea580a4be331b18ac8a00dcf8103/client/src/features/project-requests/ProjectRequestsPage.tsx
- API wrapper — https://github.com/bangdcce/SEP492-Project/blob/c851ee9244b7ea580a4be331b18ac8a00dcf8103/client/src/shared/api/client.ts
- Current user hook — https://github.com/bangdcce/SEP492-Project/blob/c851ee9244b7ea580a4be331b18ac8a00dcf8103/client/src/shared/hooks/useCurrentUser.ts
- PayPal component — https://github.com/bangdcce/SEP492-Project/blob/c851ee9244b7ea580a4be331b18ac8a00dcf8103/client/src/features/project-workspace/components/milestone/PayPalMilestoneCheckout.tsx
- Payments API — https://github.com/bangdcce/SEP492-Project/blob/c851ee9244b7ea580a4be331b18ac8a00dcf8103/client/src/features/payments/api.ts

## Cách đọc source lớn mà không bị ngợp

Bắt đầu bằng event người dùng và state UI. Tìm đúng callback, một API call và response mapping. Ghi câu hỏi ở boundary chưa rõ. Chỉ mở service nếu câu hỏi cần business rule. Với deadline này, đọc Marketplace và payment timeline đủ để luyện 2 câu chuyện kỹ thuật. Tên library có trong package.json chưa chứng minh mọi screen dùng nó.

# 36 / Project do Agents triển khai - luyện ownership kỹ thuật

## Điểm xuất phát mới

An xác nhận phần lớn bốn tháng InterDev là prompt cho Agents, chưa trực tiếp code implementation. Lịch ôn cần xây hiểu biết qua ví dụ nhỏ và đọc flow, thay vì giả định đây là kiến thức đã từng tự triển khai. Không dùng kết quả chạy xanh của code trợ lý làm bằng chứng đã hiểu.

## Một vòng tự tạo hiểu biết

Chọn Marketplace. Đóng PDF, vẽ requests/searchTerm/filteredList. Tự tính danh sách với hai record. Chạy marketplace.mjs rồi giải thích server state và visible state. Đổi điều kiện status hoặc để refresh lỗi. Tự sửa một biến thể nhỏ trong work. Cuối cùng đọc 30-50 dòng liên quan ở source gốc và nối tên biến thật với mô hình vừa hiểu.

Với payment, làm ba cờ checkoutReady/providerCaptured/appConfirmed trên giấy trước. Chạy success/cancel/sync-error. Nói output mà không nhìn code. Sau đó mới đọc callback onApprove thật. Nếu chưa giải thích được vì sao false ở một cờ, quay ví dụ nhỏ trước khi học thêm SDK details.

## Trả lời contribution khi được hỏi trực tiếp

VI - Phần implementation của capstone được hỗ trợ rất nhiều bởi AI Agents. Vai trò chính của em là diễn đạt yêu cầu thành prompt, chia việc và điều phối các vòng thay đổi. Em đang đọc lại các flow quan trọng để hiểu sâu hơn. Em có thể trình bày flow em đã tự kiểm, đồng thời phân biệt phần code được Agents sinh với phần em trực tiếp sửa hoặc kiểm chứng.

EN - The capstone implementation was heavily assisted by AI agents. My role mainly involved turning requirements into prompts and coordinating iterations. I am now reviewing the important flows directly so I can explain the state and integration decisions. I distinguish agent-generated implementation from the parts I personally changed or verified.

Chỉ thêm ví dụ “personally verified” sau khi có bài thực hiện thật. Các bullet Developed/Built trong CV đã gửi diễn đạt mức đóng góp mạnh hơn lời xác nhận mới. Nếu người phỏng vấn hỏi ownership, giải thích cụ thể phạm vi và dùng flow tự hiểu để tiếp tục trao đổi.

## Kể việc học lại mà không tự hạ thấp

Chọn phần cụ thể đã làm được trong đợt ôn. Ví dụ “Em tái dựng một cart nhỏ, tự giải thích action/reducer/selector và sửa case total cũ”, hoặc “Em kiểm partial failure bằng mô hình mutation success, refresh fail”. Đừng dùng câu “em biết hết project” để bao một codebase chưa đọc.

## Ba câu phản chứng

Nếu bỏ loading state, người dùng thấy gì? Nếu backend vẫn success nhưng refresh fail, action nào nên retry? Nếu callback được tạo từ render cũ, ref và state khác vai trò nào? Trả lời được bằng biến thể mới là dấu hiệu hiểu tốt hơn thuộc story.

## Điều chỉnh lịch

Ngày 1-2 giữ nền JS/React/Redux. Ngày 3 làm test và debug trên app độc lập. Ngày 4 dành 60-90 phút cho hai mô hình InterDev, sau đó đọc source đúng flow. Ngày 5 mock với câu hỏi contribution thẳng. Nếu thiếu giờ, ưu tiên một flow Marketplace hiểu chắc rồi mới thêm payment.


# 37 / Next.js big plus - lab server/client độc lập

## Mục tiêu và vị trí trong lịch

JD ghi Next.js là big plus. Phần này chuyển điểm cộng thành một flow đã chạy và giải thích được. Làm N01 sau S10, trước mock: 60-90 phút, có thể chia đôi. Bốn ngày vẫn giữ ít nhất 60 phút cho N01; nếu thiếu giờ, giảm payment SDK và performance sâu. N02 là extension tùy chọn, chưa có code sẵn. React/Redux vẫn cần vững vì Next dùng nền React đó.

Repo có hai app độc lập: app/ dùng React/Vite để hiểu state, Redux và tests; next-lab/ dùng Next App Router để quan sát server/client và HTTP. Không cần chạy app Vite hay InterDev khi học Next. Source Next là bài tham chiếu do agent dựng, chưa phải feature An đã tự triển khai trong dự án cũ.

## Khởi động và đọc bản đồ

Từ gốc bộ ôn, chạy từng lệnh theo thứ tự:

```sh
npm --prefix next-lab ci
npm --prefix next-lab run dev
```

Mở http://127.0.0.1:3001/catalog. Node 22.12+ hoặc 24. Cài dependencies cần mạng, sau đó data chạy local. Không cần key, database hoặc provider. Để kiểm production, dừng dev bằng Ctrl+C, chạy build rồi start. Ở terminal khác chạy check:http khi server đã ready.

```sh
npm --prefix next-lab run build
npm --prefix next-lab start
# Terminal khac, sau khi server ready:
npm --prefix next-lab run check:http
```

| File | Chạy/đóng góp gì trong lab | Nối kiến thức cũ |
| --- | --- | --- |
| app/layout.tsx | khung HTML, nav và metadata | composition, children |
| app/page.tsx | trang /, Link tới catalog | routing thay đổi page |
| app/catalog/page.tsx | server đọc data, truyền props | async/await, props |
| app/catalog/CatalogClient.tsx | search/select/reload và state | controlled input, snapshot |
| lib/catalog.ts | ba sample records, dùng phía server | service boundary |
| lib/types.ts | kiểu Product và kiểm shape runtime | unknown, narrowing |
| app/api/catalog/route.ts | GET JSON với 200/400/503 | HTTP, status, API contract |

Đường dẫn trong bảng tính từ next-lab/. Trong App Router, file page tạo UI route, layout bao nội dung, route tạo HTTP handler. Không tạo page và route cùng segment. Lab có /catalog cho UI và /api/catalog cho JSON. Link giúp điều hướng; full reload vẫn là một quan sát riêng cần thử.

## Mô hình chỉ có hai đường dữ liệu

Đường A - mở trang catalog:

```text
browser requests /catalog
  -> Server page awaits readCatalog()
  -> Product[] passed as initialProducts
  -> initial HTML + component payload + client JavaScript
  -> hydration attaches interactions
```

Đường B - bấm Reload:

```text
click -> browser handler -> fetch /api/catalog?scenario=...
  -> GET handler -> status + JSON
  -> check response.ok -> parse + validate shape
  -> setProducts/setStatus -> React render
```

Page gọi hàm đọc data trực tiếp, nên đường A không cần vòng HTTP về /api/catalog. Button mới dùng route đó. Network khi chuyển trang bằng Link có thể có request framework/prefetch; hãy phân biệt chúng với request /api/catalog do button tạo. Đừng suy từ việc có request bất kỳ thành việc page đã gọi API ấy.

## Thí nghiệm 1 - data trước và sau hydration

Prediction trước khi chạy: chưa bấm Reload thì tên City Workshop có trong HTML response không? Có request /api/catalog không? Search có cần server round trip không?

Mở full page load rồi kiểm document response trong Network hoặc chạy check:http. Lab kiểm tên ba sản phẩm trong initial HTML. Quan sát terminal có dòng [server] CatalogPage read. Sau đó search garden và select Pocket Garden. Hai thao tác này cập nhật state local, không dùng handler GET. Quan sát request đúng tên endpoint để kiểm prediction.

Giải thích: server đọc initial data nhưng phần tương tác dùng Client Component. HTML ban đầu có nội dung trước khi browser gắn event handlers qua hydration. Server Component và server-rendered HTML là hai ý khác nhau: RSC liên quan component chạy ở đâu và payload kết hợp cây UI; SSR liên quan sinh HTML ở server. Client Component vẫn có thể tham gia HTML prerender. Đừng nói use client nghĩa là mọi dòng chỉ chạy browser.

Biến thể: nếu bỏ JavaScript ở browser rồi full reload, dự đoán phần nội dung nào còn và search/select còn hoạt động không. Agent có thể giải thích bằng HTML response nếu chưa cần thay browser settings. Không coi một ảnh chụp sau hydration là bằng chứng riêng cho prerender.

## Thí nghiệm 2 - boundary và props

Đọc ba dòng chính trong page: await readCatalog, nhận products, truyền initialProducts. CatalogClient có use client, state và handlers. Nếu cho toàn bộ page thành client chỉ để có một nút favorite, boundary quá rộng: cân nhắc tách nút nhỏ và truyền data cần thiết.

Prediction: bỏ use client khỏi module đang chứa useState/useRef và event handlers thì build ra sao? Thử trong bản sao bài tập, lưu error đầu tiên, rồi khôi phục. Framework cần biết boundary để xử lý module có tương tác client. Không sửa bằng cách xóa logic cần thiết chỉ để build xanh.

Props qua server/client boundary cần dữ liệu React có thể serialize. Lab dùng array plain records với string và number. Một callback JavaScript tùy ý từ Server page không truyền giống plain data; cơ chế Server Functions là chủ đề riêng. Data gửi qua props là data client nhận được, vì vậy không truyền secret. Lab không có secret thật để thử.

Biến thể: đọc localStorage ở đầu module có an toàn chỉ nhờ use client không? Không. Module/render có thể tham gia server prerender; browser-only logic nên nằm trong event hoặc effect thích hợp và xét initial UI. Nếu initial browser render khác HTML server, hydration có thể mismatch. Tránh chữa bằng cách tắt cảnh báo khi chưa hiểu nguồn khác biệt.

## Thí nghiệm 3 - HTTP error khác empty

Clear search. Trước mỗi bước, ghi HTTP code, body và UI expected. Bước 1 Success Reload: 200 và ba products. Bước 2 Empty Reload: 200 và []. Bước 3 Error Reload: 503 và object message. Bước 4 Success Reload: lại ba products. Button loading bị khóa và busy ref ngăn submit lặp khi request đang chạy.

Fetch nhận 503 vẫn resolve Response; response.ok false mới làm code lab throw. Catch đặt status error, giữ products từ lần success gần nhất. Sau Empty rồi Error, UI có alert và list vẫn rỗng. Sau Success rồi Error, UI có alert và ba products vẫn còn. Không suy error đồng nghĩa phải setProducts([]).

Search chỉ filter local. Selected IDs là state độc lập: filter ra khỏi màn hình không xóa selection; reload empty cũng không xóa IDs đã chọn. Counter là tổng selected IDs trong phiên page, không phải số visible rows đang selected. Có thể đề xuất một contract khác, nhưng phải sửa behavior/test theo contract đó, không tự gọi đây là bug khi chưa xác định yêu cầu.

Biến thể: server trả 200 nhưng price thành string. Type Product trong source không tự kiểm JSON; isProductArray sẽ reject. Muốn thử, sửa response trong bản sao, dự đoán UI rồi chạy. Sau thí nghiệm restore code. Với API thật, schema validation có thể chặt hơn; predicate ở lab chỉ kiểm shape đang dùng.

## Thí nghiệm 4 - rendering và cache có cấu hình

Catalog page chọn dynamic = force-dynamic trong cấu hình lab không bật Cache Components. Cách chọn này giúp quan sát per-request rendering. Home có thể được prerender khi build. Không kết luận mọi Server Component đều render lại mỗi request. Static rendering tạo trước hoặc tái dùng kết quả theo cấu hình; dynamic rendering xử lý theo request.

HTTP route và browser fetch cùng chọn no-store rõ trong lab để thí nghiệm lặp lại. Các lớp cache browser, data và route/framework là những chỗ cần phân biệt khi học sâu. Next thay đổi API/default theo phiên bản, nên không học thuộc một câu mọi fetch đều cached. N01 chỉ yêu cầu tìm đúng cấu hình đang dùng và giải thích tác động trong flow này.

Prediction: build output đánh dấu /catalog và / như thế nào? Chạy build, đọc phần route summary và đối chiếu source. Sau đó start production, full reload /catalog hai lần và quan sát server log. Dev mode có thêm hành vi kiểm tra/compilation, nên đừng dùng số log dev để suy chính xác số production requests.

## 10 câu Next để mock, có reasoning key

1. React và Next khác vai trò gì? React mô tả UI bằng components/state. Next là framework bổ sung conventions cho routes và môi trường server/client; chỉ ra page/layout/route trong lab làm ví dụ.
2. Tại sao CatalogClient có use client? Module cần state/ref/events cho search/select/reload. Chỉ ra một handler và một state update; không dừng ở câu vì nó là frontend.
3. Client Component có HTML từ server không? Có thể có trong initial prerender. Hydration gắn tương tác ở browser. Dùng initial HTML response của lab để minh họa.
4. Vì sao page không fetch API route của chính mình? Nó có thể đọc nguồn server trực tiếp qua readCatalog. Button browser cần HTTP boundary nên dùng GET route.
5. Page và route khác output gì? Page trả cây UI cho route trang; GET route trả Response JSON/status. Đọc /catalog và /api/catalog để so.
6. SSR và RSC có đồng nghĩa? Không. Nêu thời điểm tạo HTML và ranh giới component, rồi chỉ catalog force-dynamic và client subtree prerender.
7. Vì sao không đọc window ngay ở module client? use client không loại bỏ khả năng server prerender. Chọn event/effect thích hợp cho API browser và giữ initial render nhất quán.
8. Route trả 503 có tự vào catch không? Fetch resolve Response; lab check ok rồi throw. Giữ last successful list và hiển thị alert.
9. Thêm Redux trong Next ở đâu? Provider cần boundary client. Server không chia một mutable store của người dùng thành singleton toàn server; phải xét store scope theo request và hydration data. Lab Next chưa cài Redux; giải thích theo kiến thức S05, chưa claim đã triển khai Next Redux integration.
10. Next có tự giải quyết mọi hiệu năng/SEO không? Không. HTML ban đầu/metadata/routing là khả năng để dùng; cần kiểm nội dung, dữ liệu, tải JS và bottleneck. Lab không có benchmark hoặc đo SEO để claim kết quả.

Mỗi mock lấy hai câu: một câu mechanism, một biến thể. Ví dụ đổi favorite state lên server, hoặc API 200 với schema sai. Hỏi lần lượt, chấm trước khi mở key. 48 câu ở chương 27-29 cộng 10 câu Next tại đây thành 58 câu có reasoning key; đây là ngân hàng tự ôn, không phải đề BeyondEdge đã xác nhận.

## Trả lời tiếng Anh sau khi hiểu flow

EN - I practiced Next.js with a small App Router catalog. The server page reads sample data and passes it to an interactive client component. Search and selection use local state. The Reload button calls a route handler over HTTP, checks the status and validates the JSON before updating the UI. I can trace that flow, while my deeper practice is still in React and Redux.

Chỉ dùng câu I practiced sau khi An thực sự chạy/giải thích được bài. Khi mới nhận bộ lab, trạng thái là có tài liệu, chưa có learner evidence. Không gắn lab này thành kinh nghiệm production Next tại MobiFone hay FSoft. Dùng English đơn giản, sẵn sàng trả lời follow-up về đúng dòng source.

## Đầu ra và giới hạn

Ghi vào NOTES một sơ đồ hai đường data, một error timeline, một boundary decision và câu English tự nói. N01 đạt mục tiêu khi dự đoán request/UI, giải thích cơ chế và xử lý một biến thể mới; tự implementation là năng lực riêng cần ghi evidence. Không cần rush toàn framework trong 90 phút.

Chưa triển khai trong baseline: dynamic detail route, loading/error boundaries chuyên biệt, Server Actions, ISR/revalidation sâu, auth, database và deployment. N02 có thể chọn một extension trong README khi đủ giờ. Trước API mới, đọc docs tương ứng lockfile. Nguồn chính thức server/client và route handlers ở chương 34; ví dụ/data và thiết kế thí nghiệm ở đây là riêng của bộ ôn.
