# 01 / Đọc trước khi ôn

FRONTEND FRESHER - BEYONDEDGE CẦN THƠ
Nguyễn Phúc An | 10/11/2026 | Nền Node.js/JavaScript -> React frontend

## Mục tiêu
Đọc và viết được component React; hiểu state/effect; nối API có trạng thái loading/error; dựng state cart bằng Redux Toolkit; giải thích project và debugging bằng tiếng Anh. Không lấy việc đọc giáo án hoặc code do AI tạo làm bằng chứng đã thành thạo.

## Cách dùng trong ba ngày
Ngày 1 (4 giờ): JS/browser/HTML/CSS -> React -> viết form và danh sách có filter. Ngày 2 (4 giờ): hooks/effects -> API -> Redux -> sửa lỗi code. Ngày 3 (3 giờ): test -> project stories -> mock English -> vá hai điểm yếu nhất. Nếu còn ngày 4-5, làm bài thực hành hoàn chỉnh và một mock mới.
Mỗi buổi đọc 20 phút, tự code 50 phút, nói lại 10 phút. Mốc hoàn thành là sản phẩm chạy được và giải thích được.

## Ưu tiên theo JD
React và Redux là trọng tâm. HTML/CSS, API, Git và giao tiếp tiếng Anh là yêu cầu. TypeScript/Next.js là điểm cộng. JD có unit tests: cần biết kiểm behavior của component; chưa có kinh nghiệm viết chúng thì không nói đã làm ở MobiFone.

## Bản đồ trang
02: JS; 03: browser/CSS; 04: React; 05: hooks/effect; 06: API; 07: Redux; 08: unit tests; 09: debug; 10: bài thực hành; 11: project/CV; 12: English; 13: mock; 14: đáp án và nguồn.

## Kiểm tra nhanh
Tự giải thích vì sao state cần setter; khác local state và Redux; một request cũ đè request mới; cách định vị UI hiển thị sai dữ liệu. Bí mục nào thì đánh dấu để ưu tiên, không đọc lại mọi chương từ đầu.

---

# 02 / JS: lấy nền Node để đi nhanh

## Những phần đã biết chuyển được sang FE
Array/object, modules, Promise, async/await, REST và error handling vẫn dùng. Phần cần bổ sung là render, event DOM, browser state, CSS layout và điều kiện lifecycle của component.

## Bài đọc code
const a = { count: 1 }; const b = a; b.count = 2;
a.count bằng 2 vì cả hai cùng trỏ object. Spread {...a} chỉ copy nông: object lồng bên trong vẫn có thể dùng chung tham chiếu. Trong React, mutating object state rồi set cùng reference có thể khiến cập nhật không được nhận diện như mong muốn.

## Promise và thứ tự
console.log('A');
Promise.resolve().then(() => console.log('B'));
console.log('C');
Kết quả A, C, B. Đừng dùng ví dụ này để nói mọi tác vụ bất đồng bộ luôn hoàn thành theo thứ tự gọi.

## Học để viết
map biến đổi danh sách; filter chọn phần tử; find tìm một phần tử; reduce gom kết quả. Dùng === để tránh ép kiểu bất ngờ. const ngăn gán lại binding, không làm object bất biến. Optional chaining xử lý truy cập thiếu; nullish coalescing giữ giá trị 0/false hợp lệ thay vì coi chúng là vắng mặt.

## Tự làm 30 phút
Viết filterProducts(products, query), updateQuantity(items, id, qty), calculateTotal(items). Không sửa trực tiếp input. Viết test cho query rỗng, khác hoa/thường, id không có, qty=0, số âm và số thập phân. Quy định invalid quantity reject hoặc throw trước khi implement.

## Đáp án cần hiểu
Search normalize bằng trim/toLowerCase; update dùng map và copy object đúng id; total cộng price*quantity. Dự đoán output trước khi chạy. Nếu map/filter chưa tự viết được, ưu tiên chương này trước Redux.

