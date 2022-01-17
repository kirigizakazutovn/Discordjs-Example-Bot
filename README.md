# Discordjs-Example-Bot
Mẫu về bot Discord.js

### Nội dung

- 1.1 : Chuẩn bị cho việc cài đặt

- 1.2 : Hướng dẫn cài đặt

- 2.1 : Hướng dẫn đóng góp

- 2.2 : Hướng dẫn xử lý khi gặp vấn đề với `package.json` và `package-lock.json`

# 1.1 - Chuẩn bị cho việc cài đặt
- `Node.js` tối thiểu `12`
# 1.2 : Hướng dẫn cài đặt 
- Hãy cài đặt trên `Replit` để đảm bảo cho bot hoạt động tốt nhất

- Bước 1 : CÀI ĐẶT GÓI BỔ TRỢ

```
npm i
```
Copy dòng lệnh trên và chạy ở tab Console

- Bước 2 : TẠO BOT

Truy cập vào [Discord Dev Potral](https://discord.com/developers/applications) -> Chọn `New Application` -> Đặt tên cho ứng dụng của bạn rồi nhấn `enter` -> Nhấn vào dấu ba gạch ngang -> Chọn `Bot` rồi chọn `Add Bot` -> Nhấn `Copy` Token

- Bước 3 : KHỞI ĐỘNG BOT

Tìm `Sytem Secerts` (hình `🔒`) rồi làm như sau


```
Key : Token 
Value : mabanvuasaochep
```

Sau đó trở lại tab Console,nhập như sau:

```
npm start
```

Nếu gặp một số vấn đề,hãy thử:
```
node server.js
```

#2.1 - Hướng dẫn đóng góp
Hãy `fork repo`này về tài khoản của bạn,sau khi chỉnh sửa hãy quay lại `repo` này và tạo một `Pull Request`

- `Mod sẽ xem sét có nên chỉnh sửa hay không`

# 2.2 - Xử lý lỗi của package.json và package-lock.json
Hãy xóa 2 file `package.json` và `package.json`,sau đó dùng 

```
npm init -y
```

Sau đó dùng lệnh sau để cài đặt lại các gói bổ trợ

```
npm i
```






