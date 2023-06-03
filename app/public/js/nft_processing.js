window.onload = function() {
    /*タグを挿入するオブジェクトを取得*/
    const firstViewElement = document.getElementById('firstView');
    firstViewElement.insertAdjacentHTML('afterend',`<a-nft type="nft" url="${sessionStorage.getItem(0)}" smooth="true" smoothCount="10" smoothTolerance=".01" smoothThreshold="5"><a-entity gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf" scale="5 5 5" position="150 300 -100"></a-entity></a-nft>`);
    // firstViewElement.insertAdjacentHTML('beforeend','【beforeend追加要素】');
    // firstViewElement.insertAdjacentHTML('afterend','<h2>afterend追加要素</h2>');
};