## English
“My Node.js background helps with JavaScript and API integration. On the frontend, I also need to manage component state, user interactions and rendering behavior.”

---

# 03 / HTML, CSS và browser

## Một form dùng được
Dùng form, label liên kết input, type phù hợp và button đúng mục đích. Nút phụ trong form cần type=button nếu không muốn submit. Validation client cải thiện trải nghiệm; server vẫn phải validate độc lập. Input placeholder không thay thế đầy đủ label.

## Box model và layout
Content, padding, border, margin. Với box-sizing:border-box, width bao gồm padding và border. Flex thích hợp phân bố trên một chiều; Grid hữu ích cho bố cục hai chiều. Media query thay đổi layout theo điều kiện, không phải danh sách mọi mẫu điện thoại.

## Bài 40 phút
Tạo danh sách card sản phẩm: desktop ba cột, màn nhỏ một cột; input search và nút rõ ràng, không overflow ngang. Hãy giải thích max-width, gap và cách xử lý text dài. Kiểm thao tác bằng bàn phím, focus và label; responsive screenshot không chứng minh native mobile support.

## Debug CSS
Kiểm computed styles, box model, parent constraints và selector đang thắng. Không thêm !important liên tục để thử vận may. Phân biệt cascade/specificity với lỗi layout do parent. React rerender không có nghĩa browser phải repaint toàn màn hình.

## API trên browser
CORS là cơ chế do browser áp dụng theo response headers. Request chạy được bằng Postman không chứng minh browser gọi được. Không sửa bằng cách tắt bảo vệ browser trong môi trường người dùng. Phân biệt 401 với 403; status thành công vẫn cần dữ liệu đúng contract.

## Hỏi sâu
Vì sao input không có name có thể ảnh hưởng form submission? Button disabled khác loading indicator thế nào? Vì sao 100vw có thể gây overflow ở một số layout? Khi nào dùng semantic button thay vì div có onClick?

## Output
Một trang có form và card grid. Mày phải chỉ ra được rule CSS nào tạo responsive, không chỉ nói framework đã làm sẵn.

---

# 04 / React component, props và state

## Luồng suy nghĩ
UI được tính từ props/state hiện tại. Props là dữ liệu nhận từ parent; state là dữ liệu component quản lý. Thay biến local thông thường không yêu cầu React cập nhật UI. Event handler cập nhật state; render không phải nơi gửi request thay đổi dữ liệu.

## Bài counter
const [count, setCount] = useState(0);
setCount(c => c + 1);
Giải thích functional update dựa trên giá trị trước. Nếu gọi setCount(count+1) hai lần trong cùng handler, chúng dùng cùng snapshot, không đảm bảo tăng hai như mày nghĩ. Tự làm hai biến thể và so output.

## Controlled form
Input nhận value từ state và cập nhật qua onChange. Viết search input, category select và danh sách được lọc từ products/query/category. Danh sách hiển thị có thể tính trực tiếp; không nhất thiết lưu filteredProducts bằng một state riêng.

## Component boundaries
ProductCard nhận product và onAdd; ProductList render nhiều card; CartSummary nhận hoặc chọn dữ liệu cart. Chia component khi có trách nhiệm rõ hoặc cần tái sử dụng, không tách mọi div thành file.

## Keys
Dùng id ổn định giữa các lần render khi list có thể thêm/xóa/đổi thứ tự. Index có thể gắn state của một row sang row khác khi reorder. Không dùng random key mới mỗi render.

## Bài 45 phút
Xây ProductList + ProductCard + SearchInput. Thêm empty state khi không có kết quả. Giữ query ở parent để nhiều component dùng chung. Mở React DevTools hoặc log để phân biệt props nào thay đổi.

## Tự nói bằng tiếng Anh
“Props pass data from a parent. State stores information that changes over time. I would keep search input state near the component that owns the filtered list and derive the visible results from it.”

---

# 05 / Hooks và effect: phần dễ bị hỏi sâu

