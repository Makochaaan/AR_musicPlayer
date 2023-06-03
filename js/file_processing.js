function changeImageToBase64(order,file) {

    const reader = new FileReader()
    reader.onload = (event) => {
      const base64Text = event.currentTarget.result.split(',')[1]
    
    //   console.warn(base64Text)
    sessionStorage.setItem(order,file.type.split('/')[1]+","+base64Text);
      
    }
    reader.readAsDataURL(file)
  }


window.addEventListener('DOMContentLoaded', function() {
    //changeイベントeを引数に入れる
    document.getElementById('file').addEventListener('change', function(e) {
        //filesプロパティ,取得して情報を表示
        let inputs = document.getElementById('file').files
        for(let i = 0,len = inputs.length; i < len; i++){
            let input = inputs[i]
            console.log('ファイル名： ' + input.name)
            console.log('種類： ' + input.type)
            console.log('サイズ：'  + input.size / 1024 + 'KB')
            console.log('最終更新日：' + input.lastModifiedDate)
            
            changeImageToBase64(i,input)
        }
    }, true)

    //送信時にバイナリデータをbase64に変換してsessionStorageに保存
    document.getElementById('button').addEventListener('click', function(e) {
        let inputs = document.getElementById('file').files
        for(let i = 0,len = inputs.length; i < len; i++){
            let input = inputs[i]
            // console.log('ファイル名： ' + input.name)
            // console.log('種類： ' + input.type)
            // console.log('サイズ：'  + input.size / 1024 + 'KB')
            // console.log('最終更新日：' + input.lastModifiedDate)
            changeImageToBase64(i,input)
            
        }
    },true)
})

