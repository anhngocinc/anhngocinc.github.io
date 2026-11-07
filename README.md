# ANHNGOCINC.COM — Portfolio & Software Suite (Bento Grid / Windows Metro Dark Mode)

Trang web thương hiệu sáng tạo & hệ sinh thái phần mềm phát triển bởi **AnhNgocInc**: Đạo diễn hình ảnh, Chuyên gia kỹ xảo & Dựng phim với **20+ năm kinh nghiệm**, kết hợp phát triển công cụ tự động hóa quy trình sản xuất phim trường (**QuickProj**) và ứng dụng âm thanh chuyên nghiệp (**Wave N Player**).

---

## 📁 Cấu trúc thư mục dự án

```text
C:\ANHNGOCINC.COM\
│
├── index.html                   # Trang chủ Bento Grid (Single-Page tích hợp 8 khối đa chức năng)
├── gallery.html                 # Trang Danh mục Dự án (Tile Grid 3x3 với 9 hồ sơ dự án & phần mềm chuẩn xác)
├── videos.html                  # Trang Video Showcase (Spotlight 4K Stream + 6 Video YouTube chính thức)
├── audio.html                   # Trang Audio Records (Top tác phẩm SoundCloud HanoiRec & Banner Wave N Player)
│
├── logo.png                     # Logo thương hiệu chính thức (54x54 với hiệu ứng 3D xoay & Neon Glow)
│
├── css\
│   ├── style.css                # Giao diện Bento Grid, Metro Tiles, Software Suite Cards, 4K Video Player
│   └── content-view.css         # Phong cách dành riêng cho các trang nội dung chi tiết
│
├── js\
│   └── main.js                  # Smooth Scroll, Mouse Hover Ambient Glow Controller
│
├── assets\                      # Hình ảnh & Media của thương hiệu
│   ├── logo.png                 # Logo vector & Favicon
│   ├── avatar.jpg               # Chân dung đại diện AnhNgocInc
│   ├── showreel-thumb.jpg       # Ảnh bìa Showreel Master 4K
│   ├── showreel-video.mp4       # Video Master Cinematic Showreel 4K gốc (phát trực tiếp)
│   ├── quickproj-icon.png       # Biểu tượng phần mềm QuickProj (Rust)
│   ├── wavenplayer-splash.png   # Ảnh splash screen phần mềm Wave N Player
│   ├── wavenplayer-icon.png     # Biểu tượng phần mềm Wave N Player
│   ├── airblade-splash.png      # Ảnh splash screen phần mềm AirBlade N Player
│   ├── airblade-icon.png        # Biểu tượng phần mềm AirBlade N Player
│   │
│   └── projects\                # 59 HÌNH ẢNH THỰC TẾ PHÂN PHỐI TỪ "PROJECT PHOTOS"
│       ├── dop\                 # 13 ảnh hiện trường Đạo diễn hình ảnh (DoP) & quay phim
│       ├── tvc\                 # 8 ảnh hiện trường shooting TVC thương mại
│       ├── lifetv\              # 15 ảnh trạm truyền hình & chuyển giao công nghệ livestream LifeTV (2011)
│       ├── hanoirec\            # 7 ảnh phòng thu âm chuyên nghiệp HanoiRec (2012–2024)
│       ├── skn\                 # 9 ảnh kịch nghệ sân khấu "Sân Khấu Nhỏ Hà Nội"
│       └── ndtpost\             # 7 ảnh phòng dựng & trung tâm hậu kỳ NDT Post-Production
│
└── content\                     # HỆ THỐNG TRANG NỘI DUNG & DỰ ÁN CHI TIẾT
    │
    ├── projects\                # HỒ SƠ 9 DỰ ÁN & PHẦN MỀM THỰC TẾ CHUYÊN SÂU
    │   ├── dop.html             # Đạo diễn hình ảnh (DoP): Hiện trường, máy quay cine & lighting
    │   ├── tvc-shooting.html    # TVC Shooting: Hiện trường sản xuất & ghi hình quảng cáo
    │   ├── lifetv.html          # LifeTV: Dự án chuyển giao công nghệ Livestream LifeTV (2011)
    │   ├── hanoirec.html        # HanoiRec: Dự án phòng thu âm chuyên nghiệp (2012–2024) + MV Nhúng
    │   ├── skn.html             # Sân Khấu Nhỏ Hà Nội: Hợp tác ĐD Phan Khởi Nhật, NSND Phạm Thanh Hương
    │   ├── ndtpost.html         # NDT Post-Production: Trung tâm hậu kỳ video & đào tạo chuyên gia
    │   ├── quickproj.html       # QuickProj: Tự động hóa Adobe Premiere Pro 2022+ siêu tốc (Rust)
    │   ├── wave-n-player.html   # Wave N Player 1.2.2: Trình phát sample âm thanh tốc độ cao (Resonic UX)
    │   ├── airblade-n-player.html # AirBlade N Player 0.1.2: Trình phát video desktop chuyên nghiệp (PySide6 & libmpv)
    │   └── showreel-detail.html # Chi tiết hồ sơ sản xuất, khách hàng & thông số Master Showreel
    │
    ├── posts\                   # Khối bài viết chia sẻ chuyên môn
    │   ├── post-1.html          # Quy trình dựng phim chuẩn Hollywood (DaVinci & Premiere)
    │   ├── post-2.html          # Tư duy thị giác & Nghệ thuật Color Grading TVC
    │   └── post-3.html          # Tối ưu hóa Motion Design với After Effects & AI 2026
    │
    ├── profile\
    │   └── bio.html             # Tiểu sử chi tiết 20 năm & triết lý nghệ thuật
    │
    ├── skills\
    │   └── skills-breakdown.html # Bảng phân tích chi tiết bộ công cụ & workstation
    │
    └── stats\
        └── achievements.html    # Thống kê thành tích, 9000+ dự án & đối tác
```

