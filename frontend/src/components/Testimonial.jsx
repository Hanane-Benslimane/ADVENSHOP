const Testimonial = () => {
  return (
    <section className="testimonial">
      <div id="carouselExample" class="carousel-testimonial carousel slide">
        <div class="carousel-inner container">
          <div class="carousel-item carousel-item-testi active">
            <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} class="d-block avatar" alt="..." />
            <h4>jhon smith</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptatibus exercitationem earum officia numquam unde laboriosam
              sint, labore mollitia ex. Minima possimus, labore maiores illo
              molestiae commodi esse alias qui.
            </p>
          </div>
          <div class="carousel-item carousel-item-testi">
          <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} class="d-block avatar" alt="..." />
            <h4>jhon smith</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptatibus exercitationem earum officia numquam unde laboriosam
              sint, labore mollitia ex. Minima possimus, labore maiores illo
              molestiae commodi esse alias qui.
            </p>
          </div>
          <div class="carousel-item carousel-item-testi">
          <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} class="d-block avatar" alt="..." />
            <h4>jhon smith</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptatibus exercitationem earum officia numquam unde laboriosam
              sint, labore mollitia ex. Minima possimus, labore maiores illo
              molestiae commodi esse alias qui.
            </p>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
