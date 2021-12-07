$(document).ready(function(){
    $('.category-list').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 1000,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
     
    });
  });
  function Component(){
      return (
          <div>
              <li class="category-item">
                    <img src="./img/7.jpg" alt="" class="category__img">
                    <h3 class="category__name">Nguyễn Ngọc Tú</h3>
                     <a href="" class="category__details">
                            Ins: hntu2904
                        <i class="fab fa-instagram"></i>
                        </a>
                    </li>
          </div>
      )
  }

  function App(){
      return(<div>

      </div>)
  }