## Khi nào dùng effect
Effect phù hợp khi cần đồng bộ với hệ thống bên ngoài, ví dụ request theo một điều kiện hoặc subscription. Tính tổng cart từ cart items có thể là phép tính lúc render; không cần effect để copy tổng sang state khác. Action do user bấm như submit nên được xử lý trực tiếp trong handler phù hợp.

## Dependencies và stale closure
Effect đọc query nhưng dependency bỏ query có thể dùng giá trị cũ. Thêm dependency máy móc cũng có thể tạo vòng lặp nếu dependency là object/function mới tạo mỗi render. Hãy hiểu giá trị nào thay đổi và vì sao, không tắt lint để che vấn đề.

## Cleanup
Khi effect có subscription/timer, cleanup bỏ chúng khi cần. Với fetch, AbortController có thể hủy request hoặc dùng cờ ignore để bỏ kết quả stale. Cần phân biệt AbortError với lỗi cần hiển thị.

## useRef, useMemo, useCallback
Ref giữ một giá trị qua render mà thay đổi nó không tự rerender; có thể tham chiếu DOM khi cần. Memo hóa là tối ưu có điều kiện, không phải dấu hiệu mọi component tốt đều phải có. Chỉ thêm sau khi hiểu chi phí/identity đang gây vấn đề.

## Bài sửa lỗi
Một effect lọc products rồi setFiltered, dependency có filtered -> có nguy cơ lặp. Sửa bằng tính filtered lúc render. Một handler load dữ liệu không await trước khi setLoading(false) -> spinner kết thúc sớm. Sửa try/catch/finally theo lifecycle request.

## Hỏi tiếp
Vì sao development có thể chạy setup/cleanup thêm trong Strict Mode? Không mặc định kết luận production gọi API hai lần từ một quan sát development. Dùng setup/cleanup đúng, tránh tắt chế độ chỉ để không thấy lỗi.

## Checkpoint
Đưa ra một effect mày thực sự cần, một effect có thể bỏ, rồi giải thích cả hai. Nếu chỉ đọc định nghĩa mà chưa tự viết, dành thêm 30 phút làm search theo query.

---

# 06 / Nối API và quản lý các trạng thái UI

## Contract giả lập cho bài học
GET products trả mảng {id,name,price}; không trả HTML. UI cần idle/loading/success/error và empty success. Error khác empty: server lỗi không có nghĩa không có sản phẩm. HTTP 4xx/5xx không tự khiến fetch reject như lỗi network; kiểm response.ok.

## Một flow đúng
Đặt loading; reset lỗi cần thiết; gửi request; kiểm status; parse và validate shape cơ bản; cập nhật data; catch lỗi; kết thúc loading khi request còn hiệu lực. Không để request cũ xóa loading của request mới hoặc ghi đè kết quả mới.

## Race condition
User search A rồi B. Request B về trước, A về sau. Nếu gán mọi response vào state, màn hình có thể hiển thị A dù input đang B. Thử bằng delay mock cố định, rồi dùng cancel/ignore hoặc request id để chặn response stale.

## TypeScript
type Product = { id: number; name: string; price: number } mô tả kỳ vọng khi kiểm kiểu. Ép JSON thành Product[] không tự xác thực dữ liệu runtime. Giải thích optional fields, union trạng thái và cách tránh any che mất lỗi.

## Debug theo tầng
Input user -> handler -> payload -> request -> response -> mapping -> state -> UI. Response đúng/UI sai thì kiểm mapping/state/format. Request sai thì kiểm dữ liệu form và handler. Ghi actual/evidence trước khi gọi lỗi backend.

## Bài 45 phút
Mock promise delay 500ms, có nút Retry và mode lỗi. Kiểm double click, empty response, response thiếu field và component rời màn hình trước khi request xong. Không cần service thật để học lifecycle.

## English
“I would inspect the outgoing request and the response in the Network panel, then trace how the response is mapped into state and rendered. This helps distinguish an API issue from a frontend state or mapping issue.”

---

# 07 / Redux Toolkit: ưu tiên cao theo JD

