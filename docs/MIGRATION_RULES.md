# MIGRATION RULES

## A. LEGACY SAFETY

`legacy-approved/` luôn READ ONLY.

Không:
- sửa
- xóa
- rename
- format
- refactor
- npm install
- npm update
- cleanup

## B. VISUAL SOURCE OF TRUTH

Mọi layout Next.js phải dựa trực tiếp vào `legacy-approved`.
Không recreate UI từ trí nhớ.
Không dựa vào `repo_data` thay cho legacy.
Không redesign.

## C. VISUAL PRESERVATION

Không tự ý thay đổi:
- DOM hierarchy nếu không cần thiết
- section order
- layout
- colors
- fonts
- font weights
- font sizes
- line heights
- letter spacing
- margins
- padding
- gaps
- container width
- max-width
- grid
- responsive breakpoints
- image dimensions
- aspect ratios
- object-fit
- border radius
- hover effects
- animations
- transitions

## D. CSS MIGRATION RULE

Không dùng Tailwind để rewrite CSS legacy trong giai đoạn migration.
Ưu tiên giữ:
- critical CSS
- main theme CSS
- utilities CSS
- CSS variables
- custom CSS
- existing class names

Không cleanup CSS trước khi Visual Parity hoàn tất.
CSS cascade order phải được bảo toàn.

## E. REACT RULE

Chỉ dùng Client Components cho phần thực sự cần interaction.
Server Components là mặc định.
Không thêm "use client" vào toàn website.
Các phần dự kiến Client Component:
- Header
- Mega Menu
- Mobile Navigation
- Fleet Slider
- Stats hover nếu cần state
- Footer mobile collapse
- Language Switcher
- Forms

## F. WORDPRESS RULE

Không mang WordPress runtime sang Next.js nếu không cần.
Không migrate trực tiếp:
- Contact Form 7 runtime
- CleanTalk
- jQuery
- jQuery Migrate
- wp-hooks
- wp-i18n
- WordPress AJAX
- WordPress REST
- Cloudflare challenge code
- WordPress plugin runtime

Nhưng chưa được xóa source legacy.

## G. SECURITY RULE

Không hardcode hoặc copy secret/API credential vào source mới.
Không đưa các giá trị nhạy cảm vào Git.
Nếu cần environment variable sau này: sử dụng `.env.local`.
`.env.local` phải nằm trong `.gitignore`.
Không commit secret.
Không tự copy Google Maps key hoặc Supabase credentials sang project mới trong Phase 1.

## H. PHASE CONTROL

Mỗi phase:
1. Chỉ làm đúng scope.
2. Build.
3. Kiểm tra error.
4. Báo file thay đổi.
5. Báo warning.
6. STOP.
Không tự động làm phase tiếp theo.
