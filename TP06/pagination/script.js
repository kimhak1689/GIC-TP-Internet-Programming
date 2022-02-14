$(function(){
  
  let loading = false;
  var scroller = document.querySelector('.scrollable');
  let curent_page = 0;
  let num_data = 10;
  let page = 0;


  getData(curent_page,num_data);
  
  $(".scrollable").on('scroll',function(){
    
    const clientHeight = scroller.clientHeight;
    const scrollheight = scroller.scrollHeight;
    const scrollTop = scroller.scrollTop;

    var r1 = clientHeight + scrollTop + 200;
    
    if(r1>=scrollheight && !loading){
        console.log("Load more...");
        loadData();
        loading = true;
    }

    if (clientHeight + scrollTop > (538 * (page + 1)) + 400) {
      page++;
      $('.page_app').html(page);
      console.log(page)
    } else if (clientHeight + scrollTop <= (538 * (page) + 400)){
        page--;
        $('.page_app').html(page);
        console.log(page)
    }

  })

  const fetch = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(true);
      },3000);
    })
  }

  const loadData = ()=>{
    console.log("Loading...");
    fetch().then(()=>{
        console.log("done...");
        loading=false;
        getData(curent_page,num_data);
        curent_page++;
    })
  }
 
  function getData(page,size){
    $.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`, async function (data) {
      var temp = "";
        for(var i in data.data){
          temp +=  '<div class="item">'+
                    '<div>✈️ '+data.data[i].airline[0].name+' - '+data.data[i].airline[0].country+'</div>'+
                    '<div>😃 '+data.data[i].name+'</div>'+
                  '</div>';
        }
        temp += "<hr>";
      $(".scrollable").append(temp);

    });
  }
  
    
})