## Hiểu flow trước API
Store giữ state dùng chung. UI dispatch action. Reducer xác định state tiếp theo. Selector lấy dữ liệu cần cho component. Local state vẫn hợp lý cho input chỉ dùng trong một component; Redux có ích khi nhiều phần cần cùng nguồn dữ liệu và luồng thay đổi cần rõ.

## Bài cart
State items: [{id,name,price,quantity}]. Actions addItem, changeQuantity, removeItem. Add cùng id tăng quantity; item mới tạo row mới. Quantity phải nguyên 1..10. Invalid quantity không thay đổi state. Tổng tiền là selector, không cần lưu thêm một tổng dễ bị lệch.

## API cần thực hành
configureStore tạo store; createSlice định nghĩa initial state/reducers và tạo action creators; Provider nối store vào cây React; useSelector đọc; useDispatch gửi action. Trong TS, tạo typed hooks theo kiểu RootState/AppDispatch suy ra từ store, đọc quick start chính thức đi kèm.

## Cạm bẫy
Redux reducer không gọi API hoặc chạy side effect tùy tiện. Redux Toolkit dùng Immer cho phép cú pháp cập nhật draft trong reducer; điều đó không có nghĩa được mutate mọi object state bên ngoài reducer. Không đưa mọi state form vào global store chỉ vì vừa học Redux.

## Bài 60 phút
Tạo cart slice; nối ProductCard với dispatch(addItem(product)); CartSummary chọn total. Làm ba unit tests: add lần đầu, add trùng id, remove. Sau đó thêm boundary quantity. Giải thích vì sao query search có thể vẫn là local state.

## Hỏi phỏng vấn
Redux khác Context ở nhu cầu và tooling nào? Vì sao reducer cần deterministic? Khi nào dùng async thunk hoặc công cụ query? Với fresher, giải thích đúng phần đã làm tốt hơn nhắc nhiều tên API chưa chạy.

## CV
CV chỉ ghi foundational knowledge, chưa nói đã dùng Redux trong production. Trước technical interview, hoàn thành slice và nói được flow bằng tiếng Anh. Không chuyển bài học mới thành achievement ở MobiFone.

---

# 08 / Unit tests và ranh giới với Playwright

## Ba mức bài thực hành
Pure function: calculateTotal đúng với cart rỗng, nhiều item, qty thay đổi. Reducer: action dẫn tới state đúng và không sửa state đầu vào ngoài ý muốn. Component: user nhập search, click Add, thấy cart count/total thay đổi.

## React Testing Library
Tập trung hành vi người dùng nhìn/thao tác thay vì state nội bộ hay tên hàm private. Tìm button theo role/name, form control theo label. Kiểm output thay vì chỉ kiểm handler được gọi. Với cập nhật bất đồng bộ, dùng cơ chế đợi assertion/element phù hợp.

## Test design mẫu
Search: query rỗng hiện toàn bộ; query khác case; không match hiện empty state. Add: lần đầu tạo item; lần hai tăng qty; total đúng. Error: request fail hiện lỗi và Retry; retry thành công thay error bằng data. Đừng chỉ snapshot toàn cây rồi coi đủ coverage.

## Playwright giúp gì?
Kinh nghiệm locator, assertion, timing và quan sát UI có thể chuyển sang viết test component. Tuy nhiên Playwright workflow không tự chứng minh mày đã viết unit tests React. Trong interview nói đúng tool đã dùng và cho xem bài luyện riêng nếu được hỏi.

## Thực hành Node trước
Bài tập đi kèm có core.mjs và core.test.mjs chạy bằng node --test, không cần cài thư viện. Đọc test rồi đoán expected; tự thêm case trước khi sửa code. Bộ test này kiểm logic thuần, không phải test render React.

## English
“My hands-on project testing tool has been Playwright. For component tests, I would test user-visible behavior such as entering a query, adding an item and seeing the updated result. I am practicing this separately from my OJT work.”

## Sản phẩm
Một file test logic, một test reducer và một test component là ba bằng chứng khác nhau. Đừng dùng kết quả một loại để nói đã hoàn thành cả ba.

