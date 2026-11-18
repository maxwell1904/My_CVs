# 01 / Chốt phạm vi và cách dùng trong một ngày

CHUẨN BỊ 15/11/2026 - PHỎNG VẤN OFFLINE 14:00 NGÀY 16/11/2026

Đây là giáo án chính cho ngày cuối, thay lịch 5 ngày. Mở START_HERE_1_DAY.md để bàn giao cho chat mới. Agent đọc từng block, giải nghĩa cú pháp trước khi hỏi cơ chế. An có nền Node.js nhưng đang quên object/spread. Không lấy bằng chứng học thử với GitHub Copilot làm mức độ hiện tại; user cho phép bỏ kết quả đó. Bắt đầu bằng C0 và kiểm nhanh, tăng tốc ngay khi giải thích được.

## Dữ kiện và giả thuyết

Đã có thư mời FE, Technical Manager Jackson Tran, offline tại BeyondEdge Cần Thơ. Theo lời user thuật lại từ một chị từng phỏng vấn, có hỏi hiểu vấn đề và project/contribution. Callback hell là ví dụ user đưa ra cho dạng hỏi hiểu, không phải keyword chắc chắn xuất hiện hoặc trọng tâm riêng của vòng này. Chưa có xác nhận đề hoặc cấu trúc vòng hiện tại. User nghĩ có thể không code tay. Vì vậy ưu tiên lý thuyết có tình huống, đọc snippet, nói flow; vẫn có pseudocode nhỏ để dự phòng. Không đoán chắc sẽ hỏi đúng ngân hàng này.

## Lịch khoảng 7 giờ tập trung, nghỉ tính riêng

| Block | Phút | Đầu ra |
| --- | --- | --- |
| C0 | 60 | đọc object/array/function/spread/return; trace được copy |
| C1 | 60 | callback, Promise/await, closure/event loop; callback hell là một ví dụ vận dụng |
| C2 | 120 | component/props/state/forms/hooks/Redux, rồi vận dụng |
| C3 | 45 | HTTP/error/tests/debug và tình huống thực tế |
| C4 | 60 | một project flow chắc + FSoft/MobiFone + ownership |
| C5 | 35 | lab Next, server/client/HTTP/hydration |
| C6 | 40 | mock Anh–Việt và sửa hai lỗ hổng |

Tổng 420 phút. Nếu chỉ có 4 giờ: C0 35, C1 35, C2 55, C3 20, C4 45, C5 20, C6 30. Rút số biến thể, giữ một flow đúng mỗi block. Sáng phỏng vấn dành 45–60 phút nói lại notes, xem đường đi và chuẩn bị đồ. Đặt giờ dừng học để ngủ đủ theo nhu cầu; không dùng giờ cuối để mở framework khác.

## Hợp đồng bài học: lý thuyết là nền

Mỗi chủ đề đi theo: khái niệm và mục đích → cú pháp/vai trò từng phần → ví dụ nhỏ → phân tích diễn biến → so sánh và giới hạn → câu lý thuyết tự diễn đạt → một tình huống vận dụng. Không dùng một câu định nghĩa để thay bài giảng. Problem kiểm khả năng áp dụng sau học, không thay chương trình bằng ngân hàng mẹo sửa lỗi. Callback hell chỉ là một ví dụ trong phần async. Project story là một nhánh chuẩn bị riêng, vẫn giữ lý thuyết React/JS/Redux đủ để giải thích.

## Nhịp dạy nhanh nhưng có kiểm

Một cụm 10–20 phút gồm giải thích 2–4 khái niệm có liên quan, một ví dụ 5–15 dòng, agent chạy sau prediction, trace output, rồi hỏi 2–3 câu. Chờ người học trả lời trước khi chấm. Không cần bắt An tự gõ cả app. Không dừng nhiều lượt ở một câu quá nhỏ nếu user đã hiểu. Khi câu trả lời chỉ là nhớ thuật ngữ, đổi dữ liệu hoặc điều kiện để kiểm cơ chế. Nếu bí, quay về bước đầu tiên chưa đọc được, không tăng jargon.

Answer keys trong tài liệu phục vụ tự tra và agent chấm. Đã đọc key chưa phải đã tự giải thích. Mỗi block lưu checkpoint: đã hiểu gì qua câu trả lời, còn nhầm gì, mức hỗ trợ, câu kế tiếp. Không nạp toàn bộ sách dài vào chat mới.

# 02 / C0 - Khôi phục ngôn ngữ để đọc được code

## Từ điển nhanh: gặp từ lạ thì quay lại đây

Tên tiếng Anh trong bảng là thuật ngữ mày có thể gặp khi đọc code hoặc phỏng vấn; không cần học thuộc cả bảng trước. Ví dụ cụ thể nằm ở từng bài phía dưới.

| Từ | Nghĩa dùng trong giáo án | Ví dụ ngắn |
| --- | --- | --- |
| Variable / binding | Tên được gắn với một giá trị | `a` trong `const a = 1` |
| Value / type | Dữ liệu và loại dữ liệu của nó | `1` là number, `'An'` là string |
| Primitive | Giá trị cơ bản, không phải object | number, string, boolean, null |
| Object / property | Object gom các thuộc tính có tên | `qty` là property của `{ qty: 1 }` |
| Reference / identity | Tham chiếu trỏ tới object; identity cho biết có phải cùng object hay không | `b = a` trỏ cùng object |
| Alias | Một tên khác cùng tham chiếu tới object | `a` và `b` cùng chỉ một object |
| Mutation / immutable | Mutation sửa object hiện có; immutable update tạo giá trị mới cho phần cần đổi | `a.qty = 2` sửa object cũ |
| Shallow / deep copy | Sao chép nông tạo lớp ngoài; sao chép sâu tạo bản sao theo nhiều lớp, tùy loại dữ liệu và cách copy | `{ ...a }` là shallow copy |
| Spread / destructuring | Spread trải property vào object mới; destructuring lấy giá trị vào biến | `{ ...a }` và `const { qty } = a` |
| Array / index | Danh sách và vị trí phần tử, bắt đầu từ 0 | `items[0]` là phần tử đầu |
| Function / parameter / return | Đoạn mã có thể gọi; parameter nhận input; return trả kết quả | `function add(x) { return x + 1 }` |
| Callback | Function truyền cho function khác để nó gọi | `map(item => item.price)` |
| Scope / closure | Scope là vùng truy cập biến; closure cho function truy cập biến ở môi trường nơi nó được tạo | counter nhớ `count` |
| Sync / async / Promise | Sync chạy theo thứ tự hiện tại; async cho phép công việc hoàn tất sau; Promise đại diện kết quả sẽ hoàn tất hoặc thất bại | `await fetch(...)` |
| Component / JSX | Component là đơn vị UI; JSX là cú pháp mô tả UI trong JS | `<Product name="A" />` |
| Props / state | Props là input component nhận; state là dữ liệu React giữ để component cập nhật UI | price là prop, quantity là state |
| Render / commit | Render tính UI cần có; commit áp dụng thay đổi cần thiết | state đổi rồi UI hiện số mới |
| Event / handler | Event là sự kiện như click; handler là function xử lý nó | `onClick={handleAdd}` |
| Hook / effect / cleanup | Hook dùng tính năng React; effect đồng bộ bên ngoài; cleanup dọn lần đồng bộ cũ | tạo rồi xóa timer |
| Dependency / stale | Dependency là giá trị logic phụ thuộc; stale là dữ liệu đã cũ | kết quả query A tới sau query B |
| Store / action / reducer / selector | Nơi giữ state; sự kiện gửi đi; hàm tính state mới; hàm đọc data | Add → cart mới → total |
| Request / response / status | Yêu cầu gửi tới server; phản hồi và mã kết quả | GET products → 200 |
| Payload / body / JSON | Payload là dữ liệu mang theo; body là phần nội dung request/response; JSON là dạng text biểu diễn dữ liệu | POST gửi `{ "qty": 2 }` |
| Contract / validate | Thỏa thuận về input/output/behavior; kiểm dữ liệu có phù hợp hay không | qty phải là số nguyên dương |
| Runtime / typecheck | Runtime là lúc chương trình chạy; typecheck là lúc công cụ kiểm kiểu | JSON sai vẫn có thể lọt qua typecheck |
| Error / exception / reject | Lỗi; exception là lỗi được ném khi chạy; reject là Promise thất bại | request có thể reject khi mất mạng |
| Evidence / reproduce / regression | Dấu hiệu kiểm chứng; tái hiện lỗi; kiểm tính năng cũ sau thay đổi | lưu request lỗi, chạy lại case cũ |
| Server / browser / hydration | Server xử lý phía máy phục vụ; browser chạy phía người dùng; hydration gắn tương tác vào HTML đã có | trang Next hiện nội dung rồi nút hoạt động |


