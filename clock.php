<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Countdown</title>
    <style>
        #timer {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <?php
        // Thời gian đếm ngược (tính bằng giây)
        $countdown_time = 30; // Ví dụ: 30 giây
    ?>

    <div id="timer" style="padding-left: 90%;">
        <form method="post" id="quizForm" action="update.php?q=quiz&step=2&eid=<?php echo $eid; ?>&n=<?php echo $sn; ?>&t=<?php echo $total; ?>&qid=<?php echo $qid; ?>" class="form-horizontal">
            <span id="countdown"><button id="startButton" class="btn btn-primary">Start</button></span>
            <audio id="beep" src="image/beep.mp3"></audio>
        </form>
    </div>

    <script>
        var countdown = <?php echo $countdown_time; ?>;
        var timerDisplay = document.getElementById('countdown');
        var beep = document.getElementById('beep');
        var timerInterval;
        var formSubmitted = false; // Biến để kiểm tra xem form đã được gửi chưa

        function updateTimer() {
            var minutes = Math.floor(countdown / 60);
            var seconds = countdown % 60;

            // Định dạng để hiển thị số 0 trước các chữ số từ 0-9
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            timerDisplay.textContent = minutes + ':' + seconds;

            if (countdown === 0 ) {
            // Dừng đồng hồ khi hết thời gian và hiển thị nút Submit
            clearInterval(timerInterval);
            document.getElementById('submitButton').style.display = 'block';
            document.getElementById('nextButton').style.display = 'none';
            }

            if (countdown > 0) {
                countdown--;

                if (countdown === 3) {
                    // Kích thích sự kiện click để phát âm thanh chỉ khi còn 3 giây cuối
                    beep.play().then(function() {
                        // Success, âm thanh đã phát
                    }).catch(function(error) {
                        console.error('Error playing audio: ', error);
                    });
                }
            } else {
                clearInterval(timerInterval);
                alert("Hết thời gian!"); // Thông báo khi hết thời gian
                // Thực hiện các hành động khi hết thời gian, ví dụ: submit form
                // document.getElementById('quizForm').submit();
                window.location.href = "account.php?q=1";
            }
        }

        document.getElementById('startButton').addEventListener('click', function() {
            document.getElementById('startButton').style.display = 'none';
            timerInterval = setInterval(updateTimer, 1000);
        });
    </script>

</body>
</html>