---

## 🚀 Các điểm nâng cấp & Phân phối dữ liệu mới nhất

### 1. Phân phối 59 hình ảnh từ `PROJECT PHOTOS` vào 6 dự án thực tế
Tất cả hình ảnh gốc trong `PROJECT PHOTOS` đã được sao chép và phân loại vào thư mục chuẩn `assets/projects/` và được biên tập thành các bài viết chuyên sâu:
1. **DOP — Đạo diễn hình ảnh (`content/projects/dop.html`):**
   - 13 hình ảnh hiện trường quay phim, thiết bị cine rig, điều phối ánh sáng và chỉ đạo góc máy.
2. **TVC SHOOTING — Hiện trường sản xuất TVC (`content/projects/tvc-shooting.html`):**
   - 8 hình ảnh phim trường TVC thương mại, dolly track, đạo cụ và nhúng TVC bóng chuyền UNI.
3. **LIFETV — Chuyển giao công nghệ Livestream (`content/projects/lifetv.html`):**
   - 15 hình ảnh ghi lại mốc son chuyển giao công nghệ truyền hình trực tiếp cho kênh LifeTV năm 2011.
4. **HANOIREC — Phòng thu âm chuyên nghiệp (`content/projects/hanoirec.html`):**
   - 7 hình ảnh phòng thu, bàn mixing console, micro condenser cao cấp và nhúng MV chính thức *"Chẳng Ai Là Của Riêng Ai" - Knk*.
5. **SKN — Sân Khấu Nhỏ Hà Nội (`content/projects/skn.html`):**
   - 9 hình ảnh kịch nghệ, phối hợp cùng Đạo diễn Phan Khởi Nhật, BS. Nguyễn Văn Dũng và NSND. Phạm Thanh Hương. Nhúng 2 vở kịch nổi tiếng: *"Vợ Tôi Muốn Lấy Chồng"* và *"Vơ Lấy Tội (2015)"*.
6. **NDTPOSTPRODUCTION — Trung tâm hậu kỳ phim (`content/projects/ndtpost.html`):**
   - 7 hình ảnh phòng dựng phim chuyên dụng, hệ thống monitor chuẩn màu, nhúng 3 video TVC quảng cáo và recap bar event do NDT Post thực hiện.

