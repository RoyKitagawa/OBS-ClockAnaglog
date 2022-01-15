//=====================================================================
// このファイルでは時差、及び時針、分針、秒針の進め方の指定ができます
//
// 現在のバージョンで対応している設定項目は以下の通りです
//
// 1. 時針の進め方
// 2. 分針の進め方
// 3. 秒針の進め方
// 4. 時差の設定
//
//=====================================================================

// 1. 時針の進め方
//
// 0: シームレスに緩やかに進む
// 1: 60分が経過した瞬間に進む
//
// 初期値は0が指定されています
// 時針の進め方は0を指定することを推奨しています
const hourNeedleMovePattern = 0;

// 2. 分針の進め方
//
// 0: シームレスに緩やかに進む
// 1: 60秒が経過した瞬間に進む
//
// 初期値は1が指定されています
const minutesNeedleMovePattern = 1;

// 3. 秒針の進め方
//
// 0: シームレスに緩やかに進む
// 1: 1秒が経過した瞬間に進む
//
// 初期値は1が指定されています
const secondsNeedleMovePattern = 1;

// 4. 時差の設定
// 
// 基準はUTCなため、日本の時差の場合は+9となります
// 初期値は「9」（日本時間）が指定されています
const timeDiffsInHour = 9;