## Biến, giá trị và object

Biến là tên dùng để truy cập một giá trị. Chuỗi viết trong dấu nháy, số không cần nháy. const không cho gán tên biến sang giá trị khác; let cho phép gán lại. Object gom các thuộc tính. Trong ví dụ, product là biến, name/price là tên thuộc tính, Keyboard/200 là các giá trị.

```js
const product = { name: 'Keyboard', price: 200 };
console.log(product.name);
product.price = 300;
console.log(product.price);
```

Output: Keyboard, rồi 300. Dấu chấm đọc thuộc tính. Dấu bằng gán giá trị. Đổi property được dù product khai báo const; gán tên product sang object khác thì lỗi. Chạy `node worked/rescue.mjs object`. Biến thể cần tự giải thích: product.price = product.price + 50.

## Array và function

Array là danh sách có thứ tự, dùng dấu vuông; chỉ số đầu là 0. Object có property name, array có phần tử ở index. Function nhận input qua tham số, chạy thân hàm và có thể trả output bằng return. Console.log chỉ in, không thay return.

```js
const prices = [200, 300];
function add(a, b) { return a + b; }
const sum = add(prices[0], prices[1]);
const double = n => n * 2;
console.log(sum, double(4));
```

Output 500 và 8. `n => n * 2` là function viết ngắn, trả biểu thức ngay sau mũi tên. Khi thân có dấu ngoặc nhọn cần return nếu muốn trả giá trị: `n => { return n * 2; }`. `===` so sánh nghiêm ngặt, `=` gán. `if` chọn nhánh, `!` phủ định, `&&` chỉ đánh giá vế sau nếu vế trước truthy. Đừng học tất cả cú pháp cùng lúc; chỉ giải nghĩa khi xuất hiện trong ví dụ.

## Object reference, alias và shallow copy

### Alias: hai biến trỏ tới cùng object

Một biến object giữ tham chiếu tới object. `const b = a` copy tham chiếu, không tạo object thứ hai. `a === b` kiểm hai biến có đang trỏ cùng object không.

```js
const a = { qty: 1 };
const b = a;
b.qty = 2;
console.log(a.qty, a === b);
```

Output 2 và true: hai biến tham chiếu cùng object. Hình dung hai mũi tên tới một hộp.

### Object spread `...`: tạo object ngoài mới

Dấu `...` là cú pháp spread trong object literal. `{ ...a }` tạo một object mới và copy các thuộc tính riêng có thể được liệt kê của a sang object đó. Với thuộc tính số, hai object ngoài giữ giá trị riêng.

```js
const cart = { items: 1 };
const draftCart = { ...cart };
draftCart.items = 2;
console.log(cart.items, draftCart.items, cart === draftCart);
// 1 2 false
```

Kết quả: cart vẫn 1, draftCart là 2, và hai object ngoài không cùng identity. Đây là shallow copy, còn object lồng bên trong cần xem riêng.

### Shallow copy: object con vẫn có thể dùng chung

Shallow copy là bản sao nông: tạo object lớp ngoài mới nhưng không tự sao chép object lồng bên trong. Nếu property chứa reference tới object con, reference đó được copy và hai object ngoài có thể cùng trỏ tới object con.

```js
const a = { item: { qty: 1 } };
const b = { ...a };
b.item.qty = 2;
b.item = { qty: 9 };
console.log(a.item.qty, b.item.qty);
```

Output 2 và 9. Ban đầu hai outer objects cùng trỏ vào nested item nên mutation qty ảnh hưởng chung. Dòng sau thay item của riêng b sang object mới, không thay item của a. Muốn update nested mà giữ a nguyên: `const b = { ...a, item: { ...a.item, qty: 9 } };`. Chạy alias → spread → nested, hỏi prediction từng case. Thứ tự properties có ý nghĩa: `{ ...a, qty: 9 }` cho qty 9, còn `{ qty: 9, ...a }` bị qty từ a ghi đè.

### Thay property và sửa object con: hai thao tác khác nhau

Sau `const b = { ...a }`, `b.item.qty = 2` sửa object con đang dùng chung. Còn `b.item = { qty: 9 }` tạo object con mới rồi thay property `item` của riêng b; `a.item` vẫn trỏ tới object con cũ. Để giữ a nguyên khi đổi qty, copy các object trên đường đi cần sửa: `{ ...a, item: { ...a.item, qty: 9 } }`.

## Destructuring: lấy giá trị từ object hoặc array

Destructuring là cú pháp rút giá trị ra khỏi object hoặc array để gán vào biến. Nó **khác spread**: `{ name }` ở bên trái dấu bằng là destructuring; `{ ...product }` ở bên phải tạo object mới bằng spread.

```js
const product = { name: 'Keyboard', price: 200 };
const { name, price } = product; // object destructuring
const prices = [200, 300];
const [first, second] = prices; // array destructuring
console.log(name, price, first, second);
// Keyboard 200 200 300
```

`{ name, price }` lấy theo tên property; `[first, second]` lấy theo vị trí. Destructuring không mặc định clone object. Với `const { item } = a`, nếu `a.item` là object thì `item` vẫn nhận tham chiếu tới object con đó.

## Array methods: map, filter và reduce

Với rows gồm price/qty: filter chọn những row thỏa điều kiện; map tạo giá trị mới cho từng row; reduce gom nhiều phần tử thành một kết quả. Chạy case array: filter qty > 1 có một row; map line total cho [20, 5]; reduce tổng 25. New array từ map/filter có thể vẫn chứa object cũ nếu callback trả chính object đó. Muốn thay một row thì tạo object mới đúng row, giữ rows khác khi phù hợp.

## Những nền JS cần nói được trước khi vào React

### Primitive và reference identity

Primitive thường gặp: string, number, boolean, undefined, null, bigint và symbol. Object/array/function có reference identity. Undefined thường là chưa có giá trị theo cách truy cập/return của JS; null thường là giá trị rỗng được đặt có chủ đích. `typeof null` trả 'object' là đặc điểm lịch sử, không chứng minh null có properties. Array.isArray kiểm array; typeof array cũng là 'object'.

### Strict equality, truthiness và nullish coalescing

Strict equality `===` tránh coercion của `==`. Hai literal objects có cùng fields vẫn không === vì khác identity. Truthiness liên quan if/&&/||: '', 0, false, null, undefined, NaN là các falsy phổ biến. `value || fallback` dùng fallback cả khi value là 0 hoặc ''; `value ?? fallback` chỉ dùng khi null/undefined. Optional chaining `user?.profile?.name` giúp tránh truy cập property qua nullish; không tự validate schema hoặc sửa mọi exception.

### Scope và hoisting

Scope là vùng binding có thể truy cập. let/const có block scope; var có function scope và hành vi hoisting khác. Ví dụ `if (true) { let x = 1; }` rồi đọc x ngoài block gây ReferenceError. Không hiểu hoisting thành mọi biến đều dùng an toàn trước declaration: let/const có temporal dead zone. Function declaration có thể được gọi trước vị trí khai báo trong ngữ cảnh thông thường; function expression gán const vẫn theo thời điểm khởi tạo binding.

### Closure và `this`: giới thiệu trước C1

Closure là function giữ khả năng truy cập lexical environment, sẽ chạy ví dụ ở C1. Arrow function không có this riêng theo cách ordinary function có; this của ordinary function phụ thuộc cách gọi trong các trường hợp tương ứng. Ví dụ method `user.say()` và function tách khỏi object không mặc định giữ cùng receiver. Trong function components React không cần this như class component; không mất cả buổi học mọi bind/apply trước khi hiểu props.

### Pure function và side effect

Pure function: cùng input phù hợp cho cùng output, không sửa dữ liệu ngoài hoặc gây side effect trong logic đó. `const total = rows => rows.reduce(...)` có thể là pure; function push vào array của caller có mutation cần xét. Đây là nền để hiểu React render và reducer. Spread/immutable update không phải deep clone mọi chỗ: copy đúng path cần đổi, tránh sao chép thừa theo phản xạ.

