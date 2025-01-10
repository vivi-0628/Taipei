document.querySelectorAll('.label').forEach(function(label) {
  label.addEventListener('click', function() {
    var labelRect = label.getBoundingClientRect();
    var commentBox = document.querySelector('.comment-box');

    commentBox.style.left = (labelRect.left + window.scrollX + labelRect.width / 2 - commentBox.offsetWidth / 2) + 'px';
    commentBox.style.top = (labelRect.top + window.scrollY + labelRect.height / 2 - commentBox.offsetHeight / 2) + 'px';

    commentBox.style.display = 'block';

    if (label.classList.contains('label1')) {
      commentBox.innerHTML = '<p>北投區，前身為「北投鎮」，是臺北市面積第二大的行政區。北投區自然資源豐富，17世紀初西班牙文獻即有北投社域盛產硫磺的記載，其為臺灣溫泉史的發源地，1896年由日本大阪商人平田源吾在此設立臺灣第一家溫泉旅館「天狗庵」，著名的北投溫泉即位於該區，其他著名的自然觀光景點包括關渡風景區和陽明山國家公園。區內尚有臺北榮總、北護大、馬偕專校以及數所醫療中心，醫療資源豐富，也使開發中的北投士林科技園區將以生技醫藥產業為主軸。</p>';
    } else if (label.classList.contains('label2')) {
      commentBox.innerHTML = '<p>士林區，前身「士林鎮」，位於臺灣臺北市北部，人口約有26.4萬人，以面積是臺北市第一大區，人口則居全市第三多。士林區內有士林夜市、陽明山國家公園等景點，以及國立故宮博物院，國立臺灣科學教育館、臺灣戲曲中心、臺北市立天文科學教育館、臺北表演藝術中心等文教設施與機構，天母地區外籍人士居多。士林區區花為玫瑰。</p>';
    } else if (label.classList.contains('label3')) {
      commentBox.innerHTML = '<p>南港區，舊稱「南港仔」，前身「南港鎮」，人口約11.3萬人，為臺北市人口最少的行政區。區名係與基隆河對岸的汐止「北港」相對。清治時期稱此地為南港仔庄及南港仔街，當時境內主要人口集中在今天南港、三重、中南等里之間，舊名南港三重埔，今日稱為三重埔次分區。</p>';
    }else if (label.classList.contains('label4')) {
      commentBox.innerHTML = '<p>大同區位於臺灣臺北市西部，西側為淡水河，為臺北市發展最早的區域。有許多早期洋房，也是傳統食材（南北貨）、中藥、紡織品及工業用品的集散地。境內的臺北孔子廟與大龍峒保安宮為主要的觀光景點。</p>';
    } else if (label.classList.contains('label5')) {
      commentBox.innerHTML = '<p>中山區位於臺灣臺北市中部，係因紀念孫中山曾投宿於梅屋敷（今國父史蹟館）而得名。全區工商業發展興盛，並以金融及保險業與支援服務業較具代表。貫穿境內的中山北路最早前身是日治時期的敕使街道，沿線設有圓山公園、圓山運動場（後改為中山足球場，今爭豔館）等重要設施，進入二戰後時期則因駐臺軍事援助顧問團的成立，使其轉而融合美國文化。外圍被中山北路、南京東路、新生北路與市民大道環繞的區域在日治時期屬大正町，具有特殊的條通文化。</p>';
    }else if (label.classList.contains('label6')) {
      commentBox.innerHTML = '<p>松山區位於臺灣臺北市中部，為松山機場和臺北小巨蛋所在地。境內有多座大型百貨公司、購物中心及數個商圈，包括較早創立的夜市饒河街觀光夜市，敦化北路與南京東路一帶則為臺北市重要的金融商圈，有不少國內外知名的企業及金融機構設置於此。</p>';
    }else if (label.classList.contains('label7')) {
     commentBox.innerHTML = '<p>內湖區，前身「內湖鄉」，位於臺灣臺北市東部，因其境內多山丘，形成多處小盆地地貌，當地人臺灣話稱山坳地為「湖」，故內湖是「內部盆地」之義。內湖區境內尚有「畚箕湖」、「北勢湖」、「白石湖」和「牛稠湖」等老地名，命名方式，亦是依地形和先民開墾事跡有關連性，而非指有水的湖泊名稱。工商活動部分，內湖科技園區有商辦大樓及臺灣部分媒體設於此處。</p>';
    }else if (label.classList.contains('label8')) {
      commentBox.innerHTML = '<p>信義區位於臺灣臺北市中部，為臺北市政府所在地。原為松山區的一部分，1990年臺北市調整行政區劃時將松南地區劃出信義區，區名源自坐落境內的信義計畫區，並有數家百貨公司林立，以及企業總部、金融總部與台北101、臺北國際會議中心、臺北世界貿易中心等數個重要設施皆坐落於當地。</p>';
    }else if (label.classList.contains('label9')) {
      commentBox.innerHTML = '<p>大安區，得名自境內舊地名「大安庄」，區內人口約29萬人，人口密度每平方公里約2.6萬人，為臺北市人口最多、人口密度最高的行政區，在全臺灣所有三級行政區中人口密度高居第三。南側的大型綠地大安森林公園為其著名景點。</p>';
    }else if (label.classList.contains('label10')) {
      commentBox.innerHTML = '<p>中正區位於臺灣臺北市西南側，昔日建有臺北府城，為臺北市區較早開發的區域，轄內有包括中華民國總統府、行政院、立法院、司法院在內等多個重要中央政府機關，作為臺北都會區交通樞紐的臺北車站亦位於本區，確立其政經中心的特殊地位。</p>';
    }else if (label.classList.contains('label11')) {
      commentBox.innerHTML = '<p>萬華區，舊稱「艋舺」，位於臺灣臺北市西部，是於1990年由原龍山區、雙園區大部份區域及城中區、古亭區小部份區域合併而成的行政區。發展歷史較早，境內擁有不少古蹟，也有青少年與國際觀光客喜愛前往的徒步商圈西門町，整體呈現新舊融合之發展景象。位於境內的果菜批發市場，是供應臺北市新鮮食材果菜與肉類的重要運銷中心。</p>';
    }else if (label.classList.contains('label12')) {
      commentBox.innerHTML = '<p>文山區位於臺灣臺北市最南邊，北隔蟾蜍山、南港山系與臺北市中正、大安、信義、南港區相望，東為新北市深坑、石碇區，南與新店區接壤，西以新店溪與中永和為界。文山區係於1990年，由景美、木柵兩區合併而成。國立政治大學、世新大學、臺灣警察專科學校、中國科技大學、國立臺灣戲曲學院木柵校區、師大分部與考試院皆設於此，其中考試院是中華民國政府五院中唯一未設於臺北城內博愛特區者。區內著名旅遊景點有貓空、臺北市立動物園、指南宮、仙跡岩。</p>';
    }
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.label')) {
    document.querySelector('.comment-box').style.display = 'none';
  }
});