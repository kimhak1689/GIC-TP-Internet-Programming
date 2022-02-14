$(function () {
  let loading = false;
  var scroller = document.querySelector(".scrollable");
  let curent_page = 0;
  let num_data = 10;

  let page = 0;

  getNewData();

  $(".scrollable").on("scroll", function () {
    const clientHeight = scroller.clientHeight;
    const scrollheight = scroller.scrollHeight;
    const scrollTop = scroller.scrollTop;

    var r1 = clientHeight + scrollTop + 200;

    if (r1 >= scrollheight && !loading) {
      console.log("Load more...");
      loadData();
      loading = true;
    }

    if (clientHeight + scrollTop > 538 * (page + 1) + 500) {
      page++;
      $(".page_app").html(page);
    } else if (clientHeight + scrollTop <= 538 * page + 400) {
      page--;
      $(".page_app").html(page);
    }
  });

  const fetch = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  };

  const loadData = () => {
    let check = false;
    console.log("Loading...");
    fetch().then(() => {
      loading = false;
      getNewData();
      curent_page++;
      console.log("done...");
    });
  };

  async function getNewData() {
    var temp = "";
    var pageData = [];
    const page = localStorage.getItem("page");
    if (page) {
      pageData = JSON.parse(page);

      if (pageData.length <= 0) {
        var defaultData = [{}];
        localStorage.setItem("page", JSON.stringify(defaultData));
        $(".getfrom").html("API");
        getData(curent_page, num_data, false);
      } else {
        if (pageData.length > curent_page) {
          console.log("get from LOCALSTORAGE");
          $(".getfrom").html("LOCALSTORAGE");
          var Data = pageData[curent_page].data;

          for (var i in Data) {
            temp +=
              '<div class="item">' +
              "<div>✈️ " +
              Data[i].airlineName +
              " - " +
              Data[i].airlineCountry +
              "</div>" +
              "<div>😃 " +
              Data[i].name +
              "</div>" +
              "</div>";
          }
          temp += "<hr>";
          $(".scrollable").append(temp);
        } else {
          console.log("get from API");
          $(".getfrom").html("API");
          getData(curent_page, num_data, false);
        }
      }
    } else {
      console.log("get from API");
      $(".getfrom").html("API");
      getData(curent_page, num_data, true);
    }
  }

  function getData(page, size, first) {
    $.get(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`,
      async function (data) {
        await console.log(data.data);
        var temp = "";

        //store
        var Newdata = [];

        for (var i in data.data) {
          Newdata.push({
            airlineName: data.data[i].airline[0].name,
            airlineCountry: data.data[i].airline[0].country,
            name: data.data[i].name,
          });

          temp +=
            '<div class="item">' +
            "<div>✈️ " +
            data.data[i].airline[0].name +
            " - " +
            data.data[i].airline[0].country +
            "</div>" +
            "<div>😃 " +
            data.data[i].name +
            "</div>" +
            "</div>";
        }
        temp += "<hr>";

        if (first) {
          var firstData = [{ pageNum: curent_page, data: Newdata }];
          localStorage.setItem("page", JSON.stringify(firstData));
        } else {
          var oldpage = JSON.parse(localStorage.getItem("page"));
          oldpage.push({ pageNum: curent_page, data: Newdata });
          localStorage.setItem("page", JSON.stringify(oldpage));
        }

        $(".scrollable").append(temp);
      }
    );
  }
});