Ví dụ tự trace: `const options = { limit: 0 }; const a = options.limit || 10; const b = options.limit ?? 10;` cho a=10, b=0. Hỏi requirement limit=0 nghĩa gì trước khi chọn operator. Với `const a = {}; const b = {};`, a===b là false. Đây là kiểm cơ chế sau khi đã học định nghĩa.

## Kiểm hiểu C0, đóng đáp án

1. const chặn gán lại biến hay cấm sửa mọi property? Key: binding.
2. b = a và b = {...a} khác reference nào? Key: cùng object vs outer object mới.
3. Vì sao shallow copy vẫn có thể đổi object con của a? Key: nested reference dùng chung.
4. map callback có ngoặc nhọn mà thiếu return trả gì cho mỗi phần tử? Key: undefined.
5. Tính total dùng filter, map hay reduce? Key: reduce phù hợp, vòng lặp cũng được; phải nêu phép cộng price * qty.

# 03 / C1 - Function, closure và bất đồng bộ

## Callback trước, async sau

Callback là function được truyền cho một function khác để nơi nhận gọi. Nó không mặc định bất đồng bộ. `rows.map(callback)` gọi callback đồng bộ trong lượt map; callback của setTimeout chạy sau. Chạy `node worked/rescue.mjs callback`: output 5 rồi done, vì calculate gọi operation ngay. Truyền `handler` là truyền function; `handler()` là gọi ngay và truyền kết quả của lần gọi đó.

## Ví dụ vận dụng callback: lấy user, orders và chi tiết

getOrders cần user.id; getDetail cần order.id. Khi các API dùng callback, phụ thuộc này dễ dẫn tới lồng nhiều tầng, kiểm error lặp lại và khó lần luồng success/failure. Đó là callback hell trong bài này. Không phải mọi callback đều xấu, và chỉ đếm số indent chưa đủ đánh giá thiết kế.

```js
getUser((error, user) => {
  if (error) { showError(error); return; }
  getOrders(user.id, (error, orders) => {
    if (error) { showError(error); return; }
    if (orders.length === 0) { showEmpty(); return; }
    getDetail(orders[0].id, (error, detail) => {
      if (error) { showError(error); return; }
      showDetail(detail);
    });
  });
});
```

Đây là snippet mô tả contract error-first, không phải code copy chạy riêng. Bản chạy được có sẵn trong rescue case callback-hell. Agent trace ai gọi ai, user.id có từ lúc nào, nhánh empty có gọi detail không. Nếu lỗi getOrders, không được tiếp tục dùng orders undefined; return chặn phần còn lại của callback đó.

## Chuyển Promise và await đúng contract

Promise đại diện kết quả sẽ fulfilled hoặc rejected; pending là chưa xong. Function async luôn trả Promise. await chờ Promise settled để tiếp tục function async đó, không đóng băng cả JS runtime. Với API đã trả Promise, viết luồng phụ thuộc phẳng hơn:

```js
async function load() {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);
    if (orders.length === 0) return [];
    return await getDetail(orders[0].id);
  } catch (error) {
    throw error;
  }
}
```

Catch rethrow ở snippet chỉ minh họa propagation; có thể bỏ catch nếu không thêm handling. Ở UI, caller cần xử lý rejection thành error state. Return await trong try giúp rejection được catch tại đây; return Promise trực tiếp có khác biệt khi try/catch cần bắt rejection. Case promise dùng services Promise local và in total 25. Không chỉ thêm await trước API callback rồi mong tự chuyển contract. API callback cần adapter tạo Promise, resolve khi thành công, reject khi lỗi; kiểm thư viện có bản Promise sẵn trước khi tự bọc.

Một adapter tối giản: `const getUserAsync = () => new Promise((resolve, reject) => getUser((err, value) => err ? reject(err) : resolve(value)));`. Agent giải nghĩa executor, callback, resolve/reject từng bước; không bắt nhớ nguyên dòng. try/catch bao quanh setTimeout mà callback throw sau đó không tự bắt lỗi ấy; catch phải ở đúng execution/Promise boundary.

## Khi nào song song?

### Promise.all: tác vụ độc lập chạy đồng thời

Products và profile độc lập có thể khởi động cùng lúc: `await Promise.all([getProducts(), getProfile()])`. Nhưng getOrders(user.id) phụ thuộc user nên phải có id trước, không nhét mù vào Promise.all. Promise.all cho result theo thứ tự input, không theo thời điểm xong. Một rejection làm aggregate reject, không tự hủy công việc khác. Nếu cần kết quả từng task kể cả fail, cân nhắc allSettled và xử lý từng status.

Case parallel in Keyboard An. Mục tiêu là hiểu dependency, chưa phải benchmark tốc độ. Nếu backend rate limit, dữ liệu lớn hoặc hàng nghìn requests, cần giới hạn concurrency; Promise.all không mặc định là lựa chọn tốt cho mọi số lượng.

## Event loop và closure

### Event loop: sync, microtask và timer

Case async: A → B → promise → timer trong ví dụ Node này. Phần sync chạy trước, Promise reaction vào microtask, timer callback chạy sau theo scheduling phù hợp. await không biến phần việc CPU nặng thành chạy trên thread khác. Không suy mọi môi trường có cùng toàn bộ thứ tự callback từ ví dụ bốn dòng.

### Closure: function nhớ lexical environment

Closure cho function truy cập lexical environment nơi tạo. Case closure tạo hai counter độc lập; a(), a(), b() cho 1, 2, 1. Vì a giữ environment có count riêng, b giữ environment khác. Nối React: handler của một render có thể đóng trên giá trị render đó; muốn giá trị mới phải xem đúng data flow, không nói closure lúc nào cũng là bug.

## Follow-up và keys C1

1. Callback hell gây khó gì? Key: nhiều dependency/error branches, khó tách trách nhiệm và test; dùng flow cụ thể.
2. async/await loại bỏ callback hoàn toàn không? Key: không, thay cách viết Promise composition; callbacks vẫn có ở event/map.
3. Quên await hoặc return trong .then gây gì? Key: caller có thể tiếp tục trước task, chain không theo dõi task con/rejection như mong muốn.
4. Hai API cần cùng user.id nhưng không phụ thuộc nhau? Key: await user trước, sau đó Promise.all hai API.
5. Promise.all reject có cancel request khác không? Key: không tự cancel.
6. CPU loop nặng trong async function có block không? Key: vẫn có thể block thread đang chạy; async không tự offload.

EN mẫu sau khi hiểu: Callback hell makes a dependent workflow difficult to follow, especially when error handling is repeated at each level. I would separate the steps and use Promise-based functions with async/await. I would keep dependent calls sequential and run independent calls concurrently when appropriate.

# 04 / C2 - React từ khái niệm tới ví dụ

## Thứ tự học và cách kiểm

Đọc component/JSX → props → state → events/render → props và state kết hợp → form/lifting state → identity → hooks/effects → Redux. Mỗi mục có định nghĩa, ví dụ và phân tích trước câu hỏi vận dụng. Không dùng problem để thay phần giảng. Nếu chưa đọc được cú pháp thì dừng giải nghĩa; không bắt tự đoán kiến thức chưa học.

## 1. React, component và JSX là gì?

React là thư viện xây UI theo component. Component là một đơn vị UI có input và logic hiển thị, thường viết bằng function. JSX là cú pháp mô tả cây UI trong JS/TS; công cụ build chuyển nó thành lời gọi mà React xử lý. JSX không phải chuỗi HTML. File .tsx cho phép JSX cùng TypeScript; file .jsx là JSX trong JavaScript.

```jsx
function ProductTitle({ name }) {
  return <h2>{name}</h2>;
}

function Catalog() {
  return <ProductTitle name="Keyboard" />;
}
```

Catalog dùng ProductTitle như một component con. Tên component viết hoa giúp JSX phân biệt với thẻ DOM như h2. Dấu `{name}` trong JSX đánh giá biểu thức JavaScript rồi chèn kết quả. Chuỗi name="Keyboard" và số price={200} khác nhau về kiểu giá trị. `className` đặt CSS class; `htmlFor` liên kết label với id input. Fragment `<>...</>` gom siblings mà không tạo DOM wrapper riêng.

Trong ví dụ, React gọi component để tính mô tả UI. Đây là declarative: mình mô tả UI ứng với dữ liệu hiện tại, thay vì tự tìm h2 rồi sửa từng node. Render phải tính toán thuần theo input/state phù hợp; không gửi đơn hàng trong thân render vì React có thể gọi render nhiều lần.

## 2. Props: input component nhận từ bên ngoài