---

# 09 / Debug và review code

## Sáu triệu chứng để tự giải thích
1. Click Add nhưng cart không đổi: handler có chạy? action đúng? reducer đổi reference? component đang subscribe store nào?
2. Total cũ sau khi đổi qty: đang lưu state trùng lặp? selector hay mapping sai? input có parse đúng kiểu không?
3. Search bị giật về query cũ: kiểm race và debounce/cancel.
4. List nhập liệu nhảy sang row khác: xem key có ổn định khi reorder.
5. Form bấm Cancel lại submit: kiểm button type trong form.
6. Input controlled/uncontrolled warning: value có chuyển từ undefined sang string không? Khởi tạo dữ liệu phù hợp.

## Code cần sửa bằng lý do
items.push(newItem); setItems(items);
Dùng setter với một array mới, ví dụ setItems(prev => [...prev,newItem]). Với update item lồng nhau, copy item đó thay vì chỉ clone array rồi mutate object cũ.

## Đừng tối ưu theo cảm giác
useMemo ở mọi dòng không tự làm app nhanh hơn. Chọn interaction chậm, đo bằng công cụ phù hợp, tìm rerender hoặc computation đáng kể rồi mới thử tối ưu. Không ghi phần trăm cải thiện vào CV khi chưa đo.

## Mẫu kể debugging thật
Symptom -> evidence -> hypothesis -> small change -> verification. Ví dụ locator tìm nhầm phần tử: nói xem DOM/accessible name thế nào, đổi selector gì, assert lại trạng thái nào. Không cần bịa root cause sâu nếu mày chỉ xác nhận script issue.

## Bài 30 phút
Chọn một issue FSoft hoặc MobiFone mày còn nhớ. Viết tiếng Việt đời thường trước, rồi rút thành năm câu tiếng Anh. Nếu chưa nhớ, dùng case lab và gắn nhãn practice. Không kể code bài học như dự án khách hàng.

## Output
Một debugging note có actual, expected, evidence, change và checks. Luyện câu hỏi “How did you know?” sau mỗi kết luận.

---

# 10 / Bài thực hành FE tích hợp

## Product browser + cart, 2-3 giờ
Dữ liệu giả năm sản phẩm có id/name/price/category. Component: ProductPage, SearchBar, ProductCard, CartSummary. Không cần backend mới; mock promise để giữ thời gian cho React.

## Acceptance criteria
Search không phân biệt hoa/thường, bỏ space ở hai đầu. Filter category kết hợp query. Có loading/empty/error/retry. Add cùng id tăng qty. Qty nguyên 1..10; total=sum(price*qty). Remove cập nhật total. List key ổn định. Form có label, button phụ không tự submit. Layout ba cột desktop/một cột mobile.

## State ownership
Query/category là local state ở nơi điều phối list. Cart là Redux store để ProductCard và CartSummary dùng chung. Filtered list và total là derived values. Không thêm state trùng lặp nếu không có lý do.

## Thứ tự làm
20 phút: component tĩnh + data. 30 phút: filter + form. 30 phút: Redux cart. 20 phút: async modes. 20 phút: CSS/keyboard. 20 phút: unit tests và walkthrough tiếng Anh. Nếu mắc setup quá 20 phút, dùng template React/TS chính thức của Vite rồi quay lại bài.

## Cách đánh giá
Có chạy được không? Có behavior fail nào không? Có giải thích state ownership, reducer và race không? Có tự thêm được một rule nhỏ không? Giao diện đẹp không bù được việc chưa hiểu state.

## Nâng độ khó nếu còn giờ
Persist cart vào localStorage có xử lý dữ liệu hỏng; pagination; query debounce có cancellation. Chỉ làm sau khi core pass. Không thêm authentication, payment hay cloud deployment vào đợt ôn gấp này.

## Deliverables
Source chạy được, README ngắn, 6-10 checks/test và video 90 giây demo bằng tiếng Anh. Bài này là independent practice, không thêm ngược vào mục kinh nghiệm doanh nghiệp.

