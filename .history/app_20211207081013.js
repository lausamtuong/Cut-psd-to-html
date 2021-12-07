
  function Component(Props){
      return (
         <React.Fragment >
              <li className="category-item">
                    <img src={Props.img} alt="" className="category__img"/>
                    <h3 className="category__name">{Props.name}</h3>
                     <a href="" className="category__details">
                         {Props.ins}
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
          </React.Fragment>
      )
  }
  function App(){
      return(<React.Fragment>
        <Component img="./img/img1.png" name="Hoàng Ngọc Tú" ins="hntu2904"/>
        <Component img="./img/img2.png" name="Hoàng Ngọc Tú" ins="hntu2904"/>
        <Component img="./img/img4.png" name="Hoàng Ngọc Tú" ins="hntu2904"/>
        <Component img="./img/img5.png" name="Hoàng Ngọc Tú" ins="hntu2904"/>
        <Component img="./img/img6.png" name="Hoàng Ngọc Tú" ins="hntu2904"/>
        <Component img="./img/img7.png" name="Hoàng Ngọc Tú" ins="hntu2904"/>
        <Component img="./img/img8.png" name="Hoàng Ngọc Tú" ins="hntu2904"/>
        <Component img="./img/img9.png" name="Hoàng Ngọc Tú" ins="hntu2904"/>

      </React.Fragment>)
  }
  ReactDOM.render(<App/>,document.querySelector(".category-list"))
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