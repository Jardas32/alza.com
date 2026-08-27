import "../css/bannerpage.css";

function BannerPage({bannerImg}) {
  return (
    <div className="wrapper-bannerpage">
      <div className="wrapper-bannerpage-img">
        <img className="banner-page" src={bannerImg} alt="banner" />
      </div>
    </div>
  );
}

export default BannerPage;