Props là object chứa input truyền từ parent tới child. Có thể truyền string, number, object, array, function hoặc JSX phù hợp. Child đọc props để hiển thị; coi props và object nhận qua props là read-only. Props không phải thứ vĩnh viễn không đổi: parent có thể render lại với props mới.

```jsx
function ProductTitle(props) {
  return <h2>{props.name}: {props.price}</h2>;
}

function Catalog() {
  return <ProductTitle name="Keyboard" price={200} />;
}
```

Tại lần gọi này, props tương đương `{ name: 'Keyboard', price: 200 }`. Viết `function ProductTitle({ name, price })` là destructuring cùng object đó, không phải một loại dữ liệu React riêng. Parent quyết định input; child không sửa `props.price = 999` để yêu cầu parent đổi giá. Thay vào đó báo một action qua callback do parent cấp nếu có yêu cầu cập nhật.

Biến thể sau phần giải thích: parent truyền price={300}, child hiển thị gì? Key: nhận input mới và tính UI theo 300. Câu lý thuyết: props dùng để làm gì? Trả lời input/communication parent-to-child, kèm ví dụ product name/price, không chỉ nói truyền dữ liệu.

## 3. State: dữ liệu React giữ cho component qua các renders

State dùng cho thông tin cần nhớ và có thể thay đổi để ảnh hưởng UI: quantity, input đang nhập, tab đang chọn. useState là Hook cấp một giá trị state cùng setter. Setter yêu cầu React update; nó không sửa ngay biến state mà handler hiện tại đang đọc. State gắn với identity/position component trong cây, không phải một biến toàn cục dùng chung giữa mọi instance.

```jsx
import { useState } from 'react';

function Quantity() {
  const [quantity, setQuantity] = useState(1);
  return (
    <button type="button" onClick={() => setQuantity(q => q + 1)}>
      Quantity: {quantity}
    </button>
  );
}
```

Giải nghĩa: useState(1) dùng 1 làm initial state khi component được khởi tạo. Cặp `[quantity, setQuantity]` là array destructuring. quantity là giá trị cho render hiện tại; setQuantity là function để yêu cầu giá trị mới. `q => q + 1` nhận previous value trong queue và trả next value.

Diễn biến: render đầu quantity=1, button hiện 1. Click gọi handler, queue updater +1. Render sau đọc quantity=2 và tạo mô tả button hiện 2. Bấm lần nữa thành 3. Viết `let quantity = 1` trong thân component rồi quantity++ không cung cấp cơ chế giữ state và yêu cầu render như useState; lần render tiếp cũng khởi tạo biến local ấy lại.

Props/state đều có thể ảnh hưởng UI. Khác nhau cốt lõi là ownership: props đến từ component khác, state được component sở hữu và yêu cầu update qua setter. State của parent hoàn toàn có thể trở thành props của child. Đừng nhớ máy móc props không đổi/state đổi, vì props có thể đổi khi parent update.

## 4. Ví dụ kết hợp đầy đủ: sản phẩm và số lượng

```jsx
function Quantity({ name, price }) {
  const [quantity, setQuantity] = useState(1);
  const total = price * quantity;
  return (
    <section aria-label={name}>
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Total: {total}</p>
      <button type="button" onClick={() => setQuantity(q => q + 1)}>
        Add one
      </button>
    </section>
  );
}
// Parent renders: <Quantity name="Keyboard" price={200} />
```

name/price là props. quantity là state. total là derived value, được tính từ props/state, không cần thêm state hoặc effect. Render đầu quantity 1/total 200; click một lần quantity 2/total 400. Nếu parent đổi price thành 300 mà identity Quantity vẫn giữ, quantity vẫn 2, total tự tính thành 600. Props mới không tự reset mọi state.

Nếu có thêm Quantity cho Mouse ở vị trí khác, hai instance có quantity riêng. Khi parent đổi key của một Quantity, React có thể coi đó là identity mới và khởi tạo state lại. Vì thế việc state giữ hay reset phụ thuộc identity trong cây, không chỉ tên function.

Bản TypeScript chạy được nằm ở app/src/learning/PropsStateExample.tsx. Chạy `npm --prefix app test -- learning.test.tsx`: tests thao tác trong DOM mô phỏng, kiểm initial state, click, props đổi, hai instances độc lập, key reset và callback prop. Không cần đổi app chính hoặc copy snippet thiếu import. Trong giáo án, snippet JSX ưu tiên đọc ý; file .tsx chứa type/import đầy đủ. Agent phải giải thích output test, không lấy test xanh làm learner mastery.

## 5. Events, render/commit và state snapshot

### Event handler: truyền function thay vì gọi ngay

Event handler chạy khi có interaction tương ứng. `onClick={handleClick}` truyền function, `onClick={() => handleClick(id)}` truyền function bọc có tham số. `onClick={handleClick()}` gọi ngay trong render và truyền kết quả; thường sai nếu mục tiêu là đợi click. Đây là ứng dụng của callback đã học ở C1.

### Render và commit

Render tính cây UI mới; commit áp dụng thay đổi cần thiết vào DOM. Render lại không có nghĩa mọi DOM node đều bị xóa dựng lại. State update, parent render và context update là những nguồn cần xét khi giải thích vì sao component render. Memoization có thể giúp bỏ qua công việc theo điều kiện, không thay correctness.

```jsx
function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  console.log(count);
}
```

Giả sử count=0 trong render tạo handler này: cả hai expression count+1 đều bằng 1, console thấy 0, render tiếp có count=1. Đó là snapshot của render hiện tại. Dùng hai updater `setCount(n => n + 1)` cho kết quả 2 vì từng updater nhận kết quả trước nó trong queue. Không nên mô tả đơn giản setter là async function: setter không trả Promise để await chờ state render xong.

Biến thể: setCount(5), sau đó updater +1 cho 6; đảo thứ tự thì replacement 5 ở cuối cho 5. Trả lời phỏng vấn bằng render hiện tại → queue → render sau, không chỉ học output.

## 6. Controlled input và lifting state up

Controlled input lấy value từ React state và báo thay đổi bằng onChange. Một source of truth điều khiển nội dung đang hiện. Uncontrolled input để DOM giữ giá trị, thường đọc qua ref hoặc FormData lúc cần; defaultValue chỉ đặt giá trị ban đầu theo ngữ cảnh. Không tự động kết luận một kiểu luôn tốt hơn cho mọi form.

```jsx
function NameInput({ value, onValueChange }) {
  return (
    <>
      <label htmlFor="learner-name">Name</label>
      <input id="learner-name" name="learnerName" autoComplete="name"
        value={value} onChange={e => onValueChange(e.target.value)} />
    </>
  );
}

function SharedName() {
  const [name, setName] = useState('');
  return (
    <>
      <NameInput value={name} onValueChange={setName} />
      <p>Hello {name}</p>
    </>
  );
}
```

Trace gõ A: browser tạo change event → child lấy e.target.value='A' → gọi callback prop → parent setter nhận A → parent render lại → child nhận value A và greeting nhận name A. Child không mutate props; nó yêu cầu owner update. Đây là lifting state up: đưa state tới parent chung khi nhiều phần UI cần cùng giá trị.

Nếu input có value mà không cập nhật theo onChange, nó có thể bị giữ ở giá trị cũ. Đừng chuyển value từ undefined sang string tùy lúc nếu muốn controlled từ đầu; thường dùng chuỗi rỗng làm initial input. Event input số vẫn thường cung cấp chuỗi; parse/validate ở boundary phù hợp, tránh Number('') thành 0 khi user mới xóa để nhập lại.

Form có submit behavior riêng. Với submit được JS xử lý, event.preventDefault ngăn điều hướng mặc định khi cần; button phụ đặt type=button, nút gửi type=submit. Label đặt accessible name, placeholder không thay label. Validation phía client giúp UX, server vẫn phải kiểm contract/quyền. Ví dụ trên chỉ là input local, không có submit hay request thật.

## 7. List, key và immutable update

```jsx
const next = items.map(item =>
  item.id === targetId ? { ...item, quantity: 2 } : item
);
// UI: items.map(item => <ProductRow key={item.id} product={item} />)
```

map tạo array mới; row cần đổi tạo object mới, rows không đổi có thể giữ reference cũ. Update state object/array phải tránh sửa snapshot cũ trực tiếp. Spread một lớp không tự copy nested data, nối lại kiến thức C0.

