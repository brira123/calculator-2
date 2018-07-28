function num(numb) {
    document.form.textview.value = document.form.textview.value+numb;
}

function equal() {
    let eql = document.form.textview.value;
    if (eql) {
        document.form.textview.value = eval(eql);
    }
}

function clean(){
    document.form.textview.value = "";
}