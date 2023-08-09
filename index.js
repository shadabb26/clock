
setInterval(()=>{

    date=new Date();
    hours=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();

    hrotation=30*hours+min/2
    mrotation=6*min
    srotation=6*sec

    hour=document.getElementById('hour');
    min=document.getElementById('min');
    sec=document.getElementById('sec');

    hour.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;

},1000)
