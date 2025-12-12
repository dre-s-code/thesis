(() => {
  // Lightweight i18n dictionary (no dependencies)
  window.I18N = {
    id: {
      nav: { home: "Beranda", results: "Hasil", download: "Unduh" },
      skip: "Lewati ke hasil",
      hero: {
        badge: "Tugas Akhir • Sains Atmosfer dan Keplanetan • Institut Teknologi Sumatera • 2025",
        title: "Uji Akurasi Model WRF Berdasarkan Data GFS dan ERA5 dengan Teknik Ensemble untuk Prediksi Curah Hujan di ITERA",
        authorLine: "Andreas Boni Baik Simamora • 121290057",
        supervisorLine: "Alvin Pratama, S.Si., M.T • Ridlo Wahyudi Wibowo, S.Si., M.Si., M.Sc.",
        hint: "Klik ringkasan di atas untuk melihat detail singkat."
      },
      cta: { results: "Lihat hasil", pdf: "Buka PDF" },
      stats: {
        bias: { k: "Bias correction terpilih", v: "Linear Scaling" },
        best: { k: "Model tunggal terbaik", v: "WRF-ERA5 Member 9 (r=0,91; RMSE=21,23 mm)" },
        csi:  { k: "Puncak CSI", v: "0,60 (Ensemble 3, WRF-ERA5)" },
        roc:  { k: "ROC (AUC)", v: "0,660–0,676 (kategori sedang)" }
      },
      timeline: {
        p1: { title: "Seminar Proposal", date: "28 Februari 2025" },
        p2: { title: "Seminar Hasil & Ujian Komprehensif", date: "21 Mei 2025" },
        p3: { title: "Sidang Tugas Akhir", date: "30 Juni 2025" },
        p4: { title: "Yudisium", date: "Agustus 2025" },
        p5: { title: "Wisuda", date: "15 November 2025" }
      },
      results: {
        h: "Hasil",
        lead: "Temuan utama dan konfigurasi ringkas.",
        oneLine: {
          h: "Kesimpulan ringkas",
          p: "Koreksi bias dan ensemble meningkatkan keterandalan, dengan perbedaan paling jelas pada sensitivitas hujan ringan vs sedang–lebat."
        }
      },
      pill: { domain: "Domain & periode", config: "Konfigurasi WRF", bias: "Bias correction", best: "Model tunggal", ensemble: "Ensemble berbobot", event: "Kejadian hujan", roc: "ROC" },
      card: {

        domain: {
          h: "Domain model & periode simulasi",
          p: "Domain bersarang 9 km → 3 km (rasio 3:1) dengan interval 6 jam, periode 22–27 Januari 2020.",
          mini: "Proyeksi: Mercator • Fokus: wilayah ITERA dan sekitarnya."
        },
        config: {
          h: "Skema fisika & 10 member",
          p: "Sepuluh kombinasi cumulus–mikrofisika digunakan; parameter lain diset sama untuk efisiensi dan konsistensi.",
          mini: "SW: Dudhia • LW: RRTM • PBL: YSU (tetap untuk semua member)."
        },
        ensemble: {
          h: "Bagaimana Ensemble 1–3 dibentuk",
          p: "Ensemble 1 adalah mean, Ensemble 2 berbobot korelasi–RMSE, Ensemble 3 berbobot POD–FAR.",
          mini: "Bobot dinormalisasi (jumlah bobot = 1) sebelum digabungkan."
        },
        bias: {
          h: "Bias correction terpilih",
          p: "Linear Scaling dipilih karena RMSE rata-rata lebih rendah dibanding Quantile Mapping.",
          mini: "Tabel 4.1 — RMSE (LS) 25,11–25,95 mm • (QM) 28,74–28,81 mm"
        },
        best: {
          h: "Model tunggal terbaik",
          p: "WRF-ERA5 Member 9 menonjol (r=0,91; RMSE=21,23 mm).",
          mini: "Klik untuk melihat parameterisasi member terbaik."
        },
        event: {
          h: "Puncak CSI",
          p: "CSI tertinggi mencapai 0,60 pada Ensemble 3 (WRF-ERA5).",
          mini: "Hit–miss–false alarm → CSI."
        },
        roc: {
          h: "ROC (AUC)",
          p: "AUC 0,660–0,676 (kategori sedang) dengan ambang optimal yang berbeda.",
          mini: "ERA5 cenderung pada ambang lebih tinggi; GFS lebih rendah."
        }
      },
      modal: {
        close: "Tutup",

        domain: {
          title: "Domain & periode simulasi",
          body: `
            <p>Konfigurasi domain digunakan untuk menjaga fokus lokal sekaligus tetap merepresentasikan pengaruh skala regional.</p>
            <ul>
              <li><b>Proyeksi:</b> Mercator</li>
              <li><b>Domain induk:</b> 9 km</li>
              <li><b>Domain sarang:</b> 3 km</li>
              <li><b>Rasio grid:</b> 3:1</li>
              <li><b>Interval input & output:</b> 6 jam</li>
              <li><b>Periode simulasi:</b> 22–27 Januari 2020</li>
            </ul>
            
            <div class="img-single">
              <img src="assets/img/domain.png" alt="Domain WRF" loading="lazy">
            </div>
<p class="mini">Visual domain tersedia pada Gambar 3.4 di dokumen skripsi (PDF).</p>
          `
        },
        config: {
          title: "Konfigurasi WRF & daftar member",
          body: `
            <p>Sepuluh member dibangun dari kombinasi <b>cumulus</b> dan <b>mikrofisika</b>. Skema lain diset sama untuk semua member.</p>
            <p class="mini">Skema tetap (semua member): <b>Dudhia</b> (SW), <b>RRTM</b> (LW), <b>YSU</b> (PBL).</p>

            <table class="mini-table">
              <thead><tr><th>Member</th><th>Cumulus</th><th>Microphysics</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>-</td><td>WSM 6</td></tr>
                <tr><td>2</td><td>-</td><td>Goddard</td></tr>
                <tr><td>3</td><td>-</td><td>Thompson</td></tr>
                <tr><td>4</td><td>Tiedtke</td><td>WSM 6</td></tr>
                <tr><td>5</td><td>Kain–Fritsch</td><td>WSM 3</td></tr>
                <tr><td>6</td><td>Betts–Miller–Janjic</td><td>Lin Purdue</td></tr>
                <tr><td>7</td><td>Kain–Fritsch</td><td>Eta Ferrier</td></tr>
                <tr><td>8</td><td>Modified–Tiedtke</td><td>Morrison</td></tr>
                <tr><td>9</td><td>Betts–Miller–Janjic</td><td>WSM 6</td></tr>
                <tr><td>10</td><td>Grell–3D</td><td>Goddard</td></tr>
              </tbody>
            </table>
          `
        },
        ensemble: {
          title: "Ensemble 1–3: rumus & pembobotan",
          body: `
            <p>Ensemble dibangun dari kombinasi beberapa member untuk mengurangi ketidakpastian. Ringkasnya:</p>

            <div class="subcards">
              <div class="subcard">
                <h4>Ensemble 1 (Mean)</h4>
                <span class="mono">X̄ = (1/N) · Σ Xᵢ</span>
                <span class="mono">N: jumlah member</span>
              </div>

              <div class="subcard">
                <h4>Ensemble 2 (Corr–RMSE)</h4>
                <span class="mono">Y₂ = Σ kₙ · yₙ</span>
                <span class="mono">kₙ = (Cₙ + Eₙ)/2</span>
                <span class="mono">Cₙ = Rₙ / ΣR</span>
                <span class="mono">Eₙ = (S − RMSEₙ)/((n−1)·S), S=ΣRMSE</span>
              </div>

              <div class="subcard">
                <h4>Ensemble 3 (POD–FAR)</h4>
                <span class="mono">Y₃ = Σ lₙ · yₙ</span>
                <span class="mono">lₙ = (Pₙ + Fₙ)/2</span>
                <span class="mono">Pₙ = PODₙ / ΣPOD</span>
                <span class="mono">Fₙ = (T − FARₙ)/((n−1)·T), T=ΣFAR</span>
              </div>
            </div>

            <p class="mini">Bobot dinormalisasi (jumlah bobot = 1) sebelum digabungkan.</p>
          `
        },
        bias: {
          title: "Bias correction — Linear Scaling",
          body: `
            <p>Seleksi metode koreksi bias mengacu pada metrik intensitas (korelasi & RMSE) setelah koreksi.</p>
            <ul>
              <li><b>Linear Scaling</b> dipilih karena RMSE rata-rata lebih rendah dan stabil pada kedua data kondisi awal.</li>
              <li><b>Quantile Mapping</b> dapat meningkatkan korelasi, namun tidak konsisten pada seluruh member.</li>
            </ul>
            
            <div class="img-row"><img src="assets/img/fig41_thumb.png" alt="Gambar 4.1" loading="lazy"><img src="assets/img/fig42_thumb.png" alt="Gambar 4.2" loading="lazy"></div>
<p class="mini">Acuan ringkas: LS RMSE 25,11–25,95 mm; QM RMSE 28,74–28,81 mm (Tabel 4.1).</p>
          `
        },
        best: {
          title: "Model tunggal terbaik — WRF-ERA5 Member 9",
          body: `
            <p>Model tunggal dipilih dari kriteria RMSE di bawah rata-rata keseluruhan, lalu dipakai sebagai pembobot pada ensemble.</p>
            <ul>
              <li><b>Data kondisi awal:</b> ERA5</li>
              <li><b>Skema cumulus:</b> Betts–Miller–Janjic (BMJ)</li>
              <li><b>Skema mikrofisik:</b> WSM 6</li>
              <li><b>Skema radiasi gelombang pendek (tetap):</b> Dudhia</li>
              <li><b>Skema radiasi gelombang panjang (tetap):</b> RRTM</li>
              <li><b>Skema lapisan batas (tetap):</b> YSU</li>
            </ul>
            
            <div class="img-row"><img src="assets/img/fig43_thumb.png" alt="Gambar 4.3" loading="lazy"></div>
<p class="mini">Ringkasan performa: r=0,91; RMSE=21,23 mm.</p>
          `
        },
        event: {
          title: "Kejadian hujan — CSI tertinggi",
          body: `
            <p>Verifikasi kejadian hujan dihitung dari tabel kontingensi (hit, miss, false alarm) dan diringkas menjadi CSI.</p>
            <ul>
              <li><b>CSI maksimum:</b> 0,60 pada <b>Ensemble 3 (WRF-ERA5)</b>.</li>
              <li>Ensemble 3 menggunakan pembobotan berbasis <b>POD–FAR</b> sehingga lebih tajam untuk menangkap event.</li>
            </ul>
          
            <div class="img-row"><img src="assets/img/fig45_thumb.png" alt="Gambar 4.5" loading="lazy"></div>
`
        },
        roc: {
          title: "ROC — AUC dan ambang optimal",
          body: `
            <p>ROC menggambarkan trade-off TPR dan FPR pada berbagai ambang hujan. AUC dipakai sebagai ukuran ringkas performa.</p>
            <ul>
              <li><b>AUC:</b> 0,660–0,676 (kategori sedang).</li>
              <li><b>WRF-ERA5</b> cenderung memilih ambang optimal lebih tinggi → lebih cocok untuk hujan sedang–lebat.</li>
              <li><b>WRF-GFS</b> cenderung ambang lebih rendah → lebih sensitif untuk hujan ringan (&lt;10 mm).</li>
            </ul>
          
            <div class="img-row"><img src="assets/img/fig46_thumb.png" alt="Gambar 4.6" loading="lazy"></div>
`
        }
      },
      figures: {
        h: "Gambar kunci",
        lead: "Klik untuk membuka versi besar."
      },
      fig: {
        "41": { label: "Gambar 4.1", desc: "Korelasi setelah bias koreksi", title: "Gambar 4.1 — Korelasi Setelah Bias Koreksi" },
        "42": { label: "Gambar 4.2", desc: "RMSE setelah bias koreksi", title: "Gambar 4.2 — RMSE Setelah Bias Koreksi" },
        "43": { label: "Gambar 4.3", desc: "Diagram Taylor — WRF-ERA5", title: "Gambar 4.3 — Diagram Taylor (WRF-ERA5)" },
        "44": { label: "Gambar 4.4", desc: "Diagram Taylor — WRF-GFS", title: "Gambar 4.4 — Diagram Taylor (WRF-GFS)" },
        "45": { label: "Gambar 4.5", desc: "Hit / miss / false alarm", title: "Gambar 4.5 — Hit / Miss / False Alarm" },
        "46": { label: "Gambar 4.6", desc: "Kurva ROC (ensemble)", title: "Gambar 4.6 — Kurva ROC (Ensemble)" }
      },
      download: {
        h: "Dokumen",
        lead: "Skripsi tersedia di Repository ITERA.",
        open: "Buka",
      },
      footer: {
        line1: "© 2025 Andreas Boni Baik Simamora",
        line2: "Ringkasan hasil skripsi (fokus pada bab Hasil).",
        top: "Kembali ke atas "
      }
    },

    en: {
      nav: { home: "Home", results: "Results", download: "Download" },
      skip: "Skip to results",
      hero: {
        badge: "Thesis • ITERA • 2025",
        title: "Accuracy Assessment of the WRF Model Using GFS and ERA5 with Ensemble Techniques for Rainfall Prediction at ITERA",
        authorLine: "Andreas Boni Baik Simamora • 121290057",
        supervisorLine: "Supervisors: Alvin Pratama • Ridlo Wahyudi Wibowo",
        hint: "Click each result card for a short detail."
      },
      cta: { results: "View results", pdf: "Open PDF" },
      stats: {
        bias: { k: "Selected bias correction", v: "Linear Scaling" },
        best: { k: "Best single model", v: "WRF-ERA5 Member 9 (r=0.91; RMSE=21.23 mm)" },
        csi:  { k: "Peak CSI", v: "0.60 (Ensemble 3, WRF-ERA5)" },
        roc:  { k: "ROC (AUC)", v: "0.660–0.676 (moderate)" }
      },
      timeline: {
        p1: { title: "Proposal Seminar", date: "28 Feb 2025" },
        p2: { title: "Results Seminar & Comprehensive Exam", date: "21 May 2025" },
        p3: { title: "Final Thesis Defense", date: "30 Jun 2025" },
        p4: { title: "Yudisium", date: "Aug 2025" },
        p5: { title: "Graduation", date: "15 Nov 2025" }
      },
      results: {
        h: "Results",
        lead: "Key findings and setup summary.",
        oneLine: {
          h: "One-line takeaway",
          p: "Bias correction and ensembles improve reliability, with the clearest difference in light-rain vs moderate-to-heavy sensitivity."
        }
      },
      pill: { domain: "Domain & period", config: "WRF setup", bias: "Bias correction", best: "Single model", ensemble: "Weighted ensembles", event: "Rain events", roc: "ROC" },
      card: {

        domain: {
          h: "Model domain & simulation period",
          p: "Nested domains 9 km → 3 km (ratio 3:1), 6-hour interval, 22–27 January 2020.",
          mini: "Projection: Mercator • Focus: ITERA area."
        },
        config: {
          h: "Physics schemes & 10 members",
          p: "Ten cumulus–microphysics combinations are tested; other schemes are kept identical for consistency.",
          mini: "SW: Dudhia • LW: RRTM • PBL: YSU (fixed for all members)."
        },
        ensemble: {
          h: "How Ensemble 1–3 are built",
          p: "Ensemble 1 is mean, Ensemble 2 uses correlation–RMSE weights, Ensemble 3 uses POD–FAR weights.",
          mini: "Weights are normalized (sum of weights = 1)."
        },
        bias: {
          h: "Selected bias correction",
          p: "Linear Scaling is selected due to lower average RMSE than Quantile Mapping.",
          mini: "Table 4.1 — RMSE (LS) 25.11–25.95 mm • (QM) 28.74–28.81 mm"
        },
        best: {
          h: "Best single model",
          p: "WRF-ERA5 Member 9 stands out (r=0.91; RMSE=21.23 mm).",
          mini: "Click to see the parameterizations."
        },
        event: {
          h: "Peak CSI",
          p: "Maximum CSI reaches 0.60 in Ensemble 3 (WRF-ERA5).",
          mini: "Hit–miss–false alarm → CSI."
        },
        roc: {
          h: "ROC (AUC)",
          p: "AUC 0.660–0.676 (moderate) with different optimal thresholds.",
          mini: "ERA5 tends to higher thresholds; GFS lower."
        }
      },
      modal: {
        close: "Close",

        domain: {
          title: "Domain & simulation period",
          body: `
            <p>The domain setup keeps a local focus while still capturing regional influences.</p>
            <ul>
              <li><b>Projection:</b> Mercator</li>
              <li><b>Parent domain:</b> 9 km</li>
              <li><b>Nested domain:</b> 3 km</li>
              <li><b>Grid ratio:</b> 3:1</li>
              <li><b>Input & output interval:</b> 6 hours</li>
              <li><b>Simulation window:</b> 22–27 January 2020</li>
            </ul>
            
            <div class="img-single"><img src="assets/img/domain.png" alt="Domain WRF" loading="lazy"></div>
<p class="mini">See Figure 3.4 in the thesis PDF for the domain map.</p>
          `
        },
        config: {
          title: "WRF configuration & member list",
          body: `
            <p>Ten members are defined by <b>cumulus</b> and <b>microphysics</b> combinations. Other schemes are fixed for all members.</p>
            <p class="mini">Fixed schemes: <b>Dudhia</b> (SW), <b>RRTM</b> (LW), <b>YSU</b> (PBL).</p>

            <table class="mini-table">
              <thead><tr><th>Member</th><th>Cumulus</th><th>Microphysics</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>-</td><td>WSM 6</td></tr>
                <tr><td>2</td><td>-</td><td>Goddard</td></tr>
                <tr><td>3</td><td>-</td><td>Thompson</td></tr>
                <tr><td>4</td><td>Tiedtke</td><td>WSM 6</td></tr>
                <tr><td>5</td><td>Kain–Fritsch</td><td>WSM 3</td></tr>
                <tr><td>6</td><td>Betts–Miller–Janjic</td><td>Lin Purdue</td></tr>
                <tr><td>7</td><td>Kain–Fritsch</td><td>Eta Ferrier</td></tr>
                <tr><td>8</td><td>Modified–Tiedtke</td><td>Morrison</td></tr>
                <tr><td>9</td><td>Betts–Miller–Janjic</td><td>WSM 6</td></tr>
                <tr><td>10</td><td>Grell–3D</td><td>Goddard</td></tr>
              </tbody>
            </table>
          `
        },
        ensemble: {
          title: "Ensemble 1–3: formulas & weighting",
          body: `
            <p>Ensembles combine multiple members to reduce uncertainty. In short:</p>

            <div class="subcards">
              <div class="subcard">
                <h4>Ensemble 1 (Mean)</h4>
                <span class="mono">X̄ = (1/N) · Σ Xᵢ</span>
                <span class="mono">N: number of members</span>
              </div>

              <div class="subcard">
                <h4>Ensemble 2 (Corr–RMSE)</h4>
                <span class="mono">Y₂ = Σ kₙ · yₙ</span>
                <span class="mono">kₙ = (Cₙ + Eₙ)/2</span>
                <span class="mono">Cₙ = Rₙ / ΣR</span>
                <span class="mono">Eₙ = (S − RMSEₙ)/((n−1)·S), S=ΣRMSE</span>
              </div>

              <div class="subcard">
                <h4>Ensemble 3 (POD–FAR)</h4>
                <span class="mono">Y₃ = Σ lₙ · yₙ</span>
                <span class="mono">lₙ = (Pₙ + Fₙ)/2</span>
                <span class="mono">Pₙ = PODₙ / ΣPOD</span>
                <span class="mono">Fₙ = (T − FARₙ)/((n−1)·T), T=ΣFAR</span>
              </div>
            </div>

            <p class="mini">Weights are normalized (sum = 1) before aggregation.</p>
          `
        },
        bias: {
          title: "Bias correction — Linear Scaling",
          body: `
            <p>The bias-correction method is selected using intensity metrics (correlation & RMSE) after correction.</p>
            <ul>
              <li><b>Linear Scaling</b> is chosen because it yields lower and stable mean RMSE for both initial datasets.</li>
              <li><b>Quantile Mapping</b> may increase correlation, but it is not consistent across members.</li>
            </ul>
            
            <div class="img-row"><img src="assets/img/fig41_thumb.png" alt="Gambar 4.1" loading="lazy"><img src="assets/img/fig42_thumb.png" alt="Gambar 4.2" loading="lazy"></div>
<p class="mini">Quick reference: LS RMSE 25.11–25.95 mm; QM RMSE 28.74–28.81 mm (Table 4.1).</p>
          `
        },
        best: {
          title: "Best single model — WRF-ERA5 Member 9",
          body: `
            <p>Single models are selected using RMSE below the overall mean, then used as weights for an ensemble scheme.</p>
            <ul>
              <li><b>Initial dataset:</b> ERA5</li>
              <li><b>Cumulus scheme:</b> Betts–Miller–Janjic (BMJ)</li>
              <li><b>Microphysics scheme:</b> WSM 6</li>
              <li><b>Shortwave radiation (fixed):</b> Dudhia</li>
              <li><b>Longwave radiation (fixed):</b> RRTM</li>
              <li><b>Boundary layer (fixed):</b> YSU</li>
            </ul>
            
            <div class="img-row"><img src="assets/img/fig43_thumb.png" alt="Gambar 4.3" loading="lazy"></div>
<p class="mini">Performance: r=0.91; RMSE=21.23 mm.</p>
          `
        },
        event: {
          title: "Rain events — highest CSI",
          body: `
            <p>Event verification uses a contingency table (hit, miss, false alarm) summarized as CSI.</p>
            <ul>
              <li><b>Peak CSI:</b> 0.60 for <b>Ensemble 3 (WRF-ERA5)</b>.</li>
              <li>Ensemble 3 uses <b>POD–FAR</b>-based weighting, improving event detection.</li>
            </ul>
          
            <div class="img-row"><img src="assets/img/fig45_thumb.png" alt="Gambar 4.5" loading="lazy"></div>
`
        },
        roc: {
          title: "ROC — AUC and optimal threshold",
          body: `
            <p>ROC shows the trade-off between TPR and FPR across rainfall thresholds. AUC is the compact score.</p>
            <ul>
              <li><b>AUC:</b> 0.660–0.676 (moderate).</li>
              <li><b>WRF-ERA5</b> tends to a higher optimal threshold → better for moderate-to-heavy rainfall.</li>
              <li><b>WRF-GFS</b> tends to a lower threshold → more sensitive to light rain (&lt;10 mm).</li>
            </ul>
          
            <div class="img-row"><img src="assets/img/fig46_thumb.png" alt="Gambar 4.6" loading="lazy"></div>
`
        }
      },
      figures: { h: "Figures", lead: "Click to open the full size." },
      fig: {
        "41": { label: "Figure 4.1", desc: "Correlation after bias correction", title: "Figure 4.1 — Correlation After Bias Correction" },
        "42": { label: "Figure 4.2", desc: "RMSE after bias correction", title: "Figure 4.2 — RMSE After Bias Correction" },
        "43": { label: "Figure 4.3", desc: "Taylor diagram — WRF-ERA5", title: "Figure 4.3 — Taylor Diagram (WRF-ERA5)" },
        "44": { label: "Figure 4.4", desc: "Taylor diagram — WRF-GFS", title: "Figure 4.4 — Taylor Diagram (WRF-GFS)" },
        "45": { label: "Figure 4.5", desc: "Hit / miss / false alarm", title: "Figure 4.5 — Hit / Miss / False Alarm" },
        "46": { label: "Figure 4.6", desc: "ROC curve (ensemble)", title: "Figure 4.6 — ROC Curve (Ensemble)" }
      },
      download: {
        h: "Document",
        lead: "The thesis PDF is included in this website folder.",
        sub: "Open or download in your browser.",
        open: "Open PDF",
        save: "Download"
      },
      footer: {
        line1: "© 2025 Andreas Boni Baik Simamora",
        line2: "Thesis results summary (focus on the Results chapter).",
        top: "Back to top ↑"
      }
    },

    zh: {
      nav: { home: "主页", results: "结果", figures: "图表", download: "下载" },
      skip: "跳到结果",
      hero: {
        badge: "论文 • ITERA • 2025",
        title: "基于GFS与ERA5数据的WRF模式精度评估：集合方法用于ITERA降雨预报",
        authorLine: "Andreas Boni Baik Simamora • 121290057",
        supervisorLine: "导师：Alvin Pratama • Ridlo Wahyudi Wibowo",
        hint: "点击每张结果卡片查看简要细节。"
      },
      cta: { results: "查看结果", pdf: "打开PDF" },
      stats: {
        bias: { k: "选定偏差订正", v: "Linear Scaling" },
        best: { k: "最佳单一模式", v: "WRF-ERA5 成员9（r=0.91；RMSE=21.23 mm）" },
        csi:  { k: "最高 CSI", v: "0.60（集合3，WRF-ERA5）" },
        roc:  { k: "ROC（AUC）", v: "0.660–0.676（中等）" }
      },
      timeline: {
        p1: { title: "开题报告", date: "2025年2月28日" },
        p2: { title: "中期/结果报告与综合考试", date: "2025年5月21日" },
        p3: { title: "毕业论文答辩", date: "2025年6月30日" },
        p4: { title: "Yudisium", date: "2025年8月" },
        p5: { title: "毕业典礼", date: "2025年11月15日" }
      },
      results: {
        h: "结果",
        lead: "主要结论一览。",
        oneLine: {
          h: "一句话结论",
          p: "偏差订正与集合方法提升了可靠性，差异主要体现在小雨与中到大雨的敏感性上。"
        }
      },
      pill: { domain: "区域与时段", config: "WRF 配置", bias: "偏差订正", best: "最佳单一成员", ensemble: "加权集合", event: "降雨事件", roc: "ROC" },
      card: {

        domain: {
          h: "模式区域与模拟时段",
          p: "双层嵌套：9 km → 3 km（3:1），6 小时间隔，2020 年 1 月 22–27 日。",
          mini: "投影：Mercator • 关注：ITERA 及周边。"
        },
        config: {
          h: "物理方案与 10 个成员",
          p: "采用 10 组对流–微物理组合；其余方案保持一致以便对比。",
          mini: "短波：Dudhia • 长波：RRTM • 边界层：YSU（全成员一致）。"
        },
        ensemble: {
          h: "Ensemble 1–3 的构建方式",
          p: "Ensemble 1 为平均；Ensemble 2 为相关–RMSE 加权；Ensemble 3 为 POD–FAR 加权。",
          mini: "权重归一化（权重和 = 1）。"
        },
        bias: {
          h: "选定偏差订正",
          p: "Linear Scaling 因平均RMSE更低而优于 Quantile Mapping。",
          mini: "表4.1 — RMSE（LS）25.11–25.95 mm •（QM）28.74–28.81 mm"
        },
        best: {
          h: "最佳单一模式",
          p: "WRF-ERA5 成员9表现突出（r=0.91；RMSE=21.23 mm）。",
          mini: "点击查看成员参数化配置。"
        },
        event: {
          h: "最高 CSI",
          p: "集合3（WRF-ERA5）的CSI最高为0.60。",
          mini: "命中/漏报/虚警 → CSI。"
        },
        roc: {
          h: "ROC（AUC）",
          p: "AUC为0.660–0.676（中等），最佳阈值存在差异。",
          mini: "ERA5倾向更高阈值；GFS更低。"
        }
      },
      modal: {
        close: "关闭",

        domain: {
          title: "区域设置与模拟时段",
          body: `
            <p>区域设置在保持局地分辨率的同时，仍能体现区域尺度的影响。</p>
            <ul>
              <li><b>投影:</b> Mercator</li>
              <li><b>母域:</b> 9 km</li>
              <li><b>嵌套域:</b> 3 km</li>
              <li><b>网格比:</b> 3:1</li>
              <li><b>输入与输出间隔:</b> 6 小时</li>
              <li><b>模拟时段:</b> 2020 年 1 月 22–27 日</li>
            </ul>
            <p class="mini">区域示意请见论文 PDF 的图 3.4。</p>
          `
        },
        config: {
          title: "WRF 配置与成员列表",
          body: `
            <p>10 个成员由 <b>对流</b> 与 <b>微物理</b> 的组合构建；其余方案保持一致。</p>
            <p class="mini">固定方案：<b>Dudhia</b>（短波）、<b>RRTM</b>（长波）、<b>YSU</b>（边界层）。</p>

            <table class="mini-table">
              <thead><tr><th>成员</th><th>对流</th><th>微物理</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>-</td><td>WSM 6</td></tr>
                <tr><td>2</td><td>-</td><td>Goddard</td></tr>
                <tr><td>3</td><td>-</td><td>Thompson</td></tr>
                <tr><td>4</td><td>Tiedtke</td><td>WSM 6</td></tr>
                <tr><td>5</td><td>Kain–Fritsch</td><td>WSM 3</td></tr>
                <tr><td>6</td><td>Betts–Miller–Janjic</td><td>Lin Purdue</td></tr>
                <tr><td>7</td><td>Kain–Fritsch</td><td>Eta Ferrier</td></tr>
                <tr><td>8</td><td>Modified–Tiedtke</td><td>Morrison</td></tr>
                <tr><td>9</td><td>Betts–Miller–Janjic</td><td>WSM 6</td></tr>
                <tr><td>10</td><td>Grell–3D</td><td>Goddard</td></tr>
              </tbody>
            </table>
          `
        },
        ensemble: {
          title: "Ensemble 1–3：公式与权重",
          body: `
            <p>集合方法通过融合多个成员来降低不确定性，核心公式如下：</p>

            <div class="subcards">
              <div class="subcard">
                <h4>Ensemble 1（平均）</h4>
                <span class="mono">X̄ = (1/N) · Σ Xᵢ</span>
                <span class="mono">N：成员数</span>
              </div>

              <div class="subcard">
                <h4>Ensemble 2（相关–RMSE）</h4>
                <span class="mono">Y₂ = Σ kₙ · yₙ</span>
                <span class="mono">kₙ = (Cₙ + Eₙ)/2</span>
                <span class="mono">Cₙ = Rₙ / ΣR</span>
                <span class="mono">Eₙ = (S − RMSEₙ)/((n−1)·S)，S=ΣRMSE</span>
              </div>

              <div class="subcard">
                <h4>Ensemble 3（POD–FAR）</h4>
                <span class="mono">Y₃ = Σ lₙ · yₙ</span>
                <span class="mono">lₙ = (Pₙ + Fₙ)/2</span>
                <span class="mono">Pₙ = PODₙ / ΣPOD</span>
                <span class="mono">Fₙ = (T − FARₙ)/((n−1)·T)，T=ΣFAR</span>
              </div>
            </div>

            <p class="mini">权重在合并前会进行归一化（权重和 = 1）。</p>
          `
        },
        bias: {
          title: "偏差订正 — Linear Scaling",
          body: `
            <p>偏差订正方法依据订正后的强度指标（相关系数与RMSE）进行选择。</p>
            <ul>
              <li><b>Linear Scaling</b>：两种初始数据下平均RMSE更低且稳定。</li>
              <li><b>Quantile Mapping</b>：有时可提高相关，但在不同成员间不够一致。</li>
            </ul>
            <p class="mini">参考：LS RMSE 25.11–25.95 mm；QM RMSE 28.74–28.81 mm（表4.1）。</p>
          `
        },
        best: {
          title: "最佳单一模式 — WRF-ERA5 成员9",
          body: `
            <p>单一模式以“RMSE低于总体平均值”为筛选标准，并用于集合权重。</p>
            <ul>
              <li><b>初始数据：</b> ERA5</li>
              <li><b>对流参数化：</b> Betts–Miller–Janjic（BMJ）</li>
              <li><b>微物理方案：</b> WSM 6</li>
              <li><b>短波辐射（固定）：</b> Dudhia</li>
              <li><b>长波辐射（固定）：</b> RRTM</li>
              <li><b>边界层（固定）：</b> YSU</li>
            </ul>
            <p class="mini">性能：r=0.91；RMSE=21.23 mm。</p>
          `
        },
        event: {
          title: "降雨事件 — 最高 CSI",
          body: `
            <p>事件检验基于列联表（命中、漏报、虚警），并汇总为CSI。</p>
            <ul>
              <li><b>最高CSI：</b> 0.60（<b>集合3，WRF-ERA5</b>）。</li>
              <li>集合3使用<b>POD–FAR</b>权重，有助于事件捕捉。</li>
            </ul>
          `
        },
        roc: {
          title: "ROC — AUC与最佳阈值",
          body: `
            <p>ROC刻画不同降雨阈值下TPR与FPR的权衡，AUC为综合指标。</p>
            <ul>
              <li><b>AUC：</b> 0.660–0.676（中等）。</li>
              <li><b>WRF-ERA5</b>倾向更高最佳阈值 → 更适合中到大雨。</li>
              <li><b>WRF-GFS</b>倾向更低阈值 → 对小雨（&lt;10 mm）更敏感。</li>
            </ul>
          `
        }
      },
      figures: { h: "图表", lead: "点击查看大图。" },
      fig: {
        "41": { label: "图 4.1", desc: "偏差订正后的相关系数", title: "图 4.1 — 偏差订正后的相关系数" },
        "42": { label: "图 4.2", desc: "偏差订正后的RMSE", title: "图 4.2 — 偏差订正后的RMSE" },
        "43": { label: "图 4.3", desc: "Taylor图 — WRF-ERA5", title: "图 4.3 — Taylor图（WRF-ERA5）" },
        "44": { label: "图 4.4", desc: "Taylor图 — WRF-GFS", title: "图 4.4 — Taylor图（WRF-GFS）" },
        "45": { label: "图 4.5", desc: "命中/漏报/虚警", title: "图 4.5 — 命中/漏报/虚警" },
        "46": { label: "图 4.6", desc: "ROC曲线（集合）", title: "图 4.6 — ROC曲线（集合）" }
      },
      download: {
        h: "文档",
        lead: "论文PDF已包含在网站文件夹中。",
        sub: "在浏览器中打开或下载。",
        open: "打开PDF",
        save: "下载"
      },
      footer: {
        line1: "© 2025 Andreas Boni Baik Simamora",
        line2: "论文结果摘要（聚焦“结果”章节）。",
        top: "回到顶部 ↑"
      }
    },

    fr: {
      nav: { home: "Accueil", results: "Résultats", download: "Télécharger" },
      skip: "Aller aux résultats",
      hero: {
        badge: "Mémoire • ITERA • 2025",
        title: "Évaluation de la précision du modèle WRF (GFS et ERA5) avec des techniques d’ensemble pour la prévision des précipitations à l’ITERA",
        authorLine: "Andreas Boni Baik Simamora • 121290057",
        supervisorLine: "Encadrants : Alvin Pratama • Ridlo Wahyudi Wibowo",
        hint: "Cliquez sur chaque carte pour un détail court."
      },
      cta: { results: "Voir les résultats", pdf: "Ouvrir le PDF" },
      stats: {
        bias: { k: "Correction de biais retenue", v: "Linear Scaling" },
        best: { k: "Meilleur modèle simple", v: "WRF-ERA5 Membre 9 (r=0,91 ; RMSE=21,23 mm)" },
        csi:  { k: "CSI maximal", v: "0,60 (Ensemble 3, WRF-ERA5)" },
        roc:  { k: "ROC (AUC)", v: "0,660–0,676 (niveau moyen)" }
      },
      timeline: {
        p1: { title: "Séminaire de proposition", date: "28 février 2025" },
        p2: { title: "Séminaire de résultats & examen", date: "21 mai 2025" },
        p3: { title: "Soutenance", date: "30 juin 2025" },
        p4: { title: "Yudisium", date: "août 2025" },
        p5: { title: "Remise des diplômes", date: "15 novembre 2025" }
      },
      results: {
        h: "Résultats",
        lead: "Synthèse des principaux résultats.",
        oneLine: {
          h: "Conclusion en une phrase",
          p: "La correction de biais et les ensembles améliorent la fiabilité, avec une différence surtout marquée entre pluie faible et pluie modérée à forte."
        }
      },
      pill: { domain: "Domaine & période", config: "Configuration WRF", bias: "Correction de biais", best: "Modèle unique", ensemble: "Ensembles pondérés", event: "Événements de pluie", roc: "ROC" },
      card: {

        domain: {
          h: "Domaine du modèle & période de simulation",
          p: "Domaines imbriqués 9 km → 3 km (ratio 3:1), pas de 6 h, 22–27 janvier 2020.",
          mini: "Projection : Mercator • Zone : ITERA et environs."
        },
        config: {
          h: "Schémas physiques & 10 membres",
          p: "Dix combinaisons convection–microphysique ; le reste est maintenu identique pour une comparaison cohérente.",
          mini: "SW : Dudhia • LW : RRTM • PBL : YSU (fixé pour tous les membres)."
        },
        ensemble: {
          h: "Construction des Ensembles 1–3",
          p: "Ensemble 1 = moyenne ; Ensemble 2 = pondération corrélation–RMSE ; Ensemble 3 = pondération POD–FAR.",
          mini: "Pondérations normalisées (somme = 1)."
        },
        bias: {
          h: "Correction de biais retenue",
          p: "Linear Scaling est retenu car le RMSE moyen est plus faible que pour Quantile Mapping.",
          mini: "Tableau 4.1 — RMSE (LS) 25,11–25,95 mm • (QM) 28,74–28,81 mm"
        },
        best: {
          h: "Meilleur modèle simple",
          p: "WRF-ERA5 Membre 9 se distingue (r=0,91 ; RMSE=21,23 mm).",
          mini: "Cliquez pour voir les paramétrisations."
        },
        event: {
          h: "CSI maximal",
          p: "Le CSI atteint 0,60 avec l’Ensemble 3 (WRF-ERA5).",
          mini: "Hit–miss–fausse alerte → CSI."
        },
        roc: {
          h: "ROC (AUC)",
          p: "AUC 0,660–0,676 (moyen) avec des seuils optimaux différents.",
          mini: "ERA5 tend vers des seuils plus élevés ; GFS plus bas."
        }
      },
      modal: {
        close: "Fermer",

        domain: {
          title: "Domaine & période de simulation",
          body: `
            <p>Le paramétrage des domaines vise à préserver le détail local tout en capturant l’influence régionale.</p>
            <ul>
              <li><b>Projection :</b> Mercator</li>
              <li><b>Domaine parent :</b> 9 km</li>
              <li><b>Domaine imbriqué :</b> 3 km</li>
              <li><b>Ratio de grille :</b> 3:1</li>
              <li><b>Intervalle entrée & sortie :</b> 6 h</li>
              <li><b>Période :</b> 22–27 janvier 2020</li>
            </ul>
            <p class="mini">Voir la Figure 3.4 du PDF pour la carte des domaines.</p>
          `
        },
        config: {
          title: "Configuration WRF & liste des membres",
          body: `
            <p>Dix membres sont définis par des combinaisons <b>convection</b>–<b>microphysique</b>. Les autres schémas sont identiques pour tous.</p>
            <p class="mini">Schémas fixés : <b>Dudhia</b> (SW), <b>RRTM</b> (LW), <b>YSU</b> (PBL).</p>

            <table class="mini-table">
              <thead><tr><th>Membre</th><th>Convection</th><th>Microphysique</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>-</td><td>WSM 6</td></tr>
                <tr><td>2</td><td>-</td><td>Goddard</td></tr>
                <tr><td>3</td><td>-</td><td>Thompson</td></tr>
                <tr><td>4</td><td>Tiedtke</td><td>WSM 6</td></tr>
                <tr><td>5</td><td>Kain–Fritsch</td><td>WSM 3</td></tr>
                <tr><td>6</td><td>Betts–Miller–Janjic</td><td>Lin Purdue</td></tr>
                <tr><td>7</td><td>Kain–Fritsch</td><td>Eta Ferrier</td></tr>
                <tr><td>8</td><td>Modified–Tiedtke</td><td>Morrison</td></tr>
                <tr><td>9</td><td>Betts–Miller–Janjic</td><td>WSM 6</td></tr>
                <tr><td>10</td><td>Grell–3D</td><td>Goddard</td></tr>
              </tbody>
            </table>
          `
        },
        ensemble: {
          title: "Ensemble 1–3 : formules & pondérations",
          body: `
            <p>Les ensembles combinent plusieurs membres pour réduire l’incertitude. Les formules clés :</p>

            <div class="subcards">
              <div class="subcard">
                <h4>Ensemble 1 (Moyenne)</h4>
                <span class="mono">X̄ = (1/N) · Σ Xᵢ</span>
                <span class="mono">N : nombre de membres</span>
              </div>

              <div class="subcard">
                <h4>Ensemble 2 (Corr–RMSE)</h4>
                <span class="mono">Y₂ = Σ kₙ · yₙ</span>
                <span class="mono">kₙ = (Cₙ + Eₙ)/2</span>
                <span class="mono">Cₙ = Rₙ / ΣR</span>
                <span class="mono">Eₙ = (S − RMSEₙ)/((n−1)·S), S=ΣRMSE</span>
              </div>

              <div class="subcard">
                <h4>Ensemble 3 (POD–FAR)</h4>
                <span class="mono">Y₃ = Σ lₙ · yₙ</span>
                <span class="mono">lₙ = (Pₙ + Fₙ)/2</span>
                <span class="mono">Pₙ = PODₙ / ΣPOD</span>
                <span class="mono">Fₙ = (T − FARₙ)/((n−1)·T), T=ΣFAR</span>
              </div>
            </div>

            <p class="mini">Pondérations normalisées (somme = 1) avant l’agrégation.</p>
          `
        },
        bias: {
          title: "Correction de biais — Linear Scaling",
          body: `
            <p>La méthode de correction est choisie via les métriques d’intensité (corrélation & RMSE) après correction.</p>
            <ul>
              <li><b>Linear Scaling</b> est retenu car le RMSE moyen est plus faible et stable pour les deux jeux d’initialisation.</li>
              <li><b>Quantile Mapping</b> peut améliorer la corrélation, mais ce n’est pas homogène entre membres.</li>
            </ul>
            <p class="mini">Référence : LS RMSE 25,11–25,95 mm ; QM RMSE 28,74–28,81 mm (Tableau 4.1).</p>
          `
        },
        best: {
          title: "Meilleur modèle simple — WRF-ERA5 Membre 9",
          body: `
            <p>Les modèles simples sont sélectionnés avec RMSE inférieur à la moyenne globale, puis utilisés comme poids d’un ensemble.</p>
            <ul>
              <li><b>Données initiales :</b> ERA5</li>
              <li><b>Convection :</b> Betts–Miller–Janjic (BMJ)</li>
              <li><b>Microphysique :</b> WSM 6</li>
              <li><b>Rayonnement SW (fixe) :</b> Dudhia</li>
              <li><b>Rayonnement LW (fixe) :</b> RRTM</li>
              <li><b>Couche limite (fixe) :</b> YSU</li>
            </ul>
            <p class="mini">Performance : r=0,91 ; RMSE=21,23 mm.</p>
          `
        },
        event: {
          title: "Événements de pluie — CSI maximal",
          body: `
            <p>La vérification des événements utilise une table de contingence (hit, miss, fausse alerte) résumée en CSI.</p>
            <ul>
              <li><b>CSI maximal :</b> 0,60 pour <b>l’Ensemble 3 (WRF-ERA5)</b>.</li>
              <li>L’Ensemble 3 utilise un poids basé sur <b>POD–FAR</b>, améliorant la détection d’événements.</li>
            </ul>
          `
        },
        roc: {
          title: "ROC — AUC et seuil optimal",
          body: `
            <p>La ROC décrit le compromis TPR/FPR selon le seuil de pluie. L’AUC est l’indicateur synthétique.</p>
            <ul>
              <li><b>AUC :</b> 0,660–0,676 (moyen).</li>
              <li><b>WRF-ERA5</b> : seuil optimal plus élevé → mieux pour pluie modérée à forte.</li>
              <li><b>WRF-GFS</b> : seuil plus bas → plus sensible à la pluie faible (&lt;10 mm).</li>
            </ul>
          `
        }
      },
      figures: { h: "Figures", lead: "Cliquez pour ouvrir en grand." },
      fig: {
        "41": { label: "Figure 4.1", desc: "Corrélation après correction de biais", title: "Figure 4.1 — Corrélation après correction de biais" },
        "42": { label: "Figure 4.2", desc: "RMSE après correction de biais", title: "Figure 4.2 — RMSE après correction de biais" },
        "43": { label: "Figure 4.3", desc: "Diagramme de Taylor — WRF-ERA5", title: "Figure 4.3 — Diagramme de Taylor (WRF-ERA5)" },
        "44": { label: "Figure 4.4", desc: "Diagramme de Taylor — WRF-GFS", title: "Figure 4.4 — Diagramme de Taylor (WRF-GFS)" },
        "45": { label: "Figure 4.5", desc: "Hit / miss / fausse alerte", title: "Figure 4.5 — Hit / Miss / False Alarm" },
        "46": { label: "Figure 4.6", desc: "Courbe ROC (ensemble)", title: "Figure 4.6 — Courbe ROC (Ensemble)" }
      },
      download: {
        h: "Document",
        lead: "Le PDF du mémoire est inclus dans le dossier du site.",
        sub: "Ouvrir ou télécharger via le navigateur.",
        open: "Ouvrir le PDF",
        save: "Télécharger"
      },
      footer: {
        line1: "© 2025 Andreas Boni Baik Simamora",
        line2: "Synthèse des résultats (focus sur le chapitre Résultats).",
        top: "Retour en haut ↑"
      }
    }
  };
})();