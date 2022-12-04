import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      {/* <div
        class="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-width="380"
        data-hide-cover="false"
        data-show-facepile="false"
      ></div> */}
      {/* <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0"
        nonce="So3z6rBT"
      ></script> */}
      {/* <div
        class="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/facebook"
          class="fb-xfbml-parse-ignore"
        >
        <a href="https://www.facebook.com/facebook">Facebook</a>
        </blockquote>
      </div> */}
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=380&height=100%25&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="38"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Widgets;
