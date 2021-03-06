Blue Monday @PSO2 Ship 4
========================

チーム用 wiki [Blue Monday @wiki](http://www61.atwiki.jp/bluemonday_ship04/) のデザインやスクリプトの開発とホスティングを兼ねたリポジトリです

他にメンテできる人がいない状態にしておくのは非常によろしくないと思ったので立てました

モダンなフロントエンド開発の手法を取り入れていろいろ遊べたらなあと思ってます

## URL

`cdn.rawgit.com`を使うのが正しいみたいだけど、とてつもなく面倒くさくなるので気にしない感じで

もし万が一、転送量制限とか引っかかってきた時は素直に tag 切って cdn 使わないとだけど今はしないです

### script

main.js: <https://cdn.jsdelivr.net/gh/blue-monday/pso2/dist/scripts/main.js>

### style

main.css: <https://cdn.jsdelivr.net/gh/blue-monday/pso2/dist/styles/main.css>

## バグとか

wiki に何かあれば教えてください

[issue](https://github.com/blue-monday/pso2-atwiki/issues) 立ててくれるとラクです

## こんとりびゅーてぃんぐ

[GitHub Flow](https://gist.github.com/Gab-km/3705015#user-content-%E3%81%A9%E3%81%86%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%81%8B).

`build`して`master`ブランチに`push`すると即 wiki へ反映されます（本番サイトは [RawGit](http://rawgit.com/) 経由で直接`master`から引っ張ってます）

プルリクエスト送ればいいと思うよ

### インストール

git 入れてない人は入れてください

<https://msysgit.github.io/>

Node.js 入れてない人は入れてください

<http://nodejs.org/>

grunt-cli 入れてない人は入れてください

```
$ npm install -g grunt-cli
```

Ruby 入れてない人は入れてください

<https://www.ruby-lang.org/ja/>

Sass 入れてない人は入れてください

```
$ gem install sass
```

持ってきてインストール

```
$ git clone https://github.com/blue-monday/pso2-atwiki.git
$ cd pso2-atwiki
$ npm install
```

postinstall で`bower install`も走るようになってます

ついでに`grunt githooks`も入ってコミット前に`jshint`が走るようになったりします

### ビルド

```
$ grunt build
```

叩けば`dist`フォルダに出てくるはず

実は`grunt`でも一緒

### 開発

```
$ grunt watch
```

で css とか js の変更を検知して自動ビルドします

この自動ビルドは`grunt build`の簡易版みたいな感じで圧縮とかしないやつです

### 動作チェック

~~[CocProxy](http://coderepos.org/share/wiki/CocProxy)~~ nproxy 使って動作確認すると捗ります

Fiddler の AutoResponder 使える人はそっちでいいです

別プロンプトで下記のコマンドを叩いたらプロキシが起動するので、ブラウザに設定してあげます

普段使うブラウザとは別の環境を用意しておくとラクです

```
$ npm run nproxy
```
