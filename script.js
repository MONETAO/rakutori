function convertToYen() {
    const euro = Number(document.getElementById('euroInput').value);  // ユーザーが入力したユーロの金額を数値として取得
    const yenRate = 160; // 1ユーロ = 160円のレート
    const result = euro * yenRate; // 計算結果を取得

    // Intl.NumberFormatを使って小数点以下を表示しないようにフォーマット
    const formattedResult = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 }).format(result);

    // 計算結果を表示
    document.getElementById('result').innerText = `${euro} ユーロ = ${formattedYen} 円`;
}

// HTMLロード時にすぐ表示するプリセット金額のリスト
window.onload = function() {
    displayPresetConversions();
};

// よく使う金額の換算結果をリストに表示
function displayPresetConversions() {
    const presetAmounts = [3, 5, 10, 20, 50, 100]; // よく使う金額のリスト
    const yenRate = 160; // 1ユーロ = 160円のレート
    const presetList = document.getElementById('presetList');
    
    presetAmounts.forEach((euro) => {
        const yen = euro * yenRate; // 計算結果
        // Intl.NumberFormatを使って小数点以下を表示しないようにフォーマット
        const formattedYen = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 }).format(yen);
        const listItem = document.createElement('li'); // リストアイテムを作成
        listItem.innerText = `${euro} ユーロ = ${formattedYen} 円`; // フォーマットされた結果を表示
        presetList.appendChild(listItem); // リストにアイテムを追加
    });
}