---

# 11 / Bảo vệ CV Frontend

## Profile và trải nghiệm
Nền chính là JavaScript/Node.js; điểm liên quan FE đến từ MobiFone và project React. FSoft cung cấp TypeScript, DOM, UI automation và debugging. Không biến FSoft thành frontend development role.

## MobiFone
Chuẩn bị một màn hình/flow thật: form gì, lấy data từ endpoint nào ở mức không lộ thông tin mật, hiển thị state nào, lỗi nào từng xử lý. Các CV cũ khác nhau về tháng kết thúc: ảnh ghi 04/2025, PDF Tester ghi 06/2025. Bản mới theo PDF Tester; xác nhận lại trước nộp.

## InterDev
Phân biệt phần cả team xây và phần mình trực tiếp đóng góp. Nêu một flow role/project/payment, data đầu vào/ra và cách nối API. Đừng tự nhận toàn bộ kiến trúc hoặc payment integration nếu phần đó của thành viên khác.

## LEGO
Nền backend là lợi thế để giải thích validation, API contract và lỗi integration. Nếu người hỏi xoáy frontend, phải chỉ ra component, state và tương tác mình hiểu. Không dùng Node.js background để lảng câu hỏi React.

## Redux và unit tests
CV không ghi đã dùng Redux tại MobiFone. Redux foundational là mục cần ôn và tự chạy trước interview. Unit testing không được ghi thành kinh nghiệm dự án cũ; bài luyện sẽ cung cấp ví dụ để thảo luận.

## English
Dùng một lần phỏng vấn hoặc trao đổi kỹ thuật thực tế để minh họa khi được hỏi. Không tự tạo IELTS/TOEIC hoặc CEFR. Đề nghị trao đổi trực tiếp bằng tiếng Anh nếu HR cần đánh giá; đừng chỉ lặp lại em rất tự tin.

## Mẫu trả lời giới hạn
“In that project, my contribution was [actual scope]. The team also implemented [other scope]. I can explain the integration, but I did not own that part.” Điền sự kiện trước, không học nguyên văn với ô trống.

---

# 12 / English interview - nói được theo tình huống

## Self-introduction 60 giây
“Hi, I'm An. My main background is JavaScript and Node.js, and I also have frontend internship and React project experience. At MobiFone, I worked on an internal web portal and frontend-backend integration. I am currently doing an Automation QC OJT at FPT Software, where I maintain TypeScript and Playwright scripts and investigate test failures. I am interested in this frontend role because it lets me build on my web development background and work more directly on user-facing features.”

## Why frontend after QC?
“My OJT work strengthened my debugging and understanding of UI behavior. My earlier internship and projects also involved frontend development, so I see this as building on that background rather than starting from scratch.” Chỉ nói scope đã làm.

## Explain Redux
“I would keep the cart in a shared store because several components need it. A component dispatches an action, the reducer updates state, and selectors provide the data needed for rendering. Search input can remain local if it is only used by the product page.”

## Explain one bug
“The UI showed [actual] instead of [expected]. I checked [request/state/DOM evidence], changed [specific part] and verified [checks].” Đừng điền fake project. Nếu dùng bài lab, mở đầu In my practice app.

## Drill 20 phút
Nói không nhìn một phút; tự hỏi why, how do you know, what would happen if. Đổi cart thành notification list rồi nói lại flow. Luyện hỏi lại khi không hiểu thay vì trả lời lạc đề.

## Khi bị hỏi gap
“My strongest background is Node.js and JavaScript. I am refreshing React and Redux through a focused practice app. My current Redux knowledge is foundational, and I can explain the flow I implemented.” Không tự hạ thấp, không nói thành nhiều năm production.

---

# 13 / Mock 45 phút và điều kiện sẵn sàng

## Một vòng mock
0-5: English intro, why FE, availability. 5-12: JS closures/reference/async. 12-22: viết React form/list và state updates. 22-30: Redux cart flow và một reducer. 30-36: API loading/error/race + CSS responsive. 36-42: project contribution và một debugging story. 42-45: câu hỏi ngược.

