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
  function Component(Props){
      return (
         <div>
              <li className="category-item">
                    <img src={Props.img} alt="" className="category__img"/>
                    <h3 Name="category__name">{Props.name}</h3>
                     <a href="" Name="category__details">
                         {Props.ins}
                        <i Name="fab fa-instagram"></i>
                    </a>
                </li>
          </div>
      )
  }

  function App(){
      return(<div>
        <Component img="./img/1.jpg" name="Hoàng Ngọc Tú" ins="hntu2904"/>
        console.log(123);
      </div>)
  }
 
  ReactDOM.render(<App/>,document.querySelector(".category-list"))