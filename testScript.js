function Main(){
  console.log('hello world!');
}
console.log('hello world!');

function kakunin(btnNo){
  if (btnNo == 1){
    link = "Yahoo!Japan";
    href = "http://www.yahoo.co.jp/";
  }else{
    link = "test.kendweb.netのIISテストページ";
  }

  ret = confirm(link + "へ飛びます。宜しいですか？");
  if (ret == true){
    xhr = new XMLHttpRequest()
    xhr.open("GET","http://13.114.188.206")
  }
}