### 2. Tích hợp 8 Video YouTube chính thức vào `videos.html`
Trang `videos.html` đã được tối ưu hóa với responsive iframe (tỷ lệ 16:9), hỗ trợ phát chuẩn CORS và kèm thẻ phân loại, mô tả chi tiết:
- **Liên Khúc Xuân 2018** (`UWS4mbUMs8M`): Biểu diễn sân khấu đại nhạc hội Trung Tâm Âm Nhạc Bắc Ninh & Nhật Piano (NDT Post).
- **Amasco Điều Dưỡng HL08 TVC** (`HuPiBNzwPC8`): Phim quảng cáo thiết bị y tế & điều dưỡng Amasco (NDT Post).
- **UNI Volleyball TVC Commercial** (`putJEpgk-fM`): TVC giải đấu bóng chuyền cúp UNI (NDT Post).
- **Bar & Lounge Event Recap 4K** (`p7Hz7wailLQ`): Recap sự kiện âm nhạc Nightlife sôi động (NDT Post).
- **Kịch: Vợ Tôi Muốn Lấy Chồng** (`dSqEaxuXTUY`): Vở diễn hài kịch tâm lý đặc sắc của Sân Khấu Nhỏ Hà Nội.
- **Kịch: Vơ Lấy Tội (2015)** (`bCusu-KQyIE`): Vở kịch tâm lý xã hội sâu sắc (Sân Khấu Nhỏ Hà Nội 2015).
- **MV: Chẳng Ai Là Của Riêng Ai — Knk** (`PBMFTsjVRf0`): Sản phẩm âm nhạc thu âm và sản xuất bởi HanoiRec Studio.
- **Trẩy Hội Hàn Sơn — Ba Bông 2016** (`lPPcbvw7rlM`): Phim tài liệu văn hóa tín ngưỡng tứ phủ (NDT Post).

### 3. Đồng bộ Hệ sinh thái 3 Phần mềm độc quyền
* **QuickProj of AnhNgocInc.com (v0.1.0 - Rust):**
  - Công cụ dựng sẵn project Adobe Premiere Pro 2022+ chỉ với một cú nhấp chuột phải trên Windows Explorer.
  - Quét hàng nghìn media dưới 1 giây, bảo toàn trọn vẹn phân cấp Nested Bins.
  - Có trang chi tiết riêng tại: [`content/projects/quickproj.html`](file:///c:/ANHNGOCINC.COM/content/projects/quickproj.html).
* **Wave N Player 1.2.2 (Audio Sample Player - Resonic UX):**
  - Trình duyệt và nghe thử sample âm thanh tốc độ cao với độ trễ bằng 0 (Zero-latency seek & scrub).
  - Hiển thị toàn bộ dạng sóng (Full Waveform View), kéo thả trực tiếp sang DAW và Premiere Pro.
  - Có trang chi tiết riêng tại: [`content/projects/wave-n-player.html`](file:///c:/ANHNGOCINC.COM/content/projects/wave-n-player.html).
* **AirBlade N Player 0.1.2 (Desktop Video Player - PySide6 & libmpv):**
  - Trình phát video desktop hiện đại kiểu VLC/MPC-HC: Zoom/Pan mượt mà tại tọa độ con trỏ chuột.
  - Thanh địa chỉ Address Bar tích hợp phát stream đa giao thức (`http`, `rtmp`, `rtsp`, `udp`, `srt`, UNC).
  - Điều hướng thư mục Natural Sort (MPC-HC style) và trích xuất clip lossless (`-c copy`) không cần re-encode.
  - Có trang chi tiết riêng tại: [`content/projects/airblade-n-player.html`](file:///c:/ANHNGOCINC.COM/content/projects/airblade-n-player.html).

### 4. Đồng bộ hóa Menu Điều hướng, Bento Grid 3x3 & Link toàn hệ thống
* **Lưới 3x3 tại `gallery.html`:** Kết nối 9 ô chuẩn xác tới 6 dự án thực tế và bộ 3 phần mềm độc quyền (Tile 7: QuickProj, Tile 8: Wave N Player, Tile 9: AirBlade N Player).
* **Block 8 trang chủ `index.html`:** Trưng bày cả 3 phần mềm độc quyền với layout 3 cột responsive hiện đại.
* **Block 6 trang chủ `index.html`:** Hiển thị 4 dự án thực tế tiêu biểu (DoP, LifeTV, HanoiRec, NDT Post) với ảnh chất lượng cao.
* **Hotline thống nhất:** `(+84) 0708090007` trên toàn bộ các trang web.