key giúp React ghép identity các siblings giữa renders. Dùng id ổn định nếu list có add/remove/reorder. Index key có thể làm row state đi theo vị trí thay vì record, chẳng hạn xóa row đầu làm note gắn nhầm sản phẩm. key không phải prop thông thường child nhận; nếu cần id bên trong, truyền id riêng. Không tạo random key mỗi render vì có thể remount và mất state.

## 8. Hooks: useEffect, useRef, useMemo, useCallback, Context

### Rules of Hooks và custom hook

Hook là API để function component/custom hook sử dụng khả năng React như state/effect. Với các Hooks ở đây, gọi ở top level component/custom hook, không gọi tùy nhánh hoặc trong handler. Custom hook là function dùng hooks để tái sử dụng logic; hai lần dùng hook không tự chia sẻ cùng state instance.

### useEffect: đồng bộ với hệ thống bên ngoài

useEffect đồng bộ với hệ thống ngoài React sau commit phù hợp: timer, subscription, request khi input thay đổi. Event gắn một action cụ thể như submit nên đặt trong handler của action, không phải cứ có side effect là đẩy vào useEffect. Giá trị derive như total tính ngay từ data hiện tại, thường không cần effect.

```jsx
function Clock() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return <p>{seconds}</p>;
}
```

Snippet cần import useState/useEffect; đây là ví dụ đọc lifecycle, không file chạy Node. Setup tạo interval, callback dùng updater không capture seconds cũ làm nguồn next value. Cleanup xóa interval khi cần dọn. Với [] và component giữ mounted, effect không chạy lại vì state seconds đổi; Strict Mode development có thể setup/cleanup thêm để kiểm độ đúng. Không bỏ cleanup chỉ vì timer thấy chạy bình thường vài giây.

Không truyền dependency array thì effect chạy sau các commit tương ứng; [] nghĩa là không có reactive dependency của effect này; [query] cho React so dependency để đồng bộ lại khi query thay đổi. Dependency không phải lịch do mình tùy chọn để che bug. Nếu effect dùng reactive value, cần xét dependency, cấu trúc logic và lint phù hợp. Effect callback không nên là async function trả Promise thay cleanup; tạo async function bên trong rồi gọi, hoặc dùng framework data APIs phù hợp.

### useRef: giữ giá trị qua render mà không yêu cầu render

useRef giữ mutable value qua renders; đổi ref.current không yêu cầu render như state. Dùng cho DOM handle hoặc cờ/request identity không trực tiếp biểu diễn UI. Nếu dữ liệu phải hiện trên màn hình và thay đổi theo tương tác, state thường phù hợp hơn. Đừng mutate ref trong render tùy tiện để né data flow.

### useMemo và useCallback: memoization

useMemo cache kết quả tính theo dependencies; useCallback cache function identity theo dependencies. Ví dụ useMemo(() => expensiveFilter(items, query), [items, query]) chỉ nên dùng khi phép tính/boundary đáng tối ưu. Không cần memo cho price * quantity. useCallback không làm function bên trong tự chạy nhanh hơn và không tự gọi function. React.memo có thể bỏ qua render theo props phù hợp; Context/state của chính component vẫn có tác động cần xét.

### Context: truyền giá trị qua component tree

Context truyền giá trị tới subtree mà không phải chuyền qua từng intermediate prop. Provider cấp value, consumer đọc context. Context là cơ chế truyền giá trị; state update vẫn cần owner/useState/reducer hay store. Redux cung cấp mô hình state management và hệ công cụ riêng. Props vài tầng không phải lý do đủ để chọn Redux cho mọi dữ liệu.

## 9. useReducer và Redux: học data flow trước framework từ khóa

### Reducer, action, dispatch và selector

Reducer là function lấy previous state/action rồi tính next state. Action là mô tả sự kiện với dữ liệu cần xử lý; dispatch gửi action. Selector đọc hoặc derive phần dữ liệu cần dùng. Pure reducer không gửi HTTP, không tạo side effect tùy tiện. Đây là mô hình giúp thay đổi state có quy tắc và dễ kiểm bằng input/output.

```js
function counterReducer(state, action) {
  if (action.type === 'counter/add') {
    return { ...state, count: state.count + action.payload };
  }
  return state;
}
const before = { count: 1 };
const after = counterReducer(before, { type: 'counter/add', payload: 2 });
// before.count = 1; after.count = 3
```

### useReducer và Redux store

useReducer dùng reducer cho state local trong component. Redux có store ngoài component và subscriptions; React-Redux Provider đưa store vào subtree, useDispatch lấy dispatch và useSelector chọn data. Cùng một action có thể đi qua middleware trước/sau reducer theo cấu hình. Store không phải database; refresh browser không mặc định giữ cart nếu chưa có persistence.

### Redux Toolkit và Immer

Redux Toolkit là cách chuẩn hóa viết Redux với configureStore/createSlice và công cụ đi kèm. createSlice sinh action creators và reducer. Trong case reducer của Toolkit, được viết cập nhật Immer draft như state.items.push(...) để tạo immutable result. Plain reducer tự viết như ví dụ phải trả state mới, không mutate before.

App thật của repo dùng cartSlice. Trace Add city: ProductRow dispatch addItem(product), reducer thêm row quantity 1 hoặc tăng row có sẵn, selectTotal tính tổng, Cart hiển thị. Add lần hai city giá 420000 → quantity 2 → total 840000. Email form ở Cart giữ local vì chỉ flow form dùng; items chia sẻ ProductRow/Cart nằm store. Total derive từ items để tránh hai nguồn lệch nhau.

### Async và middleware: đặt side effect ngoài reducer

Async không nằm trong pure reducer. Có thể dùng thunk/async middleware hoặc query tool để gọi service, rồi dispatch/update trạng thái pending/fulfilled/rejected theo thiết kế. App học hiện tại gọi local async service từ component và dùng Redux cho cart, chưa mặc định có createAsyncThunk. Đừng kể mọi công cụ RTK đều đã triển khai chỉ vì project cài Toolkit.

## 10. Vận dụng sau lý thuyết: race và UI states

Loading nghĩa đang chờ kết quả, success có data hợp lệ, empty là success không records, error là thất bại cần biểu diễn riêng. Một request cũ không nên được ghi đè state của request mới. Timeline A-start/B-start/B-finish/A-finish giải thích vì sao last response không chắc là current query.

Case rescue race dùng request id để chỉ current result có quyền commit. Debounce giảm số starts, abort hủy công việc được hỗ trợ, ignore/id guard chặn commit obsolete result; chúng giải quyết các phần khác nhau. Khi viết effect request, cleanup và error handler cũng cần xét stale outcome. Đọc effect App.tsx sau khi đã hiểu ví dụ Clock và async C1, không bắt đầu ở một effect dài hàng chục dòng.

## Trả lời lý thuyết rồi kiểm biến thể

1. Props/state khác gì? Key: ownership/input vs memory/update; nêu Quantity name/price và quantity. Props có thể đổi; parent state có thể thành child props.
2. Khi nào component render? Key: giải thích state/parent/context trong phạm vi ví dụ; render khác DOM replacement.
3. Vì sao hai setter chỉ +1? Key: snapshot và queue, không await setter.
4. Controlled input là gì? Key: state value và event → setter, ví dụ SharedName.
5. Lifting state up làm gì? Key: owner chung cho nhiều phần cần đồng bộ, child callback yêu cầu update.
6. key giải quyết gì? Key: identity siblings, giữ/reset row state đúng record.
7. Effect khác event handler? Key: đồng bộ ngoài React vs action cụ thể, timer setup/cleanup vs submit.
8. useRef khác state? Key: ref mutation không trigger render, scope sử dụng.
9. useMemo/useCallback khác gì? Key: kết quả tính vs function identity; không sửa logic sai.
10. Redux flow thế nào? Key: action/dispatch/reducer/store/selector/UI với số cụ thể.
11. Toolkit cho mutation được sao? Key: Immer draft trong đúng reducer context, before vẫn immutable.
12. Request race sửa thế nào? Key: response hiện hành và cleanup; đây là vận dụng kiến thức đã giảng.

EN - Props are inputs passed by a parent. State is memory owned by a component and updated through React's update functions. In my example, the product name and price are props, while the selected quantity is local state. The total is calculated from them, so it does not need a separate state variable.


# 05 / C3 - Nền web, HTTP, TypeScript và chất lượng

## 1. Browser, HTML và CSS: cấu trúc và cách hiển thị

