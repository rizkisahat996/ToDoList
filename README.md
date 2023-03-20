## Cara Mulai Install Express dan NodeJS

Untuk melakukan clone repository dan install express ikuti langkah berikut:

1. Clone repository di folder yang kalian inginkan.

```console
git clone https://github.com/rizkisahat996/ISP-USU.git
```

2. Install node js

https://kinsta.com/blog/how-to-install-node-js/


3. cd ke folder repositorynya dan kemudian ke folder backendnya

```console
cd ISP-USU
code .
cd backend
```

4. Install express

```console
npm install express cors multer
```

5. Install nodemon

```console
npm install -g nodemon
```

6. Buat file baru yang bernama .env kemudian install environtmentnya

```console
npm install dotenv
```

7. Dalam file env tambah kode portnya

```console
PORT=4000
```

## Cara Mulai Install MongoDB

Untuk melakukan install mongodb ikuti langkah berikut:

1. Masih di folder backend, Install Mongoose

```console
npm install mongoose
```

2. Dalam file .env buat line baru

```console
MONGO_URI=mongodb+srv://rizkisahat77:testing1234@cluster1.yaad8mt.mongodb.net/?retryWrites=true&w=majority
```

3. Run server

```console
npm run devStart
```



## Cara Mulai Install ReactJS, tailwindcss

Ikuti langkah berikut dengan Benar:

Buka TERMINAL atau CMD jika menggunakan vscode open terminal
lalu lanjutkan labgkah dibawah ini.

1. Biarkan servernya berjalan dan buat terminal baru

2. Install tailwindcss & node_modules
```console
npm install -D tailwindcss
```
3. Jalankan React App dengan
```console
npm run start
```


## Aplikasi atau tools lain yang diperlukan

1. Postman
https://www.postman.com/downloads/

2. Trello
https://trello.com/


## Cara Kontribusi

Untuk melakukan kontribusi ikuti langkah berikut:

1. Buat branch baru sesuai dengan jobdesc masing-masing.

```console
// Penamaan branch
<branch-type>_<branch-name>
Contoh: feature_user

// Membuat branch
git branch namaBranch (contoh: git branch feature_user)

// Pindah ke branch
git checkout namaBranch (contoh: git checkout feature_user)

// Hapus branch
git branch -d namaBranch (contoh: git branch -d feature_user)
```

2. Buat kodingan untuk fitur yang sudah dibagikan.
3. Pastikan kodingan tidak ada **error** dan tidak mempengaruhi kodingan lain secara **fatal**.
4. Menambahkan file dari working directory ke staging index

```console
git add .

// Menambahkan file tertentu
git add index.ejs
```

5. Mengecek status dari repository

```console
git status
```

6. Commit file
   Pastikan pesan commit yang dikirim sesuai dengan fitur yang dibuat:

-   feat: Menambahkan fitur, halaman, dan komponen baru.
-   fix: Menyelesaikan dan menghilangkan bug atau error.
-   style: Menambahkan custom style pada file css atau tailwind.config.js.
-   test: Semua hal yang berkaitan dengan testing.
-   docs: Semua hal yang berkaitan dengan dokumentasi.
-   chore: Semua hal yang berkaitan dengan maintenance.

```console
git commit -m "pesan commit"

// Commit sesuai kategori
git commit -m "feat: add user page"
git commit -m "fix: fix hide modal when button is pressed"
git commit -m "style: add new background pattern"
```

7. Push file ke repository. Jangan langsung push ke main, push ke branch sesuai yang kalian kerjakan.

```console
// Mengerjakan component
git push -u origin feature_user
```

8. Lakukan pull request untuk di review dan di merge ke main branch.

## Mengambil update code dari Github

1. Pull update code

```console
git pull origin main
```

2. Jika terdapat merge conflict silakan dikabarin ke grup.
