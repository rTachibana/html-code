# コンパイル先
`/dist/` 配下に格納しています。  


# webpackについて
node.jsでwebpackを使用し、scssをコンパイルしています。現状他の用途では使用していません。  
package.json, webpack.config.js が入っていますので、詳細はそちらを確認ください。  
ローカル作業時にソースマップが必要な場合は `webpack.config.js` 内の `const MODE` を development に変更してください。

## cssの構成について
Flocssのディレクトリは切っていますが、前の作業者のソースを元にしているのであまり重視する必要はありません。  
ざっくりですが、各ページのカテゴリごとに分けて下記ディレクトリ下にscssを格納しています。

`/src/assets/sass/layout/pages/*`


# 仕様書など
下記をご確認ください

## bilbase リポジトリ
https://github.com/bilbase/shinmen

## 仕様書格納場所
https://drive.google.com/drive/folders/1RVEuJyqjCvuO7ypQyNm-HcNYVzLZgo7j

## デザイン（XD 2022/09/19に更新)
https://drive.google.com/drive/folders/181PPVzkh7mH5fB_MFypddqOfOO4FFmjq

## 画像素材（まだ揃っていないそうです）
https://drive.google.com/drive/folders/1PwtW5dP6A78Fi5t_MMTNcA6qF9kLfnQT

## 前作業者のサーバー
http://69.49.235.253:8009/

## 確認用
http://club-nao.jp/