HTML mô tả cấu trúc/ngữ nghĩa, CSS quyết định trình bày, JS xử lý hành vi. DOM là biểu diễn document browser cung cấp để tương tác. Dùng button thật cho action, a có href cho navigation, label cho form input; vừa có ngữ nghĩa vừa có hành vi keyboard mặc định. JSX là cách mô tả UI bằng JS trong React, browser không tự chạy nguyên source TSX nếu chưa qua tooling.

CSS box model gồm content, padding, border, margin. Với content-box, width 200 + padding 10 mỗi bên + border 1 mỗi bên cho outer border-box width 222; với border-box, width 200 đã gồm padding/border. Margin ngoài hộp là phần cần xét riêng. Khi layout tràn, kiểm rule width/box-sizing/min-width/overflow thay vì chữa mọi nơi bằng overflow hidden.

Flex thường phù hợp bố trí theo một trục chính; Grid thuận tiện cho hàng/cột hai chiều. Media query phản ứng điều kiện viewport, container query phản ứng container theo cấu hình. Position absolute định vị theo containing block thích hợp, không đơn giản luôn theo màn hình; fixed/sticky cũng cần hiểu scroll/containing context. Cascade xét origin/importance/layers/specificity/order theo quy tắc CSS, không phải selector viết sau luôn thắng. Dùng DevTools xem computed rule đang thắng.

Ví dụ minh họa `display: grid; grid-template-columns: 1fr 300px; gap: 24px` chia nội dung/cart hai cột; breakpoint đổi thành một cột cho viewport hẹp. Repo app/src/styles.css có layout thật để đọc. Thí nghiệm chỉ đổi viewport, quan sát cart xuống dưới; không phải xây trang mới. Accessibility và responsive là kiến thức nền, không cần nhớ mọi property để trả lời fresher.

## 2. HTTP/REST và luồng request–response

Browser gửi request gồm method/URL/headers/body theo loại request; server xử lý rồi trả status/headers/body. GET thường đọc representation, POST thường tạo/thực hiện action, PUT thường thay representation, PATCH cập nhật một phần theo contract, DELETE yêu cầu xóa. Đừng suy tên method tự bảo đảm quyền, idempotency hoặc implementation thật. REST là phong cách thiết kế API, không chỉ bất kỳ JSON endpoint nào.

200 thành công có response theo contract, 201 thường tạo resource, 204 không có body. 400 request không hợp lệ, 401 thiếu/không hợp lệ authentication theo ngữ cảnh, 403 không được phép, 404 không tìm thấy, 409 conflict, 500 lỗi server. API có thể chọn status cụ thể khác theo spec; học ý nghĩa và đọc contract. Không gọi response.json vô điều kiện với 204.

JSON là dạng serialize dữ liệu, không phải object JS đã parse. fetch trả Promise<Response>; await response.json đọc/parse body thành giá trị JS, vẫn cần validation nếu dữ liệu ngoài không đáng tin theo contract. Network failure khác HTTP non-2xx. Headers Content-Type/Authorization/cookie tùy thiết kế; không mặc định mọi project dùng token localStorage.

CORS là cơ chế browser áp dụng cho cross-origin access, không phải authentication. Server cấu hình allowed origins/credentials thích hợp; client không chữa bằng tự thêm Access-Control-Allow-Origin vào request. Cookie/CSRF/XSS và token storage có tradeoff cần đọc theo hệ thống; ẩn button ở FE không enforce quyền server.

## 3. TypeScript: kiểu lúc phát triển và dữ liệu lúc chạy

TypeScript thêm kiểm tra kiểu tĩnh cho JS, type annotations bị loại khi build; nó không tự kiểm JSON runtime. Type/interface mô tả shape, union biểu diễn nhiều khả năng, generic tái dùng quan hệ kiểu giữa input/output. any bỏ nhiều kiểm tra nên dễ che lỗi; unknown yêu cầu narrow trước khi dùng.

```ts
type Product = { id: string; price: number };
type Result =
  | { status: 'loading' }
  | { status: 'success'; products: Product[] }
  | { status: 'error'; message: string };
function count(result: Result) {
  if (result.status === 'success') return result.products.length;
  return 0;
}
```

status là discriminator. Trong nhánh success, compiler biết có products. Dùng một union giúp mô tả các trạng thái hợp lệ rõ hơn nhiều flags rời rạc. Assertion `raw as Product[]` không chuyển giá chuỗi thành number và không validate missing id. Generic ví dụ `function first<T>(items: T[]): T | undefined { return items[0]; }` giữ liên hệ kiểu phần tử thay vì trả any.

## 4. Kiểm thử và debug: mục đích trước tình huống

Unit test kiểm một đơn vị logic hẹp như tính total/reducer với input và expected cụ thể. Component test kiểm hành vi UI và tương tác trong môi trường được dựng. E2E kiểm một đường xuyên nhiều phần của hệ thống trong môi trường đại diện. Mock thay dependency để kiểm điều kiện/timeline chủ động, nhưng không chứng minh dependency thật tích hợp đúng.

Một test tốt có setup rõ, action cụ thể và assertion quan sát behavior cần bảo vệ. Ví dụ nhập name An thì greeting hiện Hello An; test chỉ assert component tồn tại không chứng minh form đồng bộ. Debug là thu thập evidence để tìm boundary đầu lệch expected, không phải đổi code ngẫu nhiên tới khi hết đỏ.

Git nền: working tree là file đang sửa, staging là thay đổi chọn cho commit, commit ghi snapshot lịch sử. Branch giúp phát triển dòng thay đổi; merge/rebase tích hợp lịch sử theo cách khác nhau. Khi kể dùng Git, nói thao tác và cách đọc diff/conflict mình thực sự biết; không tự nhận thiết kế workflow team. Xem chương 20 sách dài nếu bị hỏi sâu.

## Vận dụng sau nền: cách trả lời một problem chưa từng làm

Hỏi requirement còn thiếu → nêu input/expected → liệt kê hai nguyên nhân → chọn evidence phân biệt → đề xuất fix có scope → kiểm success/failure/biến thể. Nói đây là cách em sẽ điều tra nếu đó là tình huống giả định; không biến thành bug thật của mình.

## Tám tình huống và hướng reasoning

1. API trả 500 nhưng catch không chạy: fetch có thể resolve Response dù HTTP error. Kiểm response.ok/status trước parse/use data. Phân biệt network rejection với HTTP failure; không chỉ thêm catch vào cuối rồi coi xong.
2. TypeScript build pass nhưng UI crash: type assertion không validate JSON. Kiểm shape runtime, null/undefined/optional fields và mapping boundary. Ví dụ price string thay number; phân biệt compiler contract với dữ liệu thật.
3. Response đúng mà UI thiếu record: so raw response → mapping → state → filter/selector → render/key. Kiểm filter đang bật trước khi kết luận backend. Chọn observation cho từng boundary.
4. Double click tạo hai đơn: UI disabled/busy guard giảm thao tác lặp; backend cần idempotency/uniqueness theo requirement để chống retry/concurrency. UI lock không bảo đảm toàn hệ thống chỉ tạo một đơn. Timeout có thể chưa rõ server đã xử lý hay chưa, không blind retry mutation.
5. Ẩn nút admin đã đủ quyền chưa: server vẫn phải kiểm authentication, authorization và ownership. Không tin role/id client gửi như bằng chứng quyền. Nêu đây là nguyên tắc thiết kế; lab không có auth production.
6. List lớn bị chậm: reproduce, đo network/render/main thread rồi chọn pagination, virtualization hoặc giảm compute theo bottleneck. Không rải useMemo mọi nơi. Lab chưa có benchmark nên không claim cải thiện phần trăm.
7. Test automation fail: phân biệt lỗi product, selector/script, timing, test data/environment. Đọc failure/log, tái hiện cùng input, tìm evidence. Không tăng timeout mọi chỗ hoặc sửa assertion cho xanh khi chưa hiểu expected.
8. Fix xong kiểm gì: đúng symptom cũ, một case gần kề, failure path và regression liên quan. Unit cho calculation/reducer; component cho interaction/UI; E2E cho đường xuyên nhiều thành phần trong môi trường đại diện. Test pass chỉ bảo đảm phạm vi oracle/môi trường đã kiểm.

## Một câu trả lời mẫu 45 giây

EN - First, I would reproduce the issue with the same input and inspect the request and response. If the response is correct, I would trace the mapping, state update and displayed result. I would fix the first boundary where actual behavior differs from the requirement, then check the original case and a related failure case.

Biến thể agent hỏi: request 200 nhưng body rỗng, hoặc mutation success nhưng refresh fail. Với trường hợp sau, phân biệt action đã xác nhận thành công với việc đọc lại list; retry refresh phù hợp hơn gửi mutation lần nữa khi đã biết mutation thành công.

