<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas 1 - Form Processing & Struktur Kendali</title>
    <style>
        :root {
            --apple-bg: #f5f5f7;
            --apple-card: #ffffff;
            --apple-text: #1d1d1f;
            --apple-text-secondary: #86868b;
            --apple-blue: #ff6b35;
            --apple-blue-hover: #e05e2e;
            --apple-input-bg: #f5f5f7;
            --apple-green: #34c759;
            --apple-red: #ff3b30;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            background-color: var(--apple-bg);
            color: var(--apple-text);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .container {
            background-color: var(--apple-card);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03);
            width: 100%;
            max-width: 420px;
        }

        h2 {
            text-align: center;
            font-size: 28px;
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 30px;
            letter-spacing: -0.015em;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 500;
            color: var(--apple-text);
        }

        .form-group input {
            width: 100%;
            padding: 14px 16px;
            background-color: var(--apple-input-bg);
            border: 1px solid transparent;
            border-radius: 12px;
            font-size: 16px;
            color: var(--apple-text);
            box-sizing: border-box;
            transition: all 0.2s ease;
            font-family: inherit;
        }

        .form-group input:focus {
            outline: none;
            border-color: var(--apple-blue);
            box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.2);
            background-color: var(--apple-card);
        }

        .form-group input::placeholder {
            color: var(--apple-text-secondary);
        }

        button {
            width: 100%;
            padding: 14px;
            background-color: var(--apple-blue);
            color: white;
            border: none;
            border-radius: 980px;
            /* Full rounded like Apple buttons */
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            letter-spacing: -0.015em;
            transition: background-color 0.2s ease, transform 0.1s ease;
            margin-top: 10px;
        }

        button:hover {
            background-color: var(--apple-blue-hover);
        }

        button:active {
            transform: scale(0.98);
        }

        .result {
            margin-top: 30px;
            padding: 24px;
            border-radius: 16px;
            background-color: rgba(52, 199, 89, 0.1);
            color: var(--apple-text);
            border: 1px solid rgba(52, 199, 89, 0.2);
            font-size: 15px;
            line-height: 1.5;
            animation: fadeIn 0.4s ease-out forwards;
        }

        .result strong {
            font-weight: 600;
        }

        .result .status-text {
            color: var(--apple-green);
            font-size: 18px;
            font-weight: 600;
        }

        .result.remedial {
            background-color: rgba(255, 59, 48, 0.1);
            border: 1px solid rgba(255, 59, 48, 0.2);
        }

        .result.remedial .status-text {
            color: var(--apple-red);
        }

        .result-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .result-item:last-of-type {
            border-bottom: none;
            margin-bottom: 16px;
            padding-bottom: 0;
        }

        .result-label {
            color: var(--apple-text-secondary);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>

<body>

    <div class="container">
        <h2>Evaluasi Nilai</h2>
        <form method="POST" action="">
            <div class="form-group">
                <label for="nama">Nama</label>
                <input type="text" id="nama" name="nama" placeholder="Masukkan nama lengkap" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" required>
            </div>
            <div class="form-group">
                <label for="nilai">Nilai Ujian</label>
                <input type="number" id="nilai" name="nilai" placeholder="0 - 100" required>
            </div>
            <button type="submit" name="submit">Cek Status Lulus</button>
        </form>

        <?php
        if (isset($_POST['submit'])) {
            $nama = htmlspecialchars($_POST['nama']);
            $email = htmlspecialchars($_POST['email']);
            $nilai = floatval($_POST['nilai']);

            $status = "";
            $class_tambahan = "";

            if ($nilai >= 70) {
                $status = "Lulus";
            } else {
                $status = "Remedial";
                $class_tambahan = "remedial";
            }

            echo "<div class='result $class_tambahan'>";
            echo "<div class='result-item'><span class='result-label'>Nama</span> <strong>$nama</strong></div>";
            echo "<div class='result-item'><span class='result-label'>Email</span> <strong>$email</strong></div>";
            echo "<div class='result-item'><span class='result-label'>Nilai Ujian</span> <strong>$nilai</strong></div>";
            echo "<div><span class='result-label'>Status</span> <span class='status-text'>$status</span></div>";
            echo "</div>";
        }
        ?>
    </div>

</body>

</html>