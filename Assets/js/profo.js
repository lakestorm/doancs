function openForm(formId) {
    document.getElementById(formId).style.display = "block";
}

function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
}

// init show all item
filterSelection("ingredient", "all");
filterSelection("fishh", "all");
filterSelection("thitt", "all");
// function handle filter
function filterSelection(section, type) {
    var x, i;
    x = document.getElementsByClassName(section);
    if (type == "all") { type = ""; }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        if (x[i].className.indexOf(type) > -1) { x[i].style.display = "block"; }
    }

}


// Handle type button actived
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var sameBtns, j;
        sameBtns = this.parentElement.children;
        for (j = 0; j < sameBtns.length; j++) {
            sameBtns[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}

document.getElementById('video').addEventListener('change', function(event) {
    var video = document.getElementById('video-preview');
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        video.src = e.target.result;
    };

    reader.readAsDataURL(file);
});

// Xem trước ảnh thumbnail
document.getElementById('thumbnail').addEventListener('change', function(event) {
    var thumbnail = document.getElementById('thumbnail-preview');
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        thumbnail.src = e.target.result;
    };

    reader.readAsDataURL(file);
});
function notify(){
    var video = document.check1.video.value;
    var thumbnail = document.check1.thumbnail.value;
    var ten_mon_an = document.check1.ten_mon_an.value;
    var mo_ta = document.check1.mo_ta.value;
    var danh_gia = document.check1.danh_gia.value;
    var email = document.check1.email.value;
    var sdt = document.check1.email.value;

    if(video == "" && thumbnail == "" && ten_mon_an == "" && mo_ta == "" && danh_gia == "" && email == "" && sdt == ""){
      window.alert('🆂🅾🆂 CHÚ Ý ĐIỀN THÔNG TIN ĐẦY ĐỦ')
    }
    else{ 
    window.confirm('✅ CHÚNG TÔI ĐÃ NHẬN ĐƯỢC BÀI CHIA SẺ CỦA BẠN');
    location.reload();
}
}