# 06 / C4 - Project và contribution theo đúng CV đã gửi

## Bắt đầu từ những bullet người phỏng vấn đang cầm

CV nguồn: BeyondEdge_Frontend_Fresher_An/main.tex. Không sửa CV đã gửi trong buổi học. MobiFone ghi React components/forms/data display, API integration/debug. FSoft ghi TypeScript/Playwright failures/locators/assertions/waits. InterDev ghi React role/workflow/transaction và Nest API/payment/refund. LEGO ghi MERN auth/cart/orders và validation/error handling. Mỗi bullet đều có thể dẫn tới câu em đã phụ trách gì, code nào, vì sao chọn cách đó, lỗi gì và kiểm ra sao.

Đặc biệt: user xác nhận phần InterDev implementation chủ yếu do Agents, mình prompting/coordinating. CV Developed mạnh hơn scope đã xác nhận. Cách chuẩn bị là làm rõ phần trực tiếp làm/đọc/kiểm ở từng flow. Không bịa số lượng users, performance, test coverage hoặc bug story để lấp khoảng trống.

## Cấu trúc story 60–90 giây

Product phục vụ ai và làm gì → vai trò của em → một interaction cụ thể → data/state/API/UI đi thế nào → một quyết định hoặc điểm lỗi và evidence → giới hạn/chỗ cần xác nhận. Chọn một flow sâu thay vì kể hết danh sách tính năng. Người học cần tự điền phần contribution; agent có thể dựng câu từ các dữ kiện đã có, không tự chọn màn hình mà user chưa xác nhận.

Mẫu trống: Trong [project], nhóm xây [mục đích]. Phần trực tiếp của em là [việc đã xác nhận]. Với flow [X], user [action], frontend giữ [state], gọi [API/boundary], xử lý [success/failure]. Em [đọc/triển khai/điều phối/kiểm] phần [Y]. Chi tiết [Z] em cần kiểm lại source, nhưng cơ chế em giải thích được là [...].

## Story 1 - FSoft, mạnh ở investigation

Phạm vi thật: OJT automation, duy trì TypeScript/Playwright trên bộ test cases manual đã chuẩn bị, lượng task không nhiều. Nói rõ tập trung script maintenance và điều tra failure; không nhận thiết kế framework/test strategy từ đầu hoặc tự làm toàn manual testing.

Khung kể: test expected gì → observed gì → evidence từ error/DOM/timing/data → chỗ script hay application lệch → sửa locator/assertion/wait phù hợp → chạy lại case và case liên quan. Nếu chưa nhớ bug cụ thể, agent đưa snippet giả định để tập reasoning rồi yêu cầu An chọn một case thật nhớ được. Chưa có case thật thì ghi pending, không thuộc một chuyện giả thành kinh nghiệm.

Follow-up: vì sao locator đó ổn định? Expected condition là gì? Auto-wait chưa đủ ở bước nào? Làm sao biết không che bug product? Chạy lại một lần pass có đủ gọi flaky fixed không? Em dùng Git xử lý thay đổi thế nào? Chỉ trả tool nào đã dùng; không mặc định từng xem trace nếu user chưa xác nhận.

EN khung an toàn: My OJT focused on maintaining existing TypeScript and Playwright tests. The manual team had already prepared the test cases. My work included investigating failures, checking expected versus actual behavior and updating scripts where appropriate. I would like to explain one case that I can recall clearly.

## Story 2 - MobiFone, FE và API

Internship có thật. CV nói internal web portal, React/JavaScript interfaces và reusable components, phối hợp backend, DevTools/Postman. Chưa có source và danh sách màn hình xác nhận trong bộ ôn. Không tự thêm Redux/Next/enterprise architecture vào MobiFone vì đó là keyword JD.

Flow luyện minh họa: form nhập dữ liệu → local values/validation → submit handler → request → loading → success/error → UI. Đây là mô hình giải thích, chỉ dùng như kinh nghiệm khi An xác nhận có làm flow tương ứng. Hỏi state giữ ở đâu, field rỗng xử lý gì, payload khác response ra sao, backend error gắn field nào, dùng Network/Console để kiểm gì. Nếu chủ yếu sửa UI nhỏ, kể rõ kích thước đó rồi giải thích kỹ cơ chế.

## Story 3 - InterDev Marketplace, flow nên ưu tiên

Repo đúng là github.com/bangdcce/SEP492-Project, bộ dài đã đối chiếu commit c851ee9244b7ea580a4be331b18ac8a00dcf8103. Chương 24/35/36 cung cấp đọc source. Không cần setup backend. Chạy `node worked/marketplace.mjs success`, sau đó refresh-error. Đây là mô hình console rút gọn, không phải integration test project thật.

Flow được sách đối chiếu: page có requests/loading/kycStatus/searchTerm; visible lists/counts derive theo source data/current user/filter. Apply gọi API, success báo kết quả rồi refresh list. Nếu apply đã thành công nhưng refresh fail, server có thay đổi còn UI có thể cũ. Không retry apply mù. Trong source đang đối chiếu, refresh được gọi không await ở action và fetch helper catch/log; mô hình console dùng await để quan sát ổn định. Nói rõ khác biệt đó nếu phân tích sâu.

Câu ownership nên nói thẳng: phần implementation có hỗ trợ nhiều từ AI agents; em chủ yếu điều phối qua prompts. Sau đó chỉ nêu việc đã thực sự tự làm: chia yêu cầu, kiểm output, đọc source hoặc chạy flow nếu đúng. Hiện tại có thể học và chứng minh hiểu flow qua bài này; không hồi tố việc học hôm nay thành việc trực tiếp code ở capstone.

EN khung: A large part of the implementation was generated with AI agents, and my role mainly involved prompting and coordinating that work. I want to distinguish that from code I personally wrote. For the flow I have reviewed, I can explain how the UI state and API result interact, including what happens when a refresh fails after a successful action.

Câu cuối chỉ nói have reviewed sau khi đã đọc/giải thích được. Nếu chưa, nói I am reviewing thay vì tuyên bố đã kiểm. Không dùng câu mẫu để né follow-up kỹ thuật.

## InterDev payment - chỉ đủ hiểu partial success

Chạy payment-flow success/cancel/sync-error. Phân biệt buyer approval → provider capture → app confirmation. Provider đã capture nhưng app sync fail có thể khiến UI chưa xác nhận, không lập tức bảo trả tiền lại. Chưa có evidence backend idempotent thì không claim. SDK refs/callbacks và HTTP refresh auth là phần sâu đọc chương 35 nếu còn giờ; ưu tiên Marketplace chắc trước.

## Story 4 - LEGO, Node.js nối FE

CV ghi React/Node/Express/MongoDB, auth/cart/order, validation và error handling. Source chưa xác minh. Chuẩn bị mô hình cart: item id/qty → server đọc giá hiện hành → validate stock/quantity → tạo order → response → UI. Giá client gửi không phải nguồn tin cậy. Nhưng đây là thiết kế đề xuất để luyện, không khẳng định source cũ có transaction/stock locking/JWT strategy cụ thể.

Hỏi em thực sự phụ trách route/component nào; request có shape gì; validate ở đâu; database lưu quan hệ/order snapshot thế nào; nếu fail giữa chừng xử lý sao; auth lưu ở đâu. Chưa nhớ thì nói quên exact implementation, mô tả phần chắc và cách kiểm lại. Kiến thức Node có thể dùng để giải thích request lifecycle, middleware/error propagation, nhưng không mở sang backend cả ngày.

## Mười hai câu đào sâu, không học mỗi opening story

1. Em tự viết, điều phối, đọc hay kiểm phần nào? Key: tách contribution, không lấy cả feature team thành của mình.
2. User action bắt đầu ở component/handler nào? Key: chọn một flow, chỉ boundary thật hoặc mô hình có nhãn.
3. Data gốc và data derive ở đâu? Key: source of truth, tránh state trùng.
4. Request cần input nào, response shape gì? Key: tên exact chỉ dùng khi kiểm; không đoán endpoint.
5. Loading/error/empty có khác UI không? Key: nêu transition.
6. Action success nhưng reload fail? Key: partial success, retry đúng bước.
7. Vì sao chọn React/Redux/Next? Key: chỉ công nghệ dùng thật; phân biệt quyết định team và mình.
8. Một bug em xử lý có evidence gì? Key: symptom, boundary đầu lệch, fix, verification; không tự bịa case.
9. Nếu làm lại em đổi gì? Key: đề xuất có tradeoff và scope, không claim đã làm.
10. AI làm sai em phát hiện thế nào? Key: một kiểm tra thật, contract/behavior/diff; nếu chưa kiểm thì thừa nhận giới hạn.
11. Test gì bảo vệ flow? Key: oracle rõ, case success và một failure, không chỉ nói đã test.
12. Em chưa nhớ một chi tiết thì làm sao? Key: nêu điều chắc, điều chưa chắc, file/observation sẽ kiểm.

