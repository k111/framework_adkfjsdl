## Javascript Parts

### Tab

`.mod-tab` - タブ切り替えパーツ

#### Javascript

- `data-js="tab"` - wrapperクラス
- `data-js="tab-header"` - トリガー
- `data-js="tab-body"` - ターゲット


    @example
    <div class="mod-tab" data-js="tab">
    <ul class="tab-header" data-js="tab-header">
    <li class="is-active"><a href="#tab1">Tabl</a></li>
    <li><a href="#tab2">Tab2</a></li>
    <li><a href="#tab3">Tab3</a></li>
    </ul>

    <div class="tab-body" data-js="tab-body">
    <div class="tab-content is-active" id="tab1">
    tab1のコンテンツです。tab1のコンテンツです。<br>
    tab1のコンテンツです。tab1のコンテンツです。
    <!-- ./tab-content --></div>

    <div class="tab-content" id="tab2">
    tab2のコンテンツです。tab2のコンテンツです。<br>
    tab2のコンテンツです。tab2のコンテンツです。
    <!-- ./tab-content --></div>

    <div class="tab-content" id="tab3">
    tab3のコンテンツです。tab3のコンテンツです。<br>
    tab3のコンテンツです。tab3のコンテンツです。
    <!-- ./tab-content --></div>
    <!-- ./tab-body --></div>
    <!-- /.mod-tab --></div>

### Accordion

`.mod-accordion` - アコーディオンパーツ

    @example
    <dl class="mod-accordion">
    <dt><a href="#">accordion</a></dt>
    <dd>サンプルサンプルサンプルサンプルサンプルサンプルサンプル</dd>
    </dl>
    <dl class="mod-accordion">
    <dt><a href="#">accordion</a></dt>
    <dd>サンプルサンプルサンプルサンプルサンプルサンプルサンプル</dd>
    </dl>

### Page top

`.mod-pagetop` - ページ先頭へ戻る

#### Javascript

`data-js="scroll"` - カスタムデータ属性を指定


    @example
    <p class="mod-pagetop" id="up"><a data-js="scroll" href="#top">&#9652;</a></p>


### match Height

Todo



### Carousel (slick)

`.mod-carousel` - カルーセルパーツ

#### Javascript

`data-js="carousel"` - カスタムデータ属性を指定


    @example
    <div class="mod-carousel" data-js="carousel">
    <ul class="carousel">
    <li><img src="http://dummyimage.com/600x400/000/fff" alt=""></li>
    <li><img src="http://dummyimage.com/600x400/00f/fff" alt=""></li>
    <li><img src="http://dummyimage.com/600x400/0f0/fff" alt=""></li>
    <li><img src="http://dummyimage.com/600x400/f00/fff" alt=""></li>
    </ul>
    <!-- /.mod-carousel --></div>

### Mordal

モーダルパーツ (jQuery Magnific popup)

#### Javascript

* `data-js="modal-image"`<br>- 画像用モーダル
* `data-js="modal-video"`<br>- 動画用モーダル
* `data-js="modal-inline"`<br>- インラインモーダル


    @example
    <p><a data-js="modal-image" href="http://dummyimage.com/600x400/000/fff">Single image lightbox</a></p>

    <p><a data-js="modal-video" href="https://www.youtube.com/watch?v=OrTaVV0Hkng">Open YouTube video</a></p>

    <p><a data-js="modal-inline" href="#test-popup">Open with fade-zoom animation</a></p>
    <div class="mod-dialog mfp-hide" id="test-popup">Mordal text text text text text text text text text text text text text text text text text text text text text text text text text </div>
