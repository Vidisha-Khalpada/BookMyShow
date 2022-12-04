let silder = () => {
  return `<div class="slides">
        <!-- radio btm -->
        <input type="radio" name="radio_btm" id="radio1" />
        <input type="radio" name="radio_btm" id="radio2" />
        <input type="radio" name="radio_btm" id="radio3" />
        <!-- radio btm ends -->
        <!-- img start -->
        <div class="slide first">
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1668148297881_sunburnnweb.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1667241256491_web.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1664352328095_appkudaweb.jpg"
            alt=""
          />
        </div>
        <!-- img ends -->
        <!-- auto slider -->
        <div class="auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
        </div>
        <!-- auto silder endds -->
      </div>
      <!-- manual btm start -->
      <div class="manual">
        <label for="radio1" class="manual-btm"></label>
        <label for="radio2" class="manual-btm"></label>
        <label for="radio3" class="manual-btm"></label>
      </div>
      <!-- manual btm ends -->`;
};

// const navbar = () => {
//   return `
//       <div><a href="./index.html">home</a></div>
//       <div> <a href="./explore.html">explore</a></div>`;
// };

export { silder };
