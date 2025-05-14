$(function () {
  // スタートボタンクリックで診断開始
  $("#startBtn").on("click", function () {
    $("#startPage").fadeOut(300, function () {
      showQuestion("q1");
    });
  });

  const questions = {
    q1: { number: "Q1/3", text: "支払いは現金の方が多い", yes: "q2", no: "q3" },
    q2: {
      number: "Q2/3",
      text: "カードは6枚以上持ち歩く",
      yes: "q4",
      no: "q5",
    },
    q3: {
      number: "Q2/3",
      text: "カードは6枚以上持ち歩く",
      yes: "q6",
      no: "q7",
    },
    q4: {
      number: "Q3/3",
      text: "財布に求めるのは薄さより小銭の使いやすさだ",
      yes: "EPOCK",
      no: "Money clip-1",
    },
    q5: {
      number: "Q3/3",
      text: "常に持ち運ぶカードは3枚だけでいい",
      yes: "inz-1",
      no: "a.o.p-1",
    },
    q6: {
      number: "Q3/3",
      text: "財布に求めるのは薄さより小ささだ",
      yes: "mini wallet",
      no: "Money clip-2",
    },
    q7: {
      number: "Q3/3",
      text: "常に持ち運ぶカードは3枚だけでいい",
      yes: "inz-2",
      no: "a.o.p-2",
    },
  };

  const results = {
    EPOCK: "あなたには『Money clip』がおすすめ！",
    "Money clip-1": "あなたには『Money clip』がおすすめ！",
    "Money clip-2": "あなたには『Money clip』がおすすめ！",
    "inz-1": "あなたには『inz』がおすすめ！",
    "inz-2": "あなたには『inz』がおすすめ！",
    "a.o.p-1": "あなたには『a.o.p』がおすすめ！",
    "a.o.p-2": "あなたには『a.o.p』がおすすめ！",
    "mini wallet": "あなたには『mini wallet』がおすすめ！",
  };

  let progress = 0;

  // 質問表示
  function showQuestion(q) {
    if (questions[q]) {
      $("#questionArea").fadeOut(200, function () {
        $("#questionNumber").text(questions[q].number);
        $("#questionText").text(questions[q].text);
        $("#questionArea").data("current", q);
        $(this).fadeIn(200);
      });
    } else if (results[q]) {
      $("#questionArea").fadeOut(200, function () {
        // 紹介文の設定
        let imagePath = "";
        let description = "";
        let productUrl = "#";

        switch (q) {
          case "EPOCK":
            imagePath = "img/epock.png";
            description =
              "現金派で財布の容量の多さと使い勝手の良さを求めるあなたには、EPOCKがおすすめ。札入れも小銭入れも大きく開き見やすいので普段の買い物もストレスなく使えます。";
            productUrl = "https://boab.official.ec/categories/5521204";
            break;
          case "Money clip-1":
            imagePath = "img/moneyclip1.png";
            description =
              "現金派で，たくさん入ってスリムな財布を求めるわがままなあなたには，Money clipがおすすめ。個性的な札バサミ金具を使うことで，カードを10枚収納できる大容量と，薄さを両立しています。";
            productUrl = "https://boab.official.ec/categories/2300305";
            break;
          case "Money clip-2":
            imagePath = "img/moneyclip2.png";
            description =
              "キャッシュレス派で，たくさん入ってスリムな財布を求めるあなたには，Money clipがおすすめ。個性的な札バサミ金具を使う事で，カードを10枚収納できる大容量と，薄さを両立しています。";
            productUrl = "https://boab.official.ec/categories/2300305";
            break;
          case "inz-1":
            imagePath = "img/inz1.png";
            description =
              "現金派で，潔いミニマリストなあなたにはinzがおすすめ。ほぼカードサイズの財布ながら，札も小銭もダントツに使いやすいわがままを詰め込んだ財布です。";
            productUrl = "https://boab.official.ec/categories/6655356";
            break;
          case "inz-2":
            imagePath = "img/inz2.png";
            description =
              "時代を先駆ける前衛的でミニマリストなあなたにはinzがおすすめ。究極まで小さく，予備の現金すらスマートに使える財布はinzだけ。";
            productUrl = "https://boab.official.ec/categories/6655356";
            break;
          case "a.o.p-1":
            imagePath = "img/aop1.png";
            description =
              "現金派で，カードも4〜5枚入る財布をお探しのあなたにはa.o.pがおすすめ。片手にすっぽりおさまるサイズながら，大きく開く小銭入れと1万円札も曲げずに収納可能な札入れできっと，長く使いたい財布になるはず。";
            productUrl = "https://boab.official.ec/categories/5521203";
            break;
          case "a.o.p-2":
            imagePath = "img/aop2.png";
            description =
              "キャッシュレス派で，カードも4〜5枚入る財布をお探しのあなたにはa.o.pがおすすめ。片手にすっぽりとおさまるサイズながら，大きく開く古銭入れと1万円札も曲げずに収納可能な札入れできっと，長く使いたい財布になるはず。";
            productUrl = "https://boab.official.ec/categories/5521203";
            break;
          case "mini wallet":
            imagePath = "img/miniwallet.png";
            description =
              "カードがたっぷり入ってコンパクトな財布が好みなキャッシュレス派のあなたにはmini walletがおすすめ。カードが多くて目的のカードを見つけやすいmini walletはあなたのライフスタイルにぴったり。キャッシュレスが進んだ今でも現金決済しかできない場面もまだあるもの。でも，mini walletなら現金も予備で持ち歩けるから安心。";
            productUrl = "https://boab.official.ec/categories/5521255";
            break;
        }

        $("#descriptionText").text(description);
        $("#productLink").attr("href", productUrl);
        $("#resultArea").fadeIn(300);

        $("#resultImage").removeClass("show"); // クラス外して非表示状態に戻す
        $("#resultImage").attr("src", imagePath);

        // 少し待ってからフェードイン用クラスを付ける
        setTimeout(function () {
          $("#resultImage").addClass("show");
        }, 100); // 0.1秒後に実行（CSSのtransition発火）
      });
    }
  }

  // プログレスバー
  function updateProgressDot(step) {
    // まず全部初期化
    $(".progress-dot").removeClass("passed current");

    for (let i = 1; i <= 3; i++) {
      if (i < step) {
        $("#dot" + i).addClass("passed");
      } else if (i === step) {
        $("#dot" + i).addClass("current");
      }
    }
  }

  let step = 1;

  $(".answerBtn").click(function () {
    const answer = $(this).data("answer");
    const q = $("#questionArea").data("current");
    const next = questions[q][answer];

    step++;
    updateProgressDot(step);
    showQuestion(next);
  });

  // プログレスドット更新
  function updateProgressDot(step) {
    $(".progress-dot").removeClass("passed current");
    for (let i = 1; i <= 3; i++) {
      if (i < step) {
        $("#dot" + i).addClass("passed");
      } else if (i === step) {
        $("#dot" + i).addClass("current");
      }
    }
  }

  // スタートボタン
  $("#startBtn").on("click", function () {
    $("#startPage").fadeOut(300, function () {
      $("#questionArea").fadeIn(300);
      step = 1;
      updateProgressDot(step);
      // showQuestion("q1");
    });
  });

  // リスタートボタン
  $("#restartBtn").click(function () {
    step = 1;
    updateProgressDot(step);
    $("#resultArea").fadeOut(300, function () {
      $("#startPage").fadeIn(300);
    });
  });
});

