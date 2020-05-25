let flag = 1;

function toggleVisibility() {
    
    let detail = document.getElementById('basic-detail');
    if (flag == 1) {
        detail.style.display = 'none';
        flag = 0;
    }
    else {
        detail.style.display = 'block';
        flag = 1;
    }
}