## 10 câu hỏi bắt buộc
Props/state khác gì? Vì sao update không mutate state? Key giải quyết việc gì? Khi nào effect cần cleanup? Vì sao dependency sai gây bug? Khi nào local state thay Redux? Action/reducer/selector là gì? Fetch xử lý HTTP error thế nào? Test component bằng hành vi ra sao? Em thực sự làm phần nào trong project?

## Rubric tự học 100
JS 20; React/hooks 25; Redux 15; API/debug 15; HTML/CSS 10; English/project explanation 15. Nửa điểm nếu chỉ thuộc định nghĩa; đủ điểm khi có ví dụ hoặc code và giải thích được biến thể. Đây không phải thang chấm BeyondEdge.

## Cách sửa sau mock
Chọn hai nhóm thấp nhất. Làm lại bài nhỏ tương ứng rồi mock biến thể; đừng xây giáo án mới. Không có số điểm nào bảo đảm được gọi hoặc đậu.

## 60 phút cuối
15 phút hai project stories; 15 phút React/Redux flow; 10 phút JS/API lỗi hay gặp; 10 phút English; 10 phút CV/contact/thiết bị. Không bắt đầu Next.js App Router hoặc framework mới trong đêm cuối chỉ để thêm keyword.

## Hỏi nhà tuyển dụng
Trong 2-3 tháng đầu fresher sẽ làm feature nào? Team dùng React/Redux stack và test setup nào? Việc trao đổi với client bằng tiếng Anh diễn ra theo hình thức nào? Không mặc định thiếu chứng chỉ đồng nghĩa giao tiếp yếu; xin đánh giá trực tiếp khi phù hợp.

---

# 14 / Đáp án trọng tâm và nguồn chính thức

## Đáp án ngắn để kiểm sau khi thử
State snapshot: hai setCount(count+1) trong cùng handler cùng dùng giá trị đã render; functional update phù hợp khi phụ thuộc giá trị trước. Derived state: filtered list/total thường tính từ source state. Race: bỏ/hủy response cũ theo lifecycle. Keys: định danh ổn định để gắn đúng component qua thay đổi list. Redux: chỉ đồng bộ nguồn state cần chia sẻ; reducer không tự chạy network side effect.

## Bộ bài đi kèm
practice/ có app React + Redux cart chạy bằng npm run dev; npm test chạy logic thuần và reducer tests. core.mjs + core.test.mjs là phần logic nền; không thay thế test UI React. EXERCISES.md có bài thay đổi app và bổ sung component tests; code mẫu chưa được tính là learner đã hoàn thành. Thử tự implement trước khi đọc code đáp án.

## Nguồn chính thức kiểm tra 10/11/2026
React state: https://react.dev/learn/state-a-components-memory
React effects: https://react.dev/learn/you-might-not-need-an-effect
Redux Toolkit / React-Redux quick start: https://redux.js.org/tutorials/quick-start
React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
JD do người dùng cung cấp: https://drive.google.com/file/d/1refj-6UXRUaoGom6-LFAWS5fvoISn9l5/view
Các trang này dùng để tra mục đang làm; không yêu cầu đọc hết trước khi ứng tuyển.

## Phạm vi
Quy tắc cart, rubric, lịch ôn và mock là bài học do tài liệu thiết kế, không phải đề thi hoặc tiêu chí tuyển dụng nội bộ. CV tổng hợp từ hai PDF đọc được, ảnh và các xác nhận trong chat. Hai PDF iOS/Bosch không đọc được vì đường dẫn đã hết hiệu lực; không được coi là đã đối chiếu.

## Bước đầu tiên
Trong 30 phút, chạy core tests, tự viết filterProducts và giải thích output bằng tiếng Anh. Sau đó chuyển sang form React. Đến đây giá trị nằm ở tự chạy, sửa và nói lại, không ở số trang đã đọc.
