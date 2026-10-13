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
Preview LaTeX tích hợp trong Codex hiện chưa nạp được ảnh ngoài file nguồn.
