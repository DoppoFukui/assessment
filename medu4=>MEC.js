'use strict';
const medu4numberInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area')
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子供を全て削除する
 * @param {HTMLElemnt} elemnt HTMLの要素
 */
function removeAllChildren(element){
    while (element.firstChild){
        //子供の要素が有る限り削除
        element.removeChild(element.firstChild);
    }
}
medu4numberInput.onkeydown = event =>{
    if(event.key === 'Enter'){
        assessmentButton.onclick ();
    }
};
assessmentButton.onclick = () => {
    const medu4number = medu4numberInput.value;
    if (medu4number.length === 0){
        //名前が空の時は処理を終了する
        return;
    }
    const medu4numberS = medu4number.toLowerCase();
    console.log(medu4numberS);
    
    //  診断結果表示エリアの作成
    
    const header = document.createElement('h3');
    header.innerText = 'MECサーチにコピペする番号は';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const mecNumber = medu4numberS.replace(/a/g, 'A-').replace(/b/g, 'B-')
    .replace(/c/g, 'C-').replace(/d/g, 'D-').replace(/e/g, 'E-')
    .replace(/f/g, 'F-').replace(/g/g, 'G-').replace(/h/g, 'H-')
    .replace(/i/g, 'I-').replace(/,/g, ' ')
    paragraph.innerText = mecNumber; 
    resultDivided.appendChild(paragraph);
};




//medu4numeber = userNameInput
//mecNumber = result
