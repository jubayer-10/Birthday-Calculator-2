

document.querySelector("#buttons").addEventListener("click", () => {
    const update = () => {
        let birth = document.getElementById("birth").value,
            b_val = new Date(birth),
            b_time = b_val.getTime(),
            today = new Date(),
            now = today.getTime(),
            value = now - b_time,

            var_sec = Math.floor(value / 1000),
            var_min = Math.floor(value / (1000 * 60)),
            var_hour = Math.floor(value / (1000 * 60 * 60)),
            var_day = Math.floor(value / (1000  * 60 * 60 * 24)),
            var_week = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
            var_month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375)),
            var_year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

        var insert = (x,y) => {
            document.querySelector(x).innerHTML = y ;
        };

        insert("#year", var_year);
        insert("#month", var_month);
        insert("#week", var_week);
        insert("#day", var_day);
        insert("#hour", var_hour);
        insert("#minute", var_min);
        insert("#second", var_sec);

        
    };
    setInterval(update, 1000);
});