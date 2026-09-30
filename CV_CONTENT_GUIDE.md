# CV Content Management Guide

## Cara Mengontrol Konten yang Ditampilkan di CV

Sistem filtering CV telah ditambahkan untuk memudahkan Anda mengorganisir konten yang ingin ditampilkan atau disembunyikan di CV tanpa harus menghapus data dari website.

### Cara Menggunakan

Setiap item di `constants.js` sekarang memiliki property `showInCV`:

```javascript
{
  company: "Nama Perusahaan",
  role: "Posisi",
  period: "2024 - Present",
  description: "Deskripsi pekerjaan...",
  showInCV: true, // Set to false untuk menyembunyikan dari CV
}
```

### Contoh Penggunaan

#### ✅ Menampilkan Item di CV
```javascript
{
  company: "Toyota Motor Manufacturing Indonesia",
  role: "Digital Manufacturing / DX Engineer Intern",
  period: "Aug 2024 - Aug 2025",
  description: [...],
  showInCV: true, // Item ini AKAN MUNCUL di CV
}
```

#### ❌ Menyembunyikan Item dari CV
```javascript
{
  company: "LPK Yaruki Solusi Indonesia",
  role: "Web Developer (Marketing Website) — Freelance",
  period: "Jun 2025 - Sep 2025",
  description: [...],
  showInCV: false, // Item ini TIDAK AKAN MUNCUL di CV
}
```

### Bagian yang Mendukung Filtering

Property `showInCV` dapat digunakan pada:

1. **Experience** (`experience.items` di bagian `en` dan `id`)
2. **Organization** (`organization.items` di bagian `en` dan `id`)
3. **Projects** (`projects.items` di bagian `en` dan `id`)
4. **Certifications** (`certifications.items` di bagian `en` dan `id`)

### Catatan Penting

- ✨ Default value: Jika `showInCV` tidak ada atau `undefined`, item **AKAN DITAMPILKAN** di CV (backward compatibility)
- 🔍 Item dengan `showInCV: false` **TETAP MUNCUL** di website utama (Home page), hanya disembunyikan di halaman CV
- 🌐 Filtering bekerja untuk **kedua bahasa** (English dan Indonesian)
- 📄 Setelah mengubah nilai `showInCV`, CV akan otomatis update

### Quick Guide

**Untuk menyembunyikan satu item dari CV:**

1. Buka file `src/utils/constants.js`
2. Cari item yang ingin disembunyikan di bagian `en` atau `id`
3. Ubah `showInCV: true` menjadi `showInCV: false`
4. Save file
5. Refresh halaman CV untuk melihat perubahan

**Contoh praktis:**

Misalnya Anda ingin menyembunyikan project "Line Tracer Analog" dari CV karena terlalu lama:

```javascript
// Di bagian projects.items (baik en maupun id)
{
  title: "Line Tracer Analog",
  year: "2022",
  description: "...",
  showInCV: false, // ← Ubah dari true ke false
}
```

### Tips

- 💡 Gunakan fitur ini untuk menjaga CV tetap fokus dan relevan
- 💡 Sembunyikan project/experience lama yang kurang relevan
- 💡 Tampilkan hanya certifications yang paling penting
- 💡 Sesuaikan konten CV untuk posisi / industri yang berbeda

---

**Happy organizing! 🎉**