Làm evidence card trong NOTES cho mỗi story: confirmed contribution, flow đã tự trace, ví dụ/bug có thật, chưa xác minh, ba follow-up đã trả lời. Không cần lục toàn repo trong chat mới.

# 07 / C5 - Next.js: framework, routing và server/client

Dùng next-lab/README.md và chương 37 sách dài. Chạy độc lập `npm --prefix next-lab ci` rồi `npm --prefix next-lab run dev`. Nếu dependencies có sẵn thì chỉ run dev. Mở localhost cổng 3001/catalog. Không chạy InterDev, không cần DB/API key.

## Khái niệm trước khi mở source

React cung cấp mô hình component/UI; Next.js bổ sung framework conventions cho routing/rendering/server integration và các khả năng khác. App Router dùng layout.tsx cho khung chung, page.tsx cho UI route, route.ts cho HTTP handler. Route groups/dynamic routes/loading/error boundaries là conventions thêm; không cần học mọi convention trước flow đầu tiên.

Server Component thực thi phần component logic ở server và có thể đọc nguồn dữ liệu server phù hợp. Client Component tạo boundary cho state/events/hooks tương ứng. Client subtree vẫn có thể được prerender thành HTML; hydration gắn khả năng tương tác ở browser. SSR nói về sinh HTML trên server, SSG nói về tạo trước theo cấu hình, RSC nói về mô hình component/payload; không đánh đồng ba tên này. Cache/revalidation có cấu hình và thay đổi theo phiên bản; chỉ kết luận theo source lab hiện tại.

```tsx
// app/catalog/page.tsx - Server Component
async function CatalogPage() {
  const products = await readCatalog();
  return <CatalogClient initialProducts={products} />;
}
// CatalogClient.tsx - file rieng bat dau bang 'use client'
function CatalogClient({ initialProducts }) {
  const [products] = useState(initialProducts);
  return <p>{products.length} products</p>;
}
```

Snippet rút gọn bỏ import/types để đọc boundary; file chạy được trong next-lab giữ đầy đủ cấu hình. Server truyền data qua props; initial render có ba products. Client state cho thay đổi tương tác sau đó. API button riêng sẽ fetch route handler, không bắt server page phải tự fetch endpoint của chính nó. Không gửi secret trong props tới client.

## Thực hành sau giải thích

10 phút đầu trace layout → server page await readCatalog → initialProducts props → CatalogClient. 15 phút tiếp so search/select local với Reload HTTP qua /api/catalog; thử Empty/Error/Success. 10 phút cuối đóng source giải thích boundary, hydration và status handling bằng Việt/Anh.

Key: page/layout mặc định ở server trong App Router; module use client chứa interactive state/events. Client Component vẫn có thể có initial HTML prerender, sau đó hydrate ở browser. RSC không đồng nghĩa per-request SSR. Catalog lab chọn force-dynamic rõ, home có thể static. Reload mới gọi route handler, initial page đọc local data trực tiếp. API 503 cần check response.ok. Props gửi tới client không được chứa secret. Đọc window ngay top-level/render không an toàn chỉ nhờ use client.

Ba câu kiểm: initial load có gọi /api/catalog không? Vì sao search cần state client? Nếu thêm favorite vào server page, tách boundary ở đâu? Dùng hai câu trong mock. Mục tiêu hôm nay là trace flow đã chạy; chưa claim production Next, cache/ISR/Server Actions sâu để sau.

# 08 / C6 - Mock lý thuyết, vận dụng, project và tiếng Anh

## Mock 30 phút, 10 phút sửa

| Phút | Nội dung | Evidence cần nghe |
| --- | --- | --- |
| 0-3 | self-intro English, why FE | đúng scope và trả lời trúng |
| 3-8 | khái niệm JS/async và một snippet áp dụng | định nghĩa bằng lời mình, giải thích ví dụ |
| 8-15 | props/state/hooks/Redux, một tình huống áp dụng | khái niệm, ví dụ, rồi biến thể |
| 15-24 | một flow project + contribution + FSoft/MobiFone | việc thật, partial failure, verification |
| 24-28 | hai câu Next, một HTTP/debug follow-up | boundary, initial load, check status |
| 28-30 | hỏi ngược, clarify | giao tiếp và hiểu role |

Chưa lộ đáp án khi đang mock. Mỗi câu chấm nội dung riêng với English: 0 sai/chưa trả lời, 1 đúng ý nhưng thiếu cơ chế, 2 có ví dụ và nguyên nhân, 3 xử lý biến thể. Không biến tổng điểm tự ôn thành tỷ lệ đậu. Chọn hai lỗi có tác động lớn nhất, dùng snippet mới sửa trong 10 phút; đừng đọc thêm chương chỉ vì chưa đọc hết.

## Lý thuyết phải trả lời được trước phần tình huống

Agent chọn 4–6 câu từ: props/state; component/render; controlled input; effect/cleanup; ref/state; action/reducer/store/selector; Promise/await; reference/shallow copy; HTTP error vs network error; server/client và hydration. Mỗi câu yêu cầu định nghĩa, ví dụ trong bài, giới hạn dễ nhầm. Sau đó mới chọn 1–2 tình huống bên dưới. Không hỏi dồn hết sáu problems và bỏ phần lý thuyết. Project vẫn là nhánh hỏi riêng theo contribution thực tế.

## Bộ problem đổi ngữ cảnh

P1. Callback lấy customer → invoice → payment detail, invoice rỗng. Hỏi dừng ở đâu và chuyển await thế nào. Key: dependency sequence, empty branch trước access [0], API Promise contract, catch ở caller phù hợp.

P2. Notification count không tăng hai lần trong một handler. Key: snapshot và updater queue; không chữa bằng timeout.

P3. Customer B nhưng invoices A tới muộn hiện lên. Key: latest identity/cleanup, debounce chưa đủ, stale error cũng phải guard.

P4. Order được tạo nhưng success UI không hiện vì refresh fail. Key: mutation vs query, xác nhận outcome, không blind duplicate.

P5. Xóa row đầu thì note của row thứ hai đổi chủ. Key: key/identity, cần id ổn định, không reset tất cả state để né symptom.

P6. Component Next có use client mà window is not defined. Key: server prerender/module execution, chuyển browser API vào event/effect phù hợp.

## English không cần văn mẫu dài

Self-intro khung: I have a JavaScript and Node.js background, a frontend internship at MobiFone and an automation QC OJT at FPT Software. My recent work focused on maintaining TypeScript and Playwright tests and investigating failures. I am now focusing on frontend development and reviewing React, Redux and the application flows I can explain in detail.

Clarify: Could you clarify whether you mean the UI state or the server data? / May I use a small example? / I do not recall the exact implementation, but I can explain the data flow I have verified. / I would first check the request and response before deciding where the bug is.

Trả lời problem: First I would confirm the expected behavior. Then I would trace ... The issue could happen because ... I would change ... and verify it with ... . Agent hỏi follow-up how/why để tránh user chỉ thuộc cấu trúc.

## Handoff và câu mở đầu chat mới

Mở thư mục repo và yêu cầu đọc START_HERE_1_DAY.md, AGENTS.md, block hiện tại trong ONE_DAY.md. Không cần paste 47 trang hoặc toàn bộ chat cũ. Ghi một restart line sau mỗi block. Điểm bắt đầu hiện tại là C0 object/property; chưa có câu trả lời độc lập trong phiên này.

Repo code là tài liệu agent dựng. Chạy scripts/test pass kiểm code, không chứng minh người học đã hiểu. Nguồn lịch/phỏng vấn là thư mời đã đọc và xác nhận offline của user. Thông tin callback hell/problem là user thuật lại ngày 15/11. CV nguồn và source InterDev đối chiếu được ghi ở C4; source MobiFone/LEGO chưa kiểm. Docs chính thức cho framework có trong chương 34 sách dài và next-lab README; ưu tiên đúng lockfile khi đi sâu API.

