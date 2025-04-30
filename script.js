const tops = [
    "img/tops/top1.jpg",
    "img/tops/top2.jpg",
    "img/tops/top3.jpg",
    "img/tops/top4.jpg",
    "img/tops/top5.jpg",
    "img/tops/top6.jpg",
    "img/tops/top7.jpg",
  ];
  
  const bottoms = [
    "img/bottoms/bottom1.jpg",
    "img/bottoms/bottom2.jpg",
    "img/bottoms/bottom3.jpg",
    "img/bottoms/bottom4.jpg",
    "img/bottoms/bottom5.jpg",
    "img/bottoms/bottom6.jpg",
    "img/bottoms/bottom7.jpg",
  ];
  
  function changeTop(count = 0) {
    if (count > 10) return;
    document.getElementById("topImage").src = tops[Math.floor(Math.random() * tops.length)];
    setTimeout(() => changeTop(count + 1), 100);
  }
  
  
  function changeBottom(count = 0) {
    if (count > 10) return;
    document.getElementById("bottomImage").src = bottoms[Math.floor(Math.random() * bottoms.length)];
    setTimeout(() => changeBottom(count + 1), 100);
  }