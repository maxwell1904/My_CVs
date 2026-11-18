# My CVs

Repo CV dùng chung của Maxwell và Nguyễn Thị Minh Tâm.

## Ảnh và tài nguyên dùng chung

- `assets/minh-tam/`: tài nguyên riêng của Minh Tâm, dùng lại cho các CV của Minh Tâm.
- Các tài nguyên của Maxwell nên đặt trong `assets/maxwell/` khi cần.
- `SCT_Logistucs_SJC_CV/main.tex`: CV Customer Service của Minh Tâm.

## Biên dịch bằng XeLaTeX

Chạy từ thư mục gốc repo sau khi cài XeLaTeX và các package cần thiết:

```sh
sh build-cv.sh
```

Script dùng XeLaTeX trong PATH, hoặc bản BasicTeX tại `~/Library/TeX/2026basic` trên máy Maxwell.
Các package cần có: `fontspec`, `pgf`, `enumitem`, `needspace`, `ragged2e`, `lm`.

PDF nằm tại `output/pdf/main.pdf`. Thư mục output không được đưa lên Git.
Nguồn hỗ trợ đường dẫn ảnh khi biên dịch từ gốc repo hoặc thư mục CV.

Trên Overleaf, upload cả cấu trúc repo, chọn `SCT_Logistucs_SJC_CV/main.tex` làm main document và chọn compiler XeLaTeX.
Preview LaTeX tích hợp trong Codex dùng compiler riêng; khi mở dự án, chọn gốc repo để compiler có thể tìm tài nguyên trong `assets/`.

## CV Booking quốc tế của Minh Tâm

- `SCT_Logistucs_SJC_CV/main.tex`: bản một cột, cập nhật theo tài liệu ứng viên và tin Booking quốc tế của LACCO HCM.
- `SCT_Logistucs_SJC_CV/booking.html` và `booking.css`: bản đồ họa hai cột theo mẫu tham khảo. Mở HTML bằng trình duyệt; chọn **In / Lưu PDF**, khổ A4, tắt header/footer và bật in nền để giữ màu sắc.
- Có tùy chọn **Bố cục một cột** trong HTML. Số trang khi in có thể thay đổi theo tùy chọn và font trên máy; không có cam kết tương thích mọi ATS.
- Thời gian thực tập SCS: **07/2026–11/2026**, theo xác nhận trực tiếp của ứng viên/người dùng ngày 17/11/2026.

Nguồn tin tuyển dụng: https://www.facebook.com/share/p/1CT3JHASVA/ (LACCO HCM, Nhân viên Booking quốc tế; kiểm tra ngày 17/11/2026).
Nội dung nhấn booking xuất khẩu, submit/release/amendment, ETD/ETA, SI/VGM và phối hợp hãng tàu/đại lý.
Không thêm nghiệp vụ pricing, kiểm tra chi phí hoặc container rỗng vì nguồn ứng viên chưa xác nhận.
