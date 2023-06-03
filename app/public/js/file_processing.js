function changeImageToBase64(order,file) {

    const reader = new FileReader()
    reader.onload = (event) => {
      const base64Text = event.currentTarget.result.split(',')[1]
    
    //   console.warn(base64Text)
    sessionStorage.setItem(order,file.type.split('/')[1]+","+base64Text);
    return file.type.split('/')[1]+","+base64Text;
    }
    reader.readAsDataURL(file)
  }

exports.processing = function processing(files) {
    //changeイベントeを引数に入れる
    //送信時にバイナリデータをbase64に変換してsessionStorageに保存
        let inputs = files;
        for(let i = 0,len = inputs.length; i < len; i++){
            let input = inputs[i]
            console.log('ファイル名： ' + input.name)
            console.log('種類： ' + input.type)
            console.log('サイズ：'  + input.size / 1024 + 'KB')
            console.log('最終更新日：' + input.lastModifiedDate)
            changeImageToBase64(i,input)
            
        }
}

