window.onload = function() {
    var time1 = document.querySelectorAll(".time1");
    var date1 = document.querySelectorAll(".date1");
    console.log(time1)
    setInterval(
        () => {
            var date = new Date();
            var s = date.getSeconds()
            s = s > 9 ? s : "0" + s;
            var m = date.getMinutes()
            m = m > 9 ? m : "0" + m;
            var h = date.getHours()
            h = h > 9 ? h : "0" + h;
            console.log(h, m, s);

            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = month > 9 ? month : "0" + month;
            var data = date.getDate();
            data = data > 9 ? data : "0" + data;


            time1[0].innerHTML = h;
            time1[1].innerHTML = m;
            time1[2].innerHTML = s;
            date1[0].innerHTML = year;
            date1[1].innerHTML = month;
            date1[2].innerHTML = data;
        }, 